import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "HiveWinner",
      description: "开发中",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "蜂巢赢家",
      description: "产品文档",
    },
    "/vn/": {
      lang: "vn-VI",
      title: "Tổ Ong Thắng Lợi",
      description: "Tổ Ong Thắng Lợi",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
