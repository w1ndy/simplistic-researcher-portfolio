export interface Paper {
  image: string
  authors: string[]
  corresponding_authors?: string[]
  title: string
  venue: string
  publication_date?: string
  awards?: string[]
  links: Record<string, string>
  featured_category?: string
  topics?: string[]
  abstract?: string
}
