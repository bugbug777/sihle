module.exports = {
  base: '/sihle/',
  title: "Sihle's Blog",
  description: 'Sihle 的個人部落格.',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-Hant-TW'
    }
  },
  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      { text: '標籤', link: '/tag/' },
      { text: '文章', link: '/' },
      { text: '筆記心得', link: '/note/' },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/bugbug777',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2022-present Sihle H.',
          link: '',
        },
      ],
    },
    comment: {
      service: "disqus",
      shortname: "Sihle 的部落格",
    },
    smoothScroll: true,
  },
  plugins: ['@vuepress/back-to-top']
}