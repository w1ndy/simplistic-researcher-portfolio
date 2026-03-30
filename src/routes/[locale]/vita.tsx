import Section from '~/components/Section'

import { useTranslator } from '~/config/locale'
import { useVita } from '~/config/vita'

export default function Vita() {
  const vita = useVita()
  const t = useTranslator()
  return (
    <div>
      <Section
        name={t('education')}
        entries={vita()?.education}
      />
      <Section
        name={t('employment')}
        entries={vita()?.employment}
      />
      <Section
        name={t('teaching')}
        entries={vita()?.teaching}
      />
      <Section
        name={t('awards')}
        entries={vita()?.awards}
      />
      <Section
        name={t('services')}
        entries={vita()?.services}
      />
    </div>
  )
}
