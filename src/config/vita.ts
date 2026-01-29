import { createMemo } from 'solid-js'
import { Locale, useLocale } from './locale'

interface Entry {
  when: string
  what?: string
  where?: string
  descriptions?: string[]
}

const vita: Record<
  Locale,
  {
    education: Entry[]
    employment: Entry[]
    teaching: Entry[]
    awards: Entry[]
    services: Entry[]
  }
> = {
  en: {
    education: [
      {
        when: '2021',
        what: 'Ph.D. Computer Science',
        where:
          '<a href="http://www.zju.edu.cn" target="_blank">Zhejiang University, China</a>',
        descriptions: [
          '<span class="italic">Visual Decision-Making for Urban Geospace</span>',
          '<span>Advisor: <a href="http://www.ycwu.org" target="_blank">Prof. Yingcai Wu</a></span>',
        ],
      },
      {
        when: '2016',
        what: 'B.Eng. Computer Science',
        where:
          '<a href="http://www.sdu.edu.cn" target="_blank">Shandong University, China</a>',
        descriptions: ['Computer Science Division, Taishan Honors College'],
      },
    ],
    employment: [
      {
        when: '2023.03 - ',
        what: 'Zhejiang University',
        where: 'Ningbo, China',
        descriptions: [
          'Tenure-track Assistant Professor (ZJU 100 Young Professor), <a href="http://www.cst.zju.edu.cn" target="_blank">School of Software Tecnology</a>',
        ],
      },
      {
        when: '2022.01 - 2023.02',
        what: 'Microsoft Research Asia',
        where: 'Beijing, China',
        descriptions: [
          'Researcher, <a href="https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/" target="_blank">Data, Knowledge, and Intelligence (DKI) Group</a>',
        ],
      },
      {
        when: '2020.05 - 2020.12',
        what: 'Zhejiang Lab',
        where: 'Hangzhou, China',
        descriptions: [
          'Research Intern, <a href="https://en.zhejianglab.com/">Research Center for Integrated Intelligence</a>',
          'Advised by <a href="http://www.ycwu.org" target="_blank">Prof. Yingcai Wu</a> and <a href="http://www.cad.zju.edu.cn/home/chenwei/" target="_blank">Prof. Wei Chen</a>',
        ],
      },
      {
        when: '2019.07 - 2020.01',
        what: 'Monash University',
        where: 'Melbourne, Australia',
        descriptions: [
          'Visiting Research Student, <a href="https://ialab.it.monash.edu/" target="_blank">Immersive Analytics Lab</a>',
          'Advised by <a href="https://marvl.infotech.monash.edu/~dwyer/" target="_blank">Prof. Tim Dwyer</a> and <a href="https://users.monash.edu/~marriott/shadowfax/" target="_blank">Prof. Kim Marriott</a>',
        ],
      },
      {
        when: '2018.04 - 2018.09',
        what: 'JD Finance',
        where: 'Beijing, China',
        descriptions: [
          'Research Intern, <a href="https://icity.jd.com/" target="_blank">Urban Computing Business Unit</a>',
          'Advised by <a href="http://urban-computing.com/yuzheng" target="_blank">Prof. Yu Zheng</a> and <a href="https://scholar.google.com.hk/citations?user=r0rRxncAAAAJ&hl=en" target="_blank">Dr. Jie Bao</a>',
        ],
      },
    ],
    teaching: [
      {
        when: '',
        descriptions: [
          '<b>Data Visualization Techniques</b> (PG), School of Software Tecnology, Zhejiang University',
          '<b>Large Language Models: Principles and Techniques</b> (PG), School of Software Tecnology, Zhejiang University',
          '<b>Introduction to Data Visualization</b> (UG, co-teach), College of Computer Science, Zhejiang University',
          '<b>Cross-Media Data Visualization</b> (UG, co-teach), College of Computer Science, Zhejiang University',
        ],
      },
    ],
    awards: [
      {
        when: '2020',
        what: 'National Scholarship',
        where: 'Ministry of Education, P.R.C.',
      },
      {
        when: '2019',
        what: 'National Scholarship',
        where: 'Ministry of Education, P.R.C.',
      },
      {
        when: '2019',
        what: 'Luzengyong CAD&CG High Technology Award, Third Prize',
        where: 'State Key Lab of CAD&CG',
      },
      {
        when: '2018',
        what: 'MSRA PhD Fellowship Nomination Award',
        where: 'Microsoft Research Asia',
      },
    ],
    services: [
      {
        when: 'Journals',
        descriptions: [
          'Young Advisory Board Member, <a href="https://www.sciencedirect.com/journal/visual-informatics" target="_blank">Visual Informatics</a>',
        ],
      },
      {
        when: 'Session Chairs',
        descriptions: [
          'AI & Visual Analytics, <a href="https://pacificvis.github.io/pvis2024/" target="_blank">PacificVis 2024</a>',
          'GeoVis session, <a href="https://ieeevis.org/year/2023/welcome" target="_blank">IEEE VIS 2023</a>',
          'Application I session, <a href="https://chinavis.org/2023/" target="_blank">ChinaVis 2023</a>',
        ],
      },
      {
        when: 'PC Members',
        descriptions: [
          '<a href="https://ieeevis.org/year/2025/welcome" target="_blank">IEEE VIS 2023-2025</a>',
          '<a href="https://chinavis.org/2024/" target="_blank">ChinaVis 2022-2024</a>',
          'Computer Graphics International 2023-2026',
          'ICHEC 2025',
          'CCF CAD&CG 2026',
        ],
      },
    ],
  },
  zh: {
    education: [
      {
        when: '2021',
        what: '计算机科学与技术，博士学位',
        where: '<a href="http://www.zju.edu.cn" target="_blank">浙江大学</a>',
        descriptions: [
          '<span class="italic">城市地理空间可视决策</span>',
          '<span>导师：<a href="http://www.ycwu.org" target="_blank">巫英才教授</a></span>',
        ],
      },
      {
        when: '2016',
        what: '计算机科学与技术，学士学位',
        where: '<a href="http://www.sdu.edu.cn" target="_blank">山东大学</a>',
        descriptions: ['泰山学堂计算机取向（教育部基础学科拔尖学生培养计划）'],
      },
    ],
    employment: [
      {
        when: '2023.03 - ',
        what: '浙江大学软件学院',
        where: '浙江宁波',
        descriptions: ['“百人计划”研究员，博士生导师'],
      },
      {
        when: '2022.01 - 2023.02',
        what: '微软亚洲研究院',
        where: '北京',
        descriptions: [
          '<a href="https://www.microsoft.com/en-us/research/group/data-knowledge-intelligence/" target="_blank">数据、知识、智能（DKI）组</a>研究员',
        ],
      },
      {
        when: '2020.05 - 2020.12',
        what: '之江实验室',
        where: '浙江杭州',
        descriptions: [
          '<a href="https://en.zhejianglab.com/">融合智能研究中心</a>研究实习生',
          '由<a href="http://www.ycwu.org" target="_blank">巫英才教授</a>和<a href="http://www.cad.zju.edu.cn/home/chenwei/" target="_blank">陈为教授</a>联合指导',
        ],
      },
      {
        when: '2019.07 - 2020.01',
        what: '蒙纳士大学',
        where: '澳大利亚墨尔本',
        descriptions: [
          '<a href="https://ialab.it.monash.edu/" target="_blank">沉浸式分析实验室（Immersive Analytics Lab）</a>访问学生',
          '由<a href="https://marvl.infotech.monash.edu/~dwyer/" target="_blank"> Tim Dwyer 教授</a>和<a href="https://users.monash.edu/~marriott/shadowfax/" target="_blank"> Kim Marriott 教授</a>联合指导',
        ],
      },
      {
        when: '2018.04 - 2018.09',
        what: '京东金融',
        where: '北京',
        descriptions: [
          ' <a href="https://icity.jd.com/" target="_blank">智能城市事业部</a>研究实习生',
          '由<a href="http://urban-computing.com/yuzheng" target="_blank">郑宇教授</a> and <a href="https://scholar.google.com.hk/citations?user=r0rRxncAAAAJ&hl=en" target="_blank">鲍捷博士</a>联合指导',
        ],
      },
    ],
    teaching: [
      {
        when: '',
        descriptions: [
          '<b>数据可视化技术</b>（研究生），浙江大学软件学院',
          '<b>大语言模型原理与技术</b>（研究生），浙江大学软件学院',
          '<b>数据可视化导论</b>（本科生，联合教学），浙江大学计算机科学与技术学院',
          '<b>跨媒体数据可视化</b>（本科生，联合教学），浙江大学计算机科学与技术学院',
        ],
      },
    ],
    awards: [
      {
        when: '2020',
        what: '国家奖学金',
        where: '教育部',
      },
      {
        when: '2019',
        what: '国家奖学金',
        where: '教育部',
      },
      {
        when: '2019',
        what: '陆增镛 CAD&CG 高科技奖三等奖',
        where: '计算机辅助设计与图形系统全国重点实验室',
      },
      {
        when: '2018',
        what: '微软亚洲研究院博士生奖学金提名',
        where: '微软亚洲研究院',
      },
    ],
    services: [
      {
        when: '期刊',
        descriptions: [
          '青年编委, <a href="https://www.sciencedirect.com/journal/visual-informatics" target="_blank">Visual Informatics</a>',
        ],
      },
      {
        when: '分论坛主持',
        descriptions: [
          'AI & Visual Analytics, <a href="https://pacificvis.github.io/pvis2024/" target="_blank">IEEE PacificVis 2024</a>',
          'GeoVis session, <a href="https://ieeevis.org/year/2023/welcome" target="_blank">IEEE VIS 2023</a>',
          'Application I session, <a href="https://chinavis.org/2023/" target="_blank">ChinaVis 2023</a>',
        ],
      },
      {
        when: '程序委员会委员',
        descriptions: [
          '<a href="https://ieeevis.org/year/2025/welcome" target="_blank">IEEE VIS 2023-2025</a>',
          '<a href="https://chinavis.org/2024/" target="_blank">ChinaVis 2022-2024</a>',
        ],
      },
    ],
  },
}

export function useVita() {
  const locale = useLocale()
  return createMemo(() => vita[locale()])
}
