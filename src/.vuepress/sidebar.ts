import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Golang",
      icon: "fa-brands fa-golang",
      prefix: "golang/",
      link:"golang/",
      children: "structure",
    },
    {
      text: "Java",
      icon: "fa-brands fa-java",
      prefix: "java/",
      link: "java/",
      children: "structure",
    },
    {
      text: "杂记",
      icon: "fa-solid fa-box-archive",
      prefix: "notes/",
      link:"notes/",
      children: "structure",
    },
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "home/",
      link: "home/",
      children: "structure",
    },

  ],
});
