import { createMemo } from 'solid-js'
import { Locale, useLocale } from './locale'

export interface Student {
  name: string
  coadvised?: boolean
  description?: string
}

const students: Record<
  Locale,
  {
    notes: string
    phd: Record<string, Student[]>
    master: Record<string, Student[]>
  }
> = {
  en: {
    notes:
      '*: co-advised with <a href="http://www.ycwu.org" target="_blank">Prof. Yingcai Wu</a>.',
    phd: {
      '2021': [
        {
          name: 'Shuhan Liu',
          coadvised: true,
        },
      ],
      '2023': [
        {
          name: 'Lingyu Meng',
          coadvised: true,
        },
        {
          name: 'Zhongsu Luo',
          coadvised: true,
        },
      ],
      '2024': [
        {
          name: 'Yangtian Liu',
          coadvised: true,
        },
        {
          name: 'Zhenning Chen',
        },
        {
          name: 'Yunfan Zhou',
          coadvised: true,
        },
        {
          name: 'Zihan Xu',
          coadvised: true,
        },
      ],
      '2025': [
        {
          name: 'Jiawen Zhu',
        },
      ],
      '2026': [
        {
          name: 'Yan Miao',
        },
      ],
    },
    master: {
      '2025': [
        {
          name: 'Zhiyu Zhu',
        },
        {
          name: 'Guobin Tu',
        },
        {
          name: 'Yan Gu',
          coadvised: true,
        },
        {
          name: 'Zehao Fan',
          coadvised: true,
        },
        {
          name: 'Hanbei Zhan',
          coadvised: true,
        },
      ],
      '2024': [
        {
          name: 'Jiabin Xu',
        },
        {
          name: 'Qiming Shi',
          coadvised: true,
        },
        {
          name: 'Zelin Li',
        },
        {
          name: 'Kaicheng Shao',
        },
      ],
      '2023': [
        {
          name: 'Jie Yu',
        },
        {
          name: 'Xiaodan Miao',
        },
      ],
      past: [
        {
          name: 'Yanwei Huang',
          coadvised: true,
          description: 'graduated in 2025, pursuing PhD at HKUST',
        },
        {
          name: 'Xinjing Yi',
          coadvised: true,
          description: 'graduated in 2025',
        },
        {
          name: 'Yurun Yang',
          coadvised: true,
          description: 'graduated in 2025',
        },
        {
          name: 'Shifu Chen',
          coadvised: true,
          description:
            'transferred in 2024, pursuing PhD at Zhejiang University',
        },
        {
          name: 'Yuchen Yang',
          coadvised: true,
          description:
            'transferred in 2024, pursuing PhD at Zhejiang University',
        },
      ],
    },
  },
  zh: {
    notes:
      '*：与<a href="http://www.ycwu.org" target="_blank">巫英才教授</a>共同指导。',
    phd: {
      '2021': [
        {
          name: '刘书含',
          coadvised: true,
          description: '时序数据可视分析',
        },
      ],
      '2023': [
        {
          name: '孟令雨',
          coadvised: true,
          description: '时序数据可视分析',
        },
        {
          name: '罗中粟',
          coadvised: true,
          description: '交互式数据治理',
        },
      ],
      '2024': [
        {
          name: '刘阳天',
          coadvised: true,
          description: '时序数据可视分析',
        },
        {
          name: '陈振宁',
          description: '大语言模型可视化',
        },
        {
          name: '周云帆',
          coadvised: true,
          description: '交互式数据治理',
        },
        {
          name: '徐紫菡',
          coadvised: true,
          description: '时序数据可视分析',
        },
      ],
      '2025': [
        {
          name: '朱甲文',
        },
      ],
      '2026': [
        {
          name: '缪延',
          coadvised: true,
        },
      ],
    },
    master: {
      '2025': [
        {
          name: '朱之钰',
        },
        {
          name: '涂国彬',
        },
        {
          name: '顾岩',
          coadvised: true,
        },
        {
          name: '范泽昊',
          coadvised: true,
        },
        {
          name: '詹含蓓',
          coadvised: true,
        },
      ],
      '2024': [
        {
          name: '许嘉斌',
        },
        {
          name: '史启明',
          coadvised: true,
        },
        {
          name: '李泽霖',
        },
        {
          name: '邵楷城',
        },
      ],
      '2023': [
        {
          name: '喻洁',
          description: '城市可视分析',
        },
        {
          name: '苗潇丹',
          description: '城市可视分析',
        },
      ],
      past: [
        {
          name: '伊心静',
          coadvised: true,
          description: '能源可视分析',
        },
        {
          name: '黄彦玮',
          coadvised: true,
          description: '交互式数据治理',
        },
        {
          name: '杨雨润',
          coadvised: true,
          description: '能源可视分析',
        },
        {
          name: '陈时富',
          coadvised: true,
          description: '城市可视分析',
        },
        {
          name: '杨雨辰',
          coadvised: true,
          description: '城市可视分析',
        },
      ],
    },
  },
}

export function useStudents() {
  const locale = useLocale()
  return createMemo(() => students[locale()])
}
