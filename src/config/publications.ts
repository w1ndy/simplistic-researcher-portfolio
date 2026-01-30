import { Paper } from '../types/paper'
import { FeaturedCategory } from './featured'
import { PaperTopic } from './filters'

export default [
  {
    year: '2026',
    papers: [
      {
        image: '/img/papers/tseditor.avif',
        authors: [
          'Zihan Xu',
          'Shuhan Liu',
          'Kaicheng Shao',
          'Yuanzhe Jin',
          'Xumeng Wang',
          'Zikun Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'TSEditor: Interactive Time Series Editing for Privacy Preservation',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2026',
        links: {},
        topics: [PaperTopic.DataWrangling, PaperTopic.TimeSeriesVisualAnalysis],
        featured_category: FeaturedCategory.ACM_CHI_2026,
        abstract:
          'Publishing time series datasets raises substantial privacy concerns, as the underlying patterns (e.g., trends, values) can lead to the disclosure of individual identification. Mitigating these concerns remains challenging due to difficulties in pinpointing specific privacy-leaking patterns and protecting them without significantly compromising the analytical utility of the published data. Existing methods remain vulnerable to identity attacks utilizing diverse temporal patterns and may compromise data utility for subsequent analytical tasks. To address these limitations, we collaborated with domain experts to summarize a taxonomy of privacy risks in time series data and developed TSEditor, an interactive editing system. TSEditor integrates coordinated views for multi-perspective analysis of privacy risks and introduces six editing operations for targeted modifications, providing visual feedback. We demonstrate the effectiveness and usability of TSEditor through two case studies, an expert interview, a model evaluation, and a user study.',
      },
      {
        image: '/img/papers/cerebra.avif',
        authors: [
          'Yunfan Zhou',
          'Qiming Shi',
          'Zhongsu Luo',
          'Xiwen Cai',
          'Yanwei Huang',
          'Dae Hyun Kim',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Cerebra: Aligning Implicit Knowledge in Interactive SQL Authoring',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2026',
        links: {},
        topics: [PaperTopic.DataWrangling, PaperTopic.HumanLLM],
        featured_category: FeaturedCategory.ACM_CHI_2026,
        abstract:
          "LLM-driven tools have significantly lowered barriers to writing SQL queries. However, user instructions are often underspecified, assuming the model understands implicit knowledge, such as dataset schemas, domain conventions, and task-specific requirements, that isn't explicitly provided. This results in frequently erroneous scripts that require users to repeatedly clarify their intent. Additionally, users struggle to validate generated scripts because they cannot verify whether the model correctly applied implicit knowledge. We present Cerebra, an interactive NL-to-SQL tool that aligns implicit knowledge between users and LLMs during SQL authoring. Cerebra automatically retrieves implicit knowledge from historical SQL scripts based on user instructions, presents this knowledge in an interactive tree view for code review, and supports iterative refinement to improve generated scripts. To evaluate the effectiveness and usability of Cerebra, we conducted a user study with 16 participants, demonstrating its improved support for customized SQL authoring. The source code of Cerebra is available at https://github.com/zjuidg/CHI26-Cerebra.",
      },
      {
        image: '/img/papers/trajgram.avif',
        authors: [
          'Shifu Chen',
          'Xiaodan Miao',
          'Zikun Deng',
          'Dazhen Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Dazhen Deng', 'Di Weng'],
        title:
          'A Declarative Grammar for Interactive Trajectory Visualization: Interaction as First-Class Component',
        venue: 'PacificVis 2026',
        links: {},
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.VisualizationAuthoring,
        ],
        abstract:
          'Trajectory visualizations play a crucial role in urban computing, supporting tasks from analyzing road networks and vehicle movements to informing transport policy. However, creating such visualizations face usability and flexibility limitations in trajectory visualization scenarios: limited usability due to insufficient trajectory-specific specialization, and limited flexibility due to tightly-coupled interactions that are not treated as first-class components. To address these challenges, we first conduct a systematic review of prior work and define a comprehensive design space for interactive trajectory visualization across three key dimensions: transformation, display, and interaction. We then present TrajGram, a declarative grammar built upon this design space that streamlines the creation of diverse interactive trajectory visualizations. TrajGram enables rapid prototyping with rich interactions grounded in real-world traffic analysis needs, while remaining extensible for complex scenarios. We demonstrate the usability and extensiveness of TrajGram through two use cases created using our tool.',
      },
      {
        image: '/img/papers/trajcurer.avif',
        authors: [
          'Xiaodan Miao',
          'Sitong Pan',
          'Shifu Chen',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'TrajectoryCurer: Visual Analysis of Trajectory Data Quality',
        venue: 'PacificVis 2026',
        links: {},
        topics: [PaperTopic.GeospatialVisualAnalysis, PaperTopic.DataWrangling],
        abstract:
          'Trajectory data records spatiotemporal information and related attributes of moving objects. High-quality trajectory data can accurately reflect their behavior patterns, providing a reliable basis for traffic management, logistics optimization, and smart city planning. However, existing research on trajectory data quality management is still insufficient, lacking interactive tools for addressing data quality issues, making it inconvenient for users to explore and resolve quality problems in trajectory datasets. To address this, this paper presents TrajectoryCurer, an interactive visualization system designed for trajectory data quality management. Through interviews with domain experts and the synthesis of various preprocessing operations from 30 relevant articles on trajectory data visualization and management, we construct a taxonomy of trajectory data quality issues. Based on this framework, we design a multi-level visualization approach that encompasses trajectory-level, trajectory point-level views, along with map visualization and tabular data presentation, enabling users to observe and address data quality issues across multiple dimensions through an integrated visual interface. We demonstrate the effectiveness and usability of TrajectoryCurer through two usage scenarios.',
      },
      {
        image: '/img/papers/rcinvestigator.avif',
        authors: [
          'Shuhan Liu',
          'Yunfan Zhou',
          'Jue Zhang',
          'Shandan Zhou',
          'Weiwei Cui',
          'Qingwei Lin',
          'Thomas Moscibroda',
          'Haidong Zhang',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'RCInvestigator: Towards Better Investigation of Anomaly Root Causes in Cloud Computing Systems',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2026 (PacificVis 2026 TVCG Journal Track)',
        links: {
          pdf: '/pdf/rcinvestigator.pdf',
          appendix: '/pdf/rcinvestigator_appendix.pdf',
        },
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        featured_category: FeaturedCategory.IEEE_TVCG_2026,
        abstract:
          'Root cause analysis (RCA) is critical for maintaining the availability and efficiency of cloud computing systems. However, identifying root causes from the large-scale, high-dimensional monitoring data generated by these complex environments is a significant challenge. Current approaches often rely on time-consuming manual analysis to ensure flexibility and reliability, while recent automated methods lack the crucial insights provided by domain experts. To bridge this gap, we propose RCInvestigator, a visual analytics system that facilitates interactive root cause investigation by establishing a tight collaboration between human experts and machine analysis. Our approach addresses three key challenges: a) modeling databases for the root cause investigation, b) inferring root causes from large-scale time series, and c) building comprehensible investigation results. We demonstrate the effectiveness and utility of RCInvestigator through two real-world case studies, which received positive feedback from domain experts.',
      },
      {
        image: '/img/papers/visualke.avif',
        authors: [
          'Zhenning Chen',
          'Hanbei Zhan',
          'Yanwei Huang',
          'Xin Wu',
          'Dazhen Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'KEditVis: A Visual Analytics System for Knowledge Editing of Large Language Models',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), 2026 (PacificVis 2026 TVCG Journal Track)',
        links: {
          pdf: '/pdf/visualke.pdf',
          appendix: '/pdf/visualke_appendix.pdf',
        },
        topics: [PaperTopic.HumanLLM],
        featured_category: FeaturedCategory.IEEE_TVCG_2026,
        abstract:
          'Large Language Models (LLMs) demonstrate exceptional capabilities in factual question answering, yet they sometimes provide incorrect responses. To address this issue, knowledge editing techniques have emerged as effective methods for correcting factual information in LLMs. However, typical knowledge editing workflows struggle with identifying the optimal set of model layers for editing and rely on summary indicators that provide insufficient guidance. This lack of transparency hinders effective comparison and identification of optimal editing strategies. In this paper, we present KEditVis, a novel visual analytics system designed to assist users in gaining a deeper understanding of knowledge editing through interactive visualizations, improving editing outcomes, and discovering valuable insights for the future development of knowledge editing algorithms. With KEditVis, users can select appropriate layers as the editing target, explore the reasons behind ineffective edits, and perform more targeted and effective edits. Our evaluation, including usage scenarios, expert interviews, and a user study, validates the effectiveness and usability of the system.',
      },
    ],
  },
  {
    year: '2025',
    papers: [
      {
        image: '/img/papers/visualtsc.avif',
        authors: ['Yuchen Yang', 'Jie Yu', 'Zihan Xu', 'Di Weng'],
        corresponding_authors: ['Di Weng'],
        title:
          'A Visual Analytics Approach to Traffic Signal Control Optimization for Multiple Road Intersections',
        venue:
          'Journal of Computer-Aided Design & Computer Graphics (Early Access), 2025',
        links: {
          paper: 'https://www.jcad.cn/article/doi/10.3724/SP.J.1089.2025-00260',
          'cn pdf': '/pdf/visualtsc.pdf',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Traffic lights have been widely used to alleviate traffic congestion and improve traffic efficiency. However, due to the complex variability of traffic conditions and interactions between intersections, formulating ef-fective traffic signal control strategies for multiple intersections is highly challenging. Aiming at issues in existing optimization methods which are adaptive and fixed-time, this paper proposes a visual analytics method for multi-intersection traffic signal control optimization. Through collaborative interviews with experts, the paper extracts the problems and demands related to identifying and optimizing inefficient traf-fic signal control strategies, and accordingly constructs a novel visual analytics system—VisualTSC. The implemented trajectory mining process, which integrates the extraction of inefficient intersections and generation of optimization strategies, assists experts to understand the traffic efficiency of intersections and provides feasible alternative control strategies via simulation combined with the visual analytics sys-tem. VisualTSC employs a multi-level contour map to visualize intersection relationships, and offers tabu-lar and trajectory views to support optimal strategies decision-making. The effectiveness of VisualTSC is verified via two application scenarios using real-world datasets and follow-up expert interviews, where experts reproduced the cases and provided positive qualitative evaluations on its performance.',
      },
      {
        image: '/img/papers/chronodeck.avif',
        authors: [
          'Lingyu Meng',
          'Shuhan Liu',
          'Keyi Yang',
          'Jiabin Xu',
          'Zikun Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'ChronoDeck: A Visual Analytics Approach for Hierarchical Time Series Analysis',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 12, pp. 10488-10502, 2025',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2025.3602273',
          pdf: '/pdf/chronodeck.pdf',
          code: 'https://github.com/ChronoDeck/ChronoDeck',
        },
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        featured_category: FeaturedCategory.IEEE_TVCG_2025,
        abstract:
          'Hierarchical time series data comprises a collection of time series aggregated at multiple levels based on categorical, geographical, or physical constraints, the analysis of which aids analysts across various domains like retail, finance, and energy, in gaining valuable insights and making informed decisions. However, existing interactive exploratory analysis approaches for hierarchical time series data fall short in analyzing time series across different aggregation levels and supporting more complex analytical tasks beyond common ones like summarize and compare. These limitations motivate us to develop a new visual analytics approach. We first generalize a taxonomy to delineate various tasks in hierarchical time series analysis, derived from literature survey and expert interviews. Based on this taxonomy, we develop ChronoDeck, an interactive system that incorporates a multi-column hierarchical time series visualization for implementing various analytical tasks and distilling insights from the data. ChronoDeck visualizes each aggregation level of hierarchical time series with a combination of coordinated dimensionality reduction and small multiples visualizations, alongside interactions including highlight, align, filter, and select, assisting users in the visualization, comparison, and transformation of hierarchical time series, as well as identifying the entities of interest. The effectiveness of ChronoDeck is demonstrated by case studies on three real-world datasets and expert interviews.',
      },
      {
        image: '/img/papers/hypnos.avif',
        authors: [
          'Xiwen Cai',
          'Xiaodong Ge',
          'Kai Xiong',
          'Shuainan Ye',
          'Di Weng',
          'Ke Xu',
          'Datong Wei',
          'Jiang Long',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng', 'Ke Xu'],
        title:
          'HYPNOS: Interactive Data Lineage Tracing for Data Transformation Scripts',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 10, pp. 7632-7646, 2025',
        links: {
          paper: 'https://ieeexplore.ieee.org/abstract/document/10930714',
          pdf: '/pdf/hypnos.pdf',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2025,
        topics: [PaperTopic.DataWrangling],
        abstract:
          'In a formal data analysis workflow, data validation is a necessary step that helps data analysts verify the quality of the data and ensure the reliability of the results. Data analysts usually need to validate the result when encountering an unexpected result, such as an abnormal record in a table. In order to understand how a specific record is derived, they would backtrace it in the pipeline step by step via checking the code lines, exposing the intermediate tables, and finding the data records from which it is derived. However, manually reviewing code and backtracing data requires certain expertise, while inspecting the traced records in multiple tables and interpreting their relationships is tedious. In this work, we propose HYPNOS, a visualization system that supports interactive data lineage tracing for data transformation scripts. HYPNOS uses a lineage module for parsing and adapting code to capture both schema-level and instance-level data lineage from data transformation scripts. Then, it provides users with a lineage view for obtaining an overview of the data transformation process and a detail view for tracing instance-level data lineage and inspecting details. HYPNOS reveals different levels of data relationships and helps users with data lineage tracing. We demonstrate the usability and effectiveness of HYPNOS through a use case, interviews of four expert users, and a user study.',
      },
      {
        image: '/img/papers/visegpt.avif',
        authors: [
          'Jiajun Zhu',
          'Xinyu Cheng',
          'Zhongsu Luo',
          'Yunfan Zhou',
          'Xinhuan Shu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Xinhuan Shu', 'Di Weng'],
        title:
          'ViseGPT: Towards Better Alignment of LLM-generated Data Wrangling Scripts and User Prompts',
        venue:
          'ACM Symposium on User Interface Software and Technology (UIST), no. 147, pp. 1-16, 2025',
        links: {
          paper: 'https://dl.acm.org/doi/10.1145/3746059.3747689',
          pdf: '/pdf/visegpt.pdf',
          video: 'https://www.youtube.com/watch?v=zT1rYn0vf2o',
        },
        topics: [PaperTopic.DataWrangling, PaperTopic.HumanLLM],
        featured_category: FeaturedCategory.ACM_UIST_2025,
        abstract:
          "Large language models (LLMs) enable the rapid generation of data-wrangling scripts based on natural language instructions, but these scripts may not fully adhere to user-specified requirements, necessitating careful inspection and iterative refinement. Existing approaches primarily assist users in understanding script logic and spotting potential issues themselves, rather than providing direct validation of correctness. To enhance debugging efficiency and optimize the user experience, we develop ViseGPT, a tool that automatically extracts constraints from user prompts to generate comprehensive test cases for verifying script reliability. The test results are then transformed into a tailored Gantt chart, allowing users to intuitively assess alignment with semantic requirements and iteratively refine their scripts. Our design decisions are informed by a formative study (N=8) that explores user practices and challenges. We further evaluate the effectiveness and usability of ViseGPT through a user study (N=18). Results indicate that ViseGPT significantly improves debugging efficiency for LLM-generated data-wrangling scripts, enhances users' ability to detect and correct issues, and streamlines the workflow experience.",
      },
      {
        image: '/img/papers/kg.avif',
        authors: [
          'Xiwen Cai',
          'Di Weng',
          'Taotao Fu',
          'Siwei Fu',
          'Yongheng Wang',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Linking Text and Visualizations via Contextual Knowledge Graph',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 9, pp. 4667-4681, 2025',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10553360',
          pdf: '/pdf/tvl.pdf',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
        topics: [PaperTopic.VisualizationAuthoring],
        abstract:
          'The integration of visualizations and text is commonly found in data news, analytical reports, and interactive documents. For example, financial articles are presented along with interactive charts to show the changes in stock prices on Yahoo Finance. Visualizations enhance the perception of facts in the text while the text reveals insights of visual representation. However, effectively combining text and visualizations is challenging and tedious, which usually involves advanced programming skills. This paper proposes a semi-automatic pipeline that builds links between text and visualization. To resolve the relationship between text and visualizations, we present a method which structures a visualization and the underlying data as a contextual knowledge graph, based on which key phrases in the text are extracted, grouped, and mapped with visual elements. To support flexible customization of text-visualization links, our pipeline incorporates user knowledge to revise the links in a mixed-initiative manner. To demonstrate the usefulness and the versatility of our method, we replicate prior studies or cases in crafting interactive word-sized visualizations, annotating visualizations, and creating text-chart interactions based on a prototype system. We carry out two preliminary model tests and a user study and the results and user feedbacks suggest our method is effective.',
      },
      {
        image: '/img/papers/pvesight.avif',
        authors: [
          'Yurun Yang',
          'Xinjing Yi',
          'Yingqiang Jin',
          'Sen Li',
          'Kang Ma',
          'Shuhan Liu',
          'Dazhen Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'PVeSight: Dimensionality reduction-based anomaly detection and visual analysis of photovoltaic strings',
        venue: 'Visual Informatics, vol. 9, no. 3, 100243, 2025',
        links: {
          paper: 'https://doi.org/10.1016/j.visinf.2025.100243',
          pdf: '/pdf/pvesight.pdf',
        },
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        abstract:
          'Efficient and accurate detection of anomalies in photovoltaic (PV) strings is essential for ensuring the normal operation of PV power stations. Most existing studies focus on developing automated anomaly detection models based on temporal abnormalities in PV strings. However, since analyzing anomalies often requires domain knowledge, existing automated methods have significant limitations in assisting experts to understand the causes and impact of these anomalies. In close collaboration with domain experts, this work has summarized the specific user requirements for PV string anomaly detection and designed PVeSight, an interactive visual analysis system to help experts discover and analyze anomalies in PV strings. We use dimensionality reduction techniques to generate string pattern map. These maps are used for anomaly detection, classifying anomalies, comparative analysis between strings, and hierarchical analysis under inverters and combiner boxes. This helps experts trace the causes of anomalies and acquire valuable insights into anomalous PV strings. Through case studies and expert evaluation, we verified the usability and effectiveness of PVeSight for PV string anomaly detection.',
      },
      {
        image: '/img/papers/relaq.avif',
        authors: [
          'Shuhan Liu',
          'Yuan Tian',
          'Zikun Deng',
          'Weiwei Cui',
          'Haidong Zhang',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Relation-driven Query of Multiple Time Series',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 8, pp. 4210-4225, 2025',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10521861',
          pdf: '/pdf/relaq.pdf',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2025,
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        abstract:
          'Querying time series based on their relations is a crucial part of multiple time series analysis. By retrieving and understanding time series relations, analysts can easily detect anomalies and validate hypotheses in complex time series datasets. However, current relation extraction approaches, including knowledge- and data-driven ones, tend to be laborious and do not support heterogeneous relations. By conducting a formative study with 11 experts, we concluded six time series relations, including correlation, causality, similarity, lag, arithmetic, and meta, and summarized three pain points in querying time series involving these relations. We proposed RelaQ, an interactive system that supports the time series query via relation specifications. RelaQ allows users to intuitively specify heterogeneous relations when querying multiple time series, understand the query results based on a scalable, multi-level visualization, and explore possible relations beyond the existing queries. RelaQ is evaluated with two cases and a user study with 12 participants, showing promising effectiveness and usability.',
      },
      {
        image: '/img/papers/scroller.avif',
        authors: [
          'Renzhong Li',
          'Weiwei Cui',
          'Yuchen Yang',
          'Xinyu Mao',
          'Di Weng',
          'Haidong Zhang',
          'Yingcai Wu',
        ],
        title:
          'Scroller: A WYSIWYG System for Creating Expressive Scrollytelling',
        venue: 'ChinaVis 2025',
        links: {
          pdf: 'https://chinavis.org/2025/papers/Scroller%20A%20WYSIWYG%20System%20for%20Creating%20Expressive%20Scrollytelling.pdf',
        },
        topics: [PaperTopic.VisualizationAuthoring],
        abstract:
          'Scrollytelling, which tightly integrates dynamic content and narrative text, has become popular for its effective conveyance of complex insights. However, the complex transition animations driven by scrolling make it challenging for journalists and designers to create scrollytelling articles. To address this challenge, there are two key sub-steps: 1) designing an interactive creative workflow to help designers produce expressive scrollytelling, and 2) determining which type of system would make such a workflow more efficient for designers. For the first sub-step, we propose a creative workflow that treats text as the backbone of the article and gradually adds complex charts and animations. By integrating existing chart and animation design spaces with interactive tools, we have developed an interactive process for creating expressive scrollytelling. For the second sub-step, we analyzed existing creation systems and categorized them into static keyframe-based and what you see is what you get (WYSIWYG) methods. Based on the WYSIWYG approach, we designed the creation tool, Scroller. It includes a MiniMap view to display changes in charts and other elements during scrolling and a Bi-LSTM model to revise the design of elements in the article. By comparing Scroller with a static keyframe-based baseline, we demonstrate that WYSIWYG-based tools offer significant advantages in scrollytelling creation. We also conducted case studies and an expert interview to show the usability and efficiency of Scroller.',
      },
      {
        image: '/img/papers/geoanimation.avif',
        authors: ['Jie Yu', 'Zhenning Chen', 'Di Weng', 'Yingcai Wu'],
        corresponding_authors: ['Di Weng'],
        title: 'GeoAnimation: A Grammar for Animated Geographic Visualization',
        venue: 'ChinaVis 2025',
        links: {
          pdf: 'https://chinavis.org/2025/papers/GeoAnimation%20A%20Grammar%20for%20Animated%20Geographic%20Visualization.pdf',
        },
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.VisualizationAuthoring,
        ],
        abstract:
          'In recent years, animated geographical visualization has arisen as an intuitive narrative medium for presenting and disseminating geographic information, with extensive applications across various domains. However, existing approaches to creating geographic animations often face trade-offs among learning curve, ease of use, the complexity of output videos and other limitations. To further lower the barrier for producing geographic animations, we first conducted a survey of 50 geographic data animations and synthesized a design space that outlines the key elements in geographic animation presentation. Based on this, we designed a declarative grammar targeted at geographic animations. Then we developed an interactive tool called GeoAnimation to enable animators to create geographic animations efficiently and effectively. Finally, we verified the usefulness of our tool through two use cases and expert interviews conducted with two experts. The results indicate that GeoAnimation enables animators to quickly and conveniently create satisfactory geographic animations, effectively reducing the barriers, tedium, and inconvenience associated with creating such animations.',
      },
      {
        image: '/img/papers/codelin.avif',
        authors: [
          'Xiwen Cai',
          'Kai Xiong',
          'Zhongsu Luo',
          'Di Weng',
          'Shuainan Ye',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'CodeLin: An in situ visualization method for understanding data transformation scripts',
        venue: 'Visual Informatics, vol. 9, no. 2, 100233, 2025',
        links: {
          paper: 'https://doi.org/10.1016/j.visinf.2025.03.002',
        },
        topics: [PaperTopic.DataWrangling],
        abstract:
          'Understanding data transformation scripts is an essential task for data analysts who write code to process data. However, this can be challenging, especially when encountering unfamiliar scripts. Comments can help users understand data transformation code, but well-written comments are not always present. Visualization methods have been proposed to help analysts understand data transformations, but they generally require a separate view, which may distract users and entail efforts for connecting visualizations and code. In this work, we explore the use of in situ program visualization to help data analysts understand data transformation scripts. We present CodeLin, a new visualization method that combines word-sized glyphs for presenting transformation semantics and a lineage graph for presenting data lineage in an in situ manner. Through a use case, code pattern demonstrations, and a preliminary user study, we demonstrate the effectiveness and usability of CodeLin. We further discuss how visualization can help users understand data transformation code.',
      },
      {
        image: '/img/papers/dkpvva.avif',
        authors: [
          'Xinjing Yi',
          'Yurun Yang',
          'Yin Song',
          'Baozhu Zhou',
          'Cheng Li',
          'Shuhan Liu',
          'Dazhen Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'A Domain Knowledge-Driven Visual Analytics System for Photovoltaic Power Time Series Forecasting',
        venue: 'Journal of Visualization, vol. 28, pp. 895-915, 2025',
        links: {
          paper: 'https://link.springer.com/article/10.1007/s12650-025-01067-4',
          pdf: '/pdf/pvva.pdf',
        },
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        abstract:
          "Accurate forecasting of photovoltaic (PV) power generation plays a critical role in optimizing production schedules for PV power stations and facilitating efficient maintenance and repair of PV equipment. Deep time series forecasting models have emerged as the leading approach in the field of time series prediction. However, the intricate architectures and numerous parameters in these models frequently lead to forecasts that conflict with established domain knowledge. Furthermore, domain experts face significant challenges in leveraging their specialized knowledge to enhance the predictive performance of these models. Additionally, when dealing with PV strings exhibiting diverse characteristics, it becomes particularly challenging to identify discrepancies in the model's predictive accuracy across different strings and pinpointing its performance flaws. To tackle the issues, we propose a domain knowledge-driven forecasting method that combines the deep time series forecasting model with decision tree regression. Empirical evaluations demonstrate that our proposed method yields substantial improvements in forecasting accuracy compared to existing approaches. Furthermore, we have developed and implemented a comprehensive visual analytics system. This system aids experts in forecasting PV string power generation trends by employing multi-perspective model evaluation techniques to assess the rationality of forecasts. It also incorporates domain knowledge through an interactive decision tree construction process, thereby enhancing the model's predictive capabilities. The efficacy of our proposed system is substantiated through in-depth case studies and rigorous user evaluations.",
      },
      {
        image: '/img/papers/structvizor.avif',
        authors: [
          'Yanwei Huang',
          'Yan Miao',
          'Di Weng',
          'Adam Perer',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'StructVizor: Interactive profiling of semi-structured textual data',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2025',
        links: {
          paper: 'https://dl.acm.org/doi/10.1145/3706598.3713484',
          pdf: '/pdf/structvizor.pdf',
        },
        featured_category: FeaturedCategory.ACM_CHI_2025,
        topics: [PaperTopic.DataWrangling, PaperTopic.HumanLLM],
        abstract:
          "Data profiling plays a critical role in understanding the structure of complex datasets and supporting numerous downstream tasks, such as social media analytics and financial fraud detection. While existing research predominantly focuses on structured data formats, a substantial portion of semi-structured textual data still requires ad-hoc and arduous manual profiling to extract and comprehend its internal structures. In this work, we propose StructVizor, an interactive profiling system that facilitates sensemaking and transformation of semi-structured textual data. Our tool mainly addresses two challenges: a) extracting and visualizing the diverse structural patterns within data, such as how information is organized or related, and b) enabling users to efficiently perform various wrangling operations on textual data. Through automatic data parsing and structure mining, StructVizor enables visual analytics of structural patterns, while incorporating novel interactions to enable profile-based data wrangling. A comparative user study involving 12 participants demonstrates the system's usability and its effectiveness in supporting exploratory data analysis and transformation tasks.",
      },
      {
        image: '/img/papers/ridgebuilder.avif',
        authors: [
          'Shuhan Liu',
          'Yangtian Liu',
          'Junxin Li',
          'Yanwei Huang',
          'Yue Shangguan',
          'Zikun Deng',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'RidgeBuilder: Interactive Authoring of Expressive Ridgeline Plots',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2025',
        links: {
          paper: 'https://dl.acm.org/doi/10.1145/3706598.3714209',
          pdf: '/pdf/ridgebuilder.pdf',
          code: 'https://github.com/RidgeBuilder/RidgeBuilder',
          demo: 'https://ridgebuilder.github.io/RidgeBuilder/',
        },
        featured_category: FeaturedCategory.ACM_CHI_2025,
        topics: [PaperTopic.VisualizationAuthoring],
        abstract:
          "Ridgeline plots are frequently employed to visualize the evolution or distributions of multiple series with a pile of overlapping line, area, or bar charts, highlighting the peak patterns. While traditionally viewed as small multiple visualizations, their ridge-like patterns have increasingly attracted graphic designers to create appealing customized ridgeline plots. However, many tools only support creating basic ridgeline plots and overlook their diverse layouts and styles. This paper introduces a comprehensive design space for ridgeline plots, focusing on their varied layouts and expressive styles. We present RidgeBuilder, an intuitive tool for creating expressive ridgeline plots with customizable layouts and styles. In particular, we summarize three goals for refining the layout of ridgeline plots and propose an optimization method. We assess RidgeBuilder's usability and usefulness through a reproduction study and evaluate the layout optimization algorithm through anonymized questionnaires. The effectiveness is demonstrated with a gallery of ridgeline plots created by RidgeBuilder.",
      },
      {
        image: '/img/papers/xavier.avif',
        authors: [
          'Yunfan Zhou',
          'Xiwen Cai',
          'Qiming Shi',
          'Yanwei Huang',
          'Haotian Li',
          'Huamin Qu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Xavier: Toward Better Coding Assistance in Authoring Tabular Data Wrangling Scripts',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), 2025',
        links: {
          paper: 'https://dl.acm.org/doi/10.1145/3706598.3714239',
          pdf: '/pdf/xavier.pdf',
          code: 'https://github.com/CHI25-Xavier/Xavier',
        },
        featured_category: FeaturedCategory.ACM_CHI_2025,
        topics: [PaperTopic.DataWrangling, PaperTopic.HumanLLM],
        abstract:
          "Data analysts frequently employ code completion tools in writing custom scripts to tackle complex tabular data wrangling tasks. However, existing tools do not sufficiently link the data contexts such as schemas and values with the code being edited. This not only leads to poor code suggestions, but also frequent interruptions in coding processes as users need additional code to locate and understand relevant data. We introduce Xavier, a tool designed to enhance data wrangling script authoring in computational notebooks. Xavier maintains users' awareness of data contexts while providing data-aware code suggestions. It automatically highlights the most relevant data based on the user's code, integrates both code and data contexts for more accurate suggestions, and instantly previews data transformation results for easy verification. To evaluate the effectiveness and usability of Xavier, we conducted a user study with 16 data analysts, showing its potential to streamline data wrangling scripts authoring.",
      },
      {
        image: '/img/papers/icfinder.avif',
        authors: [
          'Junxiu Tang',
          'Huimin Ren',
          'Zikun Deng',
          'Di Weng',
          'Tan Tang',
          'Lingyun Yu',
          'Jie Bao',
          'Yu Zheng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Towards Better Illegal Chemical Facility Detection with Hazardous Chemicals Transportation Trajectories',
        venue:
          'Journal of Visualization, vol. 28, pp. 535-551, 2025 (also accepted by ChinaVis 2024)',
        links: {
          paper: 'https://link.springer.com/article/10.1007/s12650-025-01055-8',
          pdf: '/pdf/icfinder.pdf',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          "Unregistered illegal facilities that do not qualify for chemical production pose substantial threats to human lives and the environment. For human safety and environmental protection, the government needs to figure out the illegal facilities and shut them down. A new, convenient, and affordable approach to detect such facilities is to analyze the trajectories of hazardous chemicals transportation (HCT) trucks. The existing study leverages a machine learning model to predict how likely a place is illegal. However, such a model lacks interpretability and cannot provide actionable justifications required for decision-making. In this study, we collaborate with HCT experts and propose an interactive visual analytics approach to explore the suspicious stay points, analyze abnormal HCT truck behaviors, and figure out unregistered illegal chemical facilities. First, experts receive an initial result from the detection model for reference. Then, they are supported to check the detailed information of the suspicious places with three coordinated views. We apply a visualization that tightly encodes the geo-referred movement activities along the timeline to present the HCT truck behaviors, which can help experts finally verify their conclusions. We demonstrate the effectiveness of the system with two case studies on real-world data. We also received experts' positive feedback from an expert interview.",
      },
      {
        image: '/img/papers/ferry.avif',
        authors: [
          'Zhongsu Luo',
          'Kai Xiong',
          'Jiajun Zhu',
          'Ran Chen',
          'Xinhuan Shu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Ferry: Toward Better Understanding of Input/Output Space for Data Wrangling Scripts',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 31, no. 1, pp. 1202-1212, 2025 (also accepted by IEEE VIS 2024)',
        links: {
          paper: 'https://ieeexplore.ieee.org/abstract/document/10670464',
          pdf: '/pdf/ferry.pdf',
        },
        featured_category: FeaturedCategory.IEEE_VIS_2024,
        topics: [PaperTopic.DataWrangling],
        abstract:
          "Understanding the input and output of data wrangling scripts is crucial for various tasks like debugging code and onboarding new data. However, existing research on script understanding primarily focuses on revealing the process of data transformations, lacking the ability to analyze the potential scope, i.e., the space of script inputs and outputs. Meanwhile, constructing input/output space during script analysis is challenging, as the wrangling scripts could be semantically complex and diverse, and the association between different data objects is intricate. To facilitate data workers in understanding the input and output space of wrangling scripts, we summarize ten types of constraints to express table space and build a mapping between data transformations and these constraints to guide the construction of the input/output for individual transformations. Then, we propose a constraint generation model for integrating table constraints across multiple transformations. Based on the model, we develop Ferry, an interactive system that extracts and visualizes the data constraints describing the input and output space of data wrangling scripts, thereby enabling users to grasp the high-level semantics of complex scripts and locate the origins of faulty data transformations. Besides, Ferry provides example input and output data to assist users in interpreting the extracted constraints and checking and resolving the conflicts between these constraints and any uploaded dataset. Ferry's effectiveness and usability are evaluated through two usage scenarios and two case studies, including understanding, debugging, and checking both single and multiple scripts, with and without executable data. Furthermore, an illustrative application is presented to demonstrate Ferry's flexibility.",
      },
    ],
  },
  {
    year: '2024',
    papers: [
      {
        image: '/img/papers/table_illustrator.avif',
        authors: [
          'Yanwei Huang',
          'Yurun Yang',
          'Xinhuan Shu',
          'Ran Chen',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'Table Illustrator: Puzzle-based interactive authoring of plain tables',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), no. 186, pp. 1-18, 2024',
        links: {
          paper: 'https://dl.acm.org/doi/10.1145/3613904.3642415',
          pdf: '/pdf/table_illustrator.pdf',
          video: 'https://www.youtube.com/watch?v=OrFKL5-Fc1Y',
          code: 'https://github.com/Ais0n/tableshop',
          demo: 'https://yhuang.top/tableshop/',
        },
        featured_category: FeaturedCategory.ACM_CHI_2024,
        topics: [PaperTopic.DataWrangling],
        abstract:
          "Plain tables excel at displaying data details and are widely used in data presentation, often polished to an elaborate appearance for readability in many scenarios. However, existing authoring tools fail to provide both flexible and efficient support for altering the table layout and styles, motivating us to develop an intuitive and swift tool for table prototyping. To this end, we contribute Table Illustrator, a table authoring system taking a novel visual metaphor, puzzle, as the primary interaction unit. Through combinations and configurations on puzzles, the system enables rapid table construction and supports a diverse range of table layouts and styles. The tool design is informed by practical challenges and requirements from interviews with 10 table practitioners and a structured design space based on an analysis of over 2,500 real-world tables. User studies showed that Table Illustrator achieved comparable performance to Microsoft Excel while reducing users' completion time and perceived workload.",
      },
      {
        image: '/img/papers/dstc.avif',
        authors: [
          'Chao Wang',
          'Jiahui Huang',
          'Yongheng Wang',
          'Zhengxuan Lin',
          'Xiongnan Jin',
          'Xing Jin',
          'Di Weng',
          'Yingcai Wu',
        ],
        title:
          'A Deep Spatiotemporal Trajectory Representation Learning Framework for Clustering',
        venue:
          'IEEE Transactions on Intelligent Transportation Systems (ITS), vol. 25, no. 7, pp. 7687-7700, 2024',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10403544/',
          pdf: '/pdf/dstc.pdf',
        },
        featured_category: FeaturedCategory.IEEE_ITS_2024,
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Learning trajectory representations is essential in many Location Based Services (LBS) applications. Most traditional methods extract trajectory representations based on manually defined features, while deep learning-based methods can reduce part of the human effort. We propose a Deep Spatiotemporal Trajectory Clustering (DSTC) framework to tackle the Spatiotemporal Trajectory Representation Learning towards the Clustering-friendly space (STRLC) problem. Solving the STRLC problem is not a trivial task because: (1) Defining a uniform token size for datasets with an uneven density of trajectory data is challenging. (2) Measuring the similarity between trajectories spanning time zero in the time dimension is a problem to be solved. (3) It requires first learning a vector that can represent the overall characteristics of spatiotemporal trajectories and then mapping it to a more suitable space for clustering. To tackle these challenges, we first utilize the density-based clustering method to define tokens representing the trajectory points automatically. Then, we use polar coordinates to represent the temporal dimension of trajectories. Additionally, we improve the learned trajectory representations in a clustering-oriented latent space end to end. Experiments conducted on benchmark datasets demonstrate that DSTC achieves better accuracy than existing methods. Moreover, the representations learned from spatiotemporal trajectory data in the real world can be used to identify popular routes during the day.',
      },
      {
        image: '/img/papers/nl2rigel.avif',
        authors: [
          'Yanwei Huang',
          'Yunfan Zhou',
          'Ran Chen',
          'Changhao Pan',
          'Xinhuan Shu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Interactive Table Synthesis with Natural Language',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 9, pp. 6130-6145, 2024',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2023.3329120',
          pdf: '/pdf/nl2rigel.pdf',
          appendix: '/pdf/nl2rigel_appendix.pdf',
          video: 'https://youtu.be/qjjKAykyDZU',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
        topics: [PaperTopic.DataWrangling, PaperTopic.HumanLLM],
        abstract:
          "Tables are a ubiquitous data format for insight communication. However, transforming data into consumable tabular views remains a challenging and time-consuming task. To lower the barrier of such a task, research efforts have been devoted to developing interactive approaches for data transformation, but many approaches still presume that their users have considerable knowledge of various data transformation concepts and functions. In this study, we leverage natural language (NL) as the primary interaction modality to improve the accessibility of average users to performing complex data transformation and facilitate intuitive table generation and editing. Designing an NL-driven data transformation approach introduces two challenges: 1) NL-driven synthesis of interpretable pipelines and 2) incremental refinement of synthesized tables. To address these challenges, we present NL2Rigel, an interactive tool that assists users in synthesizing and improving tables from semi-structured text with NL instructions. Based on a large language model and prompting techniques, NL2Rigel can interpret the given NL instructions into a table synthesis pipeline corresponding to Rigel specifications, a declarative language for tabular data transformation. An intuitive interface is designed to visualize the synthesis pipeline and the generated tables, helping users understand the transformation process and refine the results efficiently with targeted NL instructions. The comprehensiveness of NL2Rigel is demonstrated with an example gallery, and we further confirmed NL2Rigel's usability with a comparative user study by showing that the task completion time with NL2Rigel is significantly shorter than that with the original version of Rigel with comparable completion rates.",
      },
      {
        image: '/img/papers/geonetverse.avif',
        authors: [
          'Zikun Deng',
          'Shifu Chen',
          'Xiao Xie',
          'Guodao Sun',
          'Mingliang Xu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng', 'Yingcai Wu'],
        title: 'Multilevel Visual Analysis of Aggregate Geo-Networks',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 7, pp. 3135-3150, 2024',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3229953',
          pdf: '/pdf/geonetverse.pdf',
          video: 'https://youtu.be/-GXWCpf9oqY?si=akBGTiyq-LYt0o0K',
        },
        featured_category: FeaturedCategory.IEEE_TVCG_2024,
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Numerous patterns found in urban phenomena, such as air pollution and human mobility, can be characterized as many directed geospatial networks (geo-networks) that represent spreading processes in urban space. These geo-networks can be analyzed from multiple levels, ranging from the macro-level of summarizing all geo-networks, meso-level of comparing or summarizing parts of geo-networks, and micro-level of inspecting individual geo-networks. Most of the existing visualizations cannot support multilevel analysis well. These techniques work by: 1) showing geo-networks separately with multiple maps leads to heavy context switching costs between different maps; 2) summarizing all geo-networks into a single network can lead to the loss of individual information; 3) drawing all geo-networks onto one map might suffer from the visual scalability issue in distinguishing individual geo-networks. In this study, we propose GeoNetverse, a novel visualization technique for analyzing aggregate geo-networks from multiple levels. Inspired by metro maps, GeoNetverse balances the overview and details of the geo-networks by placing the edges shared between geo-networks in a stacked manner. To enhance the visual scalability, GeoNetverse incorporates a level-of-detail rendering, a progressive crossing minimization, and a coloring technique. A set of evaluations was conducted to evaluate GeoNetverse from multiple perspectives.',
      },
      {
        image: '/img/papers/jsoncurer.avif',
        authors: [
          'Kai Xiong',
          'Xinyi Xu',
          'Siwei Fu',
          'Di Weng',
          'Yongheng Wang',
          'Yingcai Wu',
        ],
        title:
          'JsonCurer: Data Quality Management for JSON Based on an Aggregated Schema',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 6, pp. 3008-3021, 2024 (PacificVis 2024 TVCG Journal Track)',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/10499847/',
          pdf: '/pdf/jsoncurer.pdf',
          code: 'https://github.com/changevis/JsonCurer',
        },
        featured_category: FeaturedCategory.IEEE_PACIFICVIS_2024,
        topics: [PaperTopic.DataWrangling],
        abstract:
          'High-quality data is critical to deriving useful and reliable information. However, real-world data often contains quality issues undermining the value of the derived information. Most existing research on data quality management focuses on tabular data, leaving semi-structured data under-exploited. Due to the schema-less and hierarchical features of semi-structured data, discovering and fixing quality issues is challenging and time-consuming. To address the challenge, this paper presents JsonCurer, an interactive visualization system to assist with data quality management in the context of JSON data. To have an overview of quality issues, we first construct a taxonomy based on interviews with data practitioners and a review of 119 real-world JSON files. Then we highlight a schema visualization that presents structural information, statistical features, and quality issues of JSON data. Based on a similarity-based aggregation technique, the visualization depicts the entire JSON data with a concise tree, where summary visualizations are given above each node, and quality issues are illustrated using Bubble Sets across nodes. We evaluate the effectiveness and usability of JsonCurer with two case studies. One is in the domain of data analysis while the other concerns quality assurance in MongoDB documents.',
      },
      {
        image: '/img/papers/geochron.avif',
        authors: [
          'Zikun Deng',
          'Shifu Chen',
          'Tobias Schreck',
          'Dazhen Deng',
          'Tan Tang',
          'Mingliang Xu',
          'Di Weng',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Visualizing Large-Scale Spatial Time Series with GeoChron',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 30, no. 1, pp. 1194-1204, 2024 (also accepted by IEEE VIS 2023)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2023.3327162',
          pdf: '/pdf/geochron.pdf',
          video: 'https://youtu.be/jc7aeiszPQM?si=SeRLpmTIg4z7GDFN',
        },
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.TimeSeriesVisualAnalysis,
        ],
        abstract:
          'In geo-related fields such as urban informatics, atmospheric science, and geography, large-scale spatial time (ST) series (i.e., geo-referred time series) are collected for monitoring and understanding important spatiotemporal phenomena. ST series visualization is an effective means of understanding the data and reviewing spatiotemporal phenomena, which is a prerequisite for in-depth data analysis. However, visualizing these series is challenging due to their large scales, inherent dynamics, and spatiotemporal nature. In this study, we introduce the notion of patterns of evolution in ST series. Each evolution pattern is characterized by 1) a set of ST series that are close in space and 2) a time period when the trends of these ST series are correlated. We then leverage Storyline techniques by considering an analogy between evolution patterns and sessions, and finally design a novel visualization called GeoChron, which is capable of visualizing large-scale ST series in an evolution pattern-aware and narrative-preserving manner. GeoChron includes a mining framework to extract evolution patterns and two-level visualizations to enhance its visual scalability. We evaluate GeoChron with two case studies, an informal user study, an ablation study, parameter analysis, and running time analysis.',
      },
    ],
  },
  {
    year: '2023',
    papers: [
      {
        image: '/img/papers/neighviz.avif',
        authors: [
          'Yue Yu',
          'Yifang Wang',
          'Qisen Yang',
          'Di Weng',
          'Yongjun Zhang',
          'Xiaogang Wu',
          'Yingcai Wu',
          'Huamin Qu',
        ],
        title:
          'NeighViz: Towards Better Understanding of Neighborhood Effects on Social Groups with Spatial Data',
        venue:
          '9th Symposium on Visualization in Data Science (VDS @ IEEE VIS 2023), pp. 1-5, 2023',
        links: {
          paper:
            'https://www.computer.org/csdl/proceedings-article/vds/2023/302000a001/1SYJieOzwOs',
          pdf: '/pdf/neighviz.pdf',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Understanding how local environments influence individual behaviors, such as voting patterns or suicidal tendencies, is crucial in social science to reveal and reduce spatial disparities and promote social well-being. With the increasing availability of large-scale individual-level census data, new analytical opportunities arise for social scientists to explore human behaviors (e.g., political engagement) among social groups at a fine-grained level. However, traditional statistical methods mostly focus on global, aggregated spatial correlations, which are limited to understanding and comparing the impact of local environments (e.g., neighborhoods) on human behaviors among social groups. In this study, we introduce a new analytical framework for analyzing multi-variate neighborhood effects between social groups. We then propose NeighViz, an interactive visual analytics system that helps social scientists explore, understand, and verify the influence of neighborhood effects on human behaviors. Finally, we use a case study to illustrate the effectiveness and usability of our system.',
      },
      {
        image: '/img/papers/decom.avif',
        authors: [
          'Fangkai Yang',
          'Jue Zhang',
          'Lu Wang',
          'Bo Qiao',
          'Di Weng',
          'Xiaoting Qin',
          'Gregory Weber',
          'Durgesh Nandini Das',
          'Srinivasan Rakhunathan',
          'Ranganathan Srikanth',
          'Qingwei Lin',
          'Dongmei Zhang',
        ],
        title:
          'Contextual Self-attentive Temporal Point Process for Physical Decommissioning Prediction of Cloud Assets',
        venue:
          'ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), pp 467-477, 2023',
        links: {
          paper: 'https://doi.org/10.1145/3447548.3467232',
        },
        topics: [],
        abstract:
          'The vertices in many graphs are weighted unequally in real scenarios, but the previous studies on the maximum independent set (MIS) ignore the weights of vertices. Therefore, the weight of an MIS may not necessarily be the largest. In this paper, we study the problem of maximum weighted independent set (MWIS) that is defined as the set of independent vertices with the largest weight. Since it is intractable to deliver the exact solution for large graphs, we design a reducing and tie-breaking framework to compute a near-maximum weighted independent set. The reduction rules are critical to reduce the search space for both exact and greedy algorithms as they determine the vertices that are definitely (or not) in the MWIS while preserving the correctness of solutions. We devise a set of novel reductions including low-degree reductions and high-degree reductions for general weighted graphs. Extensive experimental studies over real graphs confirm that our proposed method outperforms the state-of-the-arts significantly in terms of both effectiveness and efficiency.',
      },
      {
        image: '/img/papers/geocamera.avif',
        authors: [
          'Wenchao Li',
          'Zhan Wang',
          'Yun Wang',
          'Di Weng',
          'Liwenhan Xie',
          'Siming Chen',
          'Haidong Zhang',
          'Huamin Qu',
        ],
        title:
          'GeoCamera: Telling Stories in Geographic Visualizations with Camera Movements',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), no. 170, pp. 1-15, 2023',
        links: {
          paper: 'https://doi.org/10.1145/3544548.3581470',
          pdf: '/pdf/geocamera.pdf',
          video: 'https://youtu.be/SFBmBSHjKpA?si=jzOIhS7yADsegrh3',
        },
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.VisualizationAuthoring,
        ],
        abstract:
          'In geographic data videos, camera movements are frequently used and combined to present information from multiple perspectives. However, creating and editing camera movements requires significant time and professional skills. This work aims to lower the barrier of crafting diverse camera movements for geographic data videos. First, we analyze a corpus of 66 geographic data videos and derive a design space of camera movements with a dimension for geospatial targets and one for narrative purposes. Based on the design space, we propose a set of adaptive camera shots and further develop an interactive tool called GeoCamera. This interactive tool allows users to flexibly design camera movements for geographic visualizations. We verify the expressiveness of our tool through case studies and evaluate its usability with a user study. The participants find that the tool facilitates the design of camera movements.',
      },
      {
        image: '/img/papers/ecoalvis.avif',
        authors: [
          'Shuhan Liu',
          'Di Weng',
          'Yuan Tian',
          'Zikun Deng',
          'Haoran Xu',
          'Xiangyu Zhu',
          'Honglei Yin',
          'Xianyuan Zhan',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title:
          'ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 29, no. 1, pp. 1091-1101, 2023 (also accepted by IEEE VIS 2022)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3209430',
          pdf: '/pdf/ecoalvis.pdf',
          video: 'https://youtu.be/XsqdJd2y6Z0?si=56smTEjYuX706YgF',
          code: 'https://github.com/ECoalVis/ECoalVis',
        },
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        abstract:
          'Improving the efficiency of coal-fired power plants has numerous benefits. The control strategy is one of the major factors affecting such efficiency. However, due to the complex and dynamic environment inside the power plants, it is hard to extract and evaluate control strategies and their cascading impact across massive sensors. Existing manual and data-driven approaches cannot well support the analysis of control strategies because these approaches are time-consuming and do not scale with the complexity of the power plant systems. Three challenges were identified: a) interactive extraction of control strategies from large-scale dynamic sensor data, b) intuitive visual representation of cascading impact among the sensors in a complex power plant system, and c) time-lag-aware analysis of the impact of control strategies on electricity generation efficiency. By collaborating with energy domain experts, we addressed these challenges with ECoalVis, a novel interactive system for experts to visually analyze the control strategies of coal-fired power plants extracted from historical sensor data. The effectiveness of the proposed system is evaluated with two usage scenarios on a real-world historical dataset and received positive feedback from experts.',
      },
      {
        image: '/img/papers/rigel.avif',
        authors: [
          'Ran Chen',
          'Di Weng',
          'Yanwei Huang',
          'Xinhuan Shu',
          'Jiayi Zhou',
          'Guodao Sun',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng'],
        title: 'Rigel: Transforming Tabular Data by Declarative Mapping',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 29, no. 1, pp. 128-138, 2023 (also accepted by IEEE VIS 2022)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2022.3209385',
          pdf: '/pdf/rigel.pdf',
          appendix: 'https://observablehq.com/@rigel/appendix',
          video: 'https://youtu.be/fvM_W-1n7N4?si=2BoDyGzgakzS9BB9',
          code: 'https://github.com/rigel-js',
          demo: 'https://rigel-system.github.io/rigel-system/',
        },
        topics: [PaperTopic.DataWrangling],
        abstract:
          "We present Rigel, an interactive system for rapid transformation of tabular data. Rigel implements a new declarative mapping approach that formulates the data transformation procedure as direct mappings from data to the row, column, and cell channels of the target table. To construct such mappings, Rigel allows users to directly drag data attributes from input data to these three channels and indirectly drag or type data values in a spreadsheet, and possible mappings that do not contradict these interactions are recommended to achieve efficient and straightforward data transformation. The recommended mappings are generated by enumerating and composing data variables based on the row, column, and cell channels, thereby revealing the possibility of alternative tabular forms and facilitating open-ended exploration in many data transformation scenarios, such as designing tables for presentation. In contrast to existing systems that transform data by composing operations (like transposing and pivoting), Rigel requires less prior knowledge on these operations, and constructing tables from the channels is more efficient and results in less ambiguity than generating operation sequences as done by the traditional by-example approaches. User study results demonstrated that Rigel is significantly less demanding in terms of time and interactions and suits more scenarios compared to the state-of-the-art by-example approach. A gallery of diverse transformation cases is also presented to show the potential of Rigel's expressiveness.",
      },
      {
        image: '/img/papers/urbansurvey.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Shuhan Liu',
          'Yuan Tian',
          'Mingliang Xu',
          'Yingcai Wu',
        ],
        corresponding_authors: ['Di Weng', 'Yingcai Wu'],
        title:
          'A survey of urban visual analytics: Advances and future directions',
        venue: 'Computational Visual Media, vol. 9, pp 3-39, 2023',
        links: {
          paper: 'https://doi.org/10.1007/s41095-022-0275-7',
          pdf: '/pdf/urbansurvey.pdf',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Developing effective visual analytics systems demands care in characterization of domain problems and integration of visualization techniques and computational models. Urban visual analytics has already achieved remarkable success in tackling urban problems and providing fundamental services for smart cities. To promote further academic research and assist the development of industrial urban analytics systems, we comprehensively review urban visual analytics studies from four perspectives. In particular, we identify 8 urban domains and 22 types of popular visualization, analyze 7 types of computational method, and categorize existing systems into 4 types based on their integration of visualization techniques and computational models. We conclude with potential research directions and opportunities.',
      },
      {
        image: '/img/papers/ct3.avif',
        authors: ['Zikun Deng', 'Di Weng', 'Yingcai Wu'],
        corresponding_authors: ['Di Weng'],
        title:
          'You are experienced: interactive tour planning with crowdsourcing tour data from web',
        venue: 'Journal of Visualization, vol. 26, pp. 385-401, 2023',
        links: {
          paper: 'https://doi.org/10.1007/s12650-022-00884-1',
          pdf: '/pdf/ct3.pdf',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          "Planning an ideal tour schedule is a tedious process, where the attractions to visit and the order of visits need to be carefully determined. In this paper, we propose a novel interactive approach for tour planning. We first extract prior tourists' experiences from the crowdsourcing tour data on the Web using frequent substring mining. We then design and implement a planning tool equipped with interactive visualizations, enabling users to learn the extracted experiences and plan their own tours. Our approach is evaluated with two usage scenarios on real-world tour data in two cities. Compared with previous methods, our approach strikes a balance between efficiency and reliability. On the one hand, we support the interactive manipulation of attraction sequence (i.e., multiple attractions at a time), thereby ensuring efficiency. On the other hand, we keep humans in the loop of the tour planning process via interactive visualizations. This paper shows the value of tour data published by tourists on the Web for personalized tour planning.",
      },
    ],
  },
  {
    year: '2022',
    papers: [
      {
        image: '/img/papers/nebula.avif',
        authors: [
          'Ran Chen',
          'Xinhuan Shu',
          'Jiahui Chen',
          'Di Weng',
          'Junxiu Tang',
          'Siwei Fu',
          'Yingcai Wu',
        ],
        title: 'Nebula: A Coordinating Grammar of Graphics',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 12, pp. 4127-4140, 2022',
        links: {
          paper: 'https://ieeexplore.ieee.org/document/9417674',
          pdf: '/pdf/nebula.pdf',
          appendix: 'https://nebula-vis.github.io/examples',
          video: 'https://youtu.be/oMgO0BVX8rY?si=jCEGo6GaLzW_jhax',
        },
        topics: [PaperTopic.VisualizationAuthoring],
        abstract:
          "In multiple coordinated views (MCVs), visualizations across views update their content in response to users' interactions in other views. Interactive systems provide direct manipulation to create coordination between views, but are restricted to limited types of predefined templates. By contrast, textual specification languages enable flexible coordination but expose technical burden. To bridge the gap, we contribute Nebula, a grammar based on natural language for coordinating visualizations in MCVs. The grammar design is informed by a novel framework based on a systematic review of 176 coordinations from existing theories and applications, which describes coordination by demonstration, i.e., how coordination is performed by users. With the framework, Nebula specification formalizes coordination as a composition of user- and coordination-triggered interactions in origin and destination views, respectively, along with potential data transformation between the interactions. We evaluate Nebula by demonstrating its expressiveness with a gallery of diverse examples and analyzing its usability on cognitive dimensions.",
      },
      {
        image: '/img/papers/viscas.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Yuxuan Liang',
          'Jie Bao',
          'Yu Zheng',
          'Tobias Schreck',
          'Mingliang Xu',
          'Yingcai Wu',
        ],
        title: 'Visual Cascade Analytics of Large-Scale Spatiotemporal Data',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 6, pp. 2486-2499, 2022',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2021.3071387',
          pdf: '/pdf/viscas.pdf',
          video: 'https://youtu.be/IVSf0BNRC_c?si=rKDdtSy0wPJFIXPJ',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Many spatiotemporal events can be viewed as contagions. These events implicitly propagate across space and time by following cascading patterns, expanding their influence, and generating event cascades that involve multiple locations. Analyzing such cascading processes presents valuable implications in various urban applications, such as traffic planning and pollution diagnostics. Motivated by the limited capability of the existing approaches in mining and interpreting cascading patterns, we propose a visual analytics system called VisCas. VisCas combines an inference model with interactive visualizations and empowers analysts to infer and interpret the latent cascading patterns in the spatiotemporal context. To develop VisCas, we address three major challenges 1) generalized pattern inference; 2) implicit influence visualization; and 3) multifaceted cascade analysis. For the first challenge, we adapt the state-of-the-art cascading network inference technique to general urban scenarios, where cascading patterns can be reliably inferred from large-scale spatiotemporal data. For the second and third challenges, we assemble a set of effective visualizations to support location navigation, influence inspection, and cascading exploration, and facilitate the in-depth cascade analysis. We design a novel influence view based on a three-fold optimization strategy for analyzing the implicit influences of the inferred patterns. We demonstrate the capability and effectiveness of VisCas with two case studies conducted on real-world traffic congestion and air pollution datasets with domain experts.',
      },
      {
        image: '/img/papers/ordermonitor.avif',
        authors: [
          'Junxiu Tang',
          'Yuhua Zhou',
          'Tan Tang',
          'Di Weng',
          'Boyang Xie',
          'Lingyun Yu',
          'Huaqiang Zhang',
          'Yingcai Wu',
        ],
        title:
          'A Visualization Approach for Monitoring Order Processing in E-Commerce Warehouse',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 1, pp. 857-867, 2022 (also accepted by IEEE VIS 2021)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2021.3114878',
          pdf: '/pdf/ordermonitor.pdf',
        },
        topics: [PaperTopic.TimeSeriesVisualAnalysis],
        abstract:
          "The efficiency of warehouses is vital to e-commerce. Fast order processing at the warehouses ensures timely deliveries and improves customer satisfaction. However, monitoring, analyzing, and manipulating order processing in the warehouses in real time are challenging for traditional methods due to the sheer volume of incoming orders, the fuzzy definition of delayed order patterns, and the complex decision-making of order handling priorities. In this paper, we adopt a data-driven approach and propose OrderMonitor, a visual analytics system that assists warehouse managers in analyzing and improving order processing efficiency in real time based on streaming warehouse event data. Specifically, the order processing pipeline is visualized with a novel pipeline design based on the sedimentation metaphor to facilitate real-time order monitoring and suggest potentially abnormal orders. We also design a novel visualization that depicts order timelines based on the Gantt charts and Marey's graphs. Such a visualization helps the managers gain insights into the performance of order processing and find major blockers for delayed orders. Furthermore, an evaluating view is provided to assist users in inspecting order details and assigning priorities to improve the processing performance. The effectiveness of OrderMonitor is evaluated with two case studies on a real-world warehouse dataset.",
      },
      {
        image: '/img/papers/compass.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Xiao Xie',
          'Jie Bao',
          'Yu Zheng',
          'Mingliang Xu',
          'Wei Chen',
          'Yingcai Wu',
        ],
        title: 'Compass: Towards Better Causal Analysis of Urban Time Series',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 28, no. 1, pp. 1051-1061, 2022 (also accepted by IEEE VIS 2021)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2021.3114875',
          pdf: '/pdf/compass.pdf',
          video: 'https://youtu.be/QxvGC9F9PaY?si=QI_rCpex5qVvBlpx',
        },
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.TimeSeriesVisualAnalysis,
        ],
        abstract:
          'The spatial time series generated by city sensors allow us to observe urban phenomena like environmental pollution and traffic congestion at an unprecedented scale. However, recovering causal relations from these observations to explain the sources of urban phenomena remains a challenging task because these causal relations tend to be time-varying and demand proper time series partitioning for effective analyses. The prior approaches extract one causal graph given long-time observations, which cannot be directly applied to capturing, interpreting, and validating dynamic urban causality. This paper presents Compass, a novel visual analytics approach for in-depth analyses of the dynamic causality in urban time series. To develop Compass, we identify and address three challenges: detecting urban causality, interpreting dynamic causal relations, and unveiling suspicious causal relations. First, multiple causal graphs over time among urban time series are obtained with a causal detection framework extended from the Granger causality test. Then, a dynamic causal graph visualization is designed to reveal the time-varying causal relations across these causal graphs and facilitate the exploration of the graphs along the time. Finally, a tailored multi-dimensional visualization is developed to support the identification of spurious causal relations, thereby improving the reliability of causal analyses. The effectiveness of Compass is evaluated with two case studies conducted on the real-world urban datasets, including the air pollution and traffic speed datasets, and positive feedback was received from domain experts.',
      },
    ],
  },
  {
    year: '2021',
    papers: [
      {
        image: '/img/papers/industrial_survey.avif',
        authors: ['Shuhan Liu', 'Di Weng', 'Yingcai Wu'],
        title: 'A Review on Industrial Data Visual Analytics',
        venue:
          'Journal of Integration Technology, vol. 10, no. 6, pp. 3-19, 2021',
        links: {
          paper: 'https://doi.org/10.12146/j.issn.2095-3135.20210630003',
          'cn pdf': '/pdf/industrial_survey.pdf',
        },
        abstract:
          'Since industry 4.0 was introduced in 2013, industries across the globe have been rushing towards the era of intelligent manufacturing. The advances in data sensing technologies have further helped the collection of massive industrial data, providing an excellent opportunity for innovations in industrial informatization. However, it remains a major challenge to analyze industrial data because of its large scale, high dimensionality, heterogeneity and complexity. Constantly changing application scenarios also lead to strict requirements in the flexibility of analyses, which demand placing domain experts in the analysis loop. Therefore, visualization has been widely applied to analyzing industrial data. This review article first summarizes the data types commonly used in the industrial scenarios based on the production stages and properties. Then, based on the data properties, this paper introduces visualization methods for the temporal, spatial and spatio-temporal types. Further, this paper overviews the applications of visual analytics in the industrial scenarios and discusses the integration of automated analysis methods in the visual analytics systems. Finally, this paper prospects the development of industrial data visual analytics and possible research directions for the future.',
      },
      {
        image: '/img/papers/corvizor.avif',
        authors: [
          'Yingcai Wu',
          'Di Weng',
          'Zikun Deng',
          'Jie Bao',
          'Mingliang Xu',
          'Zhangye Wang',
          'Yu Zheng',
          'Zhiyu Ding',
          'Wei Chen',
        ],
        title:
          'Towards Better Detection and Analysis of Massive Spatiotemporal Co-Occurrence Patterns',
        venue:
          'IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 6, pp. 3387-3402, 2021',
        links: {
          paper: 'https://doi.org/10.1109/TITS.2020.2983226',
          pdf: '/pdf/corvizor.pdf',
          video: 'https://youtu.be/0T0xe-rppSo?si=jToHX2CDGnCrv8Ch',
        },
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.TimeSeriesVisualAnalysis,
        ],
        abstract:
          'With the rapid development of sensing technologies, massive spatiotemporal data have been acquired from the urban space with respect to different domains, such as transportation and environment. Numerous co-occurrence patterns (e.g., traffic speed < 10km/h, weather = foggy, and air quality = unhealthy) between the transportation data and other types of data can be obtained with given spatiotemporal constraints (e.g., within 3 kilometers and lasting for 2 hours) from these heterogeneous data sources. Such patterns present valuable implications for many urban applications, such as traffic management, pollution diagnosis, and transportation planning. However, extracting and understanding these patterns is beyond manual capability because of the scale, diversity, and heterogeneity of the data. To address this issue, a novel visual analytics system called CorVizor is proposed to identify and interpret these co-occurrence patterns. CorVizor comprises two major components. The first component is a co-occurrence mining framework involving three steps, namely, spatiotemporal indexing, co-occurring instance generation, and pattern mining. The second component is a visualization technique called CorView that implements a level-of-detail mechanism by integrating tailored visualizations to depict the extracted spatiotemporal co-occurrence patterns. The case studies and expert interviews are conducted to demonstrate the effectiveness of CorVizor.',
      },
      {
        image: '/img/papers/bnva.avif',
        authors: [
          'Di Weng',
          'Chengbo Zheng',
          'Zikun Deng',
          'Mingze Ma',
          'Jie Bao',
          'Yu Zheng',
          'Mingliang Xu',
          'Yingcai Wu',
        ],
        title: 'Towards Better Bus Networks: A Visual Analytics Approach',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 27, no. 2, pp. 817-827, 2021',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2020.3030458',
          pdf: '/pdf/bnva.pdf',
          video: 'https://youtu.be/DEAfK8F2dQE?si=CY-voxqmRa5TIAYL',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Bus routes are typically updated every 3–5 years to meet constantly changing travel demands. However, identifying deficient bus routes and finding their optimal replacements remain challenging due to the difficulties in analyzing a complex bus network and the large solution space comprising alternative routes. Most of the automated approaches cannot produce satisfactory results in real-world settings without laborious inspection and evaluation of the candidates. The limitations observed in these approaches motivate us to collaborate with domain experts and propose a visual analytics solution for the performance analysis and incremental planning of bus routes based on an existing bus network. Developing such a solution involves three major challenges, namely, a) the in-depth analysis of complex bus route networks, b) the interactive generation of improved route candidates, and c) the effective evaluation of alternative bus routes. For challenge a, we employ an overview-to-detail approach by dividing the analysis of a complex bus network into three levels to facilitate the efficient identification of deficient routes. For challenge b, we improve a route generation model and interpret the performance of the generation with tailored visualizations. For challenge c, we incorporate a conflict resolution strategy in the progressive decision-making process to assist users in evaluating the alternative routes and finding the most optimal one. The proposed system is evaluated with two usage scenarios based on real-world data and received positive feedback from the experts.',
      },
      {
        image: '/img/papers/mcrs.avif',
        authors: [
          'Di Weng',
          'Ran Chen',
          'Jianhui Zhang',
          'Jie Bao',
          'Yu Zheng',
          'Yingcai Wu',
        ],
        title:
          'Pareto-Optimal Transit Route Planning With Multi-Objective Monte-Carlo Tree Search',
        venue:
          'IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 2, pp. 1185-1195, 2021',
        links: {
          paper: 'https://doi.org/10.1109/TITS.2020.2964012',
          pdf: '/pdf/mcrs.pdf',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Planning ideal transit routes in the complex urban environment can improve the performance and efficiency of public transportation systems effectively. However, finding such routes is computationally difficult due to the huge solution space constituted by billions of possible routes. Considering the limited scalability of exact search methods, heuristic search methods were proposed to boost the efficiency and incorporate flexible constraints. Nevertheless, the existing methods conceal multiple criteria in an objective, and thus evaluating the performance of the generated route becomes challenging due to the lack of comparable alternatives. Inspired by the prior study, we formulate the definition of pareto-optimal transit routes based on multiple criteria. However, extracting these routes remains challenging because: A) the sheer volume of possible transit routes; and B) the sparsity of pareto-optimal routes. We address these challenges by developing an efficient search framework: for challenge A, a random search method is developed based on Monte Carlo tree search where the unproductive solution subspaces are pruned progressively to reduce the search cost; and for challenge B, an estimation method is derived to guide the search process by assessing the value for each solution subspace. The superior effectiveness of our approach in approximating the pareto-optimal transit routes was demonstrated by the comprehensive evaluation based on the real-world data.',
      },
    ],
  },
  {
    year: 'Earlier',
    papers: [
      {
        image: '/img/papers/airvis.avif',
        authors: [
          'Zikun Deng',
          'Di Weng',
          'Jiahui Chen',
          'Ren Liu',
          'Zhibin Wang',
          'Jie Bao',
          'Yu Zheng',
          'Yingcai Wu',
        ],
        title: 'AirVis: Visual Analytics of Air Pollution Propagation',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 26, no. 1, pp. 800-810, 2020 (also accepted by IEEE VIS 2019)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2019.2934670',
          pdf: '/pdf/airvis.pdf',
          video: 'https://youtu.be/orjRmmGVT-4?si=bFQCE8HFcnh3-WMM',
        },
        topics: [
          PaperTopic.GeospatialVisualAnalysis,
          PaperTopic.TimeSeriesVisualAnalysis,
        ],
        abstract:
          'Air pollution has become a serious public health problem for many cities around the world. To find the causes of air pollution, the propagation processes of air pollutants must be studied at a large spatial scale. However, the complex and dynamic wind fields lead to highly uncertain pollutant transportation. The state-of-the-art data mining approaches cannot fully support the extensive analysis of such uncertain spatiotemporal propagation processes across multiple districts without the integration of domain knowledge. The limitation of these automated approaches motivates us to design and develop AirVis, a novel visual analytics system that assists domain experts in efficiently capturing and interpreting the uncertain propagation patterns of air pollution based on graph visualizations. Designing such a system poses three challenges: a) the extraction of propagation patterns; b) the scalability of pattern presentations; and c) the analysis of propagation processes. To address these challenges, we develop a novel pattern mining framework to model pollutant transportation and extract frequent propagation patterns efficiently from large-scale atmospheric data. Furthermore, we organize the extracted patterns hierarchically based on the minimum description length (MDL) principle and empower expert users to explore and analyze these patterns effectively on the basis of pattern topologies. We demonstrated the effectiveness of our approach through two case studies conducted with a real-world dataset and positive feedback from domain experts.',
      },
      {
        image: '/img/papers/srvis.avif',
        authors: [
          'Di Weng',
          'Ran Chen',
          'Zikun Deng',
          'Feiran Wu',
          'Jingmin Chen',
          'Yingcai Wu',
        ],
        title:
          'SRVis: Towards Better Spatial Integration in Ranking Visualization',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 25, no. 1, pp. 459-469, 2019 (IEEE VIS 2018)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2018.2865126',
          pdf: '/pdf/srvis.pdf',
          video: 'https://youtu.be/lenSZci4gy4?si=1JCtSimnpNTyTzGS',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          "Interactive ranking techniques have substantially promoted analysts' ability in making judicious and informed decisions effectively based on multiple criteria. However, the existing techniques cannot satisfactorily support the analysis tasks involved in ranking large-scale spatial alternatives, such as selecting optimal locations for chain stores, where the complex spatial contexts involved are essential to the decision-making process. Limitations observed in the prior attempts of integrating rankings with spatial contexts motivate us to develop a context-integrated visual ranking technique. Based on a set of generic design requirements we summarized by collaborating with domain experts, we propose SRVis, a novel spatial ranking visualization technique that supports efficient spatial multi-criteria decision-making processes by addressing three major challenges in the aforementioned context integration, namely, a) the presentation of spatial rankings and contexts, b) the scalability of rankings' visual representations, and c) the analysis of context-integrated spatial rankings. Specifically, we encode massive rankings and their cause with scalable matrix-based visualizations and stacked bar charts based on a novel two-phase optimization framework that minimizes the information loss, and the flexible spatial filtering and intuitive comparative analysis are adopted to enable the in-depth evaluation of the rankings and assist users in selecting the best spatial alternative. The effectiveness of the proposed technique has been evaluated and demonstrated with an empirical study of optimization methods, two case studies, and expert interviews.",
      },
      {
        image: '/img/papers/homefinder.avif',
        authors: ['Di Weng', 'Heming Zhu', 'Jie Bao', 'Yu Zheng', 'Yingcai Wu'],
        title:
          'HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making',
        venue:
          'ACM Conference on Human Factors in Computing Systems (CHI), no. 247, pp. 1-12, 2018',
        links: {
          paper: 'https://doi.org/10.1145/3173574.3173821',
          pdf: '/pdf/reach.pdf',
          video: 'https://youtu.be/WcjMXAfuygg?si=f3Xv_zBl_o9UiYhF',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'Finding an ideal home is a difficult and laborious process. One of the most crucial factors in this process is the reachability between the home location and the concerned points of interest, such as places of work and recreational facilities. However, such importance is unrecognized in the extant real estate systems. By characterizing user requirements and analytical tasks in the context of finding ideal homes, we designed ReACH, a novel visual analytics system that assists people in finding, evaluating, and choosing a home based on multiple criteria, including reachability. In addition, we developed an improved data-driven model for approximating reachability with massive taxi trajectories. This model enables users to interactively integrate their knowledge and preferences to make judicious and informed decisions. We show the improvements in our model by comparing the theoretical complexities with the prior study and demonstrate the usability and effectiveness of the proposed system with task-based evaluation.',
      },
      {
        image: '/img/papers/smartadp.avif',
        authors: [
          'Dongyu Liu',
          'Di Weng',
          'Yuhong Li',
          'Jie Bao',
          'Yu Zheng',
          'Huamin Qu',
          'Yingcai Wu',
        ],
        title:
          'SmartAdP: Visual Analytics of Large-scale Taxi Trajectories for Selecting Billboard Locations',
        venue:
          'IEEE Transactions on Visualization and Computer Graphics (TVCG), vol. 23, no. 1, pp. 1-10, 2017 (IEEE VIS 2016)',
        links: {
          paper: 'https://doi.org/10.1109/TVCG.2016.2598432',
          pdf: '/pdf/smartadp.pdf',
          video: 'https://youtu.be/7vkYubflVuo?si=3cfFncTFbUHmsh1n',
        },
        topics: [PaperTopic.GeospatialVisualAnalysis],
        abstract:
          'The problem of formulating solutions immediately and comparing them rapidly for billboard placements has plagued advertising planners for a long time, owing to the lack of efficient tools for in-depth analyses to make informed decisions. In this study, we attempt to employ visual analytics that combines the state-of-the-art mining and visualization techniques to tackle this problem using large-scale GPS trajectory data. In particular, we present SmartAdP, an interactive visual analytics system that deals with the two major challenges including finding good solutions in a huge solution space and comparing the solutions in a visual and intuitive manner. An interactive framework that integrates a novel visualization-driven data mining model enables advertising planners to effectively and efficiently formulate good candidate solutions. In addition, we propose a set of coupled visualizations: a solution view with metaphor-based glyphs to visualize the correlation between different solutions; a location view to display billboard locations in a compact manner; and a ranking view to present multi-typed rankings of the solutions. This system has been demonstrated using case studies with a real-world dataset and domain-expert interviews. Our approach can be adapted for other location selection problems such as selecting locations of retail stores or restaurants using trajectory data.',
      },
    ],
  },
] as { year: string; papers: Paper[] }[]
