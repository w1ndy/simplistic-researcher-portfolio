import { createMemo, createSignal, For, Show } from 'solid-js'
import { createStore } from 'solid-js/store'

import { PaperEntry } from '~/components/PaperEntry'

import { useLocale, useTranslator } from '~/config/locale'
import PublicationEntries from '~/config/publications'
import { Filters } from '~/config/filters'

export default function Publications() {
  const l = useLocale()
  const t = useTranslator()

  const flatFilters = Object.assign({}, ...Filters)

  const [filterActive, setFilterActive] = createStore(
    Object.fromEntries(Object.keys(flatFilters).map((key) => [key, false]))
  )

  const years = PublicationEntries.map((entry) => entry.year)
  const [selectedYearIndex, setSelectedYearIndex] = createSignal(0)
  const selectedYear = () => years[selectedYearIndex()]
  const showAll = () => selectedYearIndex() === -1

  const filteredPublications = createMemo(() =>
    PublicationEntries.map((year) => ({
      ...year,
      papers: year.papers.filter((paper) => {
        for (const filter in flatFilters) {
          if (filterActive[filter] && !flatFilters[filter].matcher(paper)) {
            return false
          }
        }
        return true
      }),
    }))
  )

  const currentYearPubs = createMemo(() =>
    filteredPublications().find((p) => p.year === selectedYear())
  )

  const filterCounts = createMemo(() => {
    const counts = Object.fromEntries(
      Object.keys(flatFilters).map((key) => [key, 0])
    )
    filteredPublications().forEach((year) => {
      year.papers.forEach((paper) => {
        for (const filter in flatFilters) {
          if (flatFilters[filter].matcher(paper)) {
            counts[filter]++
          }
        }
      })
    })
    return counts
  })

  const hasPrev = () => selectedYearIndex() > 0
  const hasNext = () => selectedYearIndex() < years.length - 1
  const prevLabel = () => hasPrev() ? years[selectedYearIndex() - 1] : ''
  const nextLabel = () => hasNext() ? years[selectedYearIndex() + 1] : ''

  return (
    <div>
      <div class="pb-6 mb-6" style={{ 'border-bottom': '1px solid var(--color-border)' }}>
        <div>
          <div class="space-y-2">
            <For each={Filters}>
              {(group) => (
                <div class="flex-1 flex flex-wrap gap-1.5">
                  <For each={Object.entries(group)}>
                    {([key, { name }]) => (
                      <span
                        class="px-2.5 py-1 rounded cursor-pointer select-none whitespace-nowrap transition-colors"
                        style={{
                          'background-color': filterActive[key]
                            ? 'var(--color-active-bg)'
                            : 'var(--color-hover-bg)',
                          color: filterActive[key]
                            ? 'var(--color-text)'
                            : 'var(--color-text-secondary)',
                          'font-weight': filterActive[key] ? '500' : '400',
                        }}
                        onClick={() => setFilterActive(key, !filterActive[key])}
                      >
                        {name[l()]} ({filterCounts()[key]})
                      </span>
                    )}
                  </For>
                </div>
              )}
            </For>
          </div>
        </div>
        <div
          class="italic mt-2"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {t('corresponding')}
        </div>
      </div>

      {/* Year selector */}
      <div class="flex flex-wrap gap-1.5 mb-8">
        <For each={years}>
          {(year, i) => (
            <span
              class="px-3 py-1 rounded cursor-pointer select-none whitespace-nowrap transition-colors"
              style={{
                'background-color': !showAll() && selectedYear() === year
                  ? 'var(--color-active-bg)'
                  : 'var(--color-hover-bg)',
                color: !showAll() && selectedYear() === year
                  ? 'var(--color-text)'
                  : 'var(--color-text-secondary)',
                'font-weight': !showAll() && selectedYear() === year ? '600' : '400',
              }}
              onClick={() => setSelectedYearIndex(i())}
            >
              {year === 'Earlier' ? t('earlier') : year}
            </span>
          )}
        </For>
        <span
          class="px-3 py-1 rounded cursor-pointer select-none whitespace-nowrap transition-colors"
          style={{
            'background-color': showAll()
              ? 'var(--color-active-bg)'
              : 'var(--color-hover-bg)',
            color: showAll()
              ? 'var(--color-text)'
              : 'var(--color-text-secondary)',
            'font-weight': showAll() ? '600' : '400',
          }}
          onClick={() => setSelectedYearIndex(-1)}
        >
          {t('show_all')}
        </span>
      </div>

      {/* Papers for selected year */}
      <Show when={!showAll() && currentYearPubs()}>
        <div class="pb-4">
          <div
            class="font-bold uppercase tracking-wider mb-5"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {selectedYear() === 'Earlier' ? t('earlier') : selectedYear()}
          </div>
          <div class="flex flex-col gap-6">
            <For each={currentYearPubs()!.papers}>
              {(paper) => <PaperEntry paper={paper} />}
            </For>
          </div>
          <Show when={currentYearPubs()!.papers.length === 0}>
            <div
              class="py-8 text-center"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              No matching publications.
            </div>
          </Show>
        </div>
      </Show>

      {/* All years view */}
      <Show when={showAll()}>
        <div class="flex flex-col gap-10 pb-4">
          <For each={filteredPublications()}>
            {(rp) => (
              <div>
                <div
                  class="font-bold uppercase tracking-wider mb-5"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {rp.year === 'Earlier' ? t('earlier') : rp.year}
                </div>
                <div class="flex flex-col gap-6">
                  <For each={rp.papers}>
                    {(paper) => <PaperEntry paper={paper} />}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>

      {/* Prev / Next navigation */}
      <Show when={!showAll()}>
        <div
          class="flex justify-between items-center mt-8 pt-6"
          style={{ 'border-top': '1px solid var(--color-border)' }}
        >
          <Show
            when={hasPrev()}
            fallback={<div></div>}
          >
            <span
              class="px-3 py-1.5 rounded cursor-pointer select-none transition-colors"
              style={{
                'background-color': 'var(--color-hover-bg)',
                color: 'var(--color-text-secondary)',
              }}
              onClick={() => setSelectedYearIndex(selectedYearIndex() - 1)}
            >
              &larr; {prevLabel() === 'Earlier' ? t('earlier') : prevLabel()}
            </span>
          </Show>
          <Show
            when={hasNext()}
            fallback={<div></div>}
          >
            <span
              class="px-3 py-1.5 rounded cursor-pointer select-none transition-colors"
              style={{
                'background-color': 'var(--color-hover-bg)',
                color: 'var(--color-text-secondary)',
              }}
              onClick={() => setSelectedYearIndex(selectedYearIndex() + 1)}
            >
              {nextLabel() === 'Earlier' ? t('earlier') : nextLabel()} &rarr;
            </span>
          </Show>
        </div>
      </Show>
    </div>
  )
}
