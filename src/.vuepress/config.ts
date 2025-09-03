import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/shioru-stats/",   // リポ名に合わせる
  locales: {
    "/": {
      lang: "ja",
      title: "栞る数理統計",
      description: "「栞る数理統計」は、数理統計の学習過程を記録し整理するためのブログです。",
    }
  },
  theme,
});
