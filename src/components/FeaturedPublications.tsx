import { For } from 'solid-js'
import { A } from '@solidjs/router'
import _ from 'lodash'

import Publications from '~/config/publications'
import { PaperEntry } from '~/components/PaperEntry'
import { useTranslator } from '~/config/locale'

export default function FeaturedPublications() {
  const t = useTranslator()
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
          {t('featured_publications')}
        </span>
        <A
          href="/publications"
          class="ml-2"
        >
          [{t('see_all')}]
        </A>
      </div>
      <div class="flex flex-col gap-6">
        <For each={Object.entries(groups)}>
          {(rp) => (
            <div>
              <div class="text-gray-500 font-bold mb-4">{rp[0]}</div>
              <div class="flex flex-col gap-4">
                <For each={rp[1]}>
                  {(paper) => <PaperEntry paper={paper} />}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
