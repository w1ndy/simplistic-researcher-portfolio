import { createResource } from 'solid-js'

import type News from '~/config/news.en'
import { useLocale } from './locale'

export function useNews() {
  const locale = useLocale()
  const [news] = createResource<typeof News, typeof locale>(
    locale,
    async () => (await import(`~/config/news.${locale()}.ts`)).default
  )
  return news
}
