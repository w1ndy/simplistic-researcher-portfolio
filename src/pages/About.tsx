import { For } from 'solid-js'

import { News } from '../components/News'
import NewsEntries from '../config/news'
import { RecentPublications } from '../components/RecentPublications'

import Info from '../config/info'

export default function About() {
  return (
    <div class="lg:flex overflow-y-scroll">
      <div class="lg:max-w-2xl lg:mr-6">
        <div class="flex">
          <div innerHTML={Info.bio}></div>
          <div class="flex-none hidden md:block">
            <img
              src="/img/me.avif"
              class="w-44 h-60 object-cover ml-4"
              alt={`Photo of ${Info.name}`}
            ></img>
          </div>
        </div>
        <RecentPublications />
      </div>
      <div class="pb-10 lg:w-96 flex-none">
        <div class="uppercase tracking-wider font-bold">News</div>
        <For each={NewsEntries}>
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
