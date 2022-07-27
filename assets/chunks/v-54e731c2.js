"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7361],{1128:(e,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-54e731c2","path":"/services/TTRSS.html","title":"Tiny Tiny RSS","lang":"zh-CN","frontmatter":{"article":false,"title":"Tiny Tiny RSS","order":3,"summary":"Tiny Tiny RSS 推荐用 Awesome TTRSS 的 Docker 镜像，搭建步骤参考 群晖 NAS 上搭建 Docker。 注意： 定期备份：偏好设置 - 订阅源 导出订阅源和 tt-rss 设置。; Awesome TTRSS 镜像不含插件「notitlecounters」，导致 TTRSS 网页标题会显示未读 RSS 数量。; Tiny ","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/TTRSS.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"Tiny Tiny RSS"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T04:16:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T04:16:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"手动部署","slug":"手动部署","children":[]}],"git":{"createdTime":1658895397000,"updatedTime":1658895397000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":1}]},"readingTime":{"minutes":2.07,"words":620},"filePathRelative":"services/TTRSS.md","localizedDate":"2022年7月27日"}')},9321:(e,n,s)=>{s.r(n),s.d(n,{default:()=>F});var t=s(8e3);const r=(0,t.Uk)("Tiny Tiny RSS 推荐用 "),a={href:"http://ttrss.henry.wang/zh/",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("Awesome TTRSS"),l=(0,t.Uk)(" 的 Docker 镜像，搭建步骤参考 "),i=(0,t.Uk)("群晖 NAS 上搭建 Docker"),c=(0,t.Uk)("。"),p=(0,t._)("p",null,"注意：",-1),d=(0,t._)("li",null,[(0,t.Uk)("定期备份："),(0,t._)("code",null,"偏好设置 - 订阅源"),(0,t.Uk)(" 导出订阅源和 tt-rss 设置。")],-1),u=(0,t._)("li",null,"Awesome TTRSS 镜像不含插件「no_title_counters」，导致 TTRSS 网页标题会显示未读 RSS 数量。",-1),m={href:"https://tt-rss.org/wiki/FAQ",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Uk)("Tiny Tiny RSS – FAQ"),h=(0,t.Uk)("主题："),k={href:"https://github.com/levito/tt-rss-feedly-theme",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("feedly-sepia.css"),T=(0,t._)("h2",{id:"手动部署",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#手动部署","aria-hidden":"true"},"#"),(0,t.Uk)(" 手动部署")],-1),v=(0,t._)("p",null,"虽然 Tiny Tiny RSS 官方推荐用 Docker 部署，不过手动部署也很简单，挑选适合自己的方式即可。",-1),b=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t.Uk)("进入指定目录，"),(0,t._)("code",null,"cd /www/wwwroot/"),(0,t.Uk)("。")]),(0,t._)("li",null,[(0,t.Uk)("新建 rss 目录，并下载最新 tt-rss，"),(0,t._)("code",null,"git clone https://git.tt-rss.org/fox/tt-rss.git rss"),(0,t.Uk)("。")]),(0,t._)("li",null,"打开 rss 链接，页面会出现指定要求，如：提升文件权限，删除禁用函数 passthru，安装 php 扩展-fileinfo。配置好后，重新加载 php 配置。")],-1),g=(0,t.Uk)("部署完成后，需要让 TTRSS 定期更新 RSS，步骤参考 "),_={href:"https://tt-rss.org/wiki/UpdatingFeeds",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("Tiny Tiny RSS – Updating Feeds"),R=(0,t.Uk)("。如果遇到提示 daemon 未启动，可删除 "),y=(0,t._)("code",null,"lock/update_daemon.lock",-1),U=(0,t.Uk)("和"),A=(0,t._)("code",null,"update_daemon.stamp",-1),x=(0,t.Uk)("。"),D=(0,t.Uk)("阿里云"),N={href:"https://www.cnblogs.com/imyalost/p/9801426.html",target:"_blank",rel:"noopener noreferrer"},W=(0,t.Uk)("用非 root 账户登录远程 vnc"),z=(0,t.Uk)("，然后启动 RSS 更新 (默认 2 分钟)。远程 vnc 黑屏时，点左上角「发送远程命令」，点击菜单栏或「关机后重新启动」后不再黑屏。不用直接重启，否则报错。"),C=(0,t.uE)('<ul><li>指定 PHP 版本来运行：<code>/www/server/php/74/bin/php /www/wwwroot/rss/update.php --daemon</code>。</li><li>不指定版本运行：<code>php /www/wwwroot/rss/update.php --daemon</code>。</li></ul><p>服务器使用定时任务更新 TTRSS：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">crontab</span> -e <span class="token comment">#进入 Cpanel 面板添加定时任务</span>\n*/15 * * * * /usr/bin/php /www/wwwroot/rss/update.php --feeds --quiet <span class="token comment">#只安装了一个php</span>\n*/15 * * * * /www/server/php/74/bin/php /www/wwwroot/rss/update.php --feeds --quiet <span class="token comment">#安装了多个php</span>\n<span class="token comment"># 同时按下ctrl+c退出编辑模式，按下shift+: 输入wq 退出 crontab</span>\n*/15 * * * *表示每隔15分钟更新一次，你可以自己改成其它的。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器或 nginx 重启后，TTRss 会出现文件夹权限丢失，需重新设置权限。建议将此步骤设为定期任务自动执行。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> -R <span class="token number">777</span> /www/wwwroot/rss/cache/images\n<span class="token function">chmod</span> -R <span class="token number">777</span> /www/wwwroot/rss/cache/upload\n<span class="token function">chmod</span> -R <span class="token number">777</span> /www/wwwroot/rss/cache/export\n<span class="token function">chmod</span> -R <span class="token number">777</span> /www/wwwroot/rss/feed-icons\n<span class="token function">chmod</span> -R <span class="token number">777</span> /www/wwwroot/rss/lock\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>升级 Tiny Tiny RSS：进行 TTRSS 目录后执行升级命令 <code>git pull origin master</code>。无法升级时重命名 TTRSS 路径，全新下载后没问题再删除。数据库没变化就没事，主题重新安装。</p>',6),q={},F=(0,s(1935).Z)(q,[["render",function(e,n){const s=(0,t.up)("ExternalLinkIcon"),q=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",null,[r,(0,t._)("a",a,[o,(0,t.Wm)(s)]),l,(0,t.Wm)(q,{to:"/services/NAS.html#nas-docker"},{default:(0,t.w5)((()=>[i])),_:1}),c]),p,(0,t._)("ul",null,[d,u,(0,t._)("li",null,[(0,t._)("a",m,[w,(0,t.Wm)(s)])]),(0,t._)("li",null,[h,(0,t._)("a",k,[S,(0,t.Wm)(s)])])]),T,v,b,(0,t._)("p",null,[g,(0,t._)("a",_,[f,(0,t.Wm)(s)]),R,y,U,A,x]),(0,t._)("p",null,[D,(0,t._)("a",N,[W,(0,t.Wm)(s)]),z]),C])}]])},1935:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,t]of n)s[e]=t;return s}}}]);