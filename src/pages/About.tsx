import { For } from 'solid-js'

import { News } from '../components/News'
import NewsEntries from '../config/news'
import { RecentPublications } from '../components/RecentPublications'
import Photo from '../assets/img/me.jpg'

import Info from '../config/info'

export default function About() {
  return (
    <div class="sm:flex overflow-y-scroll">
      <div class="sm:max-w-2xl sm:mr-6">
        <div class="flex">
          <div innerHTML={Info.bio}></div>
          <div class="flex-none  hidden sm:block">
            <img
              src={Photo}
              class="w-44 h-52 object-cover ml-4"
            ></img>
          </div>
        </div>
        <RecentPublications />
      </div>
      <div class="pb-10 sm:w-96 flex-none">
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
