import { A, useCurrentMatches, useLocation, useParams } from '@solidjs/router'
import { Suspense } from 'solid-js'

import { useLocale, useTranslator } from '~/config/locale'

export default function Nav(props: { class: string }) {
  const location = useLocation()
  const locale = useLocale()
  const t = useTranslator()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        class={`max-w-5xl flex flex-col gap-4 sm:flex-row justify-between sm:mt-10 mb-6  ${props.class}`}
      >
        <div class={`space-x-4`}>
          <A
            activeClass="font-bold"
            href={`/${locale()}/about`}
          >
            {t('about')}
          </A>
          <A
            activeClass="font-bold"
            href={`/${locale()}/publications`}
          >
            {t('publications')}
          </A>
          <A
            activeClass="font-bold"
            href={`/${locale()}/students`}
          >
            {t('students')}
          </A>
          <A
            activeClass="font-bold"
            href={`/${locale()}/vita`}
          >
            {t('vita')}
          </A>
        </div>
        <div class="flex flex-row gap-4">
          <A
            activeClass="font-bold"
            href={location.pathname.replace('/en', '/zh')}
          >
            [中文]
          </A>
          <A
            activeClass="font-bold"
            href={location.pathname.replace('/zh', '/en')}
          >
            [English]
          </A>
        </div>
      </div>
    </Suspense>
  )
}
