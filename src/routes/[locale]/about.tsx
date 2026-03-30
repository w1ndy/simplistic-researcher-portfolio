import FeaturedPublications from '~/components/FeaturedPublications'

import { useInfo } from '~/config/info'
import { useTranslator } from '~/config/locale'

export default function About() {
  const info = useInfo()
  const t = useTranslator()
  return (
    <div>
      <div class="flex">
        <div innerHTML={info()?.bio}></div>
        <div class="flex-none hidden md:block">
          <img
            src="/img/me.avif"
            class="w-44 h-60 object-cover ml-6 rounded"
            alt={`Photo of ${info()?.name}`}
          ></img>
        </div>
      </div>

      <div
        class="mt-8 px-5 py-4 rounded-lg"
        style={{
          'background-color': 'var(--color-hover-bg)',
          'border-left': '3px solid var(--color-accent)',
        }}
      >
        <div class="font-bold mb-1">{t('work_with_me')}</div>
        <div innerHTML={t('work_with_me_body')}></div>
      </div>

      <FeaturedPublications />
    </div>
  )
}
