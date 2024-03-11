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
          { text: "I/O标准库", icon: "fa-brands fa-golang", link: "io" }
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
        text: "未整理",
        icon: "lightbulb",
        prefix: "unorder/",
        children: [ { text: "linux", icon: "fa-linux", link: "linux" }],
      },
    ],
  },
  "/home/",
]);
