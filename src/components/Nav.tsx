import { A, useLocation } from '@solidjs/router'
import { Suspense } from 'solid-js'

import { useLocale, useTranslator } from '~/config/locale'

function NavLink(props: { href: string; children: any }) {
  const location = useLocation()
  const isActive = () => location.pathname.startsWith(props.href)
  return (
    <A
      href={props.href}
      class="px-2.5 py-1 rounded transition-colors no-underline"
      style={{
        'background-color': isActive()
          ? 'var(--color-active-bg)'
          : 'transparent',
        color: isActive()
          ? 'var(--color-text)'
          : 'var(--color-text-secondary)',
        'font-weight': isActive() ? '500' : '400',
      }}
    >
      {props.children}
    </A>
  )
}

export default function Nav() {
  const location = useLocation()
  const locale = useLocale()
  const t = useTranslator()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center justify-between mb-8">
        <div class="flex gap-0.5">
          <NavLink href={`/${locale()}/about`}>
            {t('about')}
          </NavLink>
          <NavLink href={`/${locale()}/publications`}>
            {t('publications')}
          </NavLink>
          <NavLink href={`/${locale()}/students`}>
            {t('students')}
          </NavLink>
          <NavLink href={`/${locale()}/vita`}>
            {t('vita')}
          </NavLink>
        </div>
        <div class="flex gap-0.5">
          <A
            href={location.pathname.replace('/en', '/zh')}
            class="px-2 py-1 rounded transition-colors no-underline"
            style={{
              color: locale() === 'zh'
                ? 'var(--color-text)'
                : 'var(--color-text-secondary)',
              'background-color': locale() === 'zh'
                ? 'var(--color-active-bg)'
                : 'transparent',
              'font-weight': locale() === 'zh' ? '500' : '400',
            }}
          >
            中文
          </A>
          <A
            href={location.pathname.replace('/zh', '/en')}
            class="px-2 py-1 rounded transition-colors no-underline"
            style={{
              color: locale() === 'en'
                ? 'var(--color-text)'
                : 'var(--color-text-secondary)',
              'background-color': locale() === 'en'
                ? 'var(--color-active-bg)'
                : 'transparent',
              'font-weight': locale() === 'en' ? '500' : '400',
            }}
          >
            EN
          </A>
        </div>
      </div>
    </Suspense>
  )
}
