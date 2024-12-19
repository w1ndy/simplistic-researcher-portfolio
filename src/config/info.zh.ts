import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faXTwitter,
  faGoogle,
  faUnsplash,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: '翁荻',
  affiliations: [
    [
      `<a href="http://www.cst.zju.edu.cn" target="_blank">浙江大学软件学院</a>`,
      '“百人计划”研究员',
    ],
  ],
  address: [
    '浙江省宁波市鄞州区江南路1689号',
    '浙江大学软件学院',
    '教学楼E502办公室',
  ],
  contact: [
    {
      icon: faEnvelope,
      text: 'dweng (at) zju.edu.cn',
    },
    {
      icon: faXTwitter,
      text: `<a href="https://twitter.com/dw_vis" target="_blank">@dw_vis</a>`,
    },
    {
      icon: faGoogle,
      text: `<a href="https://scholar.google.com/citations?user=Yi1KUZcAAAAJ&hl=en" target="_blank">谷歌学术</a>`,
    },
    {
      icon: faGithub,
      text: `<a href="https://github.com/w1ndy" target="_blank">GitHub</a>`,
    },
    {
      icon: faUnsplash,
      text: `<a href="https://unsplash.com/@skies457" target="_blank">Unsplash</a>`,
    },
  ],
  group: `<a href="https://zjuidg.org" target="_blank">浙江大学交互数据团队</a>`,
  bio: `翁荻研究员现任<a href="http://www.cst.zju.edu.cn/" target="_blank">浙江大学软件学院</a>平台“百人计划”研究员、博士生导师。长期从事<b>交互式数据治理与时空大数据可视分析</b>等方面研究，在 IEEE VIS、ACM CHI、IEEE TVCG 等 CCF-A 类期刊和会议上发表论文 20 余篇，被引超过 700 次，并获得 10 项发明专利授权。连续两年担任本领域 CCF-A 类旗舰会议 IEEE VIS 2023-2024 程序委员会委员，并受邀主持 IEEE VIS 2023、ChinaVis 2023、PacificVis 2024 等重要学术会议的地理可视化、可视分析相关分论坛。现任中国图象图形学学会可视化与可视分析专委会委员、中国计算机学会计算机辅助设计与图形学专委会执行委员，以及多个国内外知名期刊/会议审稿人。`,
  footnote: `本网页基于<a href="https://github.com/w1ndy/simplistic-researcher-portfolio" target="_blank">此模板</a>构建，并由 Solid.js 和 Cloudflare Pages 驱动。`,
}
