export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"HiveWinner\",\"description\":\"开发中\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"蜂巢赢家\",\"description\":\"产品文档\"},\"/vn/\":{\"lang\":\"vn-VI\",\"title\":\"Tổ Ong Thắng Lợi\",\"description\":\"Tổ Ong Thắng Lợi\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
