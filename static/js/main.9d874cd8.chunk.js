(this["webpackJsonpreact-feed"]=this["webpackJsonpreact-feed"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),r=c(4),a=c.n(r),l=(c(10),c(2)),j=(c(11),function(){return Object(n.jsx)("div",{className:"loader-container",children:Object(n.jsx)("div",{className:"loader",children:"Loading..."})})}),o=(c(12),function(e){var t=e.articlesData,c=Object(s.useState)(6),i=Object(l.a)(c,2),r=i[0],a=i[1],o=function e(){window.scrollY+window.innerHeight>document.body.offsetHeight-250&&setTimeout((function(){a(r+6),window.removeEventListener("scroll",e)}),500)};Object(s.useEffect)((function(){window.addEventListener("scroll",o)}),[r]);var d=t.filter((function(e,t){return t<r})).map((function(e,t){return Object(n.jsx)("a",{href:e.url,target:"_blank",className:"link",children:Object(n.jsxs)("div",{className:"article",children:[Object(n.jsxs)("div",{className:"text-container",children:[Object(n.jsx)("h1",{className:"article-title",children:e.title}),Object(n.jsxs)("h2",{children:[e.excerpt.slice(0,100),"..."]}),Object(n.jsx)("div",{className:"arrow"})]}),Object(n.jsx)("div",{className:"article-image-div",children:Object(n.jsx)("img",{src:e.thumb,alt:""})})]})},t)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"articles",children:d}),(t.length>r||!t.length)&&Object(n.jsx)(j,{})]})}),d=(c(13),function(){return Object(n.jsx)("div",{className:"Header",children:Object(n.jsxs)("div",{className:"header-texts",children:[Object(n.jsx)("h1",{children:"Must read."}),Object(n.jsx)("h2",{children:"[best news only]"})]})})}),u=(c(14),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("https://pastebin.pl/view/raw/e1658aa0").then((function(e){return e.json()})).then((function(e){i(e.posts)}))}),[]),console.log(),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{className:"articles-container",children:Object(n.jsx)(o,{articlesData:c})})]})}),b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.9d874cd8.chunk.js.map