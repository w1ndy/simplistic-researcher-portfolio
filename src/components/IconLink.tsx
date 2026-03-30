import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { clientOnly } from '@solidjs/start'

const Fa = clientOnly(() => import('solid-fa'))

export function IconLink(props: { icon: IconDefinition; text: string }) {
  return (
    <div class="flex items-center gap-2">
      <Fa
        icon={props.icon}
        class="inline-block w-4 text-center"
        style={{ color: 'var(--color-text-secondary)' }}
      />
      <span innerHTML={props.text}></span>
    </div>
  )
}
