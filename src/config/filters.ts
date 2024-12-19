import { Paper } from '../types/paper'

export const Filters: Record<
  string,
  { name: { en: string; zh: string }; matcher: (paper: Paper) => boolean }
> = {
  authorship: {
    name: {
      en: 'First/corresponding-authored',
      zh: '第一/通讯作者',
    },
    matcher: (paper: Paper) =>
      paper.corresponding_authors?.includes('Di Weng') ||
      paper.authors[0] == 'Di Weng',
  },
  vis: {
    name: {
      en: 'IEEE VIS',
      zh: 'IEEE VIS',
    },
    matcher: (paper: Paper) => paper.venue.includes('IEEE VIS'),
  },
  tvcg: {
    name: {
      en: 'TVCG',
      zh: 'TVCG',
    },
    matcher: (paper: Paper) => paper.venue.includes('TVCG'),
  },
  chi: {
    name: {
      en: 'CHI',
      zh: 'CHI',
    },
    matcher: (paper: Paper) => paper.venue.includes('CHI'),
  },
  kdd: {
    name: {
      en: 'KDD',
      zh: 'KDD',
    },
    matcher: (paper: Paper) => paper.venue.includes('KDD'),
  },
}
