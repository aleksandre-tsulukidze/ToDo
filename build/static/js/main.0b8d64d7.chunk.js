(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{29:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},60:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r),a=n(10),c=n.n(a),s=(n(35),n(36),n(37),n(1)),i=function(){return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("img",{src:"https://via.placeholder.com/120",alt:"site logo"}),Object(s.jsx)("button",{children:"Log In"})]})},l=n(16),u=n(6),d=Object(r.createContext)([]),j=n.p+"static/media/coollogo_com-21084510 1.a2575bb1.svg",b=function(t){var e=t.title,n=t.color;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -50%)"},children:e}),Object(s.jsxs)("svg",{width:"250",height:"220",viewBox:"0 0 304 278",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(s.jsx)("path",{d:"M11.2567 42.5462C44.8177 30.214 99.8439 23.8147 99.8439 23.8147L256.613 4.26228L273.469 124.773C273.469 124.773 282.47 195.141 304.318 228.748C253.209 248.761 162.725 261.205 162.725 261.205L35.1319 277.119L6.3052 70.973C6.3052 70.973 1.70925 54.5239 11.2567 42.5462Z",fill:"black",fillOpacity:"0.39216"}),Object(s.jsx)("path",{d:"M14.6191 39.0424C53.125 28.5759 104.852 22.1828 104.852 22.1828L261.628 2.62422L278.478 123.135C278.478 123.135 284.252 170.399 306.093 204C264.486 251.351 167.734 259.567 167.734 259.567L40.1404 275.487L11.3137 69.3349C11.3137 69.3349 8.81161 49.5151 14.6191 39.0424Z",fill:n,stroke:"black",strokeWidth:"4"})]}),Object(s.jsxs)("defs",{children:[Object(s.jsxs)("linearGradient",{id:"paint0_linear",x1:"30.0311",y1:"41.0865",x2:"38.6015",y2:"61.8967",gradientUnits:"userSpaceOnUse",children:[Object(s.jsx)("stop",{stopColor:"#C8C800"}),Object(s.jsx)("stop",{offset:"1",stopColor:"#FFFF49"})]}),Object(s.jsx)("clipPath",{id:"clip0",children:Object(s.jsx)("rect",{width:"303.109",height:"276.632",fill:"white",transform:"translate(0.445648 0.487381)"})})]})]})]})},f=n(11),h=n.n(f),p=n(12);n(57);p.a.initializeApp({apiKey:"AIzaSyAMKAyHVbXEKF9pO2vNp0AhRwV7iql1xow",authDomain:"refrigerator-todo.firebaseapp.com",databaseURL:"https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app",projectId:"refrigerator-todo",storageBucket:"refrigerator-todo.appspot.com",messagingSenderId:"648998147823",appId:"1:648998147823:web:a51c3c08393695e6f2ed1a",measurementId:"G-J1JQW84543"});var g=p.a.database(),O=(n(60),function(t){var e=t.setClicked,n=t.index,o=t.setRendering,a=Object(r.useState)({}),c=Object(u.a)(a,2),i=c[0],l=c[1],j=Object(r.useState)(!0),b=Object(u.a)(j,2),f=b[0],p=b[1],O=Object(r.useContext)(d);Object(r.useEffect)((function(){fetch("https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/"+O[n].id+".json").then((function(t){return t.json()})).then((function(t){l(t)})).then((function(){return p((function(t){return!t}))})).catch((function(t){return console.log(t)}))}),[O,n]);var x=Object(s.jsx)("div",{children:"loading..."});return f||(x=Object(s.jsxs)("form",{style:{backgroundColor:i.color},className:"modal__form",onSubmit:function(t){t.preventDefault(),h.a.put("https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/"+O[n].id+".json",{title:t.target[0].value,dueDate:t.target[1].value,data:t.target[2].value,color:O[n].color,angle:O[n].angle,X:O[n].X,Y:O[n].Y}).then((function(){return o((function(t){return!t}))})).catch((function(t){return console.log(t)})),e((function(t){return!t}))},children:[Object(s.jsx)("label",{htmlFor:"modal__title",children:"enter task title"}),Object(s.jsx)("input",{id:"modal__title",type:"text",name:"title",defaultValue:i.title}),Object(s.jsx)("label",{htmlFor:"modal__title",children:" enter due date"}),Object(s.jsx)("input",{id:"modal__date",name:"dueDate",defaultValue:i.dueDate}),Object(s.jsx)("label",{htmlFor:"modal__date",children:"enter task"}),Object(s.jsx)("textarea",{id:"modal__data",name:"data",defaultValue:i.data}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{type:"submit",children:" SAVE "}),Object(s.jsx)("button",{onClick:function(t){t.preventDefault(),g.ref("notes/"+O[n].id).remove().then((function(){return o((function(t){return!t}))})).catch((function(t){console.log(t)})),e((function(t){return!t}))},children:" DELETE "})]})]})),Object(s.jsx)("div",{onClick:function(t){return function(t){"modal"===t.target.className&&e((function(t){return!t}))}(t)},className:"modal",children:x})}),x=function(t){var e=t.index,n=t.setRendering,o=Object(r.useState)(!1),a=Object(u.a)(o,2),c=a[0],i=a[1],l=Object(r.useContext)(d);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{transform:"rotateZ("+l[e].angle+"deg) translate(-50%, -50%) ",position:"absolute",top:l[e].Y,left:l[e].X},className:"note",onClick:function(){i(!c)},children:Object(s.jsx)(b,{title:l[e].title,color:l[e].color})}),c?Object(s.jsx)(O,{index:e,setRendering:n,setClicked:i,clicked:c}):null]})},m=n(30),v=n.n(m),C=(n(29),function(t){var e=t.color,n=t.setColor,r=t.setRendering;return Object(s.jsxs)("div",{className:"drag",children:[Object(s.jsx)(v.a,{position:{x:0,y:0},onStart:function(t){return function(t){t.preventDefault()}(t)},onStop:function(t){return function(t){h.a.post("https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes.json",{title:"",dueDate:"",data:"",color:e,angle:(30*Math.random()).toFixed(2),X:t.clientX,Y:t.clientY}).then((function(){return r((function(t){return!t}))})).then().catch((function(t){return console.log(t)}))}(t)},children:Object(s.jsx)("span",{style:{backgroundColor:e,position:"absolute",transition:"translateY(100%)"},className:"drag__draggable"})}),Object(s.jsx)("span",{style:{backgroundColor:e},className:"drag__draggable"}),Object(s.jsx)("button",{onClick:function(t){return n(t.target.value)},style:{backgroundColor:"#FFFF49"},value:"#FFFF49"}),Object(s.jsx)("button",{onClick:function(t){return n(t.target.value)},style:{backgroundColor:"#00C844"},value:"#00C844"}),Object(s.jsx)("button",{onClick:function(t){return n(t.target.value)},style:{backgroundColor:"#9400C8"},value:"#9400C8"}),Object(s.jsx)("button",{onClick:function(t){return n(t.target.value)},style:{backgroundColor:"#00B0C8"},value:"#00B0C8"}),Object(s.jsx)("button",{onClick:function(t){return n(t.target.value)},style:{backgroundColor:"#F50000"},value:"#F50000"})]})}),k=function(){var t=Object(r.useState)("#00C844"),e=Object(u.a)(t,2),n=e[0],o=e[1],a=Object(r.useState)([]),c=Object(u.a)(a,2),i=c[0],b=c[1],f=Object(r.useState)(!1),h=Object(u.a)(f,2),p=h[0],g=h[1];return Object(r.useEffect)((function(){fetch("https://refrigerator-todo-default-rtdb.europe-west1.firebasedatabase.app/notes/.json").then((function(t){return t.json()})).then((function(t){var e=[];for(var n in t)e.push(Object(l.a)(Object(l.a)({},t[n]),{},{id:n}));return e})).then((function(t){return b(t)})).catch((function(t){return console.log(t)}))}),[p]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)("img",{className:"logo",alt:"refrigerator handel",src:j}),Object(s.jsx)(d.Provider,{value:i,children:i.length?i.map((function(t,e){return Object(s.jsx)(x,{setRendering:g,index:e},e)})):null})]}),Object(s.jsx)(C,{setRendering:g,color:n,setColor:o})]})};var F=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(i,{}),Object(s.jsx)(k,{})]})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),a(t),c(t)}))};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.0b8d64d7.chunk.js.map