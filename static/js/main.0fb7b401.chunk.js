(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(11),a(3)),i=a(1),s=(a(12),a(13),function(e){var t=e.setPath,a=e.resetCategoriesState;return r.a.createElement("ul",{className:"NavUl"},r.a.createElement("li",{className:"NavLi",onClick:function(){t("tables"),a()}},"Tables"),r.a.createElement("li",{className:"NavLi",onClick:function(){t("Statistics"),a()}},"Statistics"),r.a.createElement("li",{className:"NavLi",onClick:function(){t("customize"),a()}},"Customize menu"))}),u=a(2),m=(a(14),a(15),function(e){var t=e.tempTables,a=e.setTempTables,n=e.id,c=e.setClickCount,o=e.clickCount;return r.a.createElement("div",{className:"deleteBtnContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){for(var e=t.filter((function(e){return e.id!==n})),r=0;r<e.length;r++)e[r].id=r;a(e),c(o-1)}},"X"))}),d=function(e){var t=e.id,a=e.setPath,n=e.setClickedTable,c=e.setTempTables,o=e.tempTables,l=e.setClickCount,i=e.clickCount;return r.a.createElement("div",{className:!1===o[t].tableActive?"tableDiv":"activeTableDiv",id:t},r.a.createElement(m,{id:t,setTempTables:c,tempTables:o,setClickCount:l,clickCount:i}),r.a.createElement("p",{className:"clickTable",onClick:function(){n(t),a("order_".concat(t))}},"Click here to view and edit table number ".concat(t+1)))},b=function(e){var t=e.tempTables,a=(e.path,e.setPath),n=e.setTempTables,c=e.clickCount,o=e.setClickCount,l=e.setClickedTable,i=e.clickedTable,s=t.map((function(e,s){return r.a.createElement(d,{setClickCount:o,clickCount:c,setClickedTable:l,setPath:a,key:t[s].id,id:t[s].id,tempTables:t,setTempTables:n,clickedTable:i})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},s),r.a.createElement("button",{className:"addTable",onClick:function(){o(c+1),n([].concat(Object(u.a)(t),[{id:c,orders:[],total:0,tableActive:!1,timeAdded:new Date}]))}},"Add a new table"))},p=(a(16),function(e){var t=e.name,a=e.price,n=e.onClickMenu;return r.a.createElement("div",{onClick:function(){n({name:t,price:a})},className:"menuContainer"},r.a.createElement("span",{className:"menuItem"},t),r.a.createElement("span",{className:"menuItem"},a))}),f=[{id:1,name:"grilled chicken",price:80,category:"main dishes"},{id:2,name:"ceaser salad",price:55,category:"starters"},{id:3,name:"beef steak",price:120,category:"main dishes"},{id:4,name:"pepperony",price:90,category:"pizzas"}],v=(a(17),function(e){var t=e.name,a=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t})}},"X"),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t})}},"X"),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))}),O=function(e){var t=e.setMenuSearch;return r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return t(e.target.value)}}))},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",maxHeight:"250px",margin:"1%"}},e.children)},y=function(e){var t=e.name,a=e.onClickCategory,n=e.categoryActive,c=e.setCategoryActive,o=e.id;return r.a.createElement("div",{className:"menuContainer",id:o===n?"categoryActive":"",onClick:function(){a({name:t}),c(o)}},r.a.createElement("span",{className:"menuItem"},t))};function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var E=function(e){var t=e.tempTables,a=e.clickedTable,n=e.setTempTables,c=e.logTables,o=e.setLogTables,i=e.setMenuSearch,s=e.menuSearch,m=e.selectedCategory,d=e.setSelectedCategory,b=e.categoryActive,E=e.setCategoryActive,C={};t[a].orders.forEach((function(e){C[e]=(C[e]||0)+1}));var j=Object.entries(C);j.sort();for(var k=function(e){var r=e.name,c=e.price,o=Object(u.a)(t);o[a].orders.push(r),o[a].total+=c,o[a].tableActive=!0,n(o)},T=function(e){var t=e.name;d(t)},w=function(e){var r=e.name,c=Object(u.a)(t),o=c[a].orders.indexOf(r[0]);c[a].orders.splice(o,1);for(var l=0,i=0;i<f.length;i++)f[i].name===r[0]&&(l=f[i].price);c[a].total-=l,0===c[a].total&&(c[a].tableActive=!1,c[a].timeAdded=new Date),n(c)},N=f.filter((function(e){return"All"===m&&!s.length>0?e:s.length>0?e.name.toLowerCase().includes(s.toLowerCase()):e.category===m})),P=N.map((function(e,t){return r.a.createElement(p,{key:N[t].id,id:N[t].id,name:N[t].name,price:N[t].price,onClickMenu:k})})),A=j.map((function(e,t){return r.a.createElement(v,{key:t,id:t,name:j[t],onRemoveOrderedItem:w})})),S=function(){var e=Object(u.a)(t);e[a]={id:a,orders:[],total:0,tableActive:!1,timeAdded:new Date},n(e)},D=function(){var e=t[a].total,n=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},c);n.total=c.total+e,o(n)},I=["All"],L=0;L<f.length;L++)I.push(f[L].category);var M=Object(u.a)(new Set(I)).map((function(e,t){return r.a.createElement(y,{categoryActive:b,setCategoryActive:E,onClickCategory:T,key:t,id:t,name:e})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"This is da menu!"),r.a.createElement("div",{className:"menuArray"},r.a.createElement(g,null,M),r.a.createElement(g,null,P)),r.a.createElement("div",{className:"searchContainer"},r.a.createElement("span",{id:"searchText"},"Search menu item:"),r.a.createElement(O,{setMenuSearch:i})),r.a.createElement("h1",null,"Table ".concat(t[a].id+1," ordered the following items:")),r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("div",{className:"menuArrayContainer"},A)),r.a.createElement("p",null,"For a total of ".concat(t[a].total)),r.a.createElement("button",{onClick:function(){!function(){var e=Number(prompt("Is there a tip?","0")),r=Object(u.a)(t);r[a].total+=e,n(r),D(),S()}()}},"Checkout and add a custom tip"),r.a.createElement("button",{onClick:function(){!function(){var e=Object(u.a)(t);e[a].total*=1.1,n(e),D(),S()}()}},"Checkout and add 10% tip"))};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var j=function(e){var t=e.logTables,a=e.setLogTables,n={};t.orders.forEach((function(e){n[e]=(n[e]||0)+1}));var c=Object.entries(n),o=function(e){var n=e.name,r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t),c=r.orders.indexOf(n[0]);r.orders.splice(c,1),a(r)},i=c.map((function(e,t){return r.a.createElement(v,{key:t,id:t,name:c[t],onRemoveOrderedItem:o})}));return r.a.createElement("div",null,r.a.createElement("h2",null,"To Do list:"),r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("div",{className:"menuArrayContainer"},i)),r.a.createElement("h2",null,"Income:"),"The total revenue from all checked out tables is ".concat(parseFloat(t.total).toFixed(2)))};a(18);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=function(e){var t=e.menuInput,a=e.setMenuInput,n=e.addNewItemtoMenu,c=e.setAddNewItemtoMenu;return r.a.createElement("div",null,r.a.createElement("h2",null,"Here you will be able to customize your menu"),n?r.a.createElement("div",{className:"addDish"},r.a.createElement("span",null,"Please enter dish name:"),r.a.createElement("input",{type:"text",onChange:function(e){var n=T({},t);n.name=e.target.value,a(n)}}),r.a.createElement("span",null,"Please enter dish price:"),r.a.createElement("input",{type:"text",onChange:function(e){var n=T({},t);n.price=Number(e.target.value),a(n)}}),r.a.createElement("span",null,"Please enter a category"),r.a.createElement("input",{type:"text",onChange:function(e){var n=T({},t);n.category=e.target.value.toLowerCase(),a(n)}}),r.a.createElement("button",{className:"addTable",onClick:function(){return function(){for(var e=[],a=0;a<f.length;a++)e.push(f[a].name.toLowerCase());var n=f[f.length-1].id;if(t.name.length>0&&!isNaN(Number(t.price))&&t.category.length>0){if(e.includes(t.name.toLowerCase()))return alert("The dish ".concat(t.name," already exists, please enter a unique dish name"));f.push({id:n+1,name:t.name,price:t.price,category:t.category}),c(!1)}else alert("Please enter correct dish details.")}()}},"Add dish")):r.a.createElement("div",null,r.a.createElement("button",{className:"addTable",onClick:function(){return c(!0)}},"Add a new menu item")))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var P=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("tables"),u=Object(i.a)(o,2),m=u[0],d=u[1],p=Object(n.useState)(0),f=Object(i.a)(p,2),v=f[0],O=f[1],g=Object(n.useState)({orders:[],total:0}),y=Object(i.a)(g,2),h=y[0],C=y[1],k=Object(n.useState)(""),T=Object(i.a)(k,2),P=T[0],A=T[1],S=Object(n.useState)({name:"",price:0,category:""}),D=Object(i.a)(S,2),I=D[0],L=D[1],M=Object(n.useState)(!1),x=Object(i.a)(M,2),z=x[0],B=x[1],F=Object(n.useState)("All"),R=Object(i.a)(F,2),X=R[0],H=R[1],J=Object(n.useState)(0),W=Object(i.a)(J,2),_=W[0],q=W[1],U=Object(n.useState)([{id:0,orders:[],total:0,tableActive:!1,timeAdded:new Date}]),Y=Object(i.a)(U,2),$=Y[0],G=Y[1];return Object(n.useEffect)((function(){for(var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},h),t=[],a=0;a<$.length;a++)t=t.concat($[a].orders);e.orders=t,C(e)}),[$]),r.a.createElement("div",{className:"App"},r.a.createElement(s,{resetCategoriesState:function(){q(0),H("All"),A("")},setPath:d}),"tables"===m?r.a.createElement(b,{clickedTable:v,setClickedTable:O,clickCount:a,setClickCount:c,setTempTables:G,tempTables:$,path:m,setPath:d}):m.includes("order_")?r.a.createElement(E,{categoryActive:_,setCategoryActive:q,selectedCategory:X,setSelectedCategory:H,menuSearch:P,setMenuSearch:A,logTables:h,setLogTables:C,tempTables:$,clickedTable:v,setTempTables:G}):m.includes("customize")?r.a.createElement(w,{addNewItemtoMenu:z,setAddNewItemtoMenu:B,menuInput:I,setMenuInput:L}):r.a.createElement(j,{setLogTables:C,tempTables:$,logTables:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.0fb7b401.chunk.js.map