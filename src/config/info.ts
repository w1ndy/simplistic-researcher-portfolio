import { createResource } from 'solid-js'

import type Info from '~/config/info.en'
import { useLocale } from './locale'

export function useInfo() {
  const locale = useLocale()
  const [info] = createResource<typeof Info, typeof locale>(
    locale,
    async () => (await import(`~/config/info.${locale()}.ts`)).default
  )
  return info
}

export const PageTitle = 'Dr. Di Weng'
export const PageDescription =
  'Di Weng (翁荻) is a tenure-track assistant professor at School of Software Technology, Zhejiang University. His research interest lies in information visualization and visual analytics, focusing on interactive data transformation and spatiotemporal data analysis.'
