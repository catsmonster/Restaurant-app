(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(11),n(2)),i=n(3),s=(n(12),n(13),function(e){var t=e.setPath;return r.a.createElement("ul",{className:"NavUl"},r.a.createElement("li",{className:"NavLi",onClick:function(){return t("tables")}},"Tables"),r.a.createElement("li",{className:"NavLi",onClick:function(){return t("Statistics")}},"Statistics"))}),u=n(1),m=(n(14),n(15),function(e){var t=e.tempTables,n=e.setTempTables,a=e.id,c=e.setClickCount,o=e.clickCount;return r.a.createElement("div",{className:"deleteBtnContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){for(var e=t.filter((function(e){return e.id!==a})),r=0;r<e.length;r++)e[r].id=r;n(e),c(o-1)}},"X"))}),b=function(e){var t=e.id,n=e.setPath,a=e.setClickedTable,c=e.setTempTables,o=e.tempTables,l=e.setClickCount,i=e.clickCount;return r.a.createElement("div",{className:!1===o[t].tableActive?"tableDiv":"activeTableDiv",id:t},r.a.createElement(m,{id:t,setTempTables:c,tempTables:o,setClickCount:l,clickCount:i}),r.a.createElement("p",{className:"clickTable",onClick:function(){a(t),n("order_".concat(t))}},"Click here to view and edit table number ".concat(t+1)))},d=function(e){var t=e.tempTables,n=(e.path,e.setPath),a=e.setTempTables,c=e.clickCount,o=e.setClickCount,l=e.setClickedTable,i=e.clickedTable,s=t.map((function(e,s){return r.a.createElement(b,{setClickCount:o,clickCount:c,setClickedTable:l,setPath:n,key:t[s].id,id:t[s].id,tempTables:t,setTempTables:a,clickedTable:i})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},s),r.a.createElement("button",{className:"addTable",onClick:function(){o(c+1),a([].concat(Object(u.a)(t),[{id:c,orders:[],total:0,tableActive:!1,timeAdded:new Date}]))}},"Add a new table"))},p=(n(16),function(e){var t=e.name,n=e.price,a=e.onClickMenu;return r.a.createElement("div",{onClick:function(){return a({name:t,price:n})},className:"menuContainer"},r.a.createElement("ul",{className:"menuItem"},r.a.createElement("li",null,t)),r.a.createElement("ul",{className:"menuItem"},r.a.createElement("li",null,n)))}),f=[{id:1,name:"chicken",price:80},{id:2,name:"salad",price:55},{id:3,name:"beef",price:120},{id:4,name:"pizza",price:90}],v=(n(17),function(e){var t=e.name,n=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return n({name:t})}},"X"),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return n({name:t})}},"X"),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))});function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var E=function(e){var t=e.tempTables,n=e.clickedTable,a=e.setTempTables,c=e.logTables,o=e.setLogTables,i={};t[n].orders.forEach((function(e){i[e]=(i[e]||0)+1}));var s=Object.entries(i),m=function(e){var r=e.name,c=e.price,o=Object(u.a)(t);o[n].orders.push(r),o[n].total+=c,o[n].tableActive=!0,a(o)},b=function(e){var r=e.name,c=Object(u.a)(t),o=c[n].orders.indexOf(r[0]);c[n].orders.splice(o,1);for(var l=0,i=0;i<f.length;i++)f[i].name===r[0]&&(l=f[i].price);c[n].total-=l,0===c[n].total&&(c[n].tableActive=!1,c[n].timeAdded=new Date),a(c)},d=f.map((function(e,t){return r.a.createElement(p,{key:f[t].id,id:f[t].id,name:f[t].name,price:f[t].price,onClickMenu:m})})),E=s.map((function(e,t){return r.a.createElement(v,{key:t,id:t,name:s[t],onRemoveOrderedItem:b})})),k=function(){var e=Object(u.a)(t);e[n]={id:n,orders:[],total:0,tableActive:!1,timeAdded:new Date},a(e)},T=function(){var e=t[n].total,a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c);a.total=c.total+e,o(a)};return r.a.createElement("div",null,r.a.createElement("h1",null,"This is da menu!"),r.a.createElement("div",{className:"menuArray"},d),r.a.createElement("h1",null,"Table ".concat(t[n].id+1," ordered the following items:")),r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("div",{className:"menuArrayContainer"},E)),r.a.createElement("p",null,"For a total of ".concat(t[n].total)),r.a.createElement("button",{onClick:function(){!function(){var e=Number(prompt("Is there a tip?","0")),r=Object(u.a)(t);r[n].total+=e,a(r),T(),k()}()}},"Checkout and add a custom tip"),r.a.createElement("button",{onClick:function(){!function(){var e=Object(u.a)(t);e[n].total*=1.1,a(e),T(),k()}()}},"Checkout and add 10% tip"))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var T=function(e){var t=e.logTables,n=e.setLogTables,a={};t.orders.forEach((function(e){a[e]=(a[e]||0)+1}));var c=Object.entries(a),o=function(e){var a=e.name,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t),c=r.orders.indexOf(a[0]);r.orders.splice(c,1),n(r)},i=c.map((function(e,t){return r.a.createElement(v,{key:t,id:t,name:c[t],onRemoveOrderedItem:o})}));return r.a.createElement("div",null,r.a.createElement("h2",null,"To Do list:"),r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("div",{className:"menuArrayContainer"},i)),r.a.createElement("h2",null,"Income:"),"The total revenue from all checked out tables is ".concat(parseFloat(t.total).toFixed(2)))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var h=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)("tables"),u=Object(i.a)(o,2),m=u[0],b=u[1],p=Object(a.useState)(0),f=Object(i.a)(p,2),v=f[0],O=f[1],k=Object(a.useState)({orders:[],total:0}),h=Object(i.a)(k,2),C=h[0],y=h[1],g=Object(a.useState)([{id:0,orders:[],total:0,tableActive:!1,timeAdded:new Date}]),w=Object(i.a)(g,2),P=w[0],N=w[1];return Object(a.useEffect)((function(){for(var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},C),t=[],n=0;n<P.length;n++)t=t.concat(P[n].orders);e.orders=t,y(e)}),[P]),r.a.createElement("div",{className:"App"},r.a.createElement(s,{setPath:b}),"tables"===m?r.a.createElement(d,{clickedTable:v,setClickedTable:O,clickCount:n,setClickCount:c,setTempTables:N,tempTables:P,path:m,setPath:b}):m.includes("order_")?r.a.createElement(E,{logTables:C,setLogTables:y,tempTables:P,clickedTable:v,setTempTables:N}):r.a.createElement(T,{setLogTables:y,tempTables:P,logTables:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.e22225db.chunk.js.map