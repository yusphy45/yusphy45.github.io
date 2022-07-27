"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7836],{5278:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r=JSON.parse('{"key":"v-41a0d636","path":"/_posts/2021-01-02-keepass_the_real_lastpassword.html","title":"抛弃 Lastpass，拥抱 KeePass-免费开源的绿色密码管理软件","lang":"zh-CN","frontmatter":{"title":"抛弃 Lastpass，拥抱 KeePass-免费开源的绿色密码管理软件","subtitle":"我的最后一款密码管理器","date":"2021-01-02T00:00:00.000Z","category":["工具"],"tag":["KeePass"],"order":-34,"summary":"用了 5 年的 Lastpass，但随着网站密码的增加，遇到的 bug 也越来越多。有次误操作，合并了 Lastpass 密码库，丢失了一大批密码，对云端密码库的信任度直接降为零。 之后，尝试了 1Password、Bitwarden、Enpass、Remembear 多种密码管理软件，最终选择开源免费且自动填充超强的 KeePass。 KeePass 的密","head":[["meta",{"property":"og:url","content":"https://newzone.top/_posts/2021-01-02-keepass_the_real_lastpassword.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"抛弃 Lastpass，拥抱 KeePass-免费开源的绿色密码管理软件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T04:16:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"KeePass"}],["meta",{"property":"article:published_time","content":"2021-01-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-27T04:16:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"KeePass 设置","slug":"keepass-设置","children":[{"level":3,"title":"选项设置","slug":"选项设置","children":[]},{"level":3,"title":"自动输入规则","slug":"自动输入规则","children":[]}]},{"level":2,"title":"必备插件","slug":"必备插件","children":[{"level":3,"title":"KeePassHttp","slug":"keepasshttp","children":[]},{"level":3,"title":"KPEnhancedEntryView","slug":"kpenhancedentryview","children":[]},{"level":3,"title":"AutoTypeSearch","slug":"autotypesearch","children":[]},{"level":3,"title":"KP Entry Templates","slug":"kp-entry-templates","children":[]},{"level":3,"title":"KPSourceForgeUpdateChecker","slug":"kpsourceforgeupdatechecker","children":[]}]},{"level":2,"title":"可选插件","slug":"可选插件","children":[{"level":3,"title":"KeeTrayTOTP","slug":"keetraytotp","children":[]},{"level":3,"title":"WebAutoType","slug":"webautotype","children":[]},{"level":3,"title":"Yet Another Favicon Downloader","slug":"yet-another-favicon-downloader","children":[]},{"level":3,"title":"KeePassRpc","slug":"keepassrpc","children":[]},{"level":3,"title":"KeePassNatMsg","slug":"keepassnatmsg","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","children":[]},{"level":2,"title":"KeePass 懒人包","slug":"keepass-懒人包","children":[]}],"git":{"createdTime":1658895397000,"updatedTime":1658895397000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":4.99,"words":1498},"filePathRelative":"_posts/2021-01-02-keepass_the_real_lastpassword.md","localizedDate":"2021年1月2日"}')},3288:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ze});var r=t(8e3);const s=(0,r._)("p",null,"用了 5 年的 Lastpass，但随着网站密码的增加，遇到的 bug 也越来越多。有次误操作，合并了 Lastpass 密码库，丢失了一大批密码，对云端密码库的信任度直接降为零。",-1),l=(0,r._)("p",null,[(0,r.Uk)("之后，尝试了 1Password、Bitwarden、Enpass、Remembear 多种密码管理软件，最终选择"),(0,r._)("strong",null,"开源免费且自动填充超强"),(0,r.Uk)("的 KeePass。")],-1),n=(0,r._)("p",null,[(0,r.Uk)("KeePass 的密码保存在本地的 "),(0,r._)("code",null,".kdbx"),(0,r.Uk)(" 数据库中，让你真正掌握自己的账号密码。搭配坚果云或同步盘的 KeePass，能实现密码多端同步，让手机与电脑使用同一密码库。")],-1),o=(0,r.Uk)("KeePass 官网下载（Windows）："),p={href:"https://keepass.info/download.html",target:"_blank",rel:"noopener noreferrer"},i=(0,r.Uk)("https://keepass.info/download.html"),h=(0,r.Uk)("。安卓推荐 "),d=(0,r._)("code",null,"Keepass2Android",-1),c=(0,r.Uk)("，iOS 推荐 "),u=(0,r._)("code",null,"Strongbox",-1),k=(0,r.Uk)(" 或 "),_=(0,r._)("code",null,"KeePassium",-1),g=(0,r.Uk)("。"),m=(0,r.uE)('<p>以下会逐步介绍 KeePass 的配置和插件。小白可直接看文章底部，下载懒人包，开包即用。</p><h2 id="keepass-设置" tabindex="-1"><a class="header-anchor" href="#keepass-设置" aria-hidden="true">#</a> KeePass 设置</h2><h3 id="选项设置" tabindex="-1"><a class="header-anchor" href="#选项设置" aria-hidden="true">#</a> 选项设置</h3><p>依次点击菜单栏 -「工具」-「选项」</p><ul><li>外观 - 主窗口，勾选「最小化到系统托盘（而不是任务栏）」；</li><li>外观 - 主窗口，勾选「关闭按钮 [X] 最小化主窗口，而不是退出程序」；</li><li>集成 - 全局热键，全局自动输入：<code>Ctrl+Alt+A</code>；</li><li>集成 - 全局热键，全局自动输入（仅密码）：<code>Ctrl+Alt+Shift+A</code>。</li></ul><h3 id="自动输入规则" tabindex="-1"><a class="header-anchor" href="#自动输入规则" aria-hidden="true">#</a> 自动输入规则</h3><p>选中左侧的数据库，右键点击「编辑群组」-「自动输入」，替换默认规则为 <code>^{SPACE}{DELAY 100}{CLEARFIELD}{USERNAME}{TAB}{PASSWORD}{DELAY 100}{ENTER}^{SPACE}</code>。</p><p><code>^{SPACE}</code> 即 <code>Ctrl+Space</code>，该热键能关闭或启用当前输入法。关闭输入法后，默认为美式键盘输入。</p><p><code>Ctrl+Space</code> 需在输入法编辑状态下才能生效，而密码区都禁用输入法编辑。因此，输入密码完成后，可能输入法并未重置，要按 <code>Ctrl+Space</code> 才能正常启用输入法。</p><h2 id="必备插件" tabindex="-1"><a class="header-anchor" href="#必备插件" aria-hidden="true">#</a> 必备插件</h2><p>连接浏览器、密码自动输入等主要功能，KeePass 均需配置插件。下载插件并放入指定文件夹 <code>\\Plugins</code>，重启 KeePass 即可使插件生效。</p>',11),f={id:"keepasshttp",tabindex:"-1"},K=(0,r._)("a",{class:"header-anchor",href:"#keepasshttp","aria-hidden":"true"},"#",-1),P=(0,r.Uk)(),b={href:"https://raw.github.com/pfn/keepasshttp/master/KeePassHttp.plgx",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("KeePassHttp"),U=(0,r._)("p",null,"KeePassHttp 需搭配浏览器插件 KeePassHttp-Connector，达到自动填充密码效果。",-1),w={id:"kpenhancedentryview",tabindex:"-1"},T=(0,r._)("a",{class:"header-anchor",href:"#kpenhancedentryview","aria-hidden":"true"},"#",-1),v=(0,r.Uk)(),x={href:"https://keepass.info/plugins.html#kpenhentryview",target:"_blank",rel:"noopener noreferrer"},A=(0,r.Uk)("KPEnhancedEntryView"),E=(0,r._)("p",null,"KPEnhancedEntryView 增强视觉效果，为达到最佳显示效果，按以下配置：",-1),S=(0,r._)("ul",null,[(0,r._)("li",null,"在主界面中点击【显示】→【窗口布局】→【平铺】；"),(0,r._)("li",null,"在主界面中点击【显示】→【列设置】，只选择：标题 →【确定】。大家也可以按自己要求选择。")],-1),C={id:"autotypesearch",tabindex:"-1"},W=(0,r._)("a",{class:"header-anchor",href:"#autotypesearch","aria-hidden":"true"},"#",-1),L=(0,r.Uk)(),z={href:"https://keepass.info/plugins.html#atsearch",target:"_blank",rel:"noopener noreferrer"},D=(0,r.Uk)("AutoTypeSearch"),N=(0,r._)("p",null,[(0,r.Uk)("AutoTypeSearch 提供全局框，输入热键 "),(0,r._)("code",null,"Ctrl+Shift+A"),(0,r.Uk)(" 后，搜索关键词输入密码。")],-1),R=(0,r._)("p",null,[(0,r._)("img",{src:"http://tc.seoipo.com/20191013083950.png",alt:"AutoTypeSearch 通用设置",loading:"lazy"})],-1),O={id:"kp-entry-templates",tabindex:"-1"},F=(0,r._)("a",{class:"header-anchor",href:"#kp-entry-templates","aria-hidden":"true"},"#",-1),H=(0,r.Uk)(),M={href:"https://github.com/mitchcapper/KPEntryTemplates",target:"_blank",rel:"noopener noreferrer"},Z=(0,r.Uk)("KP Entry Templates"),Y=(0,r._)("p",null,"配置方法：",-1),B=(0,r._)("ol",null,[(0,r._)("li",null,"点击 KeePass 主界面的【文件】→【数据库设置】→【高级】，在【模板记录组】中选择一个群组 →【确定】；"),(0,r._)("li",null,"返回主界面，点击步骤 1 中选择的群组，按 Ctrl+I 键（或点击上方工具栏的钥匙图标）添加记录；"),(0,r._)("li",null,[(0,r.Uk)("点击【自动输入】，勾选【双通道自动输入混淆】（"),(0,r._)("strong",null,"以后用模板添加记录时就不需要再勾选，一劳永逸"),(0,r.Uk)("）；")]),(0,r._)("li",null,"点击最左边的【Template】→【Init As Template】；"),(0,r._)("li",null,"配置所需模板 →【确定】。")],-1),I={id:"kpsourceforgeupdatechecker",tabindex:"-1"},V=(0,r._)("a",{class:"header-anchor",href:"#kpsourceforgeupdatechecker","aria-hidden":"true"},"#",-1),q=(0,r.Uk)(),X={href:"https://sourceforge.net/projects/kpsfupdatechecker/reviews",target:"_blank",rel:"noopener noreferrer"},j=(0,r.Uk)("KPSourceForgeUpdateChecker"),J=(0,r._)("p",null,"KeePass 菜单栏 - 帮助 - 检查更新，检查从 SourceForge 上的插件更新信息。",-1),G=(0,r._)("h2",{id:"可选插件",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#可选插件","aria-hidden":"true"},"#"),(0,r.Uk)(" 可选插件")],-1),Q={id:"keetraytotp",tabindex:"-1"},$=(0,r._)("a",{class:"header-anchor",href:"#keetraytotp","aria-hidden":"true"},"#",-1),ee=(0,r.Uk)(),ae={href:"https://github.com/victor-rds/KeeTrayTOTP/releases/",target:"_blank",rel:"noopener noreferrer"},te=(0,r.Uk)("KeeTrayTOTP"),re=(0,r.Uk)("如果你有更高安全要求，KeeTrayTOTP 能增加二次动态验证，使用参考 "),se={href:"https://www.cnblogs.com/tielemao/p/9613839.html",target:"_blank",rel:"noopener noreferrer"},le=(0,r.Uk)("使用 KeePass 管理两步验证"),ne=(0,r.Uk)("。"),oe={id:"webautotype",tabindex:"-1"},pe=(0,r._)("a",{class:"header-anchor",href:"#webautotype","aria-hidden":"true"},"#",-1),ie=(0,r.Uk)(),he={href:"https://keepass.info/plugins.html#webautotype",target:"_blank",rel:"noopener noreferrer"},de=(0,r.Uk)("WebAutoType"),ce=(0,r._)("p",null,"WebAutoType 是很多人的推荐插件，启动密码热键后会自动匹配当前网址、标题。这对于已经有大量密码的人来说，并不实用，可不安装。",-1),ue={id:"yet-another-favicon-downloader",tabindex:"-1"},ke=(0,r._)("a",{class:"header-anchor",href:"#yet-another-favicon-downloader","aria-hidden":"true"},"#",-1),_e=(0,r.Uk)(),ge={href:"https://keepass.info/plugins.html#yafd",target:"_blank",rel:"noopener noreferrer"},me=(0,r.Uk)("Yet Another Favicon Downloader"),fe=(0,r._)("p",null,"该插件能自动匹配下载网站图标，但会大幅增加数据库的大小。不在意界面美观度的话，无需安装 Yet Another Favicon Downloader。",-1),Ke={id:"keepassrpc",tabindex:"-1"},Pe=(0,r._)("a",{class:"header-anchor",href:"#keepassrpc","aria-hidden":"true"},"#",-1),be=(0,r.Uk)(),ye={href:"https://github.com/kee-org/keepassrpc/releases/",target:"_blank",rel:"noopener noreferrer"},Ue=(0,r.Uk)("KeePassRpc"),we=(0,r._)("p",null,[(0,r.Uk)("KeePassRpc 搭配浏览器插件 Kee，能实现"),(0,r._)("strong",null,"自动填充密码并登录"),(0,r.Uk)("。")],-1),Te=(0,r._)("p",null,"其他插件不能自动登录，只有 Kee 能做到该功能。使用 Kee 的自动登录功能后，少数页面会出现循环登录，需暂停 Kee 扩展来停止循环错误。",-1),ve=(0,r._)("p",null,[(0,r._)("img",{src:"http://tc.seoipo.com/2022-05-05-14-29-32.png",alt:"Kee 设置",loading:"lazy"})],-1),xe={id:"keepassnatmsg",tabindex:"-1"},Ae=(0,r._)("a",{class:"header-anchor",href:"#keepassnatmsg","aria-hidden":"true"},"#",-1),Ee=(0,r.Uk)(),Se={href:"https://github.com/smorks/keepassnatmsg",target:"_blank",rel:"noopener noreferrer"},Ce=(0,r.Uk)("KeePassNatMsg"),We=(0,r.uE)('<p>浏览器插件 KeePassHttp-Connector 已不再更新，有段时间甚至不兼容新版 KeePass。</p><p>如果遇到不兼容，可使用 KeePassNatMsg 和 KeePassXC-Browser 连接浏览器，本方案不支持搜狗浏览器。</p><blockquote><p>如果报错「proxy download error」，备份并删除文件夹 C:\\Users%Username%\\AppData\\Local\\KeePassNatMsg，然后重新加载 Native Messaging Host</p></blockquote><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><ul><li><p>同一密码能不能同时匹配多个网站？</p><p>不能，但可以在「高级 - 标记」上添加多个表格，用英文的逗号隔开。标记在全局匹配中可用于搜索。</p></li><li><p>同一网站有多个账户密码，如何将其中一个账户密码前置？</p><p>无法默认选择指定账户，但可通过插件 keepasshttp、keepassnatmsg，按 username 或 title 对账户进行排序。</p></li><li><p>Keepassxc 有官方浏览器插件，界面也比 KeePass 美观，为什么不推荐使用？</p><p>Keepassxc 是 KeePass 的衍生版。虽然 KeePass 配置比 Keepassxc 复杂，但操控性更强。长期使用，个人推荐 Keepass 原版。</p></li></ul><h2 id="keepass-懒人包" tabindex="-1"><a class="header-anchor" href="#keepass-懒人包" aria-hidden="true">#</a> KeePass 懒人包</h2>',6),Le=(0,r.Uk)("懒人包下载："),ze={href:"https://wwz.lanzouf.com/i8m0804lxp7g",target:"_blank",rel:"noopener noreferrer"},De=(0,r.Uk)("https://wwz.lanzouf.com/i8m0804lxp7g"),Ne=(0,r.uE)('<p>KeePass 懒人包为绿色版，集成了常用插件，建立数据库即可使用 KeePass。</p><p><strong>建立数据库：</strong></p><ol><li><p>解压懒人包，打开程序 <code>KeePass.exe</code>。</p></li><li><p>屏幕右下角托盘处，打开 KeePass。</p></li><li><p>依次点击 <code>菜单栏 - 文件 - 新建</code>，建立属于你的密码数据库。</p><p><img src="http://tc.seoipo.com/KeePass_new_kdbx.gif" alt="KeePass 懒人包设置" loading="lazy"></p></li></ol><p>懒人包集成插件：AutoTypeSearch，Entry Templates，KeePassHttp，KeePassNatMsg，KeePassRpc，KeeTrayTOTP，KPEnhancedEntryView，SourceForgeUpdateChecker，WebAutoType。</p><p><strong>参考资料：</strong></p>',5),Re={href:"https://blog.csdn.net/SingWarm/article/details/90669580",target:"_blank",rel:"noopener noreferrer"},Oe=(0,r.Uk)("Keepass 教程之二——完美的通用自动输入规则"),Fe={href:"https://www.cnblogs.com/tielemao/p/9613839.html",target:"_blank",rel:"noopener noreferrer"},He=(0,r.Uk)("使用 KeePass 管理两步验证"),Me={},Ze=(0,t(1935).Z)(Me,[["render",function(e,a){const t=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[s,l,n,(0,r._)("p",null,[o,(0,r._)("a",p,[i,(0,r.Wm)(t)]),h,d,c,u,k,_,g]),m,(0,r._)("h3",f,[K,P,(0,r._)("a",b,[y,(0,r.Wm)(t)])]),U,(0,r._)("h3",w,[T,v,(0,r._)("a",x,[A,(0,r.Wm)(t)])]),E,S,(0,r._)("h3",C,[W,L,(0,r._)("a",z,[D,(0,r.Wm)(t)])]),N,R,(0,r._)("h3",O,[F,H,(0,r._)("a",M,[Z,(0,r.Wm)(t)])]),Y,B,(0,r._)("h3",I,[V,q,(0,r._)("a",X,[j,(0,r.Wm)(t)])]),J,G,(0,r._)("h3",Q,[$,ee,(0,r._)("a",ae,[te,(0,r.Wm)(t)])]),(0,r._)("p",null,[re,(0,r._)("a",se,[le,(0,r.Wm)(t)]),ne]),(0,r._)("h3",oe,[pe,ie,(0,r._)("a",he,[de,(0,r.Wm)(t)])]),ce,(0,r._)("h3",ue,[ke,_e,(0,r._)("a",ge,[me,(0,r.Wm)(t)])]),fe,(0,r._)("h3",Ke,[Pe,be,(0,r._)("a",ye,[Ue,(0,r.Wm)(t)])]),we,Te,ve,(0,r._)("h3",xe,[Ae,Ee,(0,r._)("a",Se,[Ce,(0,r.Wm)(t)])]),We,(0,r._)("p",null,[Le,(0,r._)("a",ze,[De,(0,r.Wm)(t)])]),Ne,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",Re,[Oe,(0,r.Wm)(t)])]),(0,r._)("li",null,[(0,r._)("a",Fe,[He,(0,r.Wm)(t)])])])])}]])},1935:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,r]of a)t[e]=r;return t}}}]);