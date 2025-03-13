import { Paper } from '../types/paper'

export enum PaperTopic {
  DataWrangling = 'Data wrangling',
  GeospatialVisualAnalysis = 'Geospatial visual analysis',
  TimeSeriesVisualAnalysis = 'Time series visual analysis',
  VisualizationAuthoring = 'Visualization authoring',
}

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
  kdd: {
    name: {
      en: 'KDD',
      zh: 'KDD',
    },
    matcher: (paper: Paper) => paper.venue.includes('KDD'),
  },
  ...Object.fromEntries(
    Object.values(PaperTopic).map((topic) => [
      topic,
      {
        name: {
          en: topic,
          zh: topic,
        },
        matcher: (paper: Paper) => paper.topics?.includes(topic),
      },
    ])
  ),
}
