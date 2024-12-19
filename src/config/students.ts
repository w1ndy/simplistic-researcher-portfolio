import { createResource } from 'solid-js'

import type Students from '~/config/students.en'
import { useLocale } from './locale'

export function useStudents() {
  const locale = useLocale()
  const [students] = createResource<typeof Students, typeof locale>(
    locale,
    async () => (await import(`~/config/students.${locale()}.ts`)).default
  )
  return students
}
