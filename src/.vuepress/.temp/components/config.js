import { hasGlobalComponent } from "/Users/apple/code/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_qj5vwqa7qqp36rfa6izuv3p5hy/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.90_sass-embedded@1.89.2_vuepress@2.0.0-rc.23_@vuepress+bu_kupduskpibprvhrss4fgzilkiu/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.90_sass-embedded@1.89.2_vuepress@2.0.0-rc.23_@vuepress+bu_kupduskpibprvhrss4fgzilkiu/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "/Users/apple/code/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_qj5vwqa7qqp36rfa6izuv3p5hy/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
