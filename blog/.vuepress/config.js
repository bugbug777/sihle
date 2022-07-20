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
    smoothScroll: true,
    dateFormat: 'YYYY-MM-DD',
    nav: [
      { text: '標籤', link: '/tag/' },
      { text: '文章', link: '/' },
      { text: '筆記心得', link: 'https://bugbug777.github.io/notebook/' },
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
    globalPagination: {
      prevText:'上一頁', // Text for previous links.
      nextText:'下一頁', // Text for next links.
      lengthPerPage:'10', // Maximum number of posts per page.
      layout:'Pagination', // Layout for pagination page
    },
    comment: {
      service: "disqus",
      shortname: "sihle",
    },
    newsletter: {
      title: '訂閱我的最新消息',
      content: '請輸入您的電子郵件',
      submitText: '訂閱',
      endpoint: 'https://gmail.us13.list-manage.com/subscribe/post?u=987c20a31af5a6b53881fed49&amp;id=12d7a474f6'
    },
    feed: {
      canonical_base: 'https://bugbug777.github.io'
    }
  },
  plugins: ['@vuepress/back-to-top']
}