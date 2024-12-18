import { For, Show } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import {
  faPaperclip,
  faFilePdf,
  IconDefinition,
  faVideo,
  faFile,
  faCode,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons'

import type { Paper } from '~/types/paper'
import AuthorHomepages from '~/config/authors'

const Fa = clientOnly(() => import('solid-fa'))

const IconMapping: Record<string, IconDefinition> = {
  paper: faPaperclip,
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
  return (
    <div class="mt-4 flex flex-col gap-3 sm:flex-row">
      <div class="flex-0">
        <img
          class="border border-gray-300 w-24 h-18 sm:w-40 sm:h-28 object-cover"
          src={props.paper.image}
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
        <Show when={props.paper.links}>
          <div>
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
                  {name}
                </a>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  )
}
