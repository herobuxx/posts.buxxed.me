"use strict";(self.webpackChunkposts=self.webpackChunkposts||[]).push([[134],{6328:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var t=n(4848),r=n(8453);const s={slug:"/gfz/introduction",sidebar_position:1,pagination_next:null},i="Introduction to Git",a={id:"git-from-zero/introduction",title:"Introduction to Git",description:"Git is one of the most popular tools for version control. It\u2019s free, open-source, fast, and used everywhere!",source:"@site/docs/git-from-zero/introduction.md",sourceDirName:"git-from-zero",slug:"/gfz/introduction",permalink:"/docs/gfz/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/gfz/introduction",sidebar_position:1,pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"}},c={},h=[{value:"What is Version Control?",id:"what-is-version-control",level:2},{value:"So, What is Git? And Why Does It Exist?",id:"so-what-is-git-and-why-does-it-exist",level:2},{value:"Basic Git Terms You Should Know",id:"basic-git-terms-you-should-know",level:2}];function l(e){const o={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"introduction-to-git",children:"Introduction to Git"})}),"\n",(0,t.jsx)(o.p,{children:"Git is one of the most popular tools for version control. It\u2019s free, open-source, fast, and used everywhere!"}),"\n",(0,t.jsx)(o.h2,{id:"what-is-version-control",children:"What is Version Control?"}),"\n",(0,t.jsx)(o.p,{children:"Version control software (VCS) helps keep track of every change you make to your code. It makes it easy to look back at changes, undo mistakes, and work with others on the same project."}),"\n",(0,t.jsx)(o.h2,{id:"so-what-is-git-and-why-does-it-exist",children:"So, What is Git? And Why Does It Exist?"}),"\n",(0,t.jsx)(o.p,{children:"Out of all the version control systems, Git is super popular, especially because it\u2019s open-source. It was created by Linus Torvalds (the guy behind Linux) because there weren\u2019t many good, free options that could handle the big demands of developing the Linux kernel. So, in 2005, Git was born\u2014and it\u2019s been the go-to tool ever since!"}),"\n",(0,t.jsx)(o.h2,{id:"basic-git-terms-you-should-know",children:"Basic Git Terms You Should Know"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"1. Repository (Repo):"}),(0,t.jsx)(o.br,{}),"\n","A repo is where Git stores all your project files and the history of changes. It can live on your computer (local) or on platforms like GitHub or GitLab (remote). Think of it as your project\u2019s home base."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"2. Commit:"}),(0,t.jsx)(o.br,{}),"\n","A commit is like taking a snapshot of your project at a certain point in time. It saves your changes and gives them a unique ID (called a \u201chash\u201d). You also add a short message to describe what you did."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"3. Branch:"}),(0,t.jsx)(o.br,{}),"\n","A branch is like a separate workspace for your project. Git starts you off with a branch called ",(0,t.jsx)(o.code,{children:"main"})," (or ",(0,t.jsx)(o.code,{children:"master"}),"). You can make new branches to try out different features without messing up the main project."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"4. Clone:"}),(0,t.jsx)(o.br,{}),"\n","Cloning means making a full copy of a repo on your computer. When you clone, you get everything\u2014files, branches, and history."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"5. Fork:"}),(0,t.jsx)(o.br,{}),"\n","A fork is your own copy of someone else\u2019s repo. You can mess with it, make changes, and experiment without touching the original project. It\u2019s handy for contributing to open-source projects."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"6. Merge:"}),(0,t.jsx)(o.br,{}),"\n","Merging is how you bring changes from one branch into another, like when you finish a feature and want to add it back into the ",(0,t.jsx)(o.code,{children:"main"})," branch. Git tries to combine the changes for you, but if things don\u2019t line up perfectly, you\u2019ll get a \u201cconflict\u201d (more on that later)."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"7. Pull and Push:"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Pull:"})," Grab the latest changes from a remote repo and bring them to your local one."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Push:"})," Send your local changes up to the remote repo for everyone else to see."]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"8. Cherry-picking:"}),(0,t.jsx)(o.br,{}),"\n","Cherry-picking is when you take specific changes (commits) from one branch and apply them to another. It\u2019s like picking only the best parts and adding them to your project."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"9. Staging Area (Index):"}),(0,t.jsx)(o.br,{}),"\n","The staging area is like a waiting room for changes before they\u2019re committed. You use ",(0,t.jsx)(o.code,{children:"git add"})," to move changes here before committing them."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"10. Working Directory:"}),(0,t.jsx)(o.br,{}),"\n","This is where your project files live on your computer. Changes here are untracked by Git until you stage them."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"11. Conflict:"}),(0,t.jsx)(o.br,{}),"\n","A conflict happens when Git doesn\u2019t know how to merge changes from different branches, usually because two people changed the same part of a file. You\u2019ll have to jump in and decide which changes to keep."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"12. Rebase:"}),(0,t.jsx)(o.br,{}),"\n","Rebasing is another way to bring changes from one branch into another, but instead of merging, it rewrites the history to make it look cleaner. It\u2019s powerful but can be tricky, so use with care!"]})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>a});var t=n(6540);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);