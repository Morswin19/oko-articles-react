(this["webpackJsonpreact-feed"]=this["webpackJsonpreact-feed"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(4),a=n.n(r),l=(n(10),n(2)),o=(n(11),function(e){var t=e.articlesData.map((function(e,t){return Object(c.jsx)("a",{href:"https://jsonplaceholder.typicode.com/",target:"_blank",className:"link",children:Object(c.jsxs)("div",{className:"article",children:[Object(c.jsxs)("div",{className:"text-container",children:[Object(c.jsx)("h1",{className:"article-title",children:"Title nr 1"}),Object(c.jsx)("h2",{children:e.title}),Object(c.jsx)("div",{className:"arrow"})]}),Object(c.jsx)("div",{className:"article-image-div",children:Object(c.jsx)("img",{src:e.thumb,alt:""})})]})},t)}));return Object(c.jsx)(c.Fragment,{children:t})}),j=(n(12),function(){return Object(c.jsx)("div",{className:"Header",children:Object(c.jsxs)("div",{className:"header-texts",children:[Object(c.jsx)("h1",{children:"Must read."}),Object(c.jsx)("h2",{children:"[best news only]"})]})})}),d=function(){return Object(c.jsx)("div",{children:"To ja - Loader Guinea Pig"})},u=(n(13),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(6),a=Object(l.a)(r,2),u=a[0],b=a[1],h=Object(s.useState)(),f=Object(l.a)(h,2),O=f[0],x=f[1],m=function e(){window.scrollY+window.innerHeight>document.body.offsetHeight-50&&setTimeout((function(){b(u+6),window.removeEventListener("scroll",e)}),200)};return Object(s.useEffect)((function(){fetch("https://pastebin.pl/view/raw/e1658aa0").then((function(e){return e.json()})).then((function(e){i(e.posts.filter((function(e,t){return t<u}))),x(e.posts.length)}))}),[u]),Object(s.useEffect)((function(){window.addEventListener("scroll",m)}),[u]),console.log(),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(j,{}),Object(c.jsx)("div",{className:"articles",children:Object(c.jsx)(o,{articlesData:n})}),(O>u||!O)&&Object(c.jsx)(d,{})]})}),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.51a7bafd.chunk.js.map