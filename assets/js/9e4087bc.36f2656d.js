"use strict";(self.webpackChunkposts=self.webpackChunkposts||[]).push([[711],{9331:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(6540);var r=s(8774),a=s(1312),i=s(1213),n=s(6266),c=s(781),l=s(1107),h=s(4848);function o(e){let{year:t,posts:s}=e;const a=(0,n.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.A,{as:"h3",id:t,children:t}),(0,h.jsx)("ul",{children:s.map((e=>{return(0,h.jsx)("li",{children:(0,h.jsxs)(r.A,{to:e.metadata.permalink,children:[(t=e.metadata.date,a.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function d(e){let{years:t}=e;return(0,h.jsx)("section",{className:"margin-vert--lg",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,h.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,h.jsx)(o,{...e})},t)))})})})}function m(e){let{archive:t}=e;const s=(0,a.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,a.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const t=e.reduce(((e,t)=>{const s=t.metadata.date.split("-")[0],r=e.get(s)??[];return e.set(s,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,s]=e;return{year:t,posts:s}}))}(t.blogPosts);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.be,{title:s,description:r}),(0,h.jsxs)(c.A,{children:[(0,h.jsx)("header",{className:"hero hero--primary",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(l.A,{as:"h1",className:"hero__title",children:s}),(0,h.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,h.jsx)("main",{children:n.length>0&&(0,h.jsx)(d,{years:n})})]})]})}}}]);