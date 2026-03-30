import { For, Suspense } from 'solid-js'
import { clientOnly } from '@solidjs/start'

const Fa = clientOnly(() => import('solid-fa'))

import { useInfo } from '~/config/info'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { IconLink } from './IconLink'

export default function InfoSidebar(props: { class: string }) {
  const info = useInfo()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        class={`w-full md:w-72 lg:w-96 md:h-screen md:sticky md:top-0 p-8 md:py-10 md:px-8 flex flex-col gap-4 ${props.class}`}
        style={{
          'background-color': 'var(--color-sidebar-bg)',
          'border-right': '1px solid var(--color-border)',
        }}
      >
        <div class="flex-none md:hidden">
          <img
            src="/img/me.avif"
            class="w-36 h-36 object-cover rounded-full mx-auto my-6"
            alt={`Photo of ${info()?.name}`}
          ></img>
        </div>

        <div class="text-base font-bold">{info()?.name}</div>

        <For each={info()?.affiliations}>
          {(aff) => (
            <div
            >
              <For each={aff}>{(a) => <div innerHTML={a}></div>}</For>
            </div>
          )}
        </For>

        <div
          style={{ color: 'var(--color-text-secondary)' }}
        >
          <For each={info()?.address}>
            {(addr) => <div innerHTML={addr}></div>}
          </For>
        </div>

        <div class="flex flex-col gap-1">
          <For each={info()?.contact}>
            {(contact) => (
              <IconLink icon={contact.icon} text={contact.text} />
            )}
          </For>
        </div>

        <div class="flex items-center gap-2">
          <Fa
            icon={faBuilding}
            class="inline-block w-4 text-center"
            style={{ color: 'var(--color-text-secondary)' }}
          />
          <span innerHTML={info()?.group}></span>
        </div>

        <div class="md:flex-auto"></div>

        <div
          class="text-sm hidden md:block leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
          innerHTML={info()?.footnote}
        ></div>
      </div>
    </Suspense>
  )
}
