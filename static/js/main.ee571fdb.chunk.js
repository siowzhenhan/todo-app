(this["webpackJsonphan-assessment-app"]=this["webpackJsonphan-assessment-app"]||[]).push([[0],{16:function(e,t,n){e.exports={item:"TodoItem_item__3MbaD",checkbox:"TodoItem_checkbox__2Jrs8",textInput:"TodoItem_textInput__t35cu"}},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(23),a=n.n(i),r=n(10),s=(n(29),n(21)),l=n(9),d=n(8),j=n(38),u=n(2),b=n(1),h=function(){return Object(b.jsx)("div",{children:"Hello from about page"})},x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},p=function(){return Object(b.jsx)("nav",{className:"navBar",children:Object(b.jsx)("ul",{children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:e.path,activeClassName:"active-link",exact:!0,children:e.text})},e.id)}))})})},O=n(13),m=n(16),f=n.n(m),g=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],i=n[1],a=e.todo,r=a.id,s=a.title,l=a.completed,j={},u={};return o?j.display="none":u.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(b.jsxs)("li",{className:f.a.item,children:[Object(b.jsxs)("div",{style:j,children:[Object(b.jsx)("input",{className:f.a.checkbox,type:"checkbox",checked:l,onChange:function(){return e.handleChangeProps(r)}})," ",Object(b.jsx)("button",{onClick:function(){return e.deleteTodoProps(r)},children:Object(b.jsx)(O.c,{style:{fontSize:16}})})," ",Object(b.jsx)("button",{onClick:function(){i(!0)},children:Object(b.jsx)(O.a,{style:{fontSize:16}})})," ",Object(b.jsx)("span",{style:l?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:s})]}),Object(b.jsx)("input",{type:"text",className:f.a.textInput,style:u,value:s,onChange:function(t){e.editTodo(t.target.value,r)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},v=function(e){return Object(b.jsx)("ul",{children:e.todos.map((function(t){return Object(b.jsx)(g,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,editTodo:e.editTodo},t.id)}))})},y=function(){return Object(b.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(b.jsx)("h1",{style:{fontSize:"6rem",fontWeight:600,marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},T=n(15),S=function(e){var t=Object(c.useState)({title:""}),n=Object(d.a)(t,2),o=n[0],i=n[1];return Object(b.jsxs)("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoItemProps(o.title),i({title:""})):alert("Please specify to-do item")},children:[Object(b.jsx)("input",{className:"input-text",placeholder:"Add to-do...",value:o.title,name:"title",onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(T.a)({},e.target.name,e.target.value)))}}),Object(b.jsx)("button",{className:"input-submit",children:Object(b.jsx)(O.b,{style:{color:"darkcyan",fontSize:20,marginTop:2}})})]})},N=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner-container",children:[Object(b.jsx)(y,{}),Object(b.jsx)(S,{addTodoItemProps:function(e){var t={id:Object(j.a)(),title:e,completed:!1};o([].concat(Object(s.a)(n),[t]))}}),Object(b.jsx)(v,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(s.a)(n.filter((function(t){return t.id!==e}))))},editTodo:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(b.jsx)(u.a,{path:"/about",children:Object(b.jsx)(h,{})}),Object(b.jsx)(u.a,{path:"*",children:Object(b.jsx)(x,{})})]})]})};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(N,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ee571fdb.chunk.js.map