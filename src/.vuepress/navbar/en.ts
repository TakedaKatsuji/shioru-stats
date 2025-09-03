import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "記事",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "統計検定1級",
        icon: "pen-to-square",
        prefix: "統計検定1級/",
        children: [
          { text: "2015-統計数理", icon: "pen-to-square", link: "1" },
        ],
      },
    ],
  },
]);
