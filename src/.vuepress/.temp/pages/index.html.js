import comp from "/Users/apple/code/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"HiveWinner\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"HiveWinner\",\"heroImage\":\"/images/index.png\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/6-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"HiveWinner\",\"tagline\":\"The website is under development.\",\"actions\":null,\"highlights\":null,\"copyright\":false,\"footer\":\"MIT Licensed, Copyright © 2025\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"HiveWinner\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://localhost/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HiveWinner\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"HiveWinner\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://localhost/zh/\"}]]},\"readingTime\":{\"minutes\":0.14,\"words\":41},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
