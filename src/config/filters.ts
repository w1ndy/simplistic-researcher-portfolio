import { Paper } from '../types/paper'

export const Filters: Record<
  string,
  { name: string; matcher: (paper: Paper) => boolean }
> = {
  authorship: {
    name: 'First/corresponding-authored',
    matcher: (paper: Paper) =>
      paper.corresponding_authors?.includes('Di Weng') ||
      paper.authors[0] == 'Di Weng',
  },
  vis: {
    name: 'IEEE VIS',
    matcher: (paper: Paper) => paper.venue.includes('IEEE VIS'),
  },
  tvcg: {
    name: 'TVCG',
    matcher: (paper: Paper) => paper.venue.includes('TVCG'),
  },
  chi: {
    name: 'CHI',
    matcher: (paper: Paper) => paper.venue.includes('CHI'),
  },
  kdd: {
    name: 'KDD',
    matcher: (paper: Paper) => paper.venue.includes('KDD'),
  },
}
