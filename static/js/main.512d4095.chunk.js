(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),i=(a(11),a(2)),o=a(3),s=a(1),m=(a(12),a(13),function(e){var t=e.setPath,a=e.resetWhenChangingPath,n=e.setNavActive,r=e.navActive,l=e.openNav,i=e.setOpenNav,o=c.a.createElement("div",{className:"burgerPosition"},c.a.createElement("div",{className:"burgerContainer ".concat(l?"change":""),onClick:function(){i(!l)}},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"})));return c.a.createElement("div",null,l?c.a.createElement("div",null,c.a.createElement("div",null,o),c.a.createElement("ul",{className:"NavUl"},c.a.createElement("li",{className:"NavLi ".concat(0===r?"navActive":""),onClick:function(){t("tables"),a(),n(0)}},"Tables"),c.a.createElement("li",{className:"NavLi ".concat(1===r?"navActive":""),onClick:function(){t("kitchen"),a(),n(1)}},"Kitchen Stuff"),c.a.createElement("li",{className:"NavLi ".concat(2===r?"navActive":""),onClick:function(){t("waiters"),a(),n(2)}},"Waiters"),c.a.createElement("li",{className:"NavLi ".concat(3===r?"navActive":""),onClick:function(){t("customize"),a(),n(3)}},"Customize menu"),c.a.createElement("li",{className:"NavLi ".concat(4===r?"navActive":""),onClick:function(){t("Statistics"),a(),n(4)}},"Management"))):c.a.createElement("div",null,o))}),u=(a(14),a(15),function(e){var t=e.tempTables,a=e.setTempTables,n=e.id,r=e.setClickCount,l=e.clickCount;return c.a.createElement("div",{className:"deleteBtnContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){for(var e=t.filter((function(e){return e.id!==n})),c=0;c<e.length;c++)e[c].id=c;a(e),r(l-1)}}))}),d=function(e){var t=e.id,a=e.setPath,n=e.setClickedTable,r=e.setTempTables,l=e.tempTables,i=e.setClickCount,o=e.clickCount;return c.a.createElement("div",{className:"false"===l[t].tableActive?"tableDiv":"waiting"===l[t].tableActive?"activeTableDiv":"eatingTableDiv",id:t},c.a.createElement(u,{id:t,setTempTables:r,tempTables:l,setClickCount:i,clickCount:o}),c.a.createElement("p",{className:"clickTable",onClick:function(){n(t),a("order_".concat(t))}},"Click here to view and edit table number ".concat(t+1)))},p=function(e){var t=e.tempTables,a=(e.path,e.setPath),n=e.setTempTables,r=e.clickCount,l=e.setClickCount,o=e.setClickedTable,s=e.clickedTable,m=t.map((function(e,i){return c.a.createElement(d,{setClickCount:l,clickCount:r,setClickedTable:o,setPath:a,key:t[i].id,id:t[i].id,tempTables:t,setTempTables:n,clickedTable:s})}));return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},m),c.a.createElement("button",{className:"addTable",onClick:function(){l(r+1),n([].concat(Object(i.a)(t),[{id:r,orders:[],total:0,tableActive:"false",timeAdded:new Date}]))}},"Add a new table"))},f=(a(16),function(e){var t=e.name,a=e.onRemoveOrderedItem;return c.a.createElement("div",{onClick:function(){}},t[1]<2?c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),c.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),c.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))}),v=function(e){return c.a.createElement("div",{className:"menuList",style:{overflowY:"scroll",maxHeight:"250px",margin:"1%"}},e.children)};a(17);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){var t=e.id,a=e.name,n=e.price,r=e.onClickMenu,l=e.clickMenuItem,i=e.setClickMenuItem,s=e.path,m=e.tempMenu,u=function(e){var c=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);"clickMenu"!==e||c.toggle?(c.status="false",c.toggle=!1,r({name:a,price:n,source:e,id:t})):(c.status=t,c.toggle=!0),i(c)},d=m.findIndex((function(e){return e.id===t})),p=c.a.createElement("div",{className:"menuContainer"},!0===l.toggle&&l.status===t?c.a.createElement("button",{onClick:function(){u("clickMenu")}},"\u22cf"):c.a.createElement("button",{onClick:function(){u("clickMenu")}},"\u22ce"),c.a.createElement("span",{className:"menuItem"},a),c.a.createElement("span",{className:"menuItem"},n),s.includes("order_")?c.a.createElement("button",{onClick:function(){return u("add")}},"\u2295"):null);return c.a.createElement("div",null,l.status===t&&s.includes("order_")?c.a.createElement("div",null,p,c.a.createElement("button",{onClick:function(){return u("addCustom")}},"Add with a custom price"),c.a.createElement("button",{onClick:function(){return u("addComment")}},"Add with a comment"),c.a.createElement("button",{onClick:function(){return u("addCustomComment")}},"Add with a custom price and a comment")):l.status===t&&s.includes("custom")?c.a.createElement("div",null,p,!1===m[d].active?c.a.createElement("button",{onClick:function(){return u("recover")}},"Recover dish"):c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return u("Remove")}},"Remove dish"),c.a.createElement("button",{onClick:function(){return u("updateName")}},"Update dish name"),c.a.createElement("button",{onClick:function(){return u("updatePrice")}},"Update dish price"),c.a.createElement("button",{onClick:function(){return u("updateCategory")}},"Update dish category"))):c.a.createElement("div",null,p))},h=function(e){var t=e.name,a=e.onClickCategory,n=e.categoryActive,r=e.setCategoryActive,l=e.id;return c.a.createElement("div",{className:"menuContainer",id:l===n?"categoryActive":"",onClick:function(){a({name:t}),r(l)}},c.a.createElement("span",{className:"menuItem"},t))},E=function(e){var t=e.setMenuSearch;return c.a.createElement("div",null,c.a.createElement("input",{className:"searchBox",onChange:function(e){return t(e.target.value)}}))},C=function(e){for(var t=e.tempTables,a=e.clickedTable,n=e.setTempTables,r=e.path,l=e.setSelectedCategory,o=e.setMenuSearch,s=e.menuSearch,m=e.selectedCategory,u=e.categoryActive,d=e.setCategoryActive,p=e.tempMenu,f=e.setTempMenu,b=e.clickMenuItem,C=e.setClickMenuItem,k=function(e){var c=e.name,l=e.price,o=e.source,s=e.id;if(r.includes("order_")){var m=Object(i.a)(t);if("add"===o)m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:[],price:l}),m[a].total+=l;else if("addComment"===o){var u=prompt("Enter your custom comment:");if(!u)return;m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:[u],price:l}),m[a].total+=l}else if("addCustom"===o){var d=prompt("Enter your custom price:");if(!d||isNaN(Number(d)))return;m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:["custom price ".concat(d)],price:d}),m[a].total+=Number(d)}else if("addCustomComment"===o){var v=prompt("Enter your custom price:"),b=prompt("Enter your custom comment:");if(!v||!b||isNaN(Number(v)))return;m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:["custom price ".concat(v),b],price:v}),m[a].total+=Number(v)}m[a].tableActive="waiting",n(m)}else{var g=p.findIndex((function(e){return e.id===s})),h=Object(i.a)(p);if("Remove"===o)h[g].active=!1;else if("recover"===o)h.filter((function(e){return!0===e.active&&e.name===c})).length>0?alert("Unable to recover a dish with the same name as another active dish."):h[g].active=!0;else if("updateName"===o){var E=function(){var e="";if(!(e=prompt("Please provide a new name for the dish")))return{v:void 0};if(e.length>0)for(;p.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()})).length>0;){if(!(e=prompt("Given name already exists, please provide a unique new name")))return{v:void 0};e.length>0&&e.toLowerCase()}h[g].active=!1,h.push({id:h.length+1,name:e,price:h[g].price,category:h[g].category,active:!0})}();if("object"===typeof E)return E.v}else if("updatePrice"===o){var C=null;if(!(C=Number(prompt("Please provide a new price for the dish"))))return;for(;isNaN(C)||0===C;)C=Number(prompt("Please provide a valid price for the dish"));h[g].active=!1,h.push({id:h.length+1,name:h[g].name,price:C,category:h[g].category,active:!0})}else if("updateCategory"===o){var k=prompt("Please provide a category name");if(!k)return;k.length>0&&(h[g].category=k.toLowerCase())}f(h)}},y=function(e){var t=e.name;l(t),o("")},O=function(e){return p.filter((function(t){return t.active===e})).filter((function(e){return"All"===m&&!s.length>0?e:s.length>0?e.name.toLowerCase().includes(s.toLowerCase()):e.category===m}))},S=O(!0),T=S.map((function(e,t){return c.a.createElement(g,{key:S[t].id,id:S[t].id,name:S[t].name,price:S[t].price,onClickMenu:k,clickMenuItem:b,setClickMenuItem:C,path:r,tempMenu:p})})),N=O(!1),w=N.map((function(e,t){return c.a.createElement(g,{key:N[t].id,id:N[t].id,name:N[t].name,price:N[t].price,onClickMenu:k,clickMenuItem:b,setClickMenuItem:C,path:r,tempMenu:p})})),j=["All"],I=["All"],M=0;M<p.length;M++)!0===p[M].active?j.push(p[M].category):I.push(p[M].category);var A=Object(i.a)(new Set(j)),P=Object(i.a)(new Set(I)),D=A.map((function(e,t){return c.a.createElement(h,{categoryActive:u,setCategoryActive:d,onClickCategory:y,key:t,id:t,name:e})})),R=P.map((function(e,t){return c.a.createElement(h,{categoryActive:u,setCategoryActive:d,onClickCategory:y,key:t,id:t,name:e})}));return c.a.createElement("div",null,c.a.createElement("div",{className:"menuArray"},c.a.createElement(v,null,D),c.a.createElement(v,null,T)),"customize"===r&&R.length>1?c.a.createElement("div",null,c.a.createElement("h3",null,"Click a menu item to bring it back from the trash"),c.a.createElement("div",{className:"menuArray"},c.a.createElement(v,null,R),c.a.createElement(v,null,w))):c.a.createElement("span",null),c.a.createElement("div",{className:"searchContainer"},c.a.createElement("span",{id:"searchText"},"Search menu item:"),c.a.createElement(E,{setMenuSearch:o})))},k=function(e){var t=e.name,a=e.onRemoveOrderedItem;return c.a.createElement("div",{onClick:function(){}},t[1]<2?c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),c.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),c.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))},y=function(e){var t=e.name,a=e.onRemoveOrderedItem;return c.a.createElement("div",{onClick:function(){}},t[1]<2?c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"prepared")}}),c.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"prepared")}}),c.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))},O=function(e){var t=e.name,a=e.comment,n=e.time,r=e.status,l=e.price,i=e.clickSpecialItem,o=e.setClickSpecialItem,s=e.onRemoveSpecialItem,m=c.a.createElement("div",null,c.a.createElement("button",{className:"deleteBtn",onClick:function(){return s({time:n,status:r,price:l})}}),c.a.createElement("span",null,t),i===n?c.a.createElement("button",{onClick:function(){return o("false")}},"Hide info"):c.a.createElement("button",{onClick:function(){return o(n)}},"More info")),u=a.join(", ");return c.a.createElement("div",{className:"foodContainer"},i===n?c.a.createElement("div",null,m,c.a.createElement("p",null,u)):c.a.createElement("div",null,m))};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var T=function(e){var t=e.path,a=e.tempTables,n=e.clickedTable,r=e.setTempTables,l=e.logTables,s=e.setLogTables,m=e.setMenuSearch,u=e.menuSearch,d=e.selectedCategory,p=e.setSelectedCategory,b=e.categoryActive,g=e.setCategoryActive,h=e.getRelevantOrders,E=e.enumerateOrders,T=e.tempMenu,N=e.setTempMenu,w=e.clickMenuItem,j=e.setClickMenuItem,I=e.clickSpecialItem,M=e.setClickSpecialItem,A=h("waiting",!1),P=h("prepared",!1),D=A.concat(P),R=h("waiting",!0),x=h("prepared",!0),L=h("delivered",!0),B=E(A),z=E(P),W=function(e,t){var c=e.name,l=Object(i.a)(a),o=l[n].orders,s=0;"waiting"===t?(s=o.findIndex((function(e){return e.name===c[0]&&"waiting"===e.status&&0===e.comments.length})),l[n].orders.splice(s,1)):"delivered"===t?(s=o.findIndex((function(e){return e.name===c[0]&&"delivered"===e.status&&0===e.comments.length})),l[n].orders[s].status="returned"):(s=o.findIndex((function(e){return e.name===c[0]&&"prepared"===e.status&&0===e.comments.length})),l[n].orders[s].status="returned");for(var m=0,u=T.filter((function(e){return!0===e.active})),d=0;d<u.length;d++)u[d].name===c[0]&&(m=u[d].price);U(m),r(l)},_=function(e){var t=e.time,c=e.status,l=e.price,o=Object(i.a)(a),s=o[n].orders,m=0;"waiting"===c?(m=s.findIndex((function(e){return e.time.getTime()===t})),o[n].orders.splice(m,1)):(m=s.findIndex((function(e){return e.time.getTime()===t})),o[n].orders[m].status="returned"),U(l),r(o)},U=function(e){var t=Object(i.a)(a);t[n].total-=e,0===t[n].total&&0===t[n].orders.length&&(t[n].tableActive="false",t[n].timeAdded=new Date),r(t)},F=B.map((function(e,t){return c.a.createElement(f,{key:t,id:t,name:B[t],onRemoveOrderedItem:W})})),H=E(h("delivered",!1)),q=H.map((function(e,t){return c.a.createElement(k,{key:t,id:t,name:H[t],onRemoveOrderedItem:W})})),J=z.map((function(e,t){return c.a.createElement(y,{key:t,id:t,name:z[t],onRemoveOrderedItem:W})})),G=R.map((function(e,t){return c.a.createElement(O,{key:t,id:t,name:R[t][0],time:R[t][2],status:R[t][3],comment:R[t][4],price:R[t][5],clickSpecialItem:I,setClickSpecialItem:M,onRemoveSpecialItem:_})})),K=x.map((function(e,t){return c.a.createElement(O,{key:t,id:t,name:x[t][0],time:x[t][2],status:x[t][3],comment:x[t][4],price:x[t][5],clickSpecialItem:I,setClickSpecialItem:M,onRemoveSpecialItem:_})})),Y=L.map((function(e,t){return c.a.createElement(O,{key:t,id:t,name:L[t][0],time:L[t][2],status:L[t][3],comment:L[t][4],price:L[t][5],clickSpecialItem:I,setClickSpecialItem:M,onRemoveSpecialItem:_})})),$=function(){var e=Object(i.a)(a);e[n]={id:n,orders:[],total:0,tableActive:"false",timeAdded:new Date},r(e)},Q=function(){var e=a[n].total,t=a[n].orders.filter((function(e){return"returned"===e.status})),c=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);c.total=l.total+e,c.orders.push(t),s(c)};return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("h1",null,"This is da menu!"),c.a.createElement(C,{clickMenuItem:w,setClickMenuItem:j,setTempTables:r,setCategoryActive:g,categoryActive:b,setMenuSearch:m,tempTables:a,path:t,clickedTable:n,menuSearch:u,selectedCategory:d,setSelectedCategory:p,tempMenu:T,setTempMenu:N}),c.a.createElement("h1",null,"Table ".concat(a[n].id+1," ordered the following items:")),c.a.createElement("div",{className:"menuArrayContainer"},c.a.createElement("div",{className:"selectedMenu"},c.a.createElement("h3",null,"Waiting orders:"),c.a.createElement(v,null,F,G)),c.a.createElement("div",{className:"selectedMenu"},c.a.createElement("h3",null,"Ready for delivery:"),c.a.createElement(v,null,J,K)),c.a.createElement("div",{className:"selectedMenu"},c.a.createElement("h3",null,"Orders delivered:"),c.a.createElement(v,null,q,Y))),c.a.createElement("p",null,"For a total of ".concat(a[n].total)),c.a.createElement("button",{className:"addTable",onClick:function(){D.length>0?alert("Table has not yet received all orders!"):function(){var e=Number(prompt("Is there a tip?","0")),t=Object(i.a)(a);t[n].total+=e,r(t),Q(),$()}()}},"Checkout and add a custom tip"),c.a.createElement("button",{className:"addTable",onClick:function(){D.length>0?alert("Table has not yet received all orders!"):function(){var e=Object(i.a)(a);e[n].total*=1.1,r(e),Q(),$()}()}},"Checkout and add 10% tip"))},N=(a(18),a(19),function(e){var t=e.name,a=e.onSetDone,n=e.time,r=e.table,l=e.status,i=e.comment,o=e.clickSpecialItem,s=e.setClickSpecialItem,m=i.join(", "),u=c.a.createElement("div",null,m.length>0&&"false"===o?c.a.createElement("div",null,c.a.createElement("span",null,"Order ".concat(t," of table ").concat(r+1)),c.a.createElement("button",{onClick:function(){return s(n)}},"More info")):m.length>0&&o===n?c.a.createElement("div",null,c.a.createElement("span",null,"Order ".concat(t," of table ").concat(r+1)),c.a.createElement("button",{onClick:function(){return s("false")}},"Less info"),c.a.createElement("span",null,m)):c.a.createElement("span",null,"Order ".concat(t," of table ").concat(r+1)),"waiting"===l?c.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:r,status:l})}},"Prepared"):"prepared"===l?c.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:r,status:l})}},"Delivered"):null);return c.a.createElement("div",{className:"todoList"},u)}),w=function(e){var t=e.logTables,a=e.clickSpecialItem,n=e.setClickSpecialItem,r=t.orders.flat(1/0),l=r.map((function(e,t){return c.a.createElement(N,{key:t,id:t,name:r[t].name,table:r[t].table,time:r[t].time.getTime(),status:r[t].status,comment:r[t].comments,clickSpecialItem:a,setClickSpecialItem:n})}));return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("h2",null,"Income:"),c.a.createElement("span",null,"The total revenue from all checked out tables is ".concat(parseFloat(t.total).toFixed(2))),c.a.createElement("div",null,c.a.createElement("h3",null,"The following orders were returned:"),c.a.createElement(v,null,l)))};a(20);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){var t=e.menuInput,a=e.setMenuInput,n=e.addNewItemtoMenu,r=e.setAddNewItemtoMenu,l=e.setTempTables,i=e.setCategoryActive,o=e.categoryActive,s=e.setMenuSearch,m=e.tempTables,u=e.path,d=e.clickedTable,p=e.menuSearch,f=e.selectedCategory,v=e.setSelectedCategory,b=e.tempMenu,g=e.setTempMenu,h=e.clickMenuItem,E=e.setClickMenuItem;return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("h2",null,"Here you will be able to customize your menu"),n?c.a.createElement("div",{className:"addDish"},c.a.createElement("span",null,"Please enter dish name:"),c.a.createElement("input",{type:"text",onChange:function(e){var n=I({},t);n.name=e.target.value,a(n)}}),c.a.createElement("span",null,"Please enter dish price:"),c.a.createElement("input",{type:"text",onChange:function(e){var n=I({},t);n.price=Math.abs(Number(e.target.value)),a(n)}}),c.a.createElement("span",null,"Please enter a category"),c.a.createElement("input",{type:"text",onChange:function(e){var n=I({},t);n.category=e.target.value.toLowerCase(),a(n)}}),c.a.createElement("button",{className:"addTable",onClick:function(){return function(){for(var e=[],a=0;a<b.length;a++)e.push(b[a].name.toLowerCase());var n=b[b.length-1].id;if(t.name.length>0&&!isNaN(Number(t.price))&&t.category.length>0){if(e.includes(t.name.toLowerCase()))return alert("The dish ".concat(t.name," already exists, please enter a unique dish name"));b.push({id:n+1,name:t.name,price:t.price,category:t.category,active:!0}),r(!1)}else alert("Please enter correct dish details.")}()}},"Add dish"),c.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),c.a.createElement(C,{setTempTables:l,setCategoryActive:i,categoryActive:o,setMenuSearch:s,tempTables:m,path:u,clickedTable:d,menuSearch:p,selectedCategory:f,setSelectedCategory:v,setTempMenu:g,tempMenu:b,clickMenuItem:h,setClickMenuItem:E})):c.a.createElement("div",null,c.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),c.a.createElement(C,{setTempTables:l,setCategoryActive:i,categoryActive:o,setMenuSearch:s,tempTables:m,path:u,clickedTable:d,menuSearch:p,selectedCategory:f,setSelectedCategory:v,tempMenu:b,setTempMenu:g,clickMenuItem:h,setClickMenuItem:E}),c.a.createElement("button",{className:"addTable",onClick:function(){return r(!0)}},"Add a new menu item")))},A=function(e){var t=e.getRelevantOrders,a=e.onSetDone,n=e.clickSpecialItem,r=e.setClickSpecialItem,l=t("waiting"),i=l.map((function(e,t){return c.a.createElement(N,{key:t,id:t,name:l[t][0],table:l[t][1],time:l[t][2],status:l[t][3],comment:l[t][4],onSetDone:a,setClickSpecialItem:r,clickSpecialItem:n})}));return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("div",{className:"containerOfContainer"},c.a.createElement("h3",null,"Waiting list:"),c.a.createElement(v,null,i)))},P=function(e){var t=e.getRelevantOrders,a=e.onSetDone,n=e.clickSpecialItem,r=e.setClickSpecialItem,l=t("prepared"),i=l.map((function(e,t){return c.a.createElement(N,{key:t,id:t,name:l[t][0],table:l[t][1],time:l[t][2],status:l[t][3],comment:l[t][4],onSetDone:a,clickSpecialItem:n,setClickSpecialItem:r})}));return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("div",{className:"containerOfContainer"},c.a.createElement("h3",null,"Ready for delivery:"),c.a.createElement(v,null,i)))};function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var R=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("tables"),u=Object(s.a)(l,2),d=u[0],f=u[1],v=Object(n.useState)(0),b=Object(s.a)(v,2),g=b[0],h=b[1],E=Object(n.useState)({orders:[],total:0}),C=Object(s.a)(E,2),k=C[0],y=C[1],O=Object(n.useState)(""),S=Object(s.a)(O,2),N=S[0],j=S[1],I=Object(n.useState)({name:"",price:0,category:""}),R=Object(s.a)(I,2),x=R[0],L=R[1],B=Object(n.useState)(!1),z=Object(s.a)(B,2),W=z[0],_=z[1],U=Object(n.useState)("All"),F=Object(s.a)(U,2),H=F[0],q=F[1],J=Object(n.useState)(0),G=Object(s.a)(J,2),K=G[0],Y=G[1],$=Object(n.useState)(0),Q=Object(s.a)($,2),V=Q[0],X=Q[1],Z=Object(n.useState)(!1),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({status:"false",toggle:!1}),ce=Object(s.a)(ne,2),re=ce[0],le=ce[1],ie=Object(n.useState)("false"),oe=Object(s.a)(ie,2),se=oe[0],me=oe[1],ue=Object(n.useState)(!1),de=Object(s.a)(ue,2),pe=de[0],fe=de[1],ve=Object(n.useState)([{id:0,orders:[],total:0,tableActive:"false",timeAdded:new Date}]),be=Object(s.a)(ve,2),ge=be[0],he=be[1],Ee=Object(n.useState)([{id:1,name:"grilled chicken",price:80,category:"main dishes",active:!0},{id:2,name:"ceaser salad",price:55,category:"starters",active:!0},{id:3,name:"beef steak",price:120,category:"main dishes",active:!0},{id:4,name:"pepperony",price:90,category:"pizzas",active:!0}]),Ce=Object(s.a)(Ee,2),ke=Ce[0],ye=Ce[1],Oe=function(e,t){var a=[];if("waiters"===d||"kitchen"===d)for(var n=0;n<ge.length;n++)a.push(ge[n].orders.filter((function(t){return t.status===e})));else if(d.includes("order_")){var c=ge[g].orders.filter((function(t){return t.status===e&&0===t.comments.length})),r=ge[g].orders.filter((function(t){return t.status===e&&t.comments.length>0}));t?a.push(r):a.push(c)}var l=a.flat(1);l.sort((function(e,t){return t.time.getTime()-e.time.getTime()}));for(var i=[],o=0;o<l.length;o++)i.push([l[o].name,l[o].table,l[o].time.getTime(),l[o].status,l[o].comments,l[o].price]);return i},Se=function(e){var t=e.time,a=e.table,n=e.status,c=Object(i.a)(ge),r=c[a].orders.findIndex((function(e){return e.time.getTime()===t}));"waiting"===n?c[a].orders[r].status="prepared":(c[a].orders[r].status="delivered",c[a].orders.filter((function(e){return"delivered"===e.status})).length===c[a].orders.filter((function(e){return"returned"!==e.status})).length&&(c[a].tableActive="eating"));he(c)};return c.a.createElement("div",{className:"App"},c.a.createElement(m,{openNav:pe,setOpenNav:fe,setNavActive:X,navActive:V,resetWhenChangingPath:function(){Y(0),q("All"),j(""),L({name:"",price:0,category:""}),_(!1);var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},re);e.status="false",le(e),me("false")},setPath:f}),"tables"===d?c.a.createElement(p,{clickedTable:g,setClickedTable:h,clickCount:a,setClickCount:r,setTempTables:he,tempTables:ge,path:d,setPath:f}):d.includes("order_")?c.a.createElement(T,{clickSpecialItem:se,setClickSpecialItem:me,clickMenuItem:re,setClickMenuItem:le,clickedOnDelivered:te,setClickedOnDelivered:ae,tempMenu:ke,setTempMenu:ye,path:d,enumerateOrders:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a][0]);var n={};t.forEach((function(e){n[e]=(n[e]||0)+1}));var c=Object.entries(n);return c.sort(),c},getRelevantOrders:Oe,categoryActive:K,setCategoryActive:Y,selectedCategory:H,setSelectedCategory:q,menuSearch:N,setMenuSearch:j,logTables:k,setLogTables:y,tempTables:ge,clickedTable:g,setTempTables:he}):d.includes("customize")?c.a.createElement(M,{setClickMenuItem:le,clickMenuItem:re,tempMenu:ke,setTempMenu:ye,path:d,setSelectedCategory:q,selectedCategory:H,menuSearch:N,clickedTable:g,tempTables:ge,setMenuSearch:j,categoryActive:K,setCategoryActive:Y,setTempTables:he,addNewItemtoMenu:W,setAddNewItemtoMenu:_,menuInput:x,setMenuInput:L}):"Statistics"===d?c.a.createElement(w,{clickSpecialItem:se,setClickSpecialItem:me,onSetDone:Se,getRelevantOrders:Oe,logTables:k}):"kitchen"===d?c.a.createElement(A,{clickSpecialItem:se,setClickSpecialItem:me,onSetDone:Se,getRelevantOrders:Oe}):c.a.createElement(P,{clickSpecialItem:se,setClickSpecialItem:me,onSetDone:Se,getRelevantOrders:Oe}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.512d4095.chunk.js.map