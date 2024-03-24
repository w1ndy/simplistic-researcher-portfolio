import { Paper } from '../types/paper'

export default [
  {
    tag: 'ACM CHI 2024',
    papers: [
      {
        image: '/img/papers/table_illustrator.avif',
        authors: [
          'Yanwei Huang',
          'Yurun Yang',
          'Xinhuan Shu',
          'Ran Chen',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Table Illustrator: Puzzle-based interactive authoring of plain tables',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2024',
        links: {},
      },
    ],
  },
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
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10403544/',
          pdf: '/pdf/dstc.pdf',
        },
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
        links: {
          pdf: '/pdf/jsoncurer.pdf',
          code: 'https://github.com/changevis/JsonCurer',
        },
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
          paper:
            'https://www.computer.org/csdl/proceedings-article/vds/2023/302000a001/1SYJieOzwOs',
          pdf: '/pdf/neighviz.pdf',
        },
      },
    ],
  },
] as {
  tag: string
  papers: Paper[]
}[]
