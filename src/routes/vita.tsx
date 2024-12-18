import Section from '~/components/Section'

import VitaEntries from '~/config/vita'

export default function Vita() {
  return (
    <div class="overflow-y-scroll">
      <Section
        name="Education"
        entries={VitaEntries.education}
      />
      <Section
        name="Employment"
        entries={VitaEntries.employment}
      />
      <Section
        name="Teaching"
        entries={VitaEntries.teaching}
      />
      <Section
        name="Awards"
        entries={VitaEntries.awards}
      />
      <Section
        name="Services"
        entries={VitaEntries.services}
      />
    </div>
  )
}
