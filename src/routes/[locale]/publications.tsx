import { createMemo, For } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import { createStore } from 'solid-js/store'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { PaperEntry } from '~/components/PaperEntry'

import { useLocale, useTranslator } from '~/config/locale'
import PublicationEntries from '~/config/publications'
import { Filters } from '~/config/filters'

const Fa = clientOnly(() => import('solid-fa'))

export default function Publications() {
  const l = useLocale()
  const t = useTranslator()

  const [filterActive, setFilterActive] = createStore(
    Object.fromEntries(Object.keys(Filters).map((key) => [key, false]))
  )

  const filteredPublications = createMemo(() =>
    PublicationEntries.map((year) => ({
      ...year,
      papers: year.papers.filter((paper) => {
        for (const filter in Filters) {
          if (filterActive[filter] && !Filters[filter].matcher(paper)) {
            return false
          }
        }
        return true
      }),
    }))
  )

  const filterCounts = createMemo(() => {
    const counts = Object.fromEntries(
      Object.keys(Filters).map((key) => [key, 0])
    )
    filteredPublications().forEach((year) => {
      year.papers.forEach((paper) => {
        for (const filter in Filters) {
          if (Filters[filter].matcher(paper)) {
            counts[filter]++
          }
        }
      })
    })
    return counts
  })

  return (
    <div class="overflow-y-scroll">
      <div class="max-w-5xl pr-3 pb-4">
        <div class="flex flex-row pb-2">
          <div class="font-bold flex-0">
            <Fa
              icon={faMagnifyingGlass}
              class="inline-block scale-75"
            ></Fa>{' '}
            {t('filter_by')}
          </div>
          <div class="flex-1">
            <For each={Object.entries(Filters)}>
              {([key, { name }]) => (
                <span
                  class="ml-2 cursor-pointer select-none whitespace-nowrap"
                  classList={{
                    'text-teal-700': filterActive[key],
                    'text-gray-400': !filterActive[key],
                  }}
                  onClick={() => setFilterActive(key, !filterActive[key])}
                >
                  [
                  <span
                    classList={{
                      'text-teal-700': filterActive[key],
                      'text-black': !filterActive[key],
                    }}
                  >
                    {name[l()]}
                  </span>{' '}
                  ({filterCounts()[key]})]
                </span>
              )}
            </For>
          </div>
        </div>
        <div class="italic mb-6  text-gray-500">{t('corresponding')}</div>
        <div class="flex flex-col gap-10 mb-10">
          <For each={filteredPublications()}>
            {(rp) => (
              <div class="flex flex-col gap-6">
                <div class="text-gray-500 font-bold">
                  {rp.year == 'Earlier' ? t('earlier') : rp.year}
                </div>
                <For each={rp.papers}>
                  {(paper) => <PaperEntry paper={paper} />}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
