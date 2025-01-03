import { Suspense } from 'solid-js'

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
          `<b>${homepage(entry.name)(entry.name)}</b>${
            entry.coadvised ? '*' : ''
          } ${
            entry.description !== undefined
              ? `&mdash; ${entry.description}`
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
        class="mb-8 text-gray-500 italic"
        innerHTML={students()?.notes}
      ></div>
      <Section
        name={t('phd_students')}
        entries={generateEntries(t('current'), students()?.phd.current).concat(
          students()?.phd.past
            ? generateEntries(t('past'), students()?.phd.past)
            : []
        )}
      ></Section>
      <Section
        name={t('master_students')}
        entries={generateEntries(
          t('current'),
          students()?.master.current
        ).concat(
          students()?.master.past
            ? generateEntries(t('past'), students()?.master.past)
            : []
        )}
      ></Section>
      <Section
        name={t('undergraduate_students')}
        entries={generateEntries(
          t('current'),
          students()?.undergraduates.current
        ).concat(
          students()?.undergraduates.past
            ? generateEntries(t('past'), students()?.undergraduates.past)
            : []
        )}
      ></Section>
    </>
  )
}
