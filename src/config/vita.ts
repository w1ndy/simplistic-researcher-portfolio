import { createResource } from 'solid-js'

import type Vita from '~/config/vita.en'
import { useLocale } from './locale'

export function useVita() {
  const locale = useLocale()
  const [vita] = createResource<typeof Vita, typeof locale>(
    locale,
    async () => (await import(`~/config/vita.${locale()}.ts`)).default
  )
  return vita
}
