import{u as p,r as l,j as e,m as t}from"./index-CgcoMv2K.js";import{M as d}from"./meta-CDrZwXNR.js";import{T as m}from"./typewritingEffect-zPTS3bpe.js";function x(){const{slug:g}=p(),[r,c]=l.useState(!1),[i,s]=l.useState(null),a={title:"Sample Blog Post",date:"2024-01-15",content:`
      This is a sample blog post demonstrating the blog layout and styling of the portfolio website.
      
      ## Introduction
      
      Welcome to this sample blog post. This demonstrates how blog content is displayed 
      within the portfolio structure, including proper typography, spacing, and readability.
      
      ## Main Content
      
      Here's where the main content of the blog post would go. The styling supports:
      
      - **Bold text** for emphasis
      - *Italic text* for subtle emphasis  
      - Lists for organizing information
      - Code snippets and technical content
      - Links to external resources
      
      ### Subsections
      
      The blog supports multiple heading levels for organizing content hierarchically.
      This makes it easy to create well-structured, readable articles.
      
      ## Code Examples
      
      The blog also supports code blocks for technical content:
      
      \`\`\`javascript
      function greet(name) {
        return \`Hello, \${name}!\`;
      }
      \`\`\`
      
      ## Conclusion
      
      This demonstrates the blog functionality of the portfolio website. The styling 
      is clean, readable, and maintains consistency with the overall design system.
    `,tags:["Web Development","Portfolio","React"]};return e.jsxs(e.Fragment,{children:[e.jsx(d,{pageTitle:a.title,pageDescription:"A sample blog post demonstrating the blog layout and styling."}),e.jsx("div",{className:"flex flex-col min-h-dvh p-8 pt-24",children:e.jsxs("div",{className:"max-w-4xl mx-auto w-full",children:[e.jsxs(t.div,{className:"mb-8",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},onAnimationComplete:()=>c(!0),children:[e.jsx(t.div,{className:"mb-4",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:e.jsx(t.span,{className:"text-sm opacity-60",whileHover:{color:"var(--tertiary)",x:5,transition:{duration:.3}},children:new Date(a.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})}),e.jsx(t.h1,{className:"blog-title mb-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},whileHover:{scale:1.02,color:"var(--tertiary)",transition:{duration:.3}},children:r?e.jsx(m,{text:a.title,delay:600,speed:80}):a.title}),e.jsx(t.div,{className:"flex flex-wrap gap-2 mb-8",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:a.tags.map((n,o)=>e.jsx(t.span,{className:"project-tags text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.4,delay:1+o*.1},whileHover:{backgroundColor:"var(--tertiary)",color:"var(--main)",scale:1.1,transition:{duration:.3}},children:n},n))})]}),e.jsxs(t.div,{className:"blog-content prose prose-lg max-w-none relative",onMouseEnter:()=>s("content"),onMouseLeave:()=>s(null),initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:1.2},children:[e.jsx(t.div,{className:"absolute inset-0 z-10 pointer-events-none",initial:{opacity:0},animate:{opacity:i==="content"?1:0},transition:{duration:.3},children:e.jsx("div",{className:"grid grid-cols-12 grid-rows-16 h-full gap-1 p-4",children:Array.from({length:192}).map((n,o)=>e.jsx(t.div,{className:"bg-[var(--tertiary)] opacity-20",initial:{scale:0,opacity:0},animate:{scale:i==="content"?[0,1,.8]:0,opacity:i==="content"?[0,.2,.05]:0},transition:{duration:.8,delay:i==="content"?o*.005:0,ease:"easeOut"}},o))})}),e.jsx(t.div,{className:"relative z-20",animate:{scale:i==="content"?1.01:1},transition:{duration:.5},dangerouslySetInnerHTML:{__html:a.content.replace(/\n\n/g,"</p><p>").replace(/^/,"<p>").replace(/$/,"</p>").replace(/## (.*?)<\/p>/g,"</p><h2>$1</h2>").replace(/### (.*?)<\/p>/g,"</p><h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/- (.*?)<\/p>/g,"</p><li>$1</li>").replace(/```javascript\n(.*?)\n```/gs,"<pre><code>$1</code></pre>")}})]})]})})]})}export{x as default};
