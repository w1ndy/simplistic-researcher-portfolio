import { createMemo, For } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import { createStore } from 'solid-js/store'
import _ from 'lodash'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { PaperEntry } from '~/components/PaperEntry'

import PublicationEntries from '~/config/publications'
import { Filters } from '~/config/filters'

const Fa = clientOnly(() => import('solid-fa'))

export default function Publications() {
  const [filterActive, setFilterActive] = createStore(
    _.mapValues(Filters, () => false)
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
    const counts = _.mapValues(Filters, () => 0)
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
      <div class="max-w-4xl pr-3 pb-4">
        <div>
          <span class="font-bold">
            <Fa
              icon={faMagnifyingGlass}
              class="inline-block scale-75"
            ></Fa>{' '}
            filter by:{' '}
          </span>
          <For each={Object.entries(Filters)}>
            {([key, { name }]) => (
              <span
                class="ml-2 cursor-pointer select-none"
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
                  {name}
                </span>{' '}
                ({filterCounts()[key]})]
              </span>
            )}
          </For>
        </div>
        <div class="italic mb-4  text-gray-500">
          *: corresponding-authored papers are marked with asterisk.
        </div>
        <For each={filteredPublications()}>
          {(rp) => (
            <div class="mb-6">
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
