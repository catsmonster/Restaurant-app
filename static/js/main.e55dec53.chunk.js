(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),i=(a(11),a(2)),s=(a(12),a(13),function(e){var t=e.setPath,a=e.resetWhenChangingPath,n=e.setNavActive,c=e.navActive;return r.a.createElement("ul",{className:"NavUl"},r.a.createElement("li",{className:"NavLi ".concat(0===c?"navActive":""),onClick:function(){t("tables"),a(),n(0)}},"Tables"),r.a.createElement("li",{className:"NavLi ".concat(1===c?"navActive":""),onClick:function(){t("Statistics"),a(),n(1)}},"Manage Orders"),r.a.createElement("li",{className:"NavLi ".concat(2===c?"navActive":""),onClick:function(){t("customize"),a(),n(2)}},"Customize menu"))}),o=a(1),m=(a(14),a(15),function(e){var t=e.tempTables,a=e.setTempTables,n=e.id,c=e.setClickCount,l=e.clickCount;return r.a.createElement("div",{className:"deleteBtnContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){for(var e=t.filter((function(e){return e.id!==n})),r=0;r<e.length;r++)e[r].id=r;a(e),c(l-1)}}))}),u=function(e){var t=e.id,a=e.setPath,n=e.setClickedTable,c=e.setTempTables,l=e.tempTables,i=e.setClickCount,s=e.clickCount;return r.a.createElement("div",{className:"false"===l[t].tableActive?"tableDiv":"waiting"===l[t].tableActive?"activeTableDiv":"eatingTableDiv",id:t},r.a.createElement(m,{id:t,setTempTables:c,tempTables:l,setClickCount:i,clickCount:s}),r.a.createElement("p",{className:"clickTable",onClick:function(){n(t),a("order_".concat(t))}},"Click here to view and edit table number ".concat(t+1)))},d=function(e){var t=e.tempTables,a=(e.path,e.setPath),n=e.setTempTables,c=e.clickCount,l=e.setClickCount,i=e.setClickedTable,s=e.clickedTable,m=t.map((function(e,o){return r.a.createElement(u,{setClickCount:l,clickCount:c,setClickedTable:i,setPath:a,key:t[o].id,id:t[o].id,tempTables:t,setTempTables:n,clickedTable:s})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},m),r.a.createElement("button",{className:"addTable",onClick:function(){l(c+1),n([].concat(Object(o.a)(t),[{id:c,orders:[],total:0,tableActive:"false",timeAdded:new Date}]))}},"Add a new table"))},v=a(3),p=(a(16),function(e){var t=e.name,a=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))}),b=function(e){return r.a.createElement("div",{className:"menuList",style:{overflowY:"scroll",maxHeight:"250px",margin:"1%"}},e.children)},f=(a(17),function(e){var t=e.name,a=e.price,n=e.onClickMenu;return r.a.createElement("div",{onClick:function(){n({name:t,price:a})},className:"menuContainer"},r.a.createElement("span",{className:"menuItem"},t),r.a.createElement("span",{className:"menuItem"},a))}),g=function(e){var t=e.name,a=e.onClickCategory,n=e.categoryActive,c=e.setCategoryActive,l=e.id;return r.a.createElement("div",{className:"menuContainer",id:l===n?"categoryActive":"",onClick:function(){a({name:t}),c(l)}},r.a.createElement("span",{className:"menuItem"},t))},h=function(e){var t=e.setMenuSearch;return r.a.createElement("div",null,r.a.createElement("input",{className:"searchBox",onChange:function(e){return t(e.target.value)}}))},E=function(e){for(var t=e.tempTables,a=e.clickedTable,n=e.setTempTables,c=e.path,l=e.setSelectedCategory,i=e.setMenuSearch,s=e.menuSearch,m=e.selectedCategory,u=e.categoryActive,d=e.setCategoryActive,v=e.tempMenu,p=e.setTempMenu,E=function(e){var r=e.name,l=e.price;if(c.includes("order_")){var i=Object(o.a)(t);i[a].orders.push({name:r,status:"waiting",time:new Date,table:a}),i[a].total+=l,i[a].tableActive="waiting",n(i)}else{var s=v.findIndex((function(e){return e.name===r})),m=Object(o.a)(v);!0===m[s].active?(m[s].active=!1,p(m)):(m[s].active=!0,p(m))}},C=function(e){var t=e.name;l(t),i("")},y=function(e){return v.filter((function(t){return t.active===e})).filter((function(e){return"All"===m&&!s.length>0?e:s.length>0?e.name.toLowerCase().includes(s.toLowerCase()):e.category===m}))},T=y(!0),O=T.map((function(e,t){return r.a.createElement(f,{key:T[t].id,id:T[t].id,name:T[t].name,price:T[t].price,onClickMenu:E})})),k=y(!1),N=k.map((function(e,t){return r.a.createElement(f,{key:k[t].id,id:k[t].id,name:k[t].name,price:k[t].price,onClickMenu:E})})),w=["All"],j=["All"],A=0;A<v.length;A++)!0===v[A].active?w.push(v[A].category):j.push(v[A].category);var S=Object(o.a)(new Set(w)),M=Object(o.a)(new Set(j)),P=S.map((function(e,t){return r.a.createElement(g,{categoryActive:u,setCategoryActive:d,onClickCategory:C,key:t,id:t,name:e})})),I=M.map((function(e,t){return r.a.createElement(g,{categoryActive:u,setCategoryActive:d,onClickCategory:C,key:t,id:t,name:e})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"menuArray"},r.a.createElement(b,null,P),r.a.createElement(b,null,O)),"customize"===c&&I.length>1?r.a.createElement("div",null,r.a.createElement("h3",null,"Click a menu item to bring it back from the trash"),r.a.createElement("div",{className:"menuArray"},r.a.createElement(b,null,I),r.a.createElement(b,null,N))):r.a.createElement("span",null),r.a.createElement("div",{className:"searchContainer"},r.a.createElement("span",{id:"searchText"},"Search menu item:"),r.a.createElement(h,{setMenuSearch:i})))},C=function(e){var t=e.name,a=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var T=function(e){var t=e.path,a=e.tempTables,n=e.clickedTable,c=e.setTempTables,l=e.logTables,i=e.setLogTables,s=e.setMenuSearch,m=e.menuSearch,u=e.selectedCategory,d=e.setSelectedCategory,f=e.categoryActive,g=e.setCategoryActive,h=e.getRelevantOrders,T=e.enumerateOrders,O=e.tempMenu,k=e.setTempMenu,N=h("waiting"),w=h("prepared"),j=N.concat(w),A=T(j),S=function(e,t){var r=e.name,l=Object(o.a)(a),i=l[n].orders,s=0;"waiting"===t?(s=i.findIndex((function(e){return e.name===r[0]&&("waiting"===e.status||"prepared"===e.status)})),l[n].orders.splice(s,1)):"delivered"===t&&(s=i.findIndex((function(e){return e.name===r[0]&&"delivered"===e.status})),l[n].orders[s].status="returned");for(var m=0,u=0;u<O.length;u++)O[u].name===r[0]&&(m=O[u].price);l[n].total-=m,0===l[n].total&&(l[n].tableActive="false",l[n].timeAdded=new Date),c(l)},M=A.map((function(e,t){return r.a.createElement(p,{key:t,id:t,name:A[t],onRemoveOrderedItem:S})})),P=T(h("delivered")),I=P.map((function(e,t){return r.a.createElement(C,{key:t,id:t,name:P[t],onRemoveOrderedItem:S})})),D=function(){var e=Object(o.a)(a);e[n]={id:n,orders:[],total:0,tableActive:"false",timeAdded:new Date},c(e)},x=function(){var e=a[n].total,t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);t.total=l.total+e,i(t)};return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("h1",null,"This is da menu!"),r.a.createElement(E,{setTempTables:c,setCategoryActive:g,categoryActive:f,setMenuSearch:s,tempTables:a,path:t,clickedTable:n,menuSearch:m,selectedCategory:u,setSelectedCategory:d,tempMenu:O,setTempMenu:k}),r.a.createElement("h1",null,"Table ".concat(a[n].id+1," ordered the following items:")),M.length>0&&I.length>0?r.a.createElement("div",{className:"orderHeaders"},r.a.createElement("h3",{className:"waitingHeader"},"Items waiting:"),r.a.createElement("h3",{className:"deliveredHeader"},"Items delivered:")):M.length>0?r.a.createElement("div",{className:"orderHeaders"},r.a.createElement("h3",{className:"waitingHeader"},"Items waiting:")):I.length>0?r.a.createElement("div",{className:"orderHeaders"},r.a.createElement("h3",{className:"deliveredHeader"},"Items delivered:")):r.a.createElement("div",null),r.a.createElement("div",{className:"menuArrayContainer"},r.a.createElement("div",{className:"selectedMenu"},r.a.createElement(b,null,M)),r.a.createElement("div",{className:"selectedMenu"},r.a.createElement(b,null,I))),r.a.createElement("p",null,"For a total of ".concat(a[n].total)),r.a.createElement("button",{className:"addTable",onClick:function(){j.length>0?alert("Table has not yet received all orders!"):function(){var e=Number(prompt("Is there a tip?","0")),t=Object(o.a)(a);t[n].total+=e,c(t),x(),D()}()}},"Checkout and add a custom tip"),r.a.createElement("button",{className:"addTable",onClick:function(){j.length>0?alert("Table has not yet received all orders!"):function(){var e=Object(o.a)(a);e[n].total*=1.1,c(e),x(),D()}()}},"Checkout and add 10% tip"))},O=(a(18),function(e){var t=e.name,a=e.onSetDone,n=e.time,c=e.table,l=e.status;return r.a.createElement("div",{className:"todoList"},r.a.createElement("span",null,"Order ".concat(t," of table ").concat(c+1)),"waiting"===l?r.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:c,status:l})}},"Prepared"):r.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:c,status:l})}},"Delivered"))}),k=(a(19),function(e){var t=e.logTables,a=e.tempTables,n=e.setTempTables,c=e.getRelevantOrders,l=function(e){var t=e.time,r=e.table,c=e.status,l=Object(o.a)(a),i=l[r].orders.findIndex((function(e){return e.time.getTime()===t}));"waiting"===c?l[r].orders[i].status="prepared":(l[r].orders[i].status="delivered",l[r].orders.filter((function(e){return"delivered"===e.status})).length===l[r].orders.length&&(l[r].tableActive="eating"));n(l)},i=c("waiting"),s=i.map((function(e,t){return r.a.createElement(O,{key:t,id:t,name:i[t][0],table:i[t][1],time:i[t][2],status:i[t][3],onSetDone:l})})),m=c("prepared"),u=m.map((function(e,t){return r.a.createElement(O,{key:t,id:t,name:m[t][0],table:m[t][1],time:m[t][2],onSetDone:l})}));return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("h2",null,"To Do list:"),r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("h3",null,"Waiting list:"),r.a.createElement(b,null,s),r.a.createElement("h3",null,"Ready for delivery:"),r.a.createElement(b,null,u)),r.a.createElement("h2",null,"Income:"),r.a.createElement("span",null,"The total revenue from all checked out tables is ".concat(parseFloat(t.total).toFixed(2))))});a(20);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.menuInput,a=e.setMenuInput,n=e.addNewItemtoMenu,c=e.setAddNewItemtoMenu,l=e.setTempTables,i=e.setCategoryActive,s=e.categoryActive,o=e.setMenuSearch,m=e.tempTables,u=e.path,d=e.clickedTable,v=e.menuSearch,p=e.selectedCategory,b=e.setSelectedCategory,f=e.tempMenu,g=e.setTempMenu;return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("h2",null,"Here you will be able to customize your menu"),n?r.a.createElement("div",{className:"addDish"},r.a.createElement("span",null,"Please enter dish name:"),r.a.createElement("input",{type:"text",onChange:function(e){var n=w({},t);n.name=e.target.value,a(n)}}),r.a.createElement("span",null,"Please enter dish price:"),r.a.createElement("input",{type:"text",onChange:function(e){var n=w({},t);n.price=Math.abs(Number(e.target.value)),a(n)}}),r.a.createElement("span",null,"Please enter a category"),r.a.createElement("input",{type:"text",onChange:function(e){var n=w({},t);n.category=e.target.value.toLowerCase(),a(n)}}),r.a.createElement("button",{className:"addTable",onClick:function(){return function(){for(var e=[],a=0;a<f.length;a++)e.push(f[a].name.toLowerCase());var n=f[f.length-1].id;if(t.name.length>0&&!isNaN(Number(t.price))&&t.category.length>0){if(e.includes(t.name.toLowerCase()))return alert("The dish ".concat(t.name," already exists, please enter a unique dish name"));f.push({id:n+1,name:t.name,price:t.price,category:t.category,active:!0}),c(!1)}else alert("Please enter correct dish details.")}()}},"Add dish"),r.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),r.a.createElement(E,{setTempTables:l,setCategoryActive:i,categoryActive:s,setMenuSearch:o,tempTables:m,path:u,clickedTable:d,menuSearch:v,selectedCategory:p,setSelectedCategory:b,setTempMenu:g,tempMenu:f})):r.a.createElement("div",null,r.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),r.a.createElement(E,{setTempTables:l,setCategoryActive:i,categoryActive:s,setMenuSearch:o,tempTables:m,path:u,clickedTable:d,menuSearch:v,selectedCategory:p,setSelectedCategory:b,tempMenu:f,setTempMenu:g}),r.a.createElement("button",{className:"addTable",onClick:function(){return c(!0)}},"Add a new menu item")))};var A=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("tables"),o=Object(i.a)(l,2),m=o[0],u=o[1],v=Object(n.useState)(0),p=Object(i.a)(v,2),b=p[0],f=p[1],g=Object(n.useState)({orders:[],total:0}),h=Object(i.a)(g,2),E=h[0],C=h[1],y=Object(n.useState)(""),O=Object(i.a)(y,2),N=O[0],w=O[1],A=Object(n.useState)({name:"",price:0,category:""}),S=Object(i.a)(A,2),M=S[0],P=S[1],I=Object(n.useState)(!1),D=Object(i.a)(I,2),x=D[0],L=D[1],B=Object(n.useState)("All"),H=Object(i.a)(B,2),R=H[0],z=H[1],W=Object(n.useState)(0),_=Object(i.a)(W,2),F=_[0],J=_[1],q=Object(n.useState)(0),U=Object(i.a)(q,2),Y=U[0],$=U[1],G=Object(n.useState)(!1),K=Object(i.a)(G,2),Q=K[0],V=K[1],X=Object(n.useState)([{id:0,orders:[],total:0,tableActive:"false",timeAdded:new Date}]),Z=Object(i.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)([{id:1,name:"grilled chicken",price:80,category:"main dishes",active:!0},{id:2,name:"ceaser salad",price:55,category:"starters",active:!0},{id:3,name:"beef steak",price:120,category:"main dishes",active:!0},{id:4,name:"pepperony",price:90,category:"pizzas",active:!0}]),ne=Object(i.a)(ae,2),re=ne[0],ce=ne[1],le=function(e){var t=[];if("Statistics"===m)for(var a=0;a<ee.length;a++)t.push(ee[a].orders.filter((function(t){return t.status===e})));else m.includes("order_")&&t.push(ee[b].orders.filter((function(t){return t.status===e})));var n=t.flat(1);n.sort((function(e,t){return e.time.getTime()-t.time.getTime()}));for(var r=[],c=0;c<n.length;c++)r.push([n[c].name,n[c].table,n[c].time.getTime(),n[c].status]);return r},ie=function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a][0]);var n={};t.forEach((function(e){n[e]=(n[e]||0)+1}));var r=Object.entries(n);return r.sort(),r};return r.a.createElement("div",{className:"App"},r.a.createElement(s,{setNavActive:$,navActive:Y,resetWhenChangingPath:function(){J(0),z("All"),w(""),P({name:"",price:0,category:""}),L(!1)},setPath:u}),"tables"===m?r.a.createElement(d,{clickedTable:b,setClickedTable:f,clickCount:a,setClickCount:c,setTempTables:te,tempTables:ee,path:m,setPath:u}):m.includes("order_")?r.a.createElement(T,{clickedOnDelivered:Q,setClickedOnDelivered:V,tempMenu:re,setTempMenu:ce,path:m,enumerateOrders:ie,getRelevantOrders:le,categoryActive:F,setCategoryActive:J,selectedCategory:R,setSelectedCategory:z,menuSearch:N,setMenuSearch:w,logTables:E,setLogTables:C,tempTables:ee,clickedTable:b,setTempTables:te}):m.includes("customize")?r.a.createElement(j,{tempMenu:re,setTempMenu:ce,path:m,setSelectedCategory:z,selectedCategory:R,menuSearch:N,clickedTable:b,tempTables:ee,setMenuSearch:w,categoryActive:F,setCategoryActive:J,setTempTables:te,addNewItemtoMenu:x,setAddNewItemtoMenu:L,menuInput:M,setMenuInput:P}):r.a.createElement(k,{enumerateOrders:ie,getRelevantOrders:le,setTempTables:te,tempTables:ee,logTables:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.e55dec53.chunk.js.map