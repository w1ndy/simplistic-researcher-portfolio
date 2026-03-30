import { Student } from '~/types/student'

import { homepage } from '~/components/PaperEntry'
import Section from '~/components/Section'

import { useStudents } from '~/config/students'
import { useTranslator } from '~/config/locale'

function generateEntries(when?: string, students?: Student[]) {
  if (students === undefined) {
    return []
  }
  return [
    {
      when: when ?? '',
      descriptions: students.map(
        (entry) =>
          `<b>${homepage(entry.name)(entry.name)}</b>${entry.coadvised ? '*' : ''
          } ${entry.description !== undefined
            ? `&nbsp;&nbsp;${entry.description}`
            : ''
          }`
      ),
    },
  ]
}

export default function Students() {
  const students = useStudents()
  const t = useTranslator()
  return (
    <>
      <div
        class="mb-8 text-right italic"
        style={{
          color: 'var(--color-text-secondary)',
        }}
        innerHTML={students()?.notes}
      ></div>
      <Section
        name={t('phd_students')}
        entries={Object.entries(students()?.phd).map(([key, stu]) => generateEntries(key, stu)).flat()}
      ></Section>
      <Section
        name={t('master_students')}
        entries={Object.entries(students()?.master).map(([key, stu]) => generateEntries(key, stu)).flat()}
      ></Section>
    </>
  )
}
