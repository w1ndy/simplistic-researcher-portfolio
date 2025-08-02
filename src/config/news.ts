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
      date: 'Jul 31, 2025',
      content:
        'Our paper "ViseGPT: Towards Better Alignment of LLM-generated Data Wrangling Scripts and User Prompts" has been accepted by ACM UIST 2025. Congrats to Jiajun and Xinyu!',
    },
    {
      date: 'Mar 3, 2025',
      content:
        'Our paper "HYPNOS: Interactive Data Lineage Tracing for Data Transformation Scripts" has been accepted by IEEE TVCG. Congrats to Xiwen!',
    },
    {
      date: 'Jan 17, 2025',
      content:
        'Three papers from our team has been accepted by ACM CHI 2025. Congrats to Shuhan, Yanwei and Yunfan!',
    },
  ],
  zh: [
    {
      date: '2023 年 3 月 6 日 - 置顶',
      content: `我已加入浙江大学软件学院担任“百人计划”研究员。我们团队正在招收<b class="red-text">有积极学术追求的博士和硕士研究生！</b> 如果你对可视分析、人机交互方向感兴趣，请给我发邮件并附上简历。`,
    },
    {
      date: '2025 年 7 月 31 日',
      content:
        '我们的论文 "ViseGPT: Towards Better Alignment of LLM-generated Data Wrangling Scripts and User Prompts" 已被 ACM UIST 2025 接收。祝贺家骏和昕宇！',
    },
    {
      date: '2025 年 3 月 3 日',
      content:
        '我们的论文 "HYPNOS: Interactive Data Lineage Tracing for Data Transformation Scripts" 已被 IEEE TVCG 接收。祝贺西文！',
    },
    {
      date: '2025 年 1 月 17 日',
      content: '我们的三篇论文已被 ACM CHI 2025 接收。祝贺书含、彦玮和云帆！',
    },
  ],
}

export function useNews() {
  const locale = useLocale()
  return createMemo(() => news[locale()])
}
