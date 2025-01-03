import { createMemo } from 'solid-js'
import { Locale, useLocale } from './locale'

interface News {
  date: string
  content: string
}

const news: Record<Locale, News[]> = {
  en: [
    {
      date: 'Mar 6, 2023 - Pinned',
      content: `I've joined School of Software Technology, Zhejiang University as a full-time tenure-track assistant professor and I'm <b class="red-text">looking for motivated PhD and master students!</b> Please drop me an email if you are interested.`,
    },
    {
      date: 'Jul 16, 2024',
      content:
        'Our paper "Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts" has been accepted by IEEE VIS 2024. Congrats to Zhongsu!',
    },
    {
      date: 'Jun 20, 2024',
      content:
        'Our paper "Towards Better Illegal Chemical Facility Detection with Hazardous Chemicals Transportation Trajectories" has been accepted by ChinaVis 2024. Congrats to Junxiu!',
    },
    {
      date: 'Jun 12, 2024',
      content:
        'Our paper "<a href="https://ieeexplore.ieee.org/document/10553360" target="_blank">Linking Text and Visualizations via Contextual Knowledge Graph</a>" has been accepted by IEEE TVCG. Congrats to Xiwen!',
    },
    {
      date: 'May 6, 2024',
      content:
        'Our paper "<a href="https://arxiv.org/abs/2310.19311" target="_blank">Relation-driven Query of Multiple Time Series</a>" has been accepted by IEEE TVCG. Congrats to Shuhan!',
    },
    {
      date: 'Apr 7, 2024',
      content:
        'I will chair the "AI and Visual Analytics" session at the upcoming <a href="https://pacificvis.github.io/pvis2024/" target="_blank">IEEE PacificVis 2024</a> conference.',
    },
    {
      date: 'Jan 19, 2024',
      content:
        'Our paper "Table Illustrator: Puzzle-based interactive authoring of plain tables" has been accepted by ACM CHI!',
    },
    {
      date: 'Jan 4, 2024',
      content:
        'Our paper "A Deep Spatiotemporal Trajectory Representation Learning Framework for Clustering" has been accepted by IEEE Transactions on Intelligent Transportation Systems!',
    },
  ],
  zh: [
    {
      date: '2023 年 3 月 6 日 - 置顶',
      content: `我已加入浙江大学软件学院担任“百人计划”研究员。我们团队正在招收<b class="red-text">有积极学术追求的博士和硕士研究生！</b> 如果你对可视分析、人机交互方向感兴趣，请给我发邮件并附上简历。`,
    },
    {
      date: '2024 年 7 月 16 日',
      content:
        '我们的论文 "Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts" 已被 IEEE VIS 2024 接收。祝贺中粟！',
    },
    {
      date: '2024 年 6 月 20 日',
      content:
        '我们的论文 "Towards Better Illegal Chemical Facility Detection with Hazardous Chemicals Transportation Trajectories" 已被 ChinaVis 2024 接收。祝贺俊修！',
    },
    {
      date: '2024 年 6 月 12 日',
      content:
        '我们的论文 "<a href="https://ieeexplore.ieee.org/document/10553360" target="_blank">Linking Text and Visualizations via Contextual Knowledge Graph</a>" 已被 IEEE TVCG 接收。祝贺西文！',
    },
    {
      date: '2024 年 5 月 6 日',
      content:
        '我们的论文 "<a href="https://arxiv.org/abs/2310.19311" target="_blank">Relation-driven Query of Multiple Time Series</a>" 已被 IEEE TVCG 接收。祝贺书含！',
    },
    {
      date: '2024 年 4 月 7 日',
      content:
        '我将在即将举行的 <a href="https://pacificvis.github.io/pvis2024/" target="_blank">IEEE PacificVis 2024</a> 会议上主持 AI and Visual Analytics 分论坛。',
    },
    {
      date: '2024 年 1 月 19 日',
      content:
        '我们的论文 "Table Illustrator: Puzzle-based interactive authoring of plain tables" 已被 ACM CHI 2024 接收。祝贺彦玮！',
    },
    {
      date: '2024 年 1 月 4 日',
      content:
        '我们的论文 "A Deep Spatiotemporal Trajectory Representation Learning Framework for Clustering" 已被 IEEE Transactions on Intelligent Transportation Systems 接收！',
    },
  ],
}

export function useNews() {
  const locale = useLocale()
  return createMemo(() => news[locale()])
}
