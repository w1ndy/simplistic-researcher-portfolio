import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faXTwitter,
  faGoogle,
  faUnsplash,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Di Weng',
  affiliations: [
    [
      'Tenure-track Assistant Professor',
      '(ZJU 100 Young Professor)',
      `<a href="http://www.cst.zju.edu.cn" target="_blank">School of Software Technology</a>`,
      `<a href="http://www.zju.edu.cn" target="_blank">Zhejiang University</a>`,
    ],
  ],
  address: [
    'E502, Teaching Building',
    'Zhejiang University',
    '1589 Jiangnan Rd., Ningbo',
    'Zhejiang Province, P.R.China',
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
      text: `<a href="https://scholar.google.com/citations?user=Yi1KUZcAAAAJ&hl=en" target="_blank">Google Scholar</a>`,
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
  group: `<a href="https://zjuidg.org" target="_blank">Interactive Data Group</a>`,
  bio: `Hi, I'm Di Weng (<img style="display: inline-block; height: 1.1rem" src="/img/cn_name.avif" alt="翁荻" />), a tenure-track assistant professor at School of Software Technology, Zhejiang University. My research interest lies in information visualization and visual analytics, focusing on <b>interactive data transformation and spatiotemporal data analysis</b>. I've published over a dozen peer-reviewed papers in prestigious computer science conferences and journals, including IEEE VIS, ACM CHI, IEEE TVCG, etc, and served as program committee members for IEEE VIS 2023, ChinaVis 2022 and 2023, as well as reviewers for many journals and conferences.`,
  footnote: `This theme was inspired by <a href="https://homes.cs.washington.edu/~jheer/" target="_blank">Prof. Jeffrey Heer</a>. The source of this site can be found on <a href="https://github.com/w1ndy/simplistic-researcher-portfolio" target="_blank">GitHub</a>. Last updated: ${BUILD_TIMESTAMP}.`,
}
