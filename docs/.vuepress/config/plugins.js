module.exports = {
  plugins: [
    [
      '@vuepress/last-updated', {
        transformer: (timestamp) => {
          return require('dayjs')(timestamp).format('YYYY-MM-DD hh:mm:ss')
        }
      }
    ],
    ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [
        {
          id: 'tags',
          keys: ['tags'],
          path: '/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag'
        },
        {
          id: 'categories',
          keys: ['categories'],
          path: '/categories/',
          layout: 'Categories',
          scopeLayout: 'Category'
        },
        {
          id: 'timeline',
          keys: ['timeline'],
          path: '/timeline/',
          layout: 'TimeLine',
          scopeLayout: 'TimeLine'
        }
      ]
    }],
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom', true],
  ]
}