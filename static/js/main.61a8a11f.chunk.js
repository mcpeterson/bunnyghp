(this.webpackJsonpbunnyghp=this.webpackJsonpbunnyghp||[]).push([[0],{14:function(t,e,o){"use strict";o.r(e);var c=o(2),a=o.n(c),n=o(6),r=o.n(n),s="".concat("/bunnyghp","/"),i="".concat(s,"help"),u=o(1),l=o(7),p=":asset(pr|issue|i)",h=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t){case"pr":return"pull";case"issue":case"i":return e?"issues":"issue";default:return""}},m=function(){return[{template:"gh ".concat(k),toUrl:function(t){var e=t.person;return"https://github.com/".concat(e)},example:"gh johndoe",desc:"Go to a person's Github profile."}]},d=function(t){return[{template:"gh me",toUrl:function(){return"https://github.com/".concat(t)},desc:"Go to your Github profile."},{template:"gh i",toUrl:function(){return"https://github.com/issues?q=is%3Aissue+is%3Aopen+author%3A".concat(t,"+archived%3Afalse+sort%3Aupdated-desc")},desc:"Go to your open issues."},{template:"gh pr",toUrl:function(){return"https://github.com/pulls?q=is%3Apr+is%3Aopen+author%3A".concat(t,"+archived%3Afalse+sort%3Aupdated-desc")},desc:"Go to your open pull requests."}]},b=function(t){return[{template:"gh ".concat(p," ").concat(x),toUrl:function(e){var o=e.asset,c=e.number;return"https://github.com/".concat(t,"/").concat(h(o),"/").concat(c)},example:"gh pr|i|issue 123",desc:"Go to an issue or pull request for ".concat(t," by number.")},{template:"gh ".concat(x),toUrl:function(e){var o=e.number;return"https://github.com/".concat(t,"/issues/").concat(o)},example:"gh 123",desc:"Go to an issue or pull request for ".concat(t," by number.")},{template:"gh r ".concat(p),toUrl:function(e){var o=e.asset;return"https://github.com/".concat(t,"/").concat(h(o,!0),"?q=is%3A").concat(h(o),"+is%3Aopen+sort%3Aupdated-desc")},example:"gh r pr|i|issue",desc:"Go to open issues or pull requests for ".concat(t,".")},{template:"gh r ".concat(x),toUrl:function(e){var o=e.number;return"https://github.com/".concat(t,"/issues/").concat(o)},example:"gh r 123",desc:"Go to open issues or pull requests for ".concat(t," by number.")},{template:"gh r",toUrl:function(){return"https://github.com/".concat(t)},desc:"Go to ".concat(t,".")}]},g=function(){return[{template:"gh ".concat(w," ").concat(p," ").concat(x),toUrl:function(t){var e=t.repo,o=t.asset,c=t.number;return"https://github.com/".concat(e,"/").concat(h(o,!0),"/").concat(c)},example:"gh johndoe/repo pr|i|issue 123",desc:"Go to a repo's Github issue or pull request by number."},{template:"gh ".concat(w," ").concat(x),toUrl:function(t){var e=t.repo,o=t.number;return"https://github.com/".concat(e,"/issues/").concat(o)},example:"gh johndoe/repo 123",desc:"Go to a repo's Github issue or pull request by number."},{template:"gh ".concat(w," ").concat(p),toUrl:function(t){var e=t.repo,o=t.asset;return"https://github.com/".concat(e,"/").concat(h(o,!0),"?q=is%3A").concat(h(o),"+is%3Aopen+sort%3Aupdated-desc")},example:"gh johndoe/repo pr|i|issue",desc:"Go to a repo's Github issues or pull requests."},{template:"gh ".concat(w),toUrl:function(t){var e=t.repo;return"https://github.com/".concat(e)},example:"gh johndoe/repo",desc:"Go to a Github repository."}]},f=function(t){var e=[].concat(Object(u.a)(g()),Object(u.a)(m()));return(null===t||void 0===t?void 0:t.repo)&&(e=[].concat(Object(u.a)(b(null===t||void 0===t?void 0:t.repo)),Object(u.a)(e))),(null===t||void 0===t?void 0:t.person)&&(e=[].concat(Object(u.a)(d(null===t||void 0===t?void 0:t.person)),Object(u.a)(e))),[].concat(Object(u.a)(e),Object(u.a)([{template:"gh",toUrl:function(){return"https://github.com"},desc:"Go to Github."}]))},v={delimiter:" ?"},j="( |$)",y="".concat(j,":query(.+)?"),k=":person([a-zA-Z0-9_]+)",w=":repo(\\w+/\\w+)",x=":number(\\d+)",q=function(t,e){return(t.example||t.template).split(",")[0]<(e.example||e.template).split(",")[0]?-1:1},U=function(t){var e=(t=[].concat(Object(u.a)([{template:":help(h|help|home)",toUrl:function(){return s},example:"h|help|home",desc:"View how to use bunnyghp."}]),Object(u.a)(t))).map((function(t){var e=t.template,o=t.toUrl,c=t.example,a=t.desc,n=Object(l.a)(e,v);return{match:n,toUrl:function(t){var e=n(t);return!!e&&o(e.params)},example:c||e,desc:a}}));return{commands:e,toUrl:function(t){var o;return(null===(o=e.find((function(e){return(0,e.match)(t)})))||void 0===o?void 0:o.toUrl(t))||!1}}},A=function(t){var e;return[].concat(Object(u.a)(function(t){var e=[];t&&(e=(e=[{template:"i".concat(y),toUrl:function(e){var o=e.query;return"https://github.com/elastic/kibana/issues?q=is%3Aissue+is%3Aopen+assignee%3A".concat(t,"+archived%3Afalse+sort%3Aupdated-desc").concat(o?"+".concat(o):"")},example:"i, i flaky test",desc:"Go to open Kibana issues for ".concat(t,", and optionally search.")},{template:"pr".concat(y),toUrl:function(e){var o=e.query;return"https://github.com/pulls?q=is%3Apr+is%3Aopen+author%3A".concat(t,"+archived%3Afalse+sort%3Aupdated-desc").concat(o?"+".concat(o):"")},example:"pr, pr test fix",desc:"Go to open Kibana pull requests for ".concat(t,", and optionally search.")},{template:"blockers".concat(j,":release?"),toUrl:function(e){var o=e.release;return"https://github.com/elastic/kibana/issues?q=is%3Aopen+assignee%3A".concat(t,"+sort%3Aupdated-desc+label%3Ablocker").concat(o?"%2Cv".concat(o):"")},desc:"View Kibana blocker issues assigned to ".concat(t,", and optionally filter by a release."),example:"blockers, blockers 7.15.0"},{template:"k me",toUrl:function(){return"https://github.com/".concat(t,"/kibana/")},desc:"Go to the main branch of the ".concat(t,"/kibana repo.")}]).sort(q));var o=[{template:"n",toUrl:function(){return"https://github.com/notifications?query=repo%3Aelastic%2Fkibana+is%3Aunread"},desc:"View unread notifications for elastic/kibana"},{template:"t :team",toUrl:function(t){var e=t.team;return"https://github.com/orgs/elastic/teams/kibana-".concat(e)},desc:"Go to a Kibana Team homepage on Github.",example:"t ops, t presentation"},{template:"tl :team",toUrl:function(t){var e=t.team;return"https://github.com/elastic/kibana/labels/Team%3A".concat(e)},desc:"Go to a team's issue/pr label.",example:"tl, tl presentation"},{template:"k".concat(y),toUrl:function(t){var e=t.query;return e?"https://github.com/elastic/kibana/search?q=".concat(e):"https://github.com/elastic/kibana/"},desc:"Go to the main branch of the elastic/kibana repo, and optionally search the codebase.",example:"k, k toExpression"},{template:"k ".concat(x),toUrl:function(t){var e=t.number;return"https://github.com/elastic/kibana/issues/".concat(e)},example:"k 24924",desc:"Go to an issue, pull request for Kibana, by number."},{template:"k i".concat(y),toUrl:function(t){var e=t.query;return"https://github.com/elastic/kibana/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc".concat(e?"+".concat(e):"")},example:"k i, k i test failure",desc:"Go to Kibana open issues, and optionally search"},{template:"k pr".concat(y),toUrl:function(t){var e=t.query;return"https://github.com/elastic/kibana/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc".concat(e?"+".concat(e):"")},example:"k pr, k pr fix failure",desc:"Go to Kibana open pull requests, and optionally search"},{template:"k blockers".concat(j,":release?"),toUrl:function(t){var e=t.release;return"https://github.com/elastic/kibana/issues?q=is%3Aopen+sort%3Aupdated-desc+label%3Ablocker".concat(e?"%2Cv".concat(e):"")},desc:"View Kibana blocker issues, and optionally filter by a release.",example:"k blockers, k blockers 7.15.0"},{template:"cd".concat(y),toUrl:function(t){var e=t.query;return e?"https://discuss.elastic.co/tags/c/elastic-stack/kibana/".concat(e):"https://discuss.elastic.co/c/elastic-stack/kibana"},desc:"View recent community discussions, optionally by tag",example:"cd, cd canvas"},{template:"ci".concat(j,":release?"),toUrl:function(t){var e=t.release;return"https://kibana-ci.elastic.co/".concat(e?"job/elastic+kibana+".concat(e):"")},example:"ci, ci 7.15",desc:"Go to CI, and optionally the build for a specific Kibana release."},{template:"eui",toUrl:function(){return"https://github.com/elastic/eui"},desc:"Go to the main branch of the EUI repository."},{template:"docs",toUrl:function(){return"https://docs.elastic.dev/kibana-dev-docs/getting-started/welcome"},desc:"Visit the Kibana Dev Docs."}];return[].concat(Object(u.a)(e),Object(u.a)(o.sort(q)))}(null===t||void 0===t||null===(e=t.github)||void 0===e?void 0:e.person)),Object(u.a)(f(null===t||void 0===t?void 0:t.github)),Object(u.a)([{template:"g".concat(y),toUrl:function(t){var e=t.query;return"https://www.google.com".concat(e?"/search?q=".concat(e):"")},example:"g how to google",desc:"Search Google, or just go to Google."}]),Object(u.a)([{template:"lol",toUrl:function(){return"http://icanhascheezburger.com/?random"},desc:"a random lolcat"},{template:"hoo :query",toUrl:function(t){var e=t.query;return"http://haskell.org/hoogle/?q=".concat(e)},example:"hoo how to hoogle",desc:"a hoogle (haskell + google) search"},{template:"rickroll",toUrl:function(){return"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},desc:"You Just Got Rick Roll'd By bunnyghp!"},{template:"fb".concat(y),toUrl:function(t){var e=t.query;return"http://www.facebook.com/".concat(e?"s.php?q=".concat(e,"&init=q"):"")},desc:"search www.facebook.com or go there",example:"fb mark zuckerberg"},{template:"yt".concat(y),toUrl:function(t){var e=t.query;return"http://www.youtube.com/".concat(e?"results?search_query=".concat(e,"&search_type=&aq=-1&oq="):"")},desc:"searches YouTube or goes to it",example:"yt i'm cool sushi 654 yeah"},{template:"bugcongress".concat(j).concat(":zip(\\d{5})","?"),toUrl:function(t){var e=t.zip;return"http://www.congress.org/congressorg/officials/congress/".concat(e?"?lvl=C&azip=".concat(e):"")},desc:"looks up your senator or congressperson based on a zip code you give it, or just view a list",example:"bugcongress 40207"},{template:"wa".concat(y),toUrl:function(t){var e=t.query;return"http://www.wolframalpha.com".concat(e?"/input/?i=".concat(e):"")},desc:"searches Wolfram Alpha or goes there",example:"wa ultimate question"},{template:"wikinvest".concat(y),toUrl:function(t){var e=t.query;return"http://www.wikinvest.com".concat(e?"/Special/Search?search=%s".concat(e):"")},desc:"searches Wikinvest or goes there",example:"wikinvest 2008 Financial Crisis"},{template:"time",toUrl:function(){return"https://time.is/"},desc:"shows the current time"}]))},O=o(0),G=function(t){var e=t.commands;return Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Command"}),Object(O.jsx)("th",{children:"Description"})]})}),Object(O.jsx)("tbody",{children:e.map((function(t,e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("code",{children:t.example})},"dt-".concat(e)),Object(O.jsx)("td",{children:t.desc},"dd-".concat(e))]},"f"+e)}))})]})},K=o(8),C=function(t){var e=t.registry,o=t.query,a=Object(c.useState)(o),n=Object(K.a)(a,2),r=n[0],i=n[1];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("form",{action:s,method:"GET",children:[Object(O.jsx)("input",{type:"text",name:"q",value:r,onChange:function(t){return i(t.target.value)},autoComplete:"off"}),Object(O.jsx)("input",{type:"submit"})]}),Object(O.jsx)("p",{children:e.toUrl(r)||Object(O.jsx)("br",{})})]})},z=function(t){var e=t.registry,o=t.query;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(C,{registry:e,query:o}),Object(O.jsx)(G,{commands:e.commands})]})})},S=function(){var t,e=new URLSearchParams(null===(t=window.location)||void 0===t?void 0:t.search),o=e.get("q")||"",c=!!e.get("s"),a=e.get("repo")||"elastic/kibana",n=e.get("person")||"clintandrewhall";return{path:location.pathname.replace(/\//g,""),query:o,params:{search:c,github:{repo:a,person:n}}}},V=s.replace(/\//g,""),E=function(){var t=S(),e=t.path,o=t.query,a=t.params,n=function(){var t=S().params;return Object(c.useMemo)((function(){return U(A(t))}),[t])}();if(e===V&&o){var r=n.toUrl(o);return r?(window.location.replace(r),null):a.search?(window.location.replace(n.toUrl("g ".concat(o))||s),null):(window.location.replace(s),null)}return e.startsWith(i)||e===V?Object(O.jsx)(z,{registry:n,query:o}):(window.location.replace(s),null)};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(E,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.61a8a11f.chunk.js.map