import { For } from 'solid-js'
import { A } from '@solidjs/router'

import RecentPublicationEntries from '../config/recent_publications'
import { PaperEntry } from './PaperEntry'

export function RecentPublications() {
  return (
    <div class="py-8">
      <div class="mb-4">
        <span class="uppercase tracking-wider font-bold">
          Recent Publications
        </span>
        <A
          href="/publications"
          class="ml-2"
        >
          [see all]
        </A>
      </div>
      <For each={RecentPublicationEntries}>
        {(rp) => (
          <div class="mb-6">
            <div class="text-gray-500 font-bold">{rp.tag}</div>
            <For each={rp.papers}>
              {(paper) => <PaperEntry paper={paper} />}
            </For>
          </div>
        )}
      </For>
    </div>
  )
}
