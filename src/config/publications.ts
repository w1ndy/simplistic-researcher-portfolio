import { Paper } from '../types/paper'
import { FeaturedCategory } from './featured'

export default [
  {
    year: '2025',
    papers: [
      {
        image: '/img/papers/hypnos.avif',
        authors: [
          'Xiwen Cai',
          'Xiaodong Ge',
          'Kai Xiong',
          'Shuainan Ye',
          'Di Weng',
          'Ke Xu',
          'Datong Wei',
          'Jiang Long',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng', 'Ke Xu'],
        title:
          'HYPNOS: Interactive Data Lineage Tracing for Data Transformation Scripts',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2025 (Early Access)',
        links: {},
        featured_category: FeaturedCategory.IEEE_TVCG_2025,
      },
      {
        image: '/img/papers/icfinder.avif',
        authors: [
          'Junxiu Tang',
          'Huimin Ren',
          'Zikun Deng',
          'Di Weng',
          'Tan Tang',
          'Lingyun Yu',
          'Jie Bao',
          'Yu Zheng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Towards Better Illegal Chemical Facility Detection with Hazardous Chemicals Transportation Trajectories',
        venue: 'Journal of Visualization, 2025 (ChinaVis 2024)',
        links: {
          paper: 'https://link.springer.com/article/10.1007/s12650-025-01055-8',
          pdf: '/pdf/icfinder.pdf',
        },
      },
      {
        image: '/img/papers/structvizor.avif',
        authors: [
          'Yanwei Huang',
          'Yan Miao',
          'Di Weng',
          'Adam Perer',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'StructVizor: Interactive profiling of semi-structured textual data',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2025',
        links: {
          preprint: 'https://arxiv.org/abs/2503.06500',
          pdf: '/pdf/structvizor.pdf',
        },
        featured_category: FeaturedCategory.ACM_CHI_2025,
      },
      {
        image: '/img/papers/ridgebuilder.avif',
        authors: [
          'Shuhan Liu',
          'Yangtian Liu',
          'Junxin Li',
          'Yanwei Huang',
          'Yue Shangguan',
          'Zikun Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'RidgeBuilder: Interactive Authoring of Expressive Ridgeline Plots',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2025',
        links: {},
        featured_category: FeaturedCategory.ACM_CHI_2025,
      },
      {
        image: '/img/papers/xavier.avif',
        authors: [
          'Yunfan Zhou',
          'Xiwen Cai',
          'Qiming Shi',
          'Yanwei Huang',
          'Haotian Li',
          'Huamin Qu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Xavier: Toward Better Coding Assistance in Authoring Tabular Data Wrangling Scripts',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2025',
        links: {
          preprint: 'https://arxiv.org/abs/2503.02639',
          pdf: '/pdf/xavier.pdf',
        },
        featured_category: FeaturedCategory.ACM_CHI_2025,
      },
      {
        image: '/img/papers/ferry.avif',
        authors: [
          'Zhongsu Luo',
          'Kai Xiong',
          'Jiajun Zhu',
          'Ran Chen',
          'Xinhuan Shu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 1, pp. 1202-1212, 2025 (IEEE VIS 2024)',
        links: {
          paper: 'https://ieeexplore.ieee.org/abstract/document/10670464',
          pdf: '/pdf/ferry.pdf',
        },
        featured_category: FeaturedCategory.IEEE_VIS_2024,
      },
    ],
  },
  {
    year: '2024',
    papers: [
      {
        image: '/img/papers/kg.avif',
        authors: [
          'Xiwen Cai',
          'Di Weng',
          'Taotao Fu',
          'Siwei Fu',
          'Yongheng Wang',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Linking Text and Visualizations via Contextual Knowledge Graph',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024 (Early Access)',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10553360',
          pdf: '/pdf/tvl.pdf',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
      },
      {
        image: '/img/papers/relaq.avif',
        authors: [
          'Shuhan Liu',
          'Yuan Tian',
          'Zikun Deng',
          'Weiwei Cui',
          'Haidong Zhang',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Relation-driven Query of Multiple Time Series',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2024 (Early Access)',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10521861',
          pdf: '/pdf/relaq.pdf',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
      },
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
          'ACM Conference on Human Factors in Computing Systems (CHI), no. 186, pp. 1-18, 2024',
        links: {
          paper: 'https://dl.acm.org/doi/10.1145/3613904.3642415',
          pdf: '/pdf/table_illustrator.pdf',
          video: 'https://www.youtube.com/watch?v=OrFKL5-Fc1Y',
          code: 'https://github.com/Ais0n/tableshop',
          demo: 'https://yhuang.top/tableshop/',
        },
        featured_category: FeaturedCategory.ACM_CHI_2024,
      },
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
          'IEEE Transactions on Intelligent Transportation Systems (ITS), vol. 25, no. 7, pp. 7687-7700, 2024',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10403544/',
          pdf: '/pdf/dstc.pdf',
        },
        featured_category: FeaturedCategory.IEEE_ITS_2024,
      },
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 9, pp. 6130-6145, 2024',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2023.3329120',
          pdf: '/pdf/nl2rigel.pdf',
          appendix: '/pdf/nl2rigel_appendix.pdf',
          video: 'https://youtu.be/qjjKAykyDZU',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 7, pp. 3135-3150, 2024',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3229953',
          pdf: '/pdf/geonetverse.pdf',
          video: 'https://youtu.be/-GXWCpf9oqY?si=akBGTiyq-LYt0o0K',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
      },
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 6, pp. 3008-3021, 2024 (IEEE PacificVis 2024 TVCG Journal Track)',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10499847/',
          pdf: '/pdf/jsoncurer.pdf',
          code: 'https://github.com/changevis/JsonCurer',
        },
        featured_category: FeaturedCategory.IEEE_PACIFICVIS_2024,
      },
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 1, pp. 1194-1204, 2024 (IEEE VIS 2023)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2023.3327162',
          pdf: '/pdf/geochron.pdf',
          video: 'https://youtu.be/jc7aeiszPQM?si=SeRLpmTIg4z7GDFN',
        },
      },
    ],
  },
  {
    year: '2023',
    papers: [
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
          '9th Symposium on Visualization in Data Science (VDS @ IEEE VIS 2023), pp. 1-5, 2023',
        links: {
          paper:
            'https://www.computer.org/csdl/proceedings-article/vds/2023/302000a001/1SYJieOzwOs',
          pdf: '/pdf/neighviz.pdf',
        },
      },
      {
        image: '/img/papers/decom.avif',
        authors: [
          'Fangkai Yang',
          'Jue Zhang',
          'Lu Wang',
          'Bo Qiao',
          'Di Weng',
          'Xiaoting Qin',
          'Gregory Weber',
          'Durgesh Nandini Das',
          'Srinivasan Rakhunathan',
          'Ranganathan Srikanth',
          'Qingwei Lin',
          'Dongmei Zhang',
        ],
        title:
          'Contextual Self-attentive Temporal Point Process for Physical Decommissioning Prediction of Cloud Assets',
        venue:
          'ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), pp 467-477, 2023',
        links: {
          paper: 'https://doi.org/10.1145/3447548.3467232',
        },
      },
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
          'ACM Conference on Human Factors in Computing Systems (CHI), no. 170, pp. 1-15, 2023',
        links: {
          paper: 'https://doi.org/10.1145/3544548.3581470',
          pdf: '/pdf/geocamera.pdf',
          video: 'https://youtu.be/SFBmBSHjKpA?si=jzOIhS7yADsegrh3',
        },
      },
      {
        image: '/img/papers/ecoalvis.avif',
        authors: [
          'Shuhan Liu',
          'Di Weng',
          'Yuan Tian',
          'Zikun Deng',
          'Haoran Xu',
          'Xiangyu Zhu',
          'Honglei Yin',
          'Xianyuan Zhan',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 29, no. 1, pp. 1091-1101, 2023 (IEEE VIS 2022)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3209430',
          pdf: '/pdf/ecoalvis.pdf',
          video: 'https://youtu.be/XsqdJd2y6Z0?si=56smTEjYuX706YgF',
        },
      },
      {
        image: '/img/papers/rigel.avif',
        authors: [
          'Ran Chen',
          'Di Weng',
          'Yanwei Huang',
          'Xinhuan Shu',
          'Jiayi Zhou',
          'Guodao Sun',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Rigel: Transforming Tabular Data by Declarative Mapping',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 29, no. 1, pp. 128-138, 2023 (IEEE VIS 2022)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3209385',
          pdf: '/pdf/rigel.pdf',
          appendix: 'https://observablehq.com/@rigel/appendix',
          video: 'https://youtu.be/fvM_W-1n7N4?si=2BoDyGzgakzS9BB9',
          code: 'https://github.com/rigel-js',
          demo: 'https://rigel-system.github.io/rigel-system/',
        },
      },
      {
        image: '/img/papers/urbansurvey.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Shuhan Liu',
          'Yuan Tian',
          'Mingliang Xu',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng', 'Yingcai Wu'],
        title:
          'A survey of urban visual analytics: Advances and future directions',
        venue: 'Computational Visual Media, vol. 9, pp 3-39, 2023',
        links: {
          paper: 'https://doi.org/10.1007/s41095-022-0275-7',
          pdf: '/pdf/urbansurvey.pdf',
        },
      },
      {
        image: '/img/papers/ct3.avif',
        authors: ['Zikun Deng', 'Di Weng', 'Yingcai Wu'],
        corresponding_authors: ['Di Weng'],
        title:
          'You are experienced: interactive tour planning with crowdsourcing tour data from web',
        venue: 'Journal of Visualization, vol. 26, pp. 385-401, 2023',
        links: {
          paper: 'https://doi.org/10.1007/s12650-022-00884-1',
          pdf: '/pdf/ct3.pdf',
        },
      },
    ],
  },
  {
    year: '2022',
    papers: [
      {
        image: '/img/papers/nebula.avif',
        authors: [
          'Ran Chen',
          'Xinhuan Shu',
          'Jiahui Chen',
          'Di Weng',
          'Junxiu Tang',
          'Siwei Fu',
          'Yingcai Wu',
        ],
        title: 'Nebula: A Coordinating Grammar of Graphics',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 12, pp. 4127-4140, 2022',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/9417674',
          pdf: '/pdf/nebula.pdf',
          appendix: 'https://nebula-vis.github.io/examples',
          video: 'https://youtu.be/oMgO0BVX8rY?si=jCEGo6GaLzW_jhax',
        },
      },
      {
        image: '/img/papers/viscas.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Yuxuan Liang',
          'Jie Bao',
          'Yu Zheng',
          'Tobias Schreck',
          'Mingliang Xu',
          'Yingcai Wu',
        ],
        title: 'Visual Cascade Analytics of Large-Scale Spatiotemporal Data',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 6, pp. 2486-2499, 2022',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2021.3071387',
          pdf: '/pdf/viscas.pdf',
          video: 'https://youtu.be/IVSf0BNRC_c?si=rKDdtSy0wPJFIXPJ',
        },
      },
      {
        image: '/img/papers/ordermonitor.avif',
        authors: [
          'Junxiu Tang',
          'Yuhua Zhou',
          'Tan Tang',
          'Di Weng',
          'Boyang Xie',
          'Lingyun Yu',
          'Huaqiang Zhang',
          'Yingcai Wu',
        ],
        title:
          'A Visualization Approach for Monitoring Order Processing in E-Commerce Warehouse',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 1, pp. 857-867, 2022 (IEEE VIS 2021)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2021.3114878',
          pdf: '/pdf/ordermonitor.pdf',
        },
      },
      {
        image: '/img/papers/compass.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Xiao Xie',
          'Jie Bao',
          'Yu Zheng',
          'Mingliang Xu',
          'Wei Chen',
          'Yingcai Wu',
        ],
        title: 'Compass: Towards Better Causal Analysis of Urban Time Series',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 1, pp. 1051-1061, 2022 (IEEE VIS 2021)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2021.3114875',
          pdf: '/pdf/compass.pdf',
          video: 'https://youtu.be/QxvGC9F9PaY?si=QI_rCpex5qVvBlpx',
        },
      },
    ],
  },
  {
    year: '2021',
    papers: [
      // {
      //   image: '/img/papers/industrial_survey.avif',
      //   authors: ['Shuhan Liu', 'Di Weng', 'Yingcai Wu'],
      //   title: 'A Review on Industrial Data Visual Analytics',
      //   venue:
      //     'Journal of Integration Technology, vol. 10, no. 6, pp. 3-19, 2021',
      //   links: {
      //     paper: 'https://doi.org/10.12146/j.issn.2095-3135.20210630003',
      //     'cn pdf': '/pdf/industrial_survey.pdf',
      //   },
      // },
      {
        image: '/img/papers/corvizor.avif',
        authors: [
          'Yingcai Wu',
          'Di Weng',
          'Zikun Deng',
          'Jie Bao',
          'Mingliang Xu',
          'Zhangye Wang',
          'Yu Zheng',
          'Zhiyu Ding',
          'Wei Chen',
        ],
        title:
          'Towards Better Detection and Analysis of Massive Spatiotemporal Co-Occurrence Patterns',
        venue:
          'IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 6, pp. 3387-3402, 2021',
        links: {
          paper: 'https://doi.org/10.1109/TITS.2020.2983226',
          pdf: '/pdf/corvizor.pdf',
          video: 'https://youtu.be/0T0xe-rppSo?si=jToHX2CDGnCrv8Ch',
        },
      },
      {
        image: '/img/papers/bnva.avif',
        authors: [
          'Di Weng',
          'Chengbo Zheng',
          'Zikun Deng',
          'Mingze Ma',
          'Jie Bao',
          'Yu Zheng',
          'Mingliang Xu',
          'Yingcai Wu',
        ],
        title: 'Towards Better Bus Networks: A Visual Analytics Approach',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 27, no. 2, pp. 817-827, 2021',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2020.3030458',
          pdf: '/pdf/bnva.pdf',
          video: 'https://youtu.be/DEAfK8F2dQE?si=CY-voxqmRa5TIAYL',
        },
      },
      {
        image: '/img/papers/mcrs.avif',
        authors: [
          'Di Weng',
          'Ran Chen',
          'Jianhui Zhang',
          'Jie Bao',
          'Yu Zheng',
          'Yingcai Wu',
        ],
        title:
          'Pareto-Optimal Transit Route Planning With Multi-Objective Monte-Carlo Tree Search',
        venue:
          'IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 2, pp. 1185-1195, 2021',
        links: {
          paper: 'https://doi.org/10.1109/TITS.2020.2964012',
          pdf: '/pdf/mcrs.pdf',
        },
      },
    ],
  },
  {
    year: 'Earlier',
    papers: [
      {
        image: '/img/papers/airvis.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Jiahui Chen',
          'Ren Liu',
          'Zhibin Wang',
          'Jie Bao',
          'Yu Zheng',
          'Yingcai Wu',
        ],
        title: 'AirVis: Visual Analytics of Air Pollution Propagation',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 26, no. 1, pp. 800-810, 2020 (IEEE VIS 2019)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2019.2934670',
          pdf: '/pdf/airvis.pdf',
          video: 'https://youtu.be/orjRmmGVT-4?si=bFQCE8HFcnh3-WMM',
        },
      },
      {
        image: '/img/papers/srvis.avif',
        authors: [
          'Di Weng',
          'Ran Chen',
          'Zikun Deng',
          'Feiran Wu',
          'Jingmin Chen',
          'Yingcai Wu',
        ],
        title:
          'SRVis: Towards Better Spatial Integration in Ranking Visualization',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 25, no. 1, pp. 459-469, 2019 (IEEE VIS 2018)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2018.2865126',
          pdf: '/pdf/srvis.pdf',
          video: 'https://youtu.be/lenSZci4gy4?si=1JCtSimnpNTyTzGS',
        },
      },
      {
        image: '/img/papers/homefinder.avif',
        authors: ['Di Weng', 'Heming Zhu', 'Jie Bao', 'Yu Zheng', 'Yingcai Wu'],
        title:
          'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), no. 247, pp. 1-12, 2018',
        links: {
          paper: 'https://doi.org/10.1145/3173574.3173821',
          pdf: '/pdf/reach.pdf',
          video: 'https://youtu.be/WcjMXAfuygg?si=f3Xv_zBl_o9UiYhF',
        },
      },
      {
        image: '/img/papers/smartadp.avif',
        authors: [
          'Dongyu Liu',
          'Di Weng',
          'Yuhong Li',
          'Jie Bao',
          'Yu Zheng',
          'Huamin Qu',
          'Yingcai Wu',
        ],
        title:
          'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Selecting Billboard Locations',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 23, no. 1, pp. 1-10, 2017 (IEEE VIS 2016)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2016.2598432',
          pdf: '/pdf/smartadp.pdf',
          video: 'https://youtu.be/7vkYubflVuo?si=3cfFncTFbUHmsh1n',
        },
      },
    ],
  },
] as { year: string; papers: Paper[] }[]
