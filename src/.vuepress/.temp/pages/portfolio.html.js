import comp from "/Users/apple/code/my-docs/src/.vuepress/.temp/pages/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/portfolio.html\",\"title\":\"Portfolio Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Portfolio Home\",\"icon\":\"house\",\"name\":\"Conan Edogawa\",\"avatar\":\"https://theme-hope-assets.vuejs.press/hero/conan.png\",\"titles\":[\"Genius young detective\",\"Lan’s childhood sweetheart\",\"The biggest rival of the black organization\"],\"footer\":false,\"description\":\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Portfolio Home\\\",\\\"description\\\":\\\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/portfolio.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"英文\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Portfolio Home\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0.25,\"words\":74},\"filePathRelative\":\"portfolio.md\",\"autoDesc\":true}")
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
