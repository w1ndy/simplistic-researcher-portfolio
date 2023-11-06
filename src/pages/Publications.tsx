import { For } from 'solid-js'
import PublicationEntries from '../config/publications'
import { PaperEntry } from '../components/PaperEntry'

export default function Publications() {
  return (
    <div class="overflow-y-scroll">
      <div class="max-w-4xl pr-3 pb-4">
        <div class="italic mb-4  text-gray-500">
          *: corresponding authors are marked with asterisk.
        </div>
        <For each={PublicationEntries}>
          {(rp) => (
            <div class="mb-4">
              <div class="text-gray-500 font-bold">{rp.year}</div>
              <For each={rp.papers}>
                {(paper) => <PaperEntry paper={paper} />}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
