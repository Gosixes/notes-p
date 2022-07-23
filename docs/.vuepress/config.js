module.exports = {
  title: "yb's notes",
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],
  theme: 'vdoing',
  themeConfig: {
    logo: '/img/logo.png', // 导航栏logo
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            items: [
              { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
            ],
          },
          {
            text: '学习笔记',
            items: [
              { text: '《JavaScript教程》', link: '/note/javascript/' },
              { text: '《JavaScript高级程序设计》', link: '/note/js/' },
              { text: '《ES6 教程》', link: '/note/es6/' },
              { text: '《Vue》', link: '/note/vue/' },
              { text: '《React》', link: '/note/react/' },
              {
                text: '《TypeScript 从零实现 axios》',
                link: '/note/typescript-axios/',
              },
              {
                text: '《Git》',
                link: '/note/git/',
              },
              {
                text: 'TypeScript',
                link: '/pages/51afd6/',
              },
              {
                text: 'JS设计模式总结',
                link: '/pages/4643cd/',
              },
            ],
          },
        ],
      },
      {
        text: '保存',
        link: '/pages/ade2f5/'
      }
    ],

    defaultMode: 'light',
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    categoryText: '其他', // _posts文件夹的文章

    footer: {
      createYear: 2019,
      copyrightInfo:
        'YB',
    },
  }
}