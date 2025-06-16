import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    // "portfolio",
    {
      text: "产品文档",
      icon: "laptop-code",
      prefix: "platform",
      link: "platform/",
      children: "structure",
    },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
