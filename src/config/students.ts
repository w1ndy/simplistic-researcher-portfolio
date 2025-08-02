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
    undergraduates: Record<string, Student[]>
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
          description: 'time series visual analytics',
        },
      ],
      '2023': [
        {
          name: 'Lingyu Meng',
          coadvised: true,
          description: 'time series visual analytics',
        },
        {
          name: 'Zhongsu Luo',
          coadvised: true,
          description: 'interactive data transformation',
        },
      ],
      '2024': [
        {
          name: 'Yangtian Liu',
          coadvised: true,
          description: 'time series visual analytics',
        },
        {
          name: 'Zhenning Chen',
          description: 'visualization for LLMs',
        },
        {
          name: 'Yunfan Zhou',
          coadvised: true,
          description: 'interactive data transformation',
        },
        {
          name: 'Zihan Xu',
          coadvised: true,
          description: 'time series visual analytics',
        },
      ],
      '2025': [
        {
          name: 'Jiawen Zhu',
        },
      ],
    },
    master: {
      '2024': [
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
      ],
      '2023': [
        {
          name: 'Jiabin Xu',
        },
        {
          name: 'Qiming Shi',
          coadvised: true,
        },
        {
          name: 'Jiawen Zhu',
        },
        {
          name: 'Zelin Li',
        },
        {
          name: 'Kaicheng Shao',
        },
      ],
      '2022': [
        {
          name: 'Jie Yu',
          description: 'urban visual analytics',
        },
        {
          name: 'Xiaodan Miao',
          description: 'urban visual analytics',
        },
      ],
      past: [
        {
          name: 'Xinjing Yi',
          coadvised: true,
          description: 'energy visual analytics',
        },
        {
          name: 'Yanwei Huang',
          coadvised: true,
          description: 'interactive data transformation',
        },
        {
          name: 'Yurun Yang',
          coadvised: true,
          description: 'energy visual analytics',
        },
        {
          name: 'Shifu Chen',
          coadvised: true,
          description: 'urban visual analytics',
        },
        {
          name: 'Yuchen Yang',
          coadvised: true,
          description: 'urban visual analytics',
        },
      ],
    },
    undergraduates: {
      current: [
        {
          name: 'Jiajun Zhu',
        },
        {
          name: 'Yan Miao',
        },
      ],
      past: [
        {
          name: 'Sina A',
        },
      ],
    },
  },
  zh: {
    notes:
      '*：与<a href="http://www.ycwu.org" target="_blank">巫英才教授</a>共同指导。',
    phd: {
      current: [
        {
          name: '刘书含',
          coadvised: true,
          description: '时序数据可视分析',
        },
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
        {
          name: '刘阳天',
          coadvised: true,
          description: '时序数据可视分析',
        },
        {
          name: '陈振宁',
          description: '地理数据可视分析',
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
    },
    master: {
      current: [
        {
          name: '伊心静',
          coadvised: true,
        },
        {
          name: '黄彦玮',
          coadvised: true,
        },
        {
          name: '杨雨润',
          coadvised: true,
        },
        {
          name: '喻洁',
        },
        {
          name: '苗潇丹',
        },
        {
          name: '许嘉斌',
          coadvised: true,
        },
        {
          name: '史启明',
          coadvised: true,
        },
        {
          name: '朱甲文',
        },
        {
          name: '李泽霖',
        },
        {
          name: '卲楷城',
        },
      ],
      past: [
        {
          name: '陈时富',
          coadvised: true,
        },
        {
          name: '杨雨辰',
          coadvised: true,
        },
      ],
    },
    undergraduates: {
      current: [
        {
          name: '朱家骏',
        },
        {
          name: '缪延',
        },
      ],
      past: [
        {
          name: '阿斯娜',
        },
      ],
    },
  },
}

export function useStudents() {
  const locale = useLocale()
  return createMemo(() => students[locale()])
}
