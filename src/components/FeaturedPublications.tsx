import { createMemo, For } from 'solid-js'
import { A } from '@solidjs/router'

import Publications from '~/config/publications'
import { PaperEntry } from '~/components/PaperEntry'
import { FeaturedCategories } from '~/config/featured'
import { useLocale, useTranslator } from '~/config/locale'
import { Paper } from '~/types/paper'

export default function FeaturedPublications() {
  const t = useTranslator()
  const locale = useLocale()

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
    <div class="mt-10">
      <div
        class="flex items-center justify-between pb-2 mb-6"
        style={{ 'border-bottom': '1px solid var(--color-border)' }}
      >
        <span
          class="font-bold text-sm uppercase tracking-wider"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {t('featured_publications')}
        </span>
        <A
          href={`/${locale()}/publications`}
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {t('see_all')} &rarr;
        </A>
      </div>
      <div class="flex flex-col gap-10">
        <For each={FeaturedCategories}>
          {(f) => (
            <div>
              <div
                class="text-sm font-bold mb-4"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {f}
              </div>
              <div class="flex flex-col gap-5">
                <For each={groups()[f]}>
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
