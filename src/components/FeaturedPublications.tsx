import { For } from 'solid-js'
import { A } from '@solidjs/router'
import _ from 'lodash'

import Publications from '../config/publications'
import { PaperEntry } from './PaperEntry'

export function FeaturedPublications() {
  const groups = _(Publications)
    .map((p) => p.papers)
    .flatten()
    .filter((p) => !!p.featured_category)
    .groupBy((p) => p.featured_category!)
    .value()
  return (
    <div class="py-8">
      <div class="mb-4">
        <span class="uppercase tracking-wider font-bold">
          Featured Publications
        </span>
        <A
          href="/publications"
          class="ml-2"
        >
          [see all]
        </A>
      </div>
      <For each={Object.entries(groups)}>
        {(rp) => (
          <div class="mb-6">
            <div class="text-gray-500 font-bold">{rp[0]}</div>
            <For each={rp[1]}>{(paper) => <PaperEntry paper={paper} />}</For>
          </div>
        )}
      </For>
    </div>
  )
}
