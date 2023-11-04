import { Paper } from '../types/paper'

export default [
  {
    tag: 'IEEE TVCG 2023',
    papers: [
      {
        image: (await import('../assets/img/papers/nl2rigel.jpg')).default,
        authors: [
          'Yanwei Huang',
          'Yunfan Zhou',
          'Ran Chen',
          'Changhao Pan',
          'Xinhuan Shu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Interactive Table Synthesis with Natural Language',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023',
        doi: '10.1109/TVCG.2023.3329120',
        pdf: (await import('../assets/pdf/nl2rigel.pdf')).default,
      },
      {
        image: (await import('../assets/img/papers/geonetverse.png')).default,
        authors: [
          'Zikun Deng',
          'Shifu Chen',
          'Xiao Xie',
          'Guodao Sun',
          'Mingliang Xu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng', 'Yingcai Wu'],
        title: 'Multilevel Visual Analysis of Aggregate Geo-Networks',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023',
        doi: '10.1109/TVCG.2022.3229953',
        pdf: (await import('../assets/pdf/geonetverse.pdf')).default,
      },
    ],
  },
  {
    tag: 'IEEE VIS 2023',
    papers: [
      {
        image: (await import('../assets/img/papers/geochron.png')).default,
        authors: [
          'Zikun Deng',
          'Shifu Chen',
          'Tobias Schreck',
          'Dazhen Deng',
          'Tan Tang',
          'Mingliang Xu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Visualizing Large-Scale Spatial Time Series with GeoChron',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024 (also appears in IEEE VIS 2023)',
        doi: '10.1109/TVCG.2023.3327162',
        pdf: (await import('../assets/pdf/geochron.pdf')).default,
      },
      {
        image: (await import('../assets/img/papers/neighviz.png')).default,
        authors: [
          'Yue Yu',
          'Yifang Wang',
          'Qisen Yang',
          'Di Weng',
          'Yongjun Zhang',
          'Xiaogang Wu',
          'Yingcai Wu',
          'Huamin Qu',
        ],
        title:
          'NeighViz: Towards Better Understanding of Neighborhood Effects on Social Groups with Spatial Data',
        venue:
          '9th Symposium on Visualization in Data Science (VDS @ IEEE VIS 2023), 2023',
        doi: '10.48550/arXiv.2309.11454',
      },
    ],
  },
  {
    tag: 'ACM CHI 2023',
    papers: [
      {
        image: (await import('../assets/img/papers/geocamera.png')).default,
        authors: [
          'Wenchao Li',
          'Zhan Wang',
          'Yun Wang',
          'Di Weng',
          'Liwenhan Xie',
          'Siming Chen',
          'Haidong Zhang',
          'Huamin Qu',
        ],
        title:
          'GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2023',
        doi: '10.1145/3544548.3581470',
      },
    ],
  },
] as {
  tag: string
  papers: Paper[]
}[]
