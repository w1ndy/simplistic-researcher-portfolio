export interface Paper {
  image: string
  authors: string[]
  corresponding_authors?: string[]
  title: string
  venue: string
  links: Record<string, string>
}
