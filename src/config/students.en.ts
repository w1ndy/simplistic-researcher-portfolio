import { Student } from '~/types/student'

export default {
  notes:
    '*: co-advised with <a href="http://www.ycwu.org" target="_blank">Prof. Yingcai Wu</a>.',
  phd: {
    current: [
      {
        name: 'Shuhan Liu',
        coadvised: true,
        description: 'time series visual analytics',
      },
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
        description: 'interactive data transformation',
      },
      {
        name: 'Zihan Xu',
        coadvised: true,
        description: 'time series visual analytics',
      },
    ],
  },
  master: {
    current: [
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
        name: 'Jie Yu',
        description: 'urban visual analytics',
      },
      {
        name: 'Xiaodan Miao',
        description: 'urban visual analytics',
      },
      {
        name: 'Jiabin Xu',
        coadvised: true,
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
    past: [
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
      {
        name: 'Sina A',
      },
    ],
  },
} as {
  notes: string
  phd: { current: Student[]; past?: Student[] }
  master: { current: Student[]; past?: Student[] }
  undergraduates: { current: Student[]; past?: Student[] }
}
