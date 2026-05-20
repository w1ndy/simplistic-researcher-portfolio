import { For, Show, createSignal } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import {
  faPaperclip,
  faFilePdf,
  IconDefinition,
  faVideo,
  faFile,
  faCode,
  faDesktop,
  faAlignLeft,
  faAward,
} from '@fortawesome/free-solid-svg-icons'

import type { Paper } from '~/types/paper'
import { useTranslator } from '~/config/locale'
import AuthorHomepages from '~/config/authors'

const Fa = clientOnly(() => import('solid-fa'))

const IconMapping: Record<string, IconDefinition> = {
  paper: faPaperclip,
  preprint: faPaperclip,
  pdf: faFilePdf,
  'cn pdf': faFilePdf,
  video: faVideo,
  appendix: faFile,
  code: faCode,
  demo: faDesktop,
}

const CcfAVenueMatchers = [
  (venue: string) => venue.includes('TVCG'),
  (venue: string) => venue.includes('IEEE VIS') && !venue.includes('@ IEEE VIS'),
  (venue: string) => venue.includes('ICML'),
  (venue: string) => venue.includes('KDD'),
  (venue: string) => venue.includes('CHI'),
  (venue: string) => venue.includes('UIST'),
]

function isCcfAPaper(paper: Paper) {
  const venue = paper.venue
  const lowerVenue = venue.toLowerCase()

  return (
    !lowerVenue.includes('workshop') &&
    CcfAVenueMatchers.some((matcher) => matcher(venue))
  )
}

export function homepage(author: string) {
  return (original: string) => {
    if (AuthorHomepages[author]) {
      return `<a href="${AuthorHomepages[author]}" target="_blank">${original}</a>`
    } else {
      return original
    }
  }
}

function me(author: string) {
  return (original: string) => {
    if (author == 'Di Weng') {
      return `<u>${original}</u>`
    } else {
      return original
    }
  }
}

function corresponding(
  author: string,
  correspondingAuthors: string[] | undefined
) {
  return (original: string) => {
    if (correspondingAuthors && correspondingAuthors.includes(author)) {
      return `${original}*`
    } else {
      return original
    }
  }
}

export function PaperEntry(props: { paper: Paper }) {
  const t = useTranslator()
  const [showAbstract, setShowAbstract] = createSignal(false)

  return (
    <div>
      <div class="flex flex-col gap-3 sm:flex-row">
        <div class="flex-0">
          <img
            class="mt-0.5 w-24 h-18 sm:w-40 sm:h-28 object-cover rounded"
            style={{ border: '1px solid var(--color-border)' }}
            src={props.paper.image}
            loading="lazy"
            alt={`Teaser image of paper ${props.paper.title}`}
          />
        </div>

        <div class="flex-1">
          <div>
            <span class="font-bold">{props.paper.title}.</span>{' '}
            <span
              innerHTML={props.paper.authors
                .map((author) =>
                  homepage(author)(
                    corresponding(
                      author,
                      props.paper.corresponding_authors
                    )(me(author)(author))
                  )
                )
                .join(', ')}
            />{'. '}
            <span>{props.paper.venue}</span>.
          </div>
          <div class="mt-1.5 flex flex-wrap gap-1.5">
            <Show when={props.paper.awards && props.paper.awards.length > 0}>
              <For each={props.paper.awards}>
                {(award) => (
                  <span
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs tracking-wide"
                    style={{
                      'background-color': 'rgba(235, 87, 87, 0.14)',
                      color: 'var(--color-red)',
                      'font-weight': '500',
                    }}
                  >
                    <Fa
                      icon={faAward}
                      class="inline-block"
                    ></Fa>
                    {award}
                  </span>
                )}
              </For>
            </Show>
            <Show when={isCcfAPaper(props.paper)}>
              <span
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs tracking-wide"
                style={{
                  'background-color': 'var(--color-selection)',
                  color: 'var(--color-accent)',
                  'font-weight': '500',
                }}
              >
                CCF-A
              </span>
            </Show>
            <Show when={props.paper.abstract}>
              <span
                onClick={() => setShowAbstract(!showAbstract())}
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded cursor-pointer select-none text-xs uppercase tracking-wider transition-colors no-underline"
                style={{
                  'background-color': showAbstract()
                    ? 'var(--color-active-bg)'
                    : 'var(--color-hover-bg)',
                  color: showAbstract()
                    ? 'var(--color-text)'
                    : 'var(--color-text-secondary)',
                }}
              >
                <Fa
                  icon={faAlignLeft}
                  class="inline-block"
                ></Fa>
                Abstract
              </span>
            </Show>
            <Show when={props.paper.links && Object.keys(props.paper.links).length > 0}>
              <For each={Object.entries(props.paper.links)}>
                {([name, link]) => (
                  <a
                    href={link}
                    target="_blank"
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs uppercase tracking-wider transition-colors no-underline"
                    style={{
                      'background-color': 'var(--color-hover-bg)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    <Show when={IconMapping[name]}>
                      <Fa
                        icon={IconMapping[name]}
                        class="inline-block"
                      ></Fa>
                    </Show>
                    {t(name as any)}
                  </a>
                )}
              </For>
            </Show>
          </div>
        </div>
      </div>

      <Show when={showAbstract() && props.paper.abstract}>
        <div class="mt-4 pl-3 border-l-2 border-gray-200">
          <div class="text-gray-700 leading-relaxed">
            <strong>Abstract:</strong> <span innerHTML={props.paper.abstract}></span>
          </div>
          <Show when={props.paper.topics && props.paper.topics.length > 0}>
            <div class="mt-3 text-gray-600">
              <strong>Topics:</strong>{' '}
              <For each={props.paper.topics}>
                {(topic, index) => (
                  <>
                    <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-1 text-sm">
                      {topic}
                    </span>
                    {index() < props.paper.topics!.length - 1 && ' '}
                  </>
                )}
              </For>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  )
}
