(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},74:function(e,t,c){},83:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(31),i=c.n(s),r=(c(69),c(12)),o=(c(70),c(35)),j=c(10),d=c(107),l=c(102),b=c(54),h=c.n(b),u=c(55),O=c.n(u),m=c(56),p=c.n(m),x=c(57),f=c.n(x),v=c(34),g=v.a.initializeApp({apiKey:"AIzaSyBvevVn-4Ha_e7x9oGJyZYmaYhXirq0o_M",authDomain:"whatsapp-clone-57069.firebaseapp.com",projectId:"whatsapp-clone-57069",storageBucket:"whatsapp-clone-57069.appspot.com",messagingSenderId:"283725340829",appId:"1:283725340829:web:9574aebb165e5bf0bc3474",measurementId:"G-279JY41F0K"}).firestore(),_=v.a.auth(),N=new v.a.auth.GoogleAuthProvider,S=g,w=(c(74),c(4));var C=function(e){var t,c=e.id,n=e.addNewChat,s=e.name,i=Object(a.useState)(""),j=Object(r.a)(i,2),l=j[0],b=j[1],h=Object(a.useState)(""),u=Object(r.a)(h,2),O=u[0],m=u[1];return Object(a.useEffect)((function(){c&&S.collection("rooms").doc(c).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return e.data()})))}))})),Object(a.useEffect)((function(){b(Math.floor(5e3*Math.random()))}),[c]),n?Object(w.jsx)("div",{onClick:function(){var e=prompt("Please enter the chat room name");e&&S.collection("rooms").add({name:e})},className:"sidebarChat",children:Object(w.jsx)("h2",{children:"Add new chat"})}):Object(w.jsx)(o.b,{to:"/room/".concat(c),children:Object(w.jsxs)("div",{className:"sidebarChat",children:[Object(w.jsx)(d.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),Object(w.jsxs)("div",{className:"sidebarChat__info",children:[Object(w.jsx)("h2",{children:s}),Object(w.jsx)("p",{children:null===(t=O[0])||void 0===t?void 0:t.message})]})]})})},y=(c(83),Object(a.createContext)()),I=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(w.jsx)(y.Provider,{value:Object(a.useReducer)(t,c),children:n})},k=function(){return Object(a.useContext)(y)};var E=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=k(),i=Object(r.a)(s,2),o=i[0].user;return i[1],Object(a.useEffect)((function(){var e=S.collection("rooms").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(w.jsxs)("div",{className:"sidebar",children:[Object(w.jsxs)("div",{className:"sidebar__header",children:[Object(w.jsx)(d.a,{src:null===o||void 0===o?void 0:o.photoURL}),Object(w.jsxs)("div",{className:"sidebar__headerRight",children:[Object(w.jsx)(l.a,{children:Object(w.jsx)(h.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(O.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(p.a,{})})]})]}),Object(w.jsx)("div",{className:"sidebar__search",children:Object(w.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(w.jsx)(f.a,{}),Object(w.jsx)("input",{placeholder:"Search or start a new chat",type:"text"})]})}),Object(w.jsxs)("div",{className:"sidebar__chats",children:[Object(w.jsx)(C,{addNewChat:!0}),c.map((function(e){return Object(w.jsx)(C,{id:e.id,name:e.data.name},e.id)}))]})]})},A=(c(85),c(103)),D=c(104),B=c(105),F=c(58),M=c.n(F),P=c(59),T=c.n(P);var R=function(){var e,t,c=Object(a.useState)(""),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)(""),b=Object(r.a)(o,2),h=b[0],u=b[1],O=Object(j.f)().roomId,m=Object(a.useState)(""),p=Object(r.a)(m,2),x=p[0],f=p[1],g=Object(a.useState)([]),_=Object(r.a)(g,2),N=_[0],C=_[1],y=k(),I=Object(r.a)(y,2),E=I[0].user;return I[1],Object(a.useEffect)((function(){console.log(O),i(Math.floor(5e3*Math.random()))}),[O]),Object(a.useEffect)((function(){console.log(O),O&&(S.collection("rooms").doc(O).onSnapshot((function(e){return f(e.data().name)})),S.collection("rooms").doc(O).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return C(e.docs.map((function(e){return e.data()})))})))}),[O]),Object(w.jsxs)("div",{className:"chat",children:[Object(w.jsxs)("div",{className:"chat__header",children:[Object(w.jsx)(d.a,{src:"https://avatars.dicebear.com/api/human/".concat(s,".svg")}),Object(w.jsxs)("div",{className:"chat__headerInfo",children:[Object(w.jsx)("h3",{children:x}),Object(w.jsxs)("p",{children:["last seen"," ",new Date(null===(e=N[N.length-1])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()]})]}),Object(w.jsxs)("div",{className:"chat_headerRight",children:[Object(w.jsx)(l.a,{children:Object(w.jsx)(A.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(D.a,{})}),Object(w.jsx)(l.a,{children:Object(w.jsx)(B.a,{})})]})]}),Object(w.jsx)("div",{className:"chat__body",children:N.map((function(e){var t;return Object(w.jsxs)("p",{className:"chat__message ".concat(e.name===E.displayName&&"chat__reciever"),children:[Object(w.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(w.jsx)("span",{className:"chat__timeStamp",children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(w.jsxs)("div",{className:"chat__footer",children:[Object(w.jsx)(M.a,{}),Object(w.jsxs)("form",{children:[Object(w.jsx)("input",{value:h,onChange:function(e){return u(e.target.value)},type:"text"}),Object(w.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("You typed >> ",h),S.collection("rooms").doc(O).collection("messages").add({message:h,name:E.displayName,timestamp:v.a.firestore.FieldValue.serverTimestamp()}),u("")},children:"Send a message"})]}),Object(w.jsx)(T.a,{})]})]})},W=c(60),G=(c(86),c(106)),J=c(48),U="SET_USER",Y=function(e,t){switch(console.log(t),t.type){case U:return Object(J.a)(Object(J.a)({},e),{},{user:t.user});default:return e}};var L=function(){var e=k(),t=Object(r.a)(e,2);Object(W.a)(t[0]);var c=t[1];return Object(w.jsx)("div",{className:"login",children:Object(w.jsxs)("div",{className:"login__container",children:[Object(w.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1196px-WhatsApp.svg.png",alt:""}),Object(w.jsx)("div",{className:"login__text",children:Object(w.jsx)("h1",{children:"Sign in to WhatsApp"})}),Object(w.jsx)(G.a,{onClick:function(){_.signInWithPopup(N).then((function(e){c({type:U,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In With Google"})]})})};var z=function(){var e=k(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(w.jsx)("div",{className:"app",children:c?Object(w.jsx)("div",{className:"app__body",children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(E,{}),Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/room/:roomId",children:Object(w.jsx)(R,{})}),Object(w.jsx)(j.a,{path:"/",children:Object(w.jsx)(R,{})})]})]})}):Object(w.jsx)(L,{})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(I,{initialState:{user:null},reducer:Y,children:Object(w.jsx)(z,{})})}),document.getElementById("root")),K()}},[[88,1,2]]]);
//# sourceMappingURL=main.14fd200e.chunk.js.map