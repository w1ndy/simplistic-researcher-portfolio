import { For } from 'solid-js'

import News from '~/components/News'
import FeaturedPublications from '~/components/FeaturedPublications'

import { useTranslator } from '~/config/locale'
import { useInfo } from '~/config/info'
import { useNews } from '~/config/news'

export default function About() {
  const t = useTranslator()
  const info = useInfo()
  const news = useNews()
  return (
    <div class="max-w-5xl flex flex-col lg:flex-row overflow-y-scroll">
      <div class="lg:max-w-2xl lg:mr-6">
        <div class="flex">
          <div innerHTML={info()?.bio}></div>
          <div class="flex-none hidden md:block">
            <img
              src="/img/me.avif"
              class="w-44 h-60 object-cover ml-4"
              alt={`Photo of ${info()?.name}`}
            ></img>
          </div>
        </div>
        <FeaturedPublications />
      </div>
      <div class="pb-10 lg:w-80 flex-none">
        <div class="uppercase tracking-wider font-bold">{t('news')}</div>
        <For each={news()}>
          {(entry) => (
            <News
              date={entry.date}
              content={entry.content}
            />
          )}
        </For>
      </div>
    </div>
  )
}
