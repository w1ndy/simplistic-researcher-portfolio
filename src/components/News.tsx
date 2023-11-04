export function News(props: { date: string; content: string }) {
  return (
    <div class="mt-4">
      <div class="text-gray-500">{props.date}</div>
      <div innerHTML={props.content}></div>
    </div>
  )
}
