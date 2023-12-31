import { Paper } from '../types/paper'

export default [
  {
    tag: 'IEEE ITS 2024',
    papers: [
      {
        image: '/img/papers/dstc.avif',
        authors: [
          'Chao Wang',
          'Jiahui Huang',
          'Yongheng Wang',
          'Zhengxuan Lin',
          'Xiongnan Jin',
          'Xing Jin',
          'Di Weng',
          'Yingcai Wu',
        ],
        title:
          'A Deep Spatiotemporal Trajectory Representation Learning Framework for Clustering',
        venue:
          'IEEE Transactions on Intelligent Transportation Systems (ITS), 2024',
        links: {},
      },
    ],
  },
  {
    tag: 'IEEE PacificVis 2024',
    papers: [
      {
        image: '/img/papers/jsoncurer.avif',
        authors: [
          'Kai Xiong',
          'Xinyi Xu',
          'Siwei Fu',
          'Di Weng',
          'Yongheng Wang',
          'Yingcai Wu',
        ],
        title:
          'JsonCurer: Data Quality Management for JSON Based on an Aggregated Schema',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024 (IEEE PacificVis 2024 TVCG Journal Track)',
        links: {},
      },
    ],
  },
  {
    tag: 'IEEE TVCG 2023',
    papers: [
      {
        image: '/img/papers/nl2rigel.avif',
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
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2023.3329120',
          pdf: '/pdf/nl2rigel.pdf',
          appendix: '/pdf/nl2rigel_appendix.pdf',
          video: 'https://youtu.be/qjjKAykyDZU',
        },
      },
      {
        image: '/img/papers/geonetverse.avif',
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
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3229953',
          pdf: '/pdf/geonetverse.pdf',
          video: 'https://youtu.be/-GXWCpf9oqY?si=akBGTiyq-LYt0o0K',
        },
      },
    ],
  },
  {
    tag: 'IEEE VIS 2023',
    papers: [
      {
        image: '/img/papers/geochron.avif',
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024 (IEEE VIS 2023)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2023.3327162',
          pdf: '/pdf/geochron.pdf',
          video: 'https://youtu.be/jc7aeiszPQM?si=SeRLpmTIg4z7GDFN',
        },
      },
      {
        image: '/img/papers/neighviz.avif',
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
        links: {
          paper: 'https://arxiv.org/abs/2309.11454',
          pdf: '/pdf/neighviz.pdf',
        },
      },
    ],
  },
  {
    tag: 'ACM CHI 2023',
    papers: [
      {
        image: '/img/papers/geocamera.avif',
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
        links: {
          paper: 'https://doi.org/10.1145/3544548.3581470',
          pdf: '/pdf/geocamera.pdf',
          video: 'https://youtu.be/SFBmBSHjKpA?si=jzOIhS7yADsegrh3',
        },
      },
    ],
  },
] as {
  tag: string
  papers: Paper[]
}[]
