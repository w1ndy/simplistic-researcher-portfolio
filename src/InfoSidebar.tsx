import { For } from 'solid-js'
import Fa from 'solid-fa'

import Info from './config/info'

export function InfoSidebar(props: { class: string }) {
  return (
    <div class={`w-96 h-screen p-10 flex flex-col gap-5 ${props.class}`}>
      <div class="uppercase tracking-wider font-bold">{Info.name}</div>

      <For each={Info.affiliations}>
        {(aff) => (
          <div>
            <For each={aff}>{(a) => <div innerHTML={a}></div>}</For>
          </div>
        )}
      </For>

      <div>
        <For each={Info.address}>{(addr) => <div innerHTML={addr}></div>}</For>
      </div>

      <div>
        <For each={Info.contact}>
          {(contact) => (
            <div>
              <Fa
                icon={contact.icon}
                class="inline-block mr-1"
              />
              <span innerHTML={contact.text}></span>
            </div>
          )}
        </For>
      </div>

      <div innerHTML={Info.group}></div>

      <div class="flex-auto"></div>

      <div
        class="text-gray-500"
        innerHTML={Info.footnote}
      ></div>
    </div>
  )
}
