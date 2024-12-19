import { Student } from '~/types/student'

export default {
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
      {
        name: '阿斯娜',
      },
    ],
  },
} as {
  notes: string
  phd: { current: Student[]; past?: Student[] }
  master: { current: Student[]; past?: Student[] }
  undergraduates: { current: Student[]; past?: Student[] }
}
