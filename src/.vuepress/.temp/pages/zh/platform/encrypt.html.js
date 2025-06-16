import comp from "/Users/apple/code/my-docs/src/.vuepress/.temp/pages/zh/platform/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/zh/platform/encrypt.html\",\"title\":\"加密文档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"使用指南\"],\"tag\":[\"加密\"],\"feed\":false,\"seo\":false,\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://localhost/platform/encrypt.html\"}]]},\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"zh/platform/encrypt.md\"}")
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
