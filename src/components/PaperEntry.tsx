import { Paper } from '../types/paper'
import AuthorHomepages from '../config/authors'
import { For, Show } from 'solid-js'

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
    <div class="mt-3 flex">
      <div class="flex-0 mr-3">
        <img
          class="border border-gray-300 w-24 h-18 sm:w-40 sm:h-28 object-cover"
          src={props.paper.image}
        />
      </div>

      <div class="flex-1">
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
        <For each={Object.entries(props.paper.links)}>
          {([name, link]) => (
            <a
              href={link}
              target="_blank"
              class="ml-2 uppercase tracking-wider"
            >
              [{name}]
            </a>
          )}
        </For>
      </div>
    </div>
  )
}
