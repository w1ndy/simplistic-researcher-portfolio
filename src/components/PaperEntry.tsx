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
    <div class="flex flex-col">
      <div class="flex flex-col gap-3 sm:flex-row">
        <div class="flex-0">
          <img
            class="border border-gray-300 mt-1 w-24 h-18 sm:w-40 sm:h-28 object-cover"
            src={props.paper.image}
            loading="lazy"
            alt={`Teaser image of paper "${props.paper.title}"`}
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
            />
            . <span class="italic">{props.paper.venue}</span>.
          </div>
          <div>
            <Show when={props.paper.abstract}>
              <a
                onClick={() => setShowAbstract(!showAbstract())}
                class="mr-3 uppercase tracking-wider text-sm underline cursor-pointer"
              >
                <Fa
                  icon={faAlignLeft}
                  class="inline-block mr-1"
                ></Fa>
                ABSTRACT
              </a>
            </Show>
            <Show when={props.paper.links && Object.keys(props.paper.links).length > 0}>
              <For each={Object.entries(props.paper.links)}>
                {([name, link]) => (
                  <a
                    href={link}
                    target="_blank"
                    class="mr-3 uppercase tracking-wider text-sm underline"
                  >
                    <Show when={IconMapping[name]}>
                      <Fa
                        icon={IconMapping[name]}
                        class="inline-block mr-1"
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
            <strong>Abstract:</strong> {props.paper.abstract}
          </div>
          <Show when={props.paper.topics && props.paper.topics.length > 0}>
            <div class="mt-3 text-gray-600">
              <strong>Topics:</strong>{' '}
              <For each={props.paper.topics}>
                {(topic, index) => (
                  <>
                    <span class="inline-block bg-gray-100 px-2 py-1 rounded mr-1">
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
