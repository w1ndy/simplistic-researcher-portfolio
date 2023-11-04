import { Paper } from '../types/paper'

import GeoChronImage from '../assets/img/papers/geochron.png'
import GeoChronPDF from '../assets/pdf/geochron.pdf'
import RelaQImage from '../assets/img/papers/relaq.jpg'
import NL2RigelImage from '../assets/img/papers/nl2rigel.jpg'
import NL2RigelPDF from '../assets/pdf/nl2rigel.pdf'
import NeighVizImage from '../assets/img/papers/neighviz.png'
import NeighVizPDF from '../assets/pdf/neighviz.pdf'
import DecomImage from '../assets/img/papers/decom.jpg'
import GeoCameraImage from '../assets/img/papers/geocamera.png'
import GeoNetverseImage from '../assets/img/papers/geonetverse.png'
import GeoNetversePDF from '../assets/pdf/geonetverse.pdf'
import ECoalVisImage from '../assets/img/papers/ecoalvis.png'
import RigelImage from '../assets/img/papers/rigel.png'
import UrbanSurveyImage from '../assets/img/papers/urbansurvey.png'
import CT3Image from '../assets/img/papers/ct3.png'
import NebulaImage from '../assets/img/papers/nebula.png'
import VisCasImage from '../assets/img/papers/viscas.png'
import OrderMonitorImage from '../assets/img/papers/ordermonitor.png'
import CompassImage from '../assets/img/papers/compass.png'
import IndustrialSurveyImage from '../assets/img/papers/industrial_survey.png'
import CorVizorImage from '../assets/img/papers/corvizor.png'
import BNVAImage from '../assets/img/papers/bnva.png'
import MCRSImage from '../assets/img/papers/mcrs.png'
import HomeFinderImage from '../assets/img/papers/homefinder.png'
import SmartAdPImage from '../assets/img/papers/smartadp.png'
import AirVisImage from '../assets/img/papers/airvis.png'
import SRVisImage from '../assets/img/papers/srvis.png'

export default [
  {
    year: '2024',
    papers: [
      {
        image: GeoChronImage,
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
        pdf: GeoChronPDF,
      },
    ],
  },
  {
    year: '2023',
    papers: [
      {
        image: RelaQImage,
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
        venue: 'arXiv preprint (in submission), 2023',
        doi: '10.48550/arXiv.2310.19311',
      },
      {
        image: NL2RigelImage,
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
        pdf: NL2RigelPDF,
      },
      {
        image: NeighVizImage,
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
        pdf: NeighVizPDF,
      },
      {
        image: DecomImage,
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
          'ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2023',
        doi: '10.1145/3580305.3599794',
      },
      {
        image: GeoCameraImage,
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
      {
        image: GeoNetverseImage,
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
        pdf: GeoNetversePDF,
      },
      {
        image: ECoalVisImage,
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023 (also appears in IEEE VIS 2022)',
        doi: '10.1109/TVCG.2022.3209430',
      },
      {
        image: RigelImage,
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
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2023 (also appears in IEEE VIS 2022)',
        doi: '10.1109/TVCG.2022.3209385',
      },
      {
        image: UrbanSurveyImage,
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
        venue: 'Computational Visual Media, 2023',
        doi: '10.1007/s41095-022-0275-7',
      },
      {
        image: CT3Image,
        authors: ['Zikun Deng', 'Di Weng', 'Yingcai Wu'],
        corresponding_authors: ['Di Weng'],
        title:
          'You are experienced: interactive tour planning with crowdsourcing tour data from web',
        venue: 'Journal of Visualization, vol. 26, pp. 385–401, 2023',
        doi: '10.1007/s12650-022-00884-1',
      },
    ],
  },
  {
    year: '2022',
    papers: [
      {
        image: NebulaImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 12, pp. 4127-4140, 2022',
        doi: '10.1109/TVCG.2021.3076222',
      },
      {
        image: VisCasImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 6, pp. 2486-2499, 2022',
        doi: '10.1109/TVCG.2021.3071387',
      },
      {
        image: OrderMonitorImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 1, pp. 857-867, 2022',
        doi: '10.1109/TVCG.2021.3114878',
      },
      {
        image: CompassImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 28, no. 1, pp. 1051-1061, 2022',
        doi: '10.1109/TVCG.2021.3114875',
      },
    ],
  },
  {
    year: '2021',
    papers: [
      {
        image: IndustrialSurveyImage,
        authors: ['Shuhan Liu', 'Di Weng', 'Yingcai Wu'],
        title: 'A Review on Industrial Data Visual Analytics',
        venue:
          'Journal of Integration Technology, vol. 11, no. 6, pp. 3-19, 2021',
        doi: '10.12146/j.issn.2095-3135.20210630003',
      },
      {
        image: CorVizorImage,
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
        doi: '10.1109/TITS.2020.2983226',
      },
      {
        image: BNVAImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 27, no. 2, pp. 817-827, 2021',
        doi: '10.1109/TVCG.2020.3030458',
      },
      {
        image: MCRSImage,
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
        doi: '10.1109/TITS.2020.2964012',
      },
    ],
  },
  {
    year: 'Earlier',
    papers: [
      {
        image: AirVisImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 26, no. 1, pp. 800-810, 2020',
        doi: '10.1109/TVCG.2019.2934670',
      },
      {
        image: SRVisImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 25, no. 1, pp. 459-469, 2019',
        doi: '10.1109/TVCG.2018.2865126',
      },
      {
        image: HomeFinderImage,
        authors: ['Di Weng', 'Heming Zhu', 'Jie Bao', 'Yu Zheng', 'Yingcai Wu'],
        title:
          'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
        venue:
          "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (CHI '18), Paper 247, 1–12",
        doi: '10.1145/3173574.3173821',
      },
      {
        image: SmartAdPImage,
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
          'IEEE Transactions on Visualization and Computer Graphics, vol. 23, no. 1, pp. 1-10, 2017',
        doi: '10.1109/TVCG.2016.2598432',
      },
    ],
  },
] as { year: string; papers: Paper[] }[]
