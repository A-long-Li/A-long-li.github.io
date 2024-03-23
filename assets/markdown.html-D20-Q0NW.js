import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as d,c as u,b as g,d as s,f as e,a,w as n,n as _,g as f,e as o}from"./app-BcGELkq_.js";const k={},v=s("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1),y=s("p",null,"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1),b=s("h2",{id:"markdown-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-介绍"},[s("span",null,"Markdown 介绍")])],-1),w={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"markdown-配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-配置"},[s("span",null,"Markdown 配置")])],-1),j=s("p",null,"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。",-1),M={class:"hint-container info"},V=s("p",{class:"hint-container-title"},"相关信息",-1),P={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter",target:"_blank",rel:"noopener noreferrer"},A=s("h2",{id:"markdown-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown-扩展"},[s("span",null,"Markdown 扩展")])],-1),E={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/markdown-it/markdown-it#syntax-extensions",target:"_blank",rel:"noopener noreferrer"},C=s("h3",{id:"vuepress-扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-扩展"},[s("span",null,"VuePress 扩展")])],-1),D=s("p",null,"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。",-1),N={href:"https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html",target:"_blank",rel:"noopener noreferrer"},B=s("h3",{id:"主题扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#主题扩展"},[s("span",null,"主题扩展")])],-1),F={href:"https://plugin-md-enhance.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"},I=s("code",null,"vuepress-plugin-md-enhance",-1),R=o(`<h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h4><div><p>安全的在 Markdown 中使用 {{ variable }}。</p></div><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details>`,7),H={href:"https://theme-hope.vuejs.press/zh/guide/markdown/hint.html",target:"_blank",rel:"noopener noreferrer"},L=s("h4",{id:"代码块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码块"},[s("span",null,"代码块")])],-1),S=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),Z=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),e(),s("span",{class:"token function"},"add"),e(),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),q=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),e(" i "),s("span",{class:"token parameter variable"},"-D"),e(` vuepress-theme-hope
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),O={href:"https://theme-hope.vuejs.press/zh/guide/markdown/code-tabs.html",target:"_blank",rel:"noopener noreferrer"},J=s("h4",{id:"上下角标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上下角标"},[s("span",null,"上下角标")])],-1),K=s("p",null,[e("19"),s("sup",null,"th"),e(" H"),s("sub",null,"2"),e("O")],-1),W={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sup-sub.html",target:"_blank",rel:"noopener noreferrer"},G=s("h4",{id:"自定义对齐",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义对齐"},[s("span",null,"自定义对齐")])],-1),Q=s("div",{style:{"text-align":"center"}},[s("p",null,"我是居中的")],-1),U=s("div",{style:{"text-align":"right"}},[s("p",null,"我在右对齐")],-1),X={href:"https://theme-hope.vuejs.press/zh/guide/markdown/align.html",target:"_blank",rel:"noopener noreferrer"},Y=s("h4",{id:"attrs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#attrs"},[s("span",null,"Attrs")])],-1),$=s("p",null,[e("一个拥有 ID 的 "),s("strong",{id:"word"},"单词"),e("。")],-1),ss={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"},es=o('<h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h4><p>此文字有脚注<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p>',2),as={href:"https://theme-hope.vuejs.press/zh/guide/markdown/footnote.html",target:"_blank",rel:"noopener noreferrer"},ts=s("h4",{id:"标记",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#标记"},[s("span",null,"标记")])],-1),ns=s("p",null,[e("你可以标记 "),s("mark",null,"重要的内容"),e(" 。")],-1),ls={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mark.html",target:"_blank",rel:"noopener noreferrer"},rs=s("h4",{id:"任务列表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#任务列表"},[s("span",null,"任务列表")])],-1),is=s("li",null,[s("p",null,"[x] 计划 1")],-1),os=s("li",null,[s("p",null,"[ ] 计划 2")],-1),ms={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tasklist.html",target:"_blank",rel:"noopener noreferrer"},ps=s("h3",{id:"图片增强",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片增强"},[s("span",null,"图片增强")])],-1),hs=s("p",null,"支持为图片设置颜色模式和大小",-1),cs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/image.html",target:"_blank",rel:"noopener noreferrer"},ds=s("h4",{id:"组件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#组件"},[s("span",null,"组件")])],-1),us={href:"https://theme-hope.vuejs.press/zh/guide/markdown/component.html",target:"_blank",rel:"noopener noreferrer"},gs=s("h4",{id:"导入文件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#导入文件"},[s("span",null,"导入文件")])],-1),_s={href:"https://theme-hope.vuejs.press/zh/guide/markdown/include.html",target:"_blank",rel:"noopener noreferrer"},fs=s("h4",{id:"样式化",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#样式化"},[s("span",null,"样式化")])],-1),ks={href:"https://theme-hope.vuejs.press/zh/guide/markdown/stylize.html",target:"_blank",rel:"noopener noreferrer"},vs=s("h4",{id:"tex-语法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tex-语法"},[s("span",null,"Tex 语法")])],-1),ys=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("msup",null,[s("mi",{mathvariant:"normal"},"∂"),s("mi",null,"r")]),s("mrow",null,[s("mi",{mathvariant:"normal"},"∂"),s("msup",null,[s("mi",null,"ω"),s("mi",null,"r")])])]),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mo",null,"="),s("mrow",null,[s("mo",{fence:"true"},"("),s("mfrac",null,[s("msup",null,[s("mi",null,"y"),s("mi",null,"ω")]),s("mi",null,"ω")]),s("mo",{fence:"true"},")")]),s("mrow",null,[s("mo",{fence:"true"},"{"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"r")]),s("mo",null,"+"),s("munderover",null,[s("mo",null,"∑"),s("mrow",null,[s("mi",null,"i"),s("mo",null,"="),s("mn",null,"1")]),s("mi",null,"r")]),s("mfrac",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mo",null,"−"),s("mn",null,"1"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mi",null,"i")]),s("mi",null,"r"),s("mo",null,"⋯"),s("mo",{stretchy:"false"},"("),s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mo",{stretchy:"false"},")"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"y"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mrow",null,[s("mi",null,"r"),s("mo",null,"−"),s("mi",null,"i")])])]),s("msup",null,[s("mi",null,"ω"),s("mi",null,"i")])]),s("mo",{fence:"true"},"}")])]),s("annotation",{encoding:"application/x-tex"}," \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.4em","vertical-align":"-0.95em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3714em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.5904em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord",style:{"margin-right":"0.05556em"}},"∂"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"3.0277em","vertical-align":"-1.2777em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"(")]),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3414em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"ω")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},")")])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"{")]),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7144em"}},[s("span",{style:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mop op-limits"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.6514em"}},[s("span",{style:{top:"-1.8723em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mrel mtight"},"="),s("span",{class:"mord mtight"},"1")])])]),s("span",{style:{top:"-3.05em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",null,[s("span",{class:"mop op-symbol large-op"},"∑")])]),s("span",{style:{top:"-4.3em","margin-left":"0em"}},[s("span",{class:"pstrut",style:{height:"3.05em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.2777em"}},[s("span")])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5017em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"ω"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7507em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mopen"},"("),s("span",{class:"mord"},"−"),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"i")])])])])])])]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},"⋯"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[e("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8247em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.02778em"}},"r"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mathnormal mtight"},"i")])])])])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mclose delimcenter",style:{top:"0em"}},[s("span",{class:"delimsizing size4"},"}")])])])])])])],-1),bs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/tex.html",target:"_blank",rel:"noopener noreferrer"},ws=s("h4",{id:"图表",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图表"},[s("span",null,"图表")])],-1),zs=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html",width:"100%",height:"450"},null,-1),xs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html",target:"_blank",rel:"noopener noreferrer"},js=s("h4",{id:"echarts",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#echarts"},[s("span",null,"Echarts")])],-1),Ms=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html",width:"100%",height:"800"},null,-1),Vs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/echarts.html",target:"_blank",rel:"noopener noreferrer"},Ps=s("h4",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图"},[s("span",null,"流程图")])],-1),As=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html",width:"100%",height:"450"},null,-1),Es={href:"https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html",target:"_blank",rel:"noopener noreferrer"},Ts=s("h4",{id:"markmap",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markmap"},[s("span",null,"MarkMap")])],-1),Cs=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html",width:"100%",height:"380"},null,-1),Ds={href:"https://theme-hope.vuejs.press/zh/guide/markdown/markmap.html",target:"_blank",rel:"noopener noreferrer"},Ns=s("h4",{id:"mermaid",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid"},[s("span",null,"Mermaid")])],-1),Bs=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html",width:"100%",height:"620"},null,-1),Fs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html",target:"_blank",rel:"noopener noreferrer"},Is=s("h4",{id:"代码演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码演示"},[s("span",null,"代码演示")])],-1),Rs=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html",width:"100%",height:"450"},null,-1),Hs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/demo.html",target:"_blank",rel:"noopener noreferrer"},Ls=s("h4",{id:"交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#交互演示"},[s("span",null,"交互演示")])],-1),Ss=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html",width:"100%",height:"480"},null,-1),Zs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/playground.html",target:"_blank",rel:"noopener noreferrer"},qs=s("h4",{id:"kotlin-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#kotlin-交互演示"},[s("span",null,"Kotlin 交互演示")])],-1),Os=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html",width:"100%",height:"220"},null,-1),Js={href:"https://theme-hope.vuejs.press/zh/guide/markdown/kotlin-playground.html",target:"_blank",rel:"noopener noreferrer"},Ks=s("h4",{id:"vue-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vue-交互演示"},[s("span",null,"Vue 交互演示")])],-1),Ws=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html",width:"100%",height:"380"},null,-1),Gs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html",target:"_blank",rel:"noopener noreferrer"},Qs=s("h4",{id:"sandpack-交互演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sandpack-交互演示"},[s("span",null,"Sandpack 交互演示")])],-1),Us=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html",width:"100%",height:"380"},null,-1),Xs={href:"https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html",target:"_blank",rel:"noopener noreferrer"},Ys=s("h4",{id:"幻灯片",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#幻灯片"},[s("span",null,"幻灯片")])],-1),$s=s("iframe",{src:"https://plugin-md-enhance-demo.vuejs.press/snippet/revealjs.html",width:"100%",height:"400"},null,-1),se={href:"https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html",target:"_blank",rel:"noopener noreferrer"},ee=o('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>这是脚注内容 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function ae(te,ne){const t=i("ExternalLinkIcon"),m=i("CodeTabs"),p=i("VPCard"),h=i("Badge");return d(),u("div",null,[v,y,g(" more "),b,s("p",null,[e("如果你是一个新手，还不会编写 Markdown，请先阅读 "),s("a",w,[e("Markdown 介绍"),a(t)]),e(" 和 "),s("a",z,[e("Markdown 演示"),a(t)]),e("。")]),x,j,s("div",M,[V,s("p",null,[e("Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 "),s("a",P,[e("Frontmatter 介绍"),a(t)]),e("。")])]),A,s("p",null,[e("VuePress 会使用 "),s("a",E,[e("markdown-it"),a(t)]),e(" 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 "),s("a",T,[e("语法扩展"),a(t)]),e(" 。")]),C,D,s("p",null,[e("关于这些扩展，请阅读 "),s("a",N,[e("VuePress 中的 Markdown 扩展"),a(t)]),e("。")]),B,s("p",null,[e("通过 "),s("a",F,[I,a(t)]),e("，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。")]),R,s("ul",null,[s("li",null,[s("a",H,[e("查看详情"),a(t)])])]),L,a(m,{id:"89",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:2},{title0:n(({value:l,isActive:r})=>[e("pnpm")]),title1:n(({value:l,isActive:r})=>[e("yarn")]),title2:n(({value:l,isActive:r})=>[e("npm")]),tab0:n(({value:l,isActive:r})=>[S]),tab1:n(({value:l,isActive:r})=>[Z]),tab2:n(({value:l,isActive:r})=>[q]),_:1}),s("ul",null,[s("li",null,[s("a",O,[e("查看详情"),a(t)])])]),J,K,s("ul",null,[s("li",null,[s("a",W,[e("查看详情"),a(t)])])]),G,Q,U,s("ul",null,[s("li",null,[s("a",X,[e("查看详情"),a(t)])])]),Y,$,s("ul",null,[s("li",null,[s("a",ss,[e("查看详情"),a(t)])])]),es,s("ul",null,[s("li",null,[s("a",as,[e("查看详情"),a(t)])])]),ts,ns,s("ul",null,[s("li",null,[s("a",ls,[e("查看详情"),a(t)])])]),rs,s("ul",null,[is,os,s("li",null,[s("p",null,[s("a",ms,[e("查看详情"),a(t)])])])]),ps,hs,s("ul",null,[s("li",null,[s("a",cs,[e("查看详情"),a(t)])])]),ds,a(p,_(f({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16),s("ul",null,[s("li",null,[s("a",us,[e("查看详情"),a(t)])])]),gs,s("ul",null,[s("li",null,[s("a",_s,[e("查看详情"),a(t)])])]),fs,s("p",null,[e("向 Mr.Hope 捐赠一杯咖啡。 "),a(h,{type:"tip"},{default:n(()=>[e("Recommended")]),_:1})]),s("ul",null,[s("li",null,[s("a",ks,[e("查看详情"),a(t)])])]),vs,ys,s("ul",null,[s("li",null,[s("a",bs,[e("查看详情"),a(t)])])]),ws,zs,s("ul",null,[s("li",null,[s("a",xs,[e("查看详情"),a(t)])])]),js,Ms,s("ul",null,[s("li",null,[s("a",Vs,[e("查看详情"),a(t)])])]),Ps,As,s("ul",null,[s("li",null,[s("a",Es,[e("查看详情"),a(t)])])]),Ts,Cs,s("ul",null,[s("li",null,[s("a",Ds,[e("查看详情"),a(t)])])]),Ns,Bs,s("ul",null,[s("li",null,[s("a",Fs,[e("查看详情"),a(t)])])]),Is,Rs,s("ul",null,[s("li",null,[s("a",Hs,[e("查看详情"),a(t)])])]),Ls,Ss,s("ul",null,[s("li",null,[s("a",Zs,[e("查看详情"),a(t)])])]),qs,Os,s("ul",null,[s("li",null,[s("a",Js,[e("View Detail"),a(t)])])]),Ks,Ws,s("ul",null,[s("li",null,[s("a",Gs,[e("查看详情"),a(t)])])]),Qs,Us,s("ul",null,[s("li",null,[s("a",Xs,[e("查看详情"),a(t)])])]),Ys,$s,s("ul",null,[s("li",null,[s("a",se,[e("查看详情"),a(t)])])]),ee])}const ie=c(k,[["render",ae],["__file","markdown.html.vue"]]),oe=JSON.parse('{"path":"/home/markdown.html","title":"Markdown 展示","lang":"zh-CN","frontmatter":{"title":"Markdown 展示","icon":"fab fa-markdown","order":2,"category":["使用指南"],"tag":["Markdown"],"gitInclude":["../../src/home/README.md"],"description":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。 Markdown 介绍 如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。 Mark...","head":[["meta",{"property":"og:url","content":"https://zarttic.github.io/home/markdown.html"}],["meta",{"property":"og:site_name","content":"文档库"}],["meta",{"property":"og:title","content":"Markdown 展示"}],["meta",{"property":"og:description","content":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。 Markdown 介绍 如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。 Mark..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T09:15:11.000Z"}],["meta",{"property":"article:author","content":"zarttic"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2024-03-11T09:15:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 展示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T09:15:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zarttic\\",\\"url\\":\\"https://github.com/zarttic\\"}]}"]]},"headers":[{"level":2,"title":"Markdown 介绍","slug":"markdown-介绍","link":"#markdown-介绍","children":[]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[]},{"level":2,"title":"Markdown 扩展","slug":"markdown-扩展","link":"#markdown-扩展","children":[{"level":3,"title":"VuePress 扩展","slug":"vuepress-扩展","link":"#vuepress-扩展","children":[]},{"level":3,"title":"主题扩展","slug":"主题扩展","link":"#主题扩展","children":[]},{"level":3,"title":"图片增强","slug":"图片增强","link":"#图片增强","children":[]}]}],"git":{"createdTime":1710135964000,"updatedTime":1710148511000,"contributors":[{"name":"liyajun","email":"332209078@qq.com","commits":2}]},"readingTime":{"minutes":3.08,"words":924},"filePathRelative":"home/markdown.md","localizedDate":"2024年3月11日","autoDesc":true,"excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n"}');export{ie as comp,oe as data};