"use strict";(self.webpackChunkposts=self.webpackChunkposts||[]).push([[515],{2305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"git-from-zero/configuration","title":"Configuring Git","description":"We\u2019ve got Git installed, but now it\u2019s time to make it our own! Let\u2019s configure it so it works the way we want and make our life a little easier.","source":"@site/docs/git-from-zero/configuration.md","sourceDirName":"git-from-zero","slug":"/gfz/configuration","permalink":"/docs/gfz/configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"slug":"/gfz/configuration","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Installing Git","permalink":"/docs/gfz/installation"}}');var o=n(4848),r=n(8453);const s={slug:"/gfz/configuration",sidebar_position:3},l="Configuring Git",d={},c=[{value:"Git Identity",id:"git-identity",level:2},{value:"Colored Output",id:"colored-output",level:2},{value:"SSH Keys",id:"ssh-keys",level:2},{value:"Generating a New SSH Key",id:"generating-a-new-ssh-key",level:3},{value:"Getting Your Public Key",id:"getting-your-public-key",level:3},{value:"Adding the Key to Your Remote Git Account",id:"adding-the-key-to-your-remote-git-account",level:3},{value:"Adding Your Key to the SSH Agent",id:"adding-your-key-to-the-ssh-agent",level:3},{value:"Testing the key",id:"testing-the-key",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"configuring-git",children:"Configuring Git"})}),"\n",(0,o.jsx)(t.p,{children:"We\u2019ve got Git installed, but now it\u2019s time to make it our own! Let\u2019s configure it so it works the way we want and make our life a little easier."}),"\n",(0,o.jsx)(t.h2,{id:"git-identity",children:"Git Identity"}),"\n",(0,o.jsx)(t.p,{children:"First things first: Git needs to know who you are so it can tag your commits with your name and email. Let's tell Git who you are:"}),"\n",(0,o.jsx)(t.p,{children:"Start by setting your name:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'git config --global user.name "Your Name"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Next, give Git your email:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'git config --global user.email "your.email@example.com"\n'})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Pro tip"}),": Use the same email you registered with on GitHub/GitLab or any other Git provider you're using. This makes things smooth when pushing your commits."]}),"\n",(0,o.jsx)(t.h2,{id:"colored-output",children:"Colored Output"}),"\n",(0,o.jsx)(t.p,{children:"Git's output is functional, but let\u2019s make it prettier! You can enable color to give it some flair. Just type:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"git config --global color.ui auto\n"})}),"\n",(0,o.jsx)(t.h2,{id:"ssh-keys",children:"SSH Keys"}),"\n",(0,o.jsx)(t.p,{children:"SSH keys are your ticket to connecting securely with remote repositories (like GitHub or GitLab) without having to enter your password every time. It\u2019s secure and super handy \u2014 as long as you keep your private key to yourself!"}),"\n",(0,o.jsx)(t.h3,{id:"generating-a-new-ssh-key",children:"Generating a New SSH Key"}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s generate a shiny new SSH key:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'ssh-keygen -t ed25519 -C "your_email@example.com"\n'})}),"\n",(0,o.jsx)(t.p,{children:"If you\u2019re on an older system and don\u2019t support ED25519 (don\u2019t worry, we\u2019ve all been there), you can use RSA instead:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'ssh-keygen -t rsa -b 4096 -C "your_email@example.com"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Boom! You\u2019ve got an SSH key. Now, remember: only share your ",(0,o.jsx)(t.strong,{children:"public"})," key. Keep that private key locked up tight."]}),"\n",(0,o.jsx)(t.h3,{id:"getting-your-public-key",children:"Getting Your Public Key"}),"\n",(0,o.jsx)(t.p,{children:"Next, let\u2019s grab your public key so we can add it to your remote Git account. Run this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"cat ~/.ssh/id_ed25519.pub\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now just copy the output (your public key) \u2014 we\u2019ll need it in the next step."}),"\n",(0,o.jsx)(t.h3,{id:"adding-the-key-to-your-remote-git-account",children:"Adding the Key to Your Remote Git Account"}),"\n",(0,o.jsx)(t.p,{children:"There are lots of Git providers out there, but we\u2019ll use GitHub as an example (since it\u2019s the most popular). Here\u2019s how to add your SSH key to GitHub:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Go to your GitHub profile settings."}),"\n",(0,o.jsxs)(t.li,{children:["In the left-hand menu, click on ",(0,o.jsx)(t.strong,{children:"SSH and GPG keys"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Hit ",(0,o.jsx)(t.strong,{children:"Add New SSH Key"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Paste in the public key you copied earlier."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"adding-your-key-to-the-ssh-agent",children:"Adding Your Key to the SSH Agent"}),"\n",(0,o.jsx)(t.p,{children:"To make sure your SSH key is used properly, we need to add it to the SSH agent. Just run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'eval "$(ssh-agent -s)"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Then add your key to the agent:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"ssh-add ~/.ssh/id_ed25519\n"})}),"\n",(0,o.jsx)(t.h3,{id:"testing-the-key",children:"Testing the key"}),"\n",(0,o.jsx)(t.p,{children:"Finally, let\u2019s make sure everything\u2019s working! Try connecting to GitHub via SSH to see if your setup is good to go:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"ssh git@github.com\n"})}),"\n",(0,o.jsx)(t.p,{children:"If it works, you should see something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[10.11.2024 03:23:17] [buxx@Halcyon] [~/Desktop/Projects/post]\n$ ssh git@github.com\nPTY allocation request failed on channel 0\nHi herobuxx! You've successfully authenticated, but GitHub does not provide shell access.\nConnection to github.com closed.\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);