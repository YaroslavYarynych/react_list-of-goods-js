(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=n(1),a=n(18),l=n(3),u=n.n(l),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="alphabet",d="length",f=function(){var t=Object(o.useState)(null),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(""),l=Object(r.a)(c,2),f=l[0],g=l[1],p=function(t,e,n){var s=Object(i.a)(t);if(e)switch(e){case h:s.sort((function(t,e){return t.localeCompare(e)}));break;case d:s.sort((function(t,e){return t.length-e.length}));break;default:return 0}return n?s.reverse():s}(j,n,f),O=null!==n||"reverse"===f;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!f}),onClick:function(){return g(f?"":"reverse")},children:"Reverse"}),O&&Object(b.jsx)("button",{type:"button",className:u()("button",{"is-danger is-light":n||f}),onClick:function(){s(null),g("")},children:"Reset"})]}),Object(b.jsx)("ul",{children:p.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},Object(a.a)())}))})]})};c.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2055bc4a.chunk.js.map