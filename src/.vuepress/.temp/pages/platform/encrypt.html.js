import comp from "/Users/apple/code/my-docs/src/.vuepress/.temp/pages/platform/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/platform/encrypt.html\",\"title\":\"Encryption Article\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"],\"feed\":false,\"seo\":false,\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://localhost/zh/platform/encrypt.html\"}]]},\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"platform/encrypt.md\"}")
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
