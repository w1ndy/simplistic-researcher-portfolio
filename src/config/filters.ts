import { Paper } from '../types/paper'

export enum PaperTopic {
  DataWrangling = 'data wrangling',
  Geospatial = 'geospatial',
  Temporal = 'temporal',
  VisualAnalytics = 'visual analytics',
  LLM = 'llm',
  VisualizationAuthoring = 'vis authoring',
  Accessibility = 'accessibility',
}

export const Filters: Record<
  string,
  { name: { en: string; zh: string }; matcher: (paper: Paper) => boolean }
>[] = [
  {
    vis: {
      name: {
        en: 'IEEE VIS',
        zh: 'IEEE VIS',
      },
      matcher: (paper: Paper) => paper.venue.includes('IEEE VIS'),
    },
    tvcg: {
      name: {
        en: 'IEEE TVCG',
        zh: 'IEEE TVCG',
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
    uist: {
      name: {
        en: 'UIST',
        zh: 'UIST',
      },
      matcher: (paper: Paper) => paper.venue.includes('UIST'),
    },
    icml: {
      name: {
        en: 'ICML',
        zh: 'ICML',
      },
      matcher: (paper: Paper) => paper.venue.includes('ICML'),
    },
    kdd: {
      name: {
        en: 'KDD',
        zh: 'KDD',
      },
      matcher: (paper: Paper) => paper.venue.includes('KDD'),
    },
    authorship: {
      name: {
        en: 'First/corresponding-authored',
        zh: '第一/通讯作者',
      },
      matcher: (paper: Paper) =>
        paper.corresponding_authors?.includes('Di Weng') ||
        paper.authors[0] == 'Di Weng',
    },
  },
  Object.fromEntries(
    Object.values(PaperTopic).map((topic) => [
      topic,
      {
        name: {
          en: topic,
          zh: topic,
        },
        matcher: (paper: Paper) => paper.topics?.includes(topic) ?? false,
      },
    ]),
  ),
]
