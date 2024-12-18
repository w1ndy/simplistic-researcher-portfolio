import { For, Show } from 'solid-js'

interface VitaEntry {
  when: string
  what?: string
  where?: string
  descriptions?: string[]
}

export default function Section(props: { name: string; entries: VitaEntry[] }) {
  return (
    <div class="mt-3 mb-7">
      <div class="uppercase tracking-wider text-gray-500 ml-24 md:ml-48">
        {props.name}
      </div>
      <For each={props.entries}>
        {(entry) => (
          <div class="flex mt-3">
            <div class="text-gray-500 w-24 md:w-48 pr-3 flex-none text-right uppercase tracking-wider">
              {entry.when}
            </div>
            <div>
              <Show when={entry.what && entry.where}>
                <div>
                  <span class="font-bold mr-3">{entry.what}</span>
                  <span innerHTML={entry.where}></span>
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
