import { For, Suspense } from 'solid-js'
import { clientOnly } from '@solidjs/start'

const Fa = clientOnly(() => import('solid-fa'))

import { useInfo } from '~/config/info'

export default function InfoSidebar(props: { class: string }) {
  const info = useInfo()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div class={`w-96 md:h-screen p-10 flex flex-col gap-6 ${props.class}`}>
        <div class="uppercase tracking-wider font-bold">{info()?.name}</div>

        <For each={info()?.affiliations}>
          {(aff) => (
            <div>
              <For each={aff}>{(a) => <div innerHTML={a}></div>}</For>
            </div>
          )}
        </For>

        <div>
          <For each={info()?.address}>
            {(addr) => <div innerHTML={addr}></div>}
          </For>
        </div>

        <div>
          <For each={info()?.contact}>
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

        <div innerHTML={info()?.group}></div>

        <div class="md:flex-auto"></div>

        <div
          class="text-gray-500 hidden md:block"
          innerHTML={info()?.footnote}
        ></div>
      </div>
    </Suspense>
  )
}
