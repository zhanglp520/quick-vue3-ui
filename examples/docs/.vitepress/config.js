export default {
  base: '/',
  lang: 'en-US',
  title: 'quick-vue3-admin-js',
  titleTemplate: 'Vite & Vue powered static site generator',
  description: 'Vite & Vue powered static site generator.',
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  // outDir: '../public',
  cleanUrls: 'with-subfolders',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'quick 后台 管理 平台 系统',
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content:
          'quick-vue3-admin是一套快速搭建后台系统框架，基于vite2+element-plus进行二次封装，使用最新技术栈vite2,vue3,typescript,pinia等等。',
      },
    ],
  ],
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.ico',
    siteTitle: 'quick-vue3-admin',
    outlineTitle: 'In hac pagina',
    lastUpdatedText: 'Updated Date',
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'MIT License Copyright (c) 2022 zhanglp',
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
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
        text: '指南',
        link: '/guide/index',
        activeMatch: '^/$|^/guide/',
      },
      {
        text: '组件',
        link: '/components/index',
      },
      {
        text: '版本',
        items: [
          {
            text: '1.0.0',
            link: 'https://gitee.com/zhanglp520/quick-vue3-admin/releases/tag/v1.0.0',
          },
        ],
      },
      {
        text: '选择语言',

        items: [
          {
            text: '简体中文',
            link: '/zh',
          },
          {
            text: 'English',
            link: '/en',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          // collapsible: true,
          // collapsed: true,
          text: '入门',
          items: [
            {
              text: '介绍',
              link: '/guide/introduction',
              items: [],
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: '前端',
              link: '/guide/vue',
              items: [],
            },
            {
              text: '后端',
              link: '/guide/node',
              items: [],
            },
          ],
        },
        {
          text: '高级',
          items: [
            {
              text: 'vite搭建vue3文档',
              link: '/guide/install',
              items: [],
            },
            {
              text: '使用monorepo发布vue3组件库',
              link: '/guide/publish',
              items: [],
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            {
              text: '介绍',
              link: '/components/index',
              items: [],
            },
          ],
        },
        {
          text: '基础组件',
          items: [
            {
              text: '工具栏',
              link: '/components/basic/toolbar',
            },
            {
              text: '搜索栏',
              link: '/components/basic/search',
            },
            {
              text: '表单',
              link: '/components/basic/form',
            },
            {
              text: '表格',
              link: '/components/basic/table',
            },
            {
              text: 'crud',
              link: '/components/basic/crud',
            },
          ],
        },
        {
          text: '定制组件',
          link: '/components/custorm',
          items: [],
        },
        {
          text: 'typescript',
          items: [
            {
              text: 'table',
              link: '/components/types/table',
              items: [],
            },
            {
              text: 'form',
              link: '/components/types/form',
              items: [],
            },
            {
              text: 'page',
              link: '/components/types/page',
              items: [],
            },
            {
              text: 'tree',
              link: '/components/types/tree',
              items: [],
            },
            {
              text: 'option',
              link: '/components/types/option',
              items: [],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`,
        },
        link: 'https://gitee.com/zhanglp520/quick-vue3-admin.git',
      },
      {
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`,
        },
        link: 'http://110.42.130.88:8099/zhanglp520/quick-vue3-admin.git',
      },
      {
        icon: 'github',
        link: 'https://github.com/zhanglp520/quick-vue3-admin.git',
      },
    ],
  },
}
