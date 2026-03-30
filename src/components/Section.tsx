import { For, Show } from 'solid-js'
import { clientOnly } from '@solidjs/start'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Fa = clientOnly(() => import('solid-fa'))

interface VitaEntry {
  when: string
  what?: string
  where?: string
  descriptions?: string[]
}

export default function Section(props: {
  name?: string
  entries?: VitaEntry[]
}) {
  return (
    <div class="mb-10 space-y-1">
      <div
        class="font-bold text-sm uppercase tracking-wider ml-24 md:ml-48 pb-2"
        style={{
          color: 'var(--color-text-secondary)',
        }}
      >
        {props.name}
      </div>
      <For each={props.entries ?? []}>
        {(entry, i) => (
          <div
            class="flex"
          >
            <div
              class="text-sm leading-7 w-24 md:w-48 pr-3 flex-none text-right uppercase tracking-wider"
              style={{ color: 'var(--color-text-secondary)' }}
              innerHTML={entry.when}
            >
            </div>
            <div>
              <Show when={entry.what && entry.where}>
                <div>
                  <span class="font-bold mr-3">{entry.what}</span>
                  <span style={{ color: 'var(--color-text-secondary)' }}>
                    <Fa icon={faLocationDot} class="inline-block mr-1" />
                    <span innerHTML={entry.where}></span>
                  </span>
                </div>
              </Show>
              <Show when={entry.descriptions}>
                <For each={entry.descriptions}>
                  {(desc) => <div innerHTML={desc}></div>}
                </For>
              </Show>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}
