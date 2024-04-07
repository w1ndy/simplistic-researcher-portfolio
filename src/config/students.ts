export interface Student {
  name: string
  coadvised?: boolean
  description?: string
}

export default {
  notes:
    '*: co-advised with <a href="http://www.ycwu.org" target="_blank">Prof. Yingcai Wu</a>.',
  phd: {
    current: [
      {
        name: 'Shuhan Liu',
        coadvised: true,
        description: 'time series visual analysis',
      },
      {
        name: 'Lingyu Meng',
        coadvised: true,
        description: 'time series visual analysis',
      },
      {
        name: 'Zhongsu Luo',
        coadvised: true,
        description: 'interactive data transformation',
      },
      {
        name: 'Yangtian Liu',
        coadvised: true,
        description: 'time series visual analytics',
      },
      {
        name: 'Zhenning Chen',
        description: 'urban visual analytics',
      },
      {
        name: 'Yunfan Zhou',
        coadvised: true,
        description: 'incoming (fall 2024)',
      },
      {
        name: 'Zihan Xu',
        coadvised: true,
        description: 'incoming (fall 2024)',
      },
    ],
  },
  master: {
    current: [
      {
        name: 'Shifu Chen',
        coadvised: true,
        description: 'trajectory visualization',
      },
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
        name: 'Yuchen Yang',
        coadvised: true,
        description: 'urban visual analytics',
      },
      {
        name: 'Jie Yu',
        description: 'urban visual analytics',
      },
      {
        name: 'Xiaodan Miao',
        description: 'urban visual analytics',
      },
      {
        name: 'Jiabin Xu',
        description: 'incoming (fall 2024)',
      },
      {
        name: 'Zelin Li',
        description: 'incoming (fall 2024)',
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
  },
} as {
  notes: string
  phd: { current: Student[]; past?: Student[] }
  master: { current: Student[]; past?: Student[] }
  undergraduates: { current: Student[]; past?: Student[] }
}
