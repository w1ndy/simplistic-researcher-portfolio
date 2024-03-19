import { A } from '@solidjs/router'

export function Nav(props: { class: string }) {
  return (
    <div class={`sm:mt-10 mb-6 space-x-4 ${props.class}`}>
      <A
        activeClass="font-bold"
        href="/about"
      >
        about
      </A>
      <A
        activeClass="font-bold"
        href="/publications"
      >
        publications
      </A>
      <A
        activeClass="font-bold"
        href="/students"
      >
        students
      </A>
      <A
        activeClass="font-bold"
        href="/vita"
      >
        vita
      </A>
    </div>
  )
}
