import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as s,c as d,a as r,w as a,e as p,f as l,d as e}from"./app-CY6Wp-Ef.js";const m={},u=p('<h3 id="端口占用" tabindex="-1"><a class="header-anchor" href="#端口占用"><span>端口占用</span></a></h3><ol><li>使用<code>ps -ef|grep [占用端口号|进程名称]</code>来查看进程id，获取进程id后使用<code>kill -9 id</code>来强制关闭应用。</li><li>使用<code>lsof -i:[端口号]</code> 获取<code>PID</code></li><li>使用<code>killall</code>会杀死指定名称的<mark>所有进程</mark><code>killall -9 [process_name]</code>。</li><li>使用<code>pkill</code> 也会通过进程名来杀死进程，但是可以将信号发给指定用户(<mark>踢某人下线</mark>)，较于<code>killall</code>更为灵活 <code>pkill -9 [process_name]</code>。</li></ol>',2),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"kill"),l(),e("span",{class:"token parameter variable"},"-9"),l(),e("span",{class:"token function"},"id"),l(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"killall"),l(),e("span",{class:"token parameter variable"},"-9"),l(` edge
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pkill"),l(),e("span",{class:"token parameter variable"},"-9"),l(` edge
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function _(v,b){const o=c("CodeTabs");return s(),d("div",null,[u,r(o,{id:"25",data:[{id:"kill"},{id:"killall"},{id:"pkill"}],active:0},{title0:a(({value:t,isActive:i})=>[l("kill")]),title1:a(({value:t,isActive:i})=>[l("killall")]),title2:a(({value:t,isActive:i})=>[l("pkill")]),tab0:a(({value:t,isActive:i})=>[h]),tab1:a(({value:t,isActive:i})=>[k]),tab2:a(({value:t,isActive:i})=>[g]),_:1})])}const y=n(m,[["render",_],["__file","linux.html.vue"]]),T=JSON.parse('{"path":"/notes/order/linux.html","title":"Linux 相关","lang":"zh-CN","frontmatter":{"title":"Linux 相关","icon":"fab fa-linux","category":"note","tag":["linux"],"description":"端口占用 使用ps -ef|grep [占用端口号|进程名称]来查看进程id，获取进程id后使用kill -9 id来强制关闭应用。 使用lsof -i:[端口号] 获取PID 使用killall会杀死指定名称的所有进程killall -9 [process_name]。 使用pkill 也会通过进程名来杀死进程，但是可以将信号发给指定用户(踢某人下线...","head":[["meta",{"property":"og:url","content":"https://zarttic.github.io/notes/order/linux.html"}],["meta",{"property":"og:site_name","content":"文档库"}],["meta",{"property":"og:title","content":"Linux 相关"}],["meta",{"property":"og:description","content":"端口占用 使用ps -ef|grep [占用端口号|进程名称]来查看进程id，获取进程id后使用kill -9 id来强制关闭应用。 使用lsof -i:[端口号] 获取PID 使用killall会杀死指定名称的所有进程killall -9 [process_name]。 使用pkill 也会通过进程名来杀死进程，但是可以将信号发给指定用户(踢某人下线..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-17T11:16:39.000Z"}],["meta",{"property":"article:author","content":"zarttic"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:modified_time","content":"2024-03-17T11:16:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 相关\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-17T11:16:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zarttic\\",\\"url\\":\\"https://github.com/zarttic\\"}]}"]]},"headers":[{"level":3,"title":"端口占用","slug":"端口占用","link":"#端口占用","children":[]}],"git":{"createdTime":1710153601000,"updatedTime":1710674199000,"contributors":[{"name":"liyajun","email":"332209078@qq.com","commits":3},{"name":"juanxincai","email":"332209078@qq.com","commits":1},{"name":"zarttic","email":"332209078@qq.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"notes/order/linux.md","localizedDate":"2024年3月11日","autoDesc":true,"excerpt":"<h3>端口占用</h3>\\n<ol>\\n<li>使用<code>ps -ef|grep [占用端口号|进程名称]</code>来查看进程id，获取进程id后使用<code>kill -9 id</code>来强制关闭应用。</li>\\n<li>使用<code>lsof -i:[端口号]</code> 获取<code>PID</code></li>\\n<li>使用<code>killall</code>会杀死指定名称的<mark>所有进程</mark><code>killall -9 [process_name]</code>。</li>\\n<li>使用<code>pkill</code> 也会通过进程名来杀死进程，但是可以将信号发给指定用户(<mark>踢某人下线</mark>)，较于<code>killall</code>更为灵活 <code>pkill -9 [process_name]</code>。</li>\\n</ol>"}');export{y as comp,T as data};