import CodeDemo from "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.90_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0_ntz2hlgiicfb7yyr3ofnurkqpa/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.90_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0_ntz2hlgiicfb7yyr3ofnurkqpa/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
