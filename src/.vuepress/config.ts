import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档库",
  description: "个人文档库",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
