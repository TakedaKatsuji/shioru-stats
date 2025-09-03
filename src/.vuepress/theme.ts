import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar} from "./navbar/index.js";
import { enSidebar} from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Takeda Katsuji",
    url: "https://mister-hope.com",
  },

  logo: ".vuepress/public/cat.avif",

  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  blog: {
    medias: {
      GitHub: "https://example.com",
      Gmail: "mailto:info@example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      blog: {
        description: "医療AIエンジニア",
        intro: "/intro.html",
      },
    },
  },
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    math: {
      type: "mathjax",
    },
  },

  plugins: {
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
