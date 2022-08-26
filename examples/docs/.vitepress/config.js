export default {
  base: "/",
  lang: "en-US",
  title: "quick-vue3-ui-js",
  titleTemplate: "Vite & Vue powered static site generator",
  description: "Vite & Vue powered static site generator.",
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  outDir: "../public",
  cleanUrls: "with-subfolders",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "quick 后台 管理 平台 系统",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "quick-vue3-admin是一套快速搭建后台系统框架，基于vite2+element-plus进行二次封装，使用最新技术栈vite2,vue3,typescript,pinia等等。",
      },
    ],
  ],
  markdown: {
    theme: "material-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.ico",
    siteTitle: "quick-vue3-ui",
    outlineTitle: "In hac pagina",
    lastUpdatedText: "Updated Date",
    docFooter: {
      prev: "Pagina prior",
      next: "Proxima pagina",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "MIT License Copyright (c) 2022 zhanglp",
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    //广告
    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },
    //站内搜索
    // algolia: {
    //   appId: '8J64VVRP8K',
    //   apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //   indexName: 'vitepress'
    // },
    nav: [
      {
        text: "指南",
        link: "/guide/index",
        activeMatch: "^/$|^/guide/",
      },
      {
        text: "组件",
        link: "/components/index",
      },
      {
        text: "版本",
        items: [
          {
            text: "1.0.0",
            link: "https://gitee.com/zhanglp520/quick-vue3-admin/releases/tag/v1.0.0",
          },
        ],
      },
      {
        text: "选择语言",

        items: [
          {
            text: "简体中文",
            link: "/zh",
          },
          {
            text: "English",
            link: "/en",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          // collapsible: true,
          // collapsed: true,
          text: "入门",
          items: [
            {
              text: "quick-vue3-admin是什么？",
              link: "/guide/introduction",
              items: [],
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "前端",
              link: "/guide/vue",
              items: [],
            },
            {
              text: "后端",
              link: "/guide/node",
              items: [],
            },
          ],
        },
        {
          text: "高级",
          items: [
            {
              text: "vite搭建vue3文档",
              link: "/guide/install",
              items: [],
            },
            {
              text: "使用monorepo发布vue3组件库",
              link: "/guide/publish",
              items: [],
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            {
              text: "介绍",
              link: "/components/index",
              items: [],
            },
          ],
        },
        {
          text: "基础组件",
          items: [
            {
              text: "工具栏",
              link: "/components/basic/toolbar",
            },
            {
              text: "搜索栏",
              link: "/components/basic/search",
            },
            {
              text: "表单",
              link: "/components/basic/form",
            },
            {
              text: "表格",
              link: "/components/basic/table",
            },
            {
              text: "crud",
              link: "/components/basic/crud",
            },
          ],
        },
        {
          text: "定制组件",
          link: "/components/custorm",
          items: [],
        },
        {
          text: "typescript",
          items: [
            {
              text: "table",
              link: "/components/types/table",
              items: [],
            },
            {
              text: "form",
              link: "/components/types/form",
              items: [],
            },
            {
              text: "page",
              link: "/components/types/page",
              items: [],
            },
            {
              text: "tree",
              link: "/components/types/tree",
              items: [],
            },
            {
              text: "option",
              link: "/components/types/option",
              items: [],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://gitee.com/zhanglp520/quick-vue3-admin.git",
      },
      {
        icon: "github",
        link: "https://gitee.com/zhanglp520/quick-vue3-admin.git",
      },
      {
        icon: "github",
        link: "https://gitee.com/zhanglp520/quick-vue3-admin.git",
      },
      // { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
      //   },
      //   link: "...",
      // },
    ],
  },
};
