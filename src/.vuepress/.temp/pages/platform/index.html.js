import comp from "/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/index.html.vue"
const data = JSON.parse("{\"path\":\"/platform/\",\"title\":\"Features demo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Features demo\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"Guide\"],\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Features demo\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"kylin\\\",\\\"url\\\":\\\"https://kylin.io\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://localhost/platform/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"HiveWinner\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Features demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://localhost/zh/platform/\"}]]},\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"platform/README.md\"}")
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
