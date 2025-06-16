import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.92_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0-rc.23__yptvao5wiywh5g2qut6vklrkjm/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "/Users/apple/code/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_hrsyscztwcpp43wadek6i532ke/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.92_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0-rc.23__yptvao5wiywh5g2qut6vklrkjm/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.92_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0-rc.23__yptvao5wiywh5g2qut6vklrkjm/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "/Users/apple/code/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_qj5vwqa7qqp36rfa6izuv3p5hy/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/apple/code/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_qj5vwqa7qqp36rfa6izuv3p5hy/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/apple/code/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.108_vuepress@2.0.0-rc.23_@vuepress+bundler-vite@2.0.0-rc.23_@types+_qj5vwqa7qqp36rfa6izuv3p5hy/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/apple/code/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.92_markdown-it@14.1.0_sass-embedded@1.89.2_vuepress@2.0.0-rc.23__yptvao5wiywh5g2qut6vklrkjm/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
