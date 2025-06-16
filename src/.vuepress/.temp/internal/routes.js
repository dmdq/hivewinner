export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"HiveWinner","icon":"house"} }],
  ["/platform/", { loader: () => import(/* webpackChunkName: "platform_index.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/index.html.js"), meta: {"title":"Features demo","icon":"laptop-code"} }],
  ["/platform/disable.html", { loader: () => import(/* webpackChunkName: "platform_disable.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/disable.html.js"), meta: {"title":"Disabling layout and features","icon":"gears","order":4} }],
  ["/platform/encrypt.html", { loader: () => import(/* webpackChunkName: "platform_encrypt.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/encrypt.html.js"), meta: {"title":"Encryption Article","icon":"lock"} }],
  ["/platform/layout.html", { loader: () => import(/* webpackChunkName: "platform_layout.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/layout.html.js"), meta: {"title":"Layout","icon":"object-group","order":2} }],
  ["/platform/markdown.html", { loader: () => import(/* webpackChunkName: "platform_markdown.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/markdown.html.js"), meta: {"title":"Markdown Enhance","icon":"fa6-brands:markdown","order":2} }],
  ["/platform/page.html", { loader: () => import(/* webpackChunkName: "platform_page.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/page.html.js"), meta: {"title":"Page Config","icon":"file","order":3} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"项目主页","icon":"house"} }],
  ["/zh/portfolio.html", { loader: () => import(/* webpackChunkName: "zh_portfolio.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/portfolio.html.js"), meta: {"title":"Portfolio Home","icon":"house"} }],
  ["/zh/platform/0.%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.html", { loader: () => import(/* webpackChunkName: "zh_platform_0.项目介绍.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/0.项目介绍.html.js"), meta: {"title":"0.项目介绍","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/1.taixiu%EF%BC%88%E9%AA%B0%E5%AE%9D%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_1.taixiu（骰宝）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/1.taixiu（骰宝）.html.js"), meta: {"title":"1.taixiu（骰宝）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/2.roulette%EF%BC%88%E8%BD%AE%E7%9B%98%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_2.roulette（轮盘）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/2.roulette（轮盘）.html.js"), meta: {"title":"2. roulette（轮盘）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/3.xoc%EF%BC%88%E8%89%B2%E7%A2%9F%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_3.xoc（色碟）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/3.xoc（色碟）.html.js"), meta: {"title":"3.xoc（色碟）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/4.mrbean%EF%BC%88%E6%86%A8%E8%B1%86%E5%85%88%E7%94%9F%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_4.mrbean（憨豆先生）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/4.mrbean（憨豆先生）.html.js"), meta: {"title":"4.mrbean（憨豆先生）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/5.tnj%EF%BC%88%E6%B1%A4%E5%A7%86%E5%92%8C%E6%9D%B0%E7%91%9E%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_5.tnj（汤姆和杰瑞）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/5.tnj（汤姆和杰瑞）.html.js"), meta: {"title":"5.tnj（汤姆和杰瑞）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/6.vsc%EF%BC%88%E5%88%AE%E5%88%AE%E4%B9%90%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_6.vsc（刮刮乐）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/6.vsc（刮刮乐）.html.js"), meta: {"title":"6.vsc（刮刮乐）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/7.minipoker%EF%BC%88%E8%BF%B7%E4%BD%A0%E6%89%91%E5%85%8B%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_7.minipoker（迷你扑克）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/7.minipoker（迷你扑克）.html.js"), meta: {"title":"7.minipoker（迷你扑克）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/8.hilow%EF%BC%88%E4%B8%8A%E4%B8%8B%E5%88%86%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_8.hilow（上下分）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/8.hilow（上下分）.html.js"), meta: {"title":"8.hilow（上下分）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/9.superwheel%EF%BC%88%E8%B6%85%E7%BA%A7%E8%BD%AC%E8%BD%AE%EF%BC%89.html", { loader: () => import(/* webpackChunkName: "zh_platform_9.superwheel（超级转轮）.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/9.superwheel（超级转轮）.html.js"), meta: {"title":"9.superwheel（超级转轮）","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/platform/", { loader: () => import(/* webpackChunkName: "zh_platform_index.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/index.html.js"), meta: {"title":"项目介绍与玩法说明","icon":"laptop-code"} }],
  ["/zh/platform/encrypt.html", { loader: () => import(/* webpackChunkName: "zh_platform_encrypt.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/encrypt.html.js"), meta: {"title":"加密文档","icon":"lock"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/apple/code/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
