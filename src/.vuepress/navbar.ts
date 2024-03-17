import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text:"Golang",
    icon:"fa-brands fa-golang",
    prefix:"/golang/",
    children:[
      {
        text: "标准库",
        icon: "fa-brands fa-golang",
        prefix: "std/",
        children: [
          { text: "I/O标准库", icon: "fa-brands fa-golang", link: "io" },
          { text: "Runtime标准库", icon: "fa-brands fa-golang", link: "runtime" },
          { text: "Context标准库", icon: "fa-brands fa-golang", link: "context" },
        ],
      }
    ]
  },
  {
    text: "Java",
    prefix: "/java/",
    icon:"fab fa-java",
    children: [],
  },
  {
    text: "杂记",
    icon: "book",
    prefix: "/notes/",
    children: [
      {
        text: "已整理",
        icon: "lightbulb",
        prefix: "order/",
        children: [ 
          { text: "linux", icon: "fab fa-linux", link: "linux" },
          { text: "数据库", icon: "fa-solid fa-database", link: "database" }
       ],
      },
      {
        text: "未整理",
        icon: "lightbulb",
        prefix: "unorder/",
        children: [ { text: "未整理的文档", icon: "fa-solid fa-bookmark", link: "mess" },{ text: "数据库", icon: "fa-solid fa-database", link: "database" }],
      },

    ],
  },
  {
    text: "资源导航",
    link: "/resource/",
    icon:"fa-solid fa-window-restore",
  },
  "/home/",
]);
