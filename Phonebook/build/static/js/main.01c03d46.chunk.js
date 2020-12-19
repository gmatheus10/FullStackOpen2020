(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),u=n(19),s=n.n(u),o=n(10),i=n(2),b=n.n(i),f=n(4),j=n(5),p=n(7),l=n.n(p),d="https://project-phonebook.herokuapp.com",h={getPersons:function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(d,"/persons"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),postPerson:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("".concat(d,"/persons"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.delete("".concat(d,"/persons/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.status);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),putPerson:function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.put("".concat(d,"/persons/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};var O=function(e){var t=Object(c.useState)(e.list),n=Object(j.a)(t,2),a=n[0],u=n[1];Object(c.useEffect)((function(){e.onChange(a)}),[a]),Object(c.useEffect)((function(){u(e.list)}),[e.list]);var s=function(e){var t=a.filter((function(t){return t.id!==e}));u(t)},o=function(){var t=Object(f.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!window.confirm("Delete ".concat(n,"?"))){t.next=6;break}return s(n),t.next=5,h.deletePerson(n);case 5:t.sent;case 6:t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),e.onError("".concat(n," already removed from server")),setTimeout((function(){e.onError(null)}),5e3),s(n);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{children:a.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("li",{children:[e.name," - ",e.number]}),Object(r.jsx)("button",{onClick:function(){o(e.id)},children:"Delete"})]},e.name)}))})})};var v=function(e){var t=e.newName,n=e.newNumber;return Object(r.jsxs)("form",{onSubmit:function(t){e.contactSubmit(t)},children:[Object(r.jsxs)("div",{children:["Name: ",Object(r.jsx)("input",{value:t,onInput:function(t){e.nameChange(t)},required:!0})]}),Object(r.jsxs)("div",{children:["Number:",Object(r.jsx)("input",{value:n,onInput:function(t){e.numberChange(t)},required:!0})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})};var m=function(e){var t=e.message;return null===t?null:Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:t})})},x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getPersons();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var u=Object(c.useState)(""),s=Object(j.a)(u,2),i=s[0],p=s[1],l=Object(c.useState)(""),d=Object(j.a)(l,2),x=d[0],w=d[1],g=Object(c.useState)(n),k=Object(j.a)(g,2),y=k[0],S=k[1],C=Object(c.useState)(null),E=Object(j.a)(C,2),P=E[0],N=E[1];Object(c.useEffect)((function(){S(n)}),[n]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),"Filter: ",Object(r.jsx)("input",{onInput:function(e){var t=n.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));S(t)}}),Object(r.jsx)("h2",{children:"Add a new"}),Object(r.jsx)(v,{newName:x,newNumber:i,contactSubmit:function(e){e.preventDefault();var t={name:x,number:i,id:n.length+1},r=!1;if(n.forEach((function(e){if(e.name===x||e.number===i)return r=!0})),r){if(window.confirm("".concat(x," is already on the list, do you wish to replace number?"))){var c=Object(o.a)(n);c[n.findIndex((function(e){return e.name===x}))]=t,a(c),h.putPerson(x,t)}}else{var u=[].concat(Object(o.a)(n),[t]);a(u),h.postPerson(t)}w(""),p("")},nameChange:function(e){w(e.target.value)},numberChange:function(e){p(e.target.value)}}),Object(r.jsx)("hr",{}),Object(r.jsx)(m,{message:P}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(O,{list:y,onChange:function(e){a(e)},onError:function(e){N(e)}})]})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.01c03d46.chunk.js.map