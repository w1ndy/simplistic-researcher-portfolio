import { createMemo, For } from 'solid-js'
import { A } from '@solidjs/router'

import Publications from '~/config/publications'
import { PaperEntry } from '~/components/PaperEntry'
import { useTranslator } from '~/config/locale'
import { Paper } from '~/types/paper'

export default function FeaturedPublications() {
  const t = useTranslator()

  const groups = createMemo(() => {
    const categories: Record<string, Paper[]> = {}
    for (const publication of Publications) {
      for (const paper of publication.papers) {
        if (paper.featured_category) {
          if (!categories[paper.featured_category]) {
            categories[paper.featured_category] = []
          }
          categories[paper.featured_category].push(paper)
        }
      }
    }
    return categories
  })

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
        <For each={Object.entries(groups())}>
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
