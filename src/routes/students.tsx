import { homepage } from '~/components/PaperEntry'
import Section from '~/components/Section'

import StudentEntries, { Student } from '~/config/students'

function generateEntries(when: string, students: Student[]) {
  return [
    {
      when,
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
  return (
    <div>
      <div
        class="mb-8 text-gray-500 italic"
        innerHTML={StudentEntries.notes}
      ></div>
      <Section
        name="PhD Students"
        entries={generateEntries('Current', StudentEntries.phd.current).concat(
          StudentEntries.phd.past
            ? generateEntries('Past', StudentEntries.phd.past)
            : []
        )}
      ></Section>
      <Section
        name="Master Students"
        entries={generateEntries(
          'Current',
          StudentEntries.master.current
        ).concat(
          StudentEntries.master.past
            ? generateEntries('Past', StudentEntries.master.past)
            : []
        )}
      ></Section>
      <Section
        name="Undergraduate Students"
        entries={generateEntries(
          'Current',
          StudentEntries.undergraduates.current
        ).concat(
          StudentEntries.undergraduates.past
            ? generateEntries('Past', StudentEntries.undergraduates.past)
            : []
        )}
      ></Section>
    </div>
  )
}
