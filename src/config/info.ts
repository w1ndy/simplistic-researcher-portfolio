import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faXTwitter,
  faGoogle,
  faUnsplash,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'Di Weng',
  description:
    'Di Weng (翁荻) is a tenure-track assistant professor at School of Software Technology, Zhejiang University. His research interest lies in information visualization and visual analytics, focusing on interactive data transformation and spatiotemporal data analysis.',
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
  bio: `👋 Hi, I'm Di Weng (<img style="display: inline-block; height: 1.1rem" src="/img/cn_name.avif" alt="翁荻" />), a tenure-track assistant professor (ZJU 100 Young Professor) at <a href="http://www.cst.zju.edu.cn/" target="_blank">School of Software Technology, Zhejiang University</a>. I'm also a faculty member of <a href="https://zjuidg.org" target="_blank">Interactive Data Group</a> led by <a href="http://www.ycwu.org/" target="_blank">Prof. Yingcai Wu</a> at <a href="http://www.cad.zju.edu.cn/" target="_blank">State Key Lab of CAD&amp;CG, Zhejiang University</a>. My research interest lies in information visualization and visual analytics, focusing on <u>interactive data transformation and spatiotemporal data visual analysis</u>. I've published <u>over 20 peer-reviewed papers</u> in top (CCF-A) computer science venues and served as <u>program committee members</u> for IEEE VIS 2023-2024, ChinaVis 2022-2024, <u>session chairs</u> for IEEE VIS 2023 and IEEE PacificVis 2024, as well as reviewers for many journals and conferences.`,
  footnote: `This site was based on <a href="https://github.com/w1ndy/simplistic-researcher-portfolio" target="_blank">this theme</a> and powered by Solid.js and Cloudflare Pages.`,
}
