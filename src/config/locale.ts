import * as i18n from '@solid-primitives/i18n'
import { useParams } from '@solidjs/router'
import { createMemo, createResource } from 'solid-js'

import type en from '~/i18n/en.json'

export type Locale = 'en' | 'zh'

const useLocale = () => {
  return createMemo((): Locale => {
    const params = useParams() as { locale?: Locale }
    return params.locale ?? 'en'
  })
}

const useTranslator = () => {
  const locale = useLocale()
  const [dict] = createResource(locale, async () => {
    const dict: typeof en = (await import(`~/i18n/${locale()}.json`)).default
    return i18n.flatten(dict)
  })
  return i18n.translator(dict)
}

export { useLocale, useTranslator }
