(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),i=(a(11),a(2)),o=a(3),s=a(1),u=(a(12),a(13),function(e){for(var t=e.setPath,a=e.resetWhenChangingPath,n=e.setNavActive,c=e.navActive,l=e.openNav,i=e.setOpenNav,o=e.tempTables,s=r.a.createElement("div",{className:"burgerPosition"},r.a.createElement("div",{className:"burgerContainer ".concat(l?"change":""),onClick:function(){i(!l)}},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))),u=0,m=0;m<o.length;m++)u+=o[m].orders.filter((function(e){return"waiting"===e.status})).length;for(var d=0,p=0;p<o.length;p++)d+=o[p].orders.filter((function(e){return"prepared"===e.status})).length;return r.a.createElement("div",null,l?r.a.createElement("div",null,r.a.createElement("div",null,s),r.a.createElement("ul",{className:"NavUl"},r.a.createElement("li",{className:"NavLi ".concat(0===c?"navActive":""),onClick:function(){t("tables"),a(),n(0)}},"Tables"),r.a.createElement("li",{className:"NavLi ".concat(1===c?"navActive":""),onClick:function(){t("kitchen"),a(),n(1)}},"Kitchen Stuff ".concat(u)),r.a.createElement("li",{className:"NavLi ".concat(2===c?"navActive":""),onClick:function(){t("waiters"),a(),n(2)}},"Waiters ".concat(d)),r.a.createElement("li",{className:"NavLi ".concat(3===c?"navActive":""),onClick:function(){t("customize"),a(),n(3)}},"Customize menu"),r.a.createElement("li",{className:"NavLi ".concat(4===c?"navActive":""),onClick:function(){t("Statistics"),a(),n(4)}},"Management"))):r.a.createElement("div",null,s))}),m=(a(14),a(15),function(e){var t=e.tempTables,a=e.setTempTables,n=e.id,c=e.setClickCount,l=e.clickCount;return r.a.createElement("div",{className:"deleteBtnContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){for(var e=t.filter((function(e){return e.id!==n})),r=0;r<e.length;r++)e[r].id=r;a(e),c(l-1)}}))}),d=function(e){var t=e.id,a=e.setPath,n=e.setClickedTable,c=e.setTempTables,l=e.tempTables,i=e.setClickCount,o=e.clickCount;return r.a.createElement("div",{className:"false"===l[t].tableActive?"tableDiv":"waiting"===l[t].tableActive?"activeTableDiv":"eatingTableDiv",id:t},r.a.createElement(m,{id:t,setTempTables:c,tempTables:l,setClickCount:i,clickCount:o}),r.a.createElement("p",{className:"clickTable",onClick:function(){n(t),a("order_".concat(t))}},"Click here to view and edit table number ".concat(t+1)))},p=function(e){var t=e.tempTables,a=(e.path,e.setPath),n=e.setTempTables,c=e.clickCount,l=e.setClickCount,o=e.setClickedTable,s=e.clickedTable,u=t.map((function(e,i){return r.a.createElement(d,{setClickCount:l,clickCount:c,setClickedTable:o,setPath:a,key:t[i].id,id:t[i].id,tempTables:t,setTempTables:n,clickedTable:s})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},u),r.a.createElement("button",{className:"addTable",onClick:function(){l(c+1),n([].concat(Object(i.a)(t),[{id:c,orders:[],total:0,tableActive:"false",timeAdded:new Date}]))}},"Add a new table"))},f=(a(16),function(e){var t=e.name,a=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))}),v=function(e){return r.a.createElement("div",{className:"menuList",style:{overflowY:"scroll",maxHeight:"250px",margin:"1%"}},e.children)};a(17);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){var t=e.id,a=e.name,n=e.price,c=e.onClickMenu,l=e.clickMenuItem,i=e.setClickMenuItem,s=e.path,u=e.tempMenu,m=function(e){var r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);"clickMenu"!==e||r.toggle?(r.status="false",r.toggle=!1,c({name:a,price:n,source:e,id:t})):(r.status=t,r.toggle=!0),i(r)},d=u.findIndex((function(e){return e.id===t})),p=r.a.createElement("div",{className:"menuContainer"},!0===l.toggle&&l.status===t?r.a.createElement("button",{className:"addTable",onClick:function(){m("clickMenu")}},"\u22cf"):r.a.createElement("button",{className:"addTable",onClick:function(){m("clickMenu")}},"\u22ce"),r.a.createElement("span",{className:"menuItem"},a),r.a.createElement("span",{className:"menuItem"},n),s.includes("order_")?r.a.createElement("button",{className:"addTable",onClick:function(){return m("add")}},"\u2295"):null);return r.a.createElement("div",null,l.status===t&&s.includes("order_")?r.a.createElement("div",null,p,r.a.createElement("button",{className:"addTable",onClick:function(){return m("addCustom")}},"Add with a custom price"),r.a.createElement("button",{className:"addTable",onClick:function(){return m("addComment")}},"Add with a comment"),r.a.createElement("button",{className:"addTable",onClick:function(){return m("addCustomComment")}},"Add with a custom price and a comment")):l.status===t&&s.includes("custom")?r.a.createElement("div",null,p,!1===u[d].active?r.a.createElement("button",{className:"addTable",onClick:function(){return m("recover")}},"Recover dish"):r.a.createElement("div",null,r.a.createElement("button",{className:"addTable",onClick:function(){return m("Remove")}},"Remove dish"),r.a.createElement("button",{className:"addTable",onClick:function(){return m("updateName")}},"Update dish name"),r.a.createElement("button",{className:"addTable",onClick:function(){return m("updatePrice")}},"Update dish price"),r.a.createElement("button",{className:"addTable",onClick:function(){return m("updateCategory")}},"Update dish category"))):r.a.createElement("div",null,p))},h=function(e){var t=e.name,a=e.onClickCategory,n=e.categoryActive,c=e.setCategoryActive,l=e.id;return r.a.createElement("div",{className:"menuContainer",id:l===n?"categoryActive":"",onClick:function(){a({name:t}),c(l)}},r.a.createElement("span",{className:"menuItem"},t))},E=function(e){var t=e.setMenuSearch;return r.a.createElement("div",null,r.a.createElement("input",{className:"searchBox",onChange:function(e){return t(e.target.value)}}))},C=function(e){for(var t=e.tempTables,a=e.clickedTable,n=e.setTempTables,c=e.path,l=e.setSelectedCategory,o=e.setMenuSearch,s=e.menuSearch,u=e.selectedCategory,m=e.categoryActive,d=e.setCategoryActive,p=e.tempMenu,f=e.setTempMenu,b=e.clickMenuItem,C=e.setClickMenuItem,k=function(e){var r=e.name,l=e.price,o=e.source,s=e.id;if(c.includes("order_")){var u=Object(i.a)(t);if("add"===o)u[a].orders.push({name:r,status:"waiting",time:new Date,table:a,comments:[],price:l}),u[a].total+=l;else if("addComment"===o){var m=prompt("Enter your custom comment:");if(!m)return;u[a].orders.push({name:r,status:"waiting",time:new Date,table:a,comments:[m],price:l}),u[a].total+=l}else if("addCustom"===o){var d=prompt("Enter your custom price:");if(!d||isNaN(Number(d)))return;u[a].orders.push({name:r,status:"waiting",time:new Date,table:a,comments:["custom price ".concat(d)],price:d}),u[a].total+=Number(d)}else if("addCustomComment"===o){var v=prompt("Enter your custom price:");if(!v||isNaN(Number(v)))return;var b=prompt("Enter your custom comment:");b&&(u[a].orders.push({name:r,status:"waiting",time:new Date,table:a,comments:["custom price ".concat(v),b],price:v}),u[a].total+=Number(v))}u[a].tableActive="waiting",n(u)}else{var g=p.findIndex((function(e){return e.id===s})),h=Object(i.a)(p);if("Remove"===o)h[g].active=!1;else if("recover"===o)h.filter((function(e){return!0===e.active&&e.name===r})).length>0?alert("Unable to recover a dish with the same name as another active dish."):h[g].active=!0;else if("updateName"===o){var E=function(){var e="";if(!(e=prompt("Please provide a new name for the dish")))return{v:void 0};if(e.length>0)for(;p.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()})).length>0;){if(!(e=prompt("Given name already exists, please provide a unique new name")))return{v:void 0};e.length>0&&e.toLowerCase()}h[g].active=!1,h.push({id:h.length+1,name:e,price:h[g].price,category:h[g].category,active:!0})}();if("object"===typeof E)return E.v}else if("updatePrice"===o){var C=null;if(!(C=Number(prompt("Please provide a new price for the dish"))))return;for(;isNaN(C)||0===C;)C=Number(prompt("Please provide a valid price for the dish"));h[g].active=!1,h.push({id:h.length+1,name:h[g].name,price:C,category:h[g].category,active:!0})}else if("updateCategory"===o){var k=prompt("Please provide a category name");if(!k)return;k.length>0&&(h[g].category=k.toLowerCase())}f(h)}},y=function(e){var t=e.name;l(t),o("")},O=function(e){return p.filter((function(t){return t.active===e})).filter((function(e){return"All"===u&&!s.length>0?e:s.length>0?e.name.toLowerCase().includes(s.toLowerCase()):e.category===u}))},T=O(!0),N=T.map((function(e,t){return r.a.createElement(g,{key:T[t].id,id:T[t].id,name:T[t].name,price:T[t].price,onClickMenu:k,clickMenuItem:b,setClickMenuItem:C,path:c,tempMenu:p})})),S=O(!1),w=S.map((function(e,t){return r.a.createElement(g,{key:S[t].id,id:S[t].id,name:S[t].name,price:S[t].price,onClickMenu:k,clickMenuItem:b,setClickMenuItem:C,path:c,tempMenu:p})})),j=["All"],I=["All"],M=0;M<p.length;M++)!0===p[M].active?j.push(p[M].category):I.push(p[M].category);var A=Object(i.a)(new Set(j)),P=Object(i.a)(new Set(I)),D=A.map((function(e,t){return r.a.createElement(h,{categoryActive:m,setCategoryActive:d,onClickCategory:y,key:t,id:t,name:e})})),R=P.map((function(e,t){return r.a.createElement(h,{categoryActive:m,setCategoryActive:d,onClickCategory:y,key:t,id:t,name:e})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"menuArray"},r.a.createElement(v,null,D),r.a.createElement(v,null,N)),"customize"===c&&R.length>1?r.a.createElement("div",null,r.a.createElement("h3",null,"Click a menu item to bring it back from the trash"),r.a.createElement("div",{className:"menuArray"},r.a.createElement(v,null,R),r.a.createElement(v,null,w))):r.a.createElement("span",null),r.a.createElement("div",{className:"searchContainer"},r.a.createElement("span",{id:"searchText"},"Search menu item:"),r.a.createElement(E,{setMenuSearch:o})))},k=function(e){var t=e.name,a=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))},y=function(e){var t=e.name,a=e.onRemoveOrderedItem;return r.a.createElement("div",{onClick:function(){}},t[1]<2?r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"prepared")}}),r.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0]))):r.a.createElement("div",{className:"foodContainer"},r.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"prepared")}}),r.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0]))))},O=function(e){var t=e.name,a=e.comment,n=e.time,c=e.status,l=e.price,i=e.clickSpecialItem,o=e.setClickSpecialItem,s=e.onRemoveSpecialItem,u=r.a.createElement("div",null,r.a.createElement("button",{className:"deleteBtn",onClick:function(){return s({time:n,status:c,price:l})}}),r.a.createElement("span",null,t),i===n?r.a.createElement("button",{onClick:function(){return o("false")}},"Hide info"):r.a.createElement("button",{onClick:function(){return o(n)}},"More info")),m=a.join(", ");return r.a.createElement("div",{className:"foodContainer"},i===n?r.a.createElement("div",null,u,r.a.createElement("p",null,m)):r.a.createElement("div",null,u))};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){var t=e.path,a=e.tempTables,n=e.clickedTable,c=e.setTempTables,l=e.logTables,o=e.setLogTables,s=e.setMenuSearch,u=e.menuSearch,m=e.selectedCategory,d=e.setSelectedCategory,p=e.categoryActive,b=e.setCategoryActive,g=e.getRelevantOrders,h=e.enumerateOrders,E=e.tempMenu,T=e.setTempMenu,S=e.clickMenuItem,w=e.setClickMenuItem,j=e.clickSpecialItem,I=e.setClickSpecialItem,M=e.setPath,A=a[n].orders.filter((function(e){return"waiting"===e.status})).length,P=a[n].orders.filter((function(e){return"prepared"===e.status})).length,D=a[n].orders.filter((function(e){return"delivered"===e.status})).length,R=g("waiting",!1),x=g("prepared",!1),L=R.concat(x),B=g("waiting",!0),z=g("prepared",!0),W=g("delivered",!0),_=h(R),U=h(x),F=function(e,t){var r=e.name,l=Object(i.a)(a),o=l[n].orders,s=0;"waiting"===t?(s=o.findIndex((function(e){return e.name===r[0]&&"waiting"===e.status&&0===e.comments.length})),l[n].orders.splice(s,1)):"delivered"===t?(s=o.findIndex((function(e){return e.name===r[0]&&"delivered"===e.status&&0===e.comments.length})),l[n].orders[s].status="returned"):(s=o.findIndex((function(e){return e.name===r[0]&&"prepared"===e.status&&0===e.comments.length})),l[n].orders[s].status="returned");for(var u=0,m=E.filter((function(e){return!0===e.active})),d=0;d<m.length;d++)m[d].name===r[0]&&(u=m[d].price);q(u),c(l)},H=function(e){var t=e.time,r=e.status,l=e.price,o=Object(i.a)(a),s=o[n].orders,u=0;"waiting"===r?(u=s.findIndex((function(e){return e.time.getTime()===t})),o[n].orders.splice(u,1)):(u=s.findIndex((function(e){return e.time.getTime()===t})),o[n].orders[u].status="returned"),q(l),c(o)},q=function(e){var t=Object(i.a)(a);t[n].total-=e,0===t[n].total&&0===t[n].orders.length&&(t[n].tableActive="false",t[n].timeAdded=new Date),c(t)},G=_.map((function(e,t){return r.a.createElement(f,{key:t,id:t,name:_[t],onRemoveOrderedItem:F})})),J=h(g("delivered",!1)),K=J.map((function(e,t){return r.a.createElement(k,{key:t,id:t,name:J[t],onRemoveOrderedItem:F})})),Y=U.map((function(e,t){return r.a.createElement(y,{key:t,id:t,name:U[t],onRemoveOrderedItem:F})})),$=B.map((function(e,t){return r.a.createElement(O,{key:t,id:t,name:B[t][0],time:B[t][2],status:B[t][3],comment:B[t][4],price:B[t][5],clickSpecialItem:j,setClickSpecialItem:I,onRemoveSpecialItem:H})})),Q=z.map((function(e,t){return r.a.createElement(O,{key:t,id:t,name:z[t][0],time:z[t][2],status:z[t][3],comment:z[t][4],price:z[t][5],clickSpecialItem:j,setClickSpecialItem:I,onRemoveSpecialItem:H})})),V=W.map((function(e,t){return r.a.createElement(O,{key:t,id:t,name:W[t][0],time:W[t][2],status:W[t][3],comment:W[t][4],price:W[t][5],clickSpecialItem:j,setClickSpecialItem:I,onRemoveSpecialItem:H})})),X=function(){var e=Object(i.a)(a);e[n]={id:n,orders:[],total:0,tableActive:"false",timeAdded:new Date},c(e)},Z=function(){var e=a[n].total,t=a[n].orders.filter((function(e){return"returned"===e.status})),r=N({},l);r.total=l.total+e,r.orders.push(t),o(r)},ee=function(e){var t=N({},S);"waitingOrders"!==e&&"preparedOrders"!==e&&"deliveredOrders"!==e||t.toggle?(t.status="false",t.toggle=!1):(t.status=e,t.toggle=!0),w(t)};return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("button",{className:"addTable",onClick:function(){return M("tables")}},"Go back"),r.a.createElement("h1",null,"This is da menu!"),r.a.createElement(C,{clickMenuItem:S,setClickMenuItem:w,setTempTables:c,setCategoryActive:b,categoryActive:p,setMenuSearch:s,tempTables:a,path:t,clickedTable:n,menuSearch:u,selectedCategory:m,setSelectedCategory:d,tempMenu:E,setTempMenu:T}),r.a.createElement("h1",null,"Table ".concat(a[n].id+1," ordered the following items:")),r.a.createElement("div",{className:"menuArrayContainer"},A>0?r.a.createElement("div",{className:"selectedMenu"},r.a.createElement("h3",null,"Waiting orders: ".concat(A)),"waitingOrders"===S.status&&!0===S.toggle?r.a.createElement("div",null,r.a.createElement("button",{className:"addTable",onClick:function(){return ee("waitingOrders")}},"\u22cf"),r.a.createElement(v,null,G,$)):r.a.createElement("button",{className:"addTable",onClick:function(){return ee("waitingOrders")}},"\u22ce")):null,r.a.createElement("div",{className:"selectedMenu"},P>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Ready for delivery: ".concat(P)),"preparedOrders"===S.status&&!0===S.toggle?r.a.createElement("div",null,r.a.createElement("button",{className:"addTable",onClick:function(){return ee("preparedOrders")}},"\u22cf"),r.a.createElement(v,null,Y,Q)):r.a.createElement("button",{className:"addTable",onClick:function(){return ee("preparedOrders")}},"\u22ce")):null),r.a.createElement("div",{className:"selectedMenu"},D>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Orders delivered: ".concat(D)),"deliveredOrders"===S.status&&!0===S.toggle?r.a.createElement("div",null,r.a.createElement("button",{className:"addTable",onClick:function(){return ee("deliveredOrders")}},"\u22cf"),r.a.createElement(v,null,K,V)):r.a.createElement("button",{className:"addTable",onClick:function(){return ee("deliveredOrders")}},"\u22ce")):null)),r.a.createElement("p",null,"For a total of ".concat(a[n].total)),r.a.createElement("button",{className:"addTable",onClick:function(){L.length>0?alert("Table has not yet received all orders!"):function(){var e=Number(prompt("Is there a tip?","0")),t=Object(i.a)(a);t[n].total+=e,c(t),Z(),X()}()}},"Checkout and add a custom tip"),r.a.createElement("button",{className:"addTable",onClick:function(){L.length>0?alert("Table has not yet received all orders!"):function(){var e=Object(i.a)(a);e[n].total*=1.1,c(e),Z(),X()}()}},"Checkout and add 10% tip"))},w=(a(18),a(19),function(e){var t=e.name,a=e.onSetDone,n=e.time,c=e.table,l=e.status,i=e.comment,o=e.clickSpecialItem,s=e.setClickSpecialItem,u=i.join(", "),m=r.a.createElement("div",null,u.length>0&&"false"===o?r.a.createElement("div",null,r.a.createElement("span",null,"Order ".concat(t," of table ").concat(c+1)),r.a.createElement("button",{onClick:function(){return s(n)}},"More info")):u.length>0&&o===n?r.a.createElement("div",null,r.a.createElement("span",null,"Order ".concat(t," of table ").concat(c+1)),r.a.createElement("button",{onClick:function(){return s("false")}},"Less info"),r.a.createElement("span",null,u)):r.a.createElement("span",null,"Order ".concat(t," of table ").concat(c+1)),"waiting"===l?r.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:c,status:l})}},"Prepared"):"prepared"===l?r.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:c,status:l})}},"Delivered"):null);return r.a.createElement("div",{className:"todoList"},m)}),j=function(e){var t=e.logTables,a=e.clickSpecialItem,n=e.setClickSpecialItem,c=t.orders.flat(1/0),l=c.map((function(e,t){return r.a.createElement(w,{key:t,id:t,name:c[t].name,table:c[t].table,time:c[t].time.getTime(),status:c[t].status,comment:c[t].comments,clickSpecialItem:a,setClickSpecialItem:n})}));return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("h2",null,"Income:"),r.a.createElement("span",null,"The total revenue from all checked out tables is ".concat(parseFloat(t.total).toFixed(2))),r.a.createElement("div",null,r.a.createElement("h3",null,"The following orders were returned:"),r.a.createElement(v,null,l)))};a(20);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){var t=e.menuInput,a=e.setMenuInput,n=e.addNewItemtoMenu,c=e.setAddNewItemtoMenu,l=e.setTempTables,i=e.setCategoryActive,o=e.categoryActive,s=e.setMenuSearch,u=e.tempTables,m=e.path,d=e.clickedTable,p=e.menuSearch,f=e.selectedCategory,v=e.setSelectedCategory,b=e.tempMenu,g=e.setTempMenu,h=e.clickMenuItem,E=e.setClickMenuItem;return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("h2",null,"Here you will be able to customize your menu"),n?r.a.createElement("div",{className:"addDish"},r.a.createElement("span",null,"Please enter dish name:"),r.a.createElement("input",{type:"text",onChange:function(e){var n=M({},t);n.name=e.target.value,a(n)}}),r.a.createElement("span",null,"Please enter dish price:"),r.a.createElement("input",{type:"text",onChange:function(e){var n=M({},t);n.price=Math.abs(Number(e.target.value)),a(n)}}),r.a.createElement("span",null,"Please enter a category"),r.a.createElement("input",{type:"text",onChange:function(e){var n=M({},t);n.category=e.target.value.toLowerCase(),a(n)}}),r.a.createElement("button",{className:"addTable",onClick:function(){return function(){for(var e=[],a=0;a<b.length;a++)e.push(b[a].name.toLowerCase());var n=b[b.length-1].id;if(t.name.length>0&&!isNaN(Number(t.price))&&t.category.length>0){if(e.includes(t.name.toLowerCase()))return alert("The dish ".concat(t.name," already exists, please enter a unique dish name"));b.push({id:n+1,name:t.name,price:t.price,category:t.category,active:!0}),c(!1)}else alert("Please enter correct dish details.")}()}},"Add dish"),r.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),r.a.createElement(C,{setTempTables:l,setCategoryActive:i,categoryActive:o,setMenuSearch:s,tempTables:u,path:m,clickedTable:d,menuSearch:p,selectedCategory:f,setSelectedCategory:v,setTempMenu:g,tempMenu:b,clickMenuItem:h,setClickMenuItem:E})):r.a.createElement("div",null,r.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),r.a.createElement(C,{setTempTables:l,setCategoryActive:i,categoryActive:o,setMenuSearch:s,tempTables:u,path:m,clickedTable:d,menuSearch:p,selectedCategory:f,setSelectedCategory:v,tempMenu:b,setTempMenu:g,clickMenuItem:h,setClickMenuItem:E}),r.a.createElement("button",{className:"addTable",onClick:function(){return c(!0)}},"Add a new menu item")))},P=function(e){var t=e.getRelevantOrders,a=e.onSetDone,n=e.clickSpecialItem,c=e.setClickSpecialItem,l=t("waiting"),i=l.map((function(e,t){return r.a.createElement(w,{key:t,id:t,name:l[t][0],table:l[t][1],time:l[t][2],status:l[t][3],comment:l[t][4],onSetDone:a,setClickSpecialItem:c,clickSpecialItem:n})}));return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("h3",null,"Waiting list:"),r.a.createElement(v,null,i)))},D=function(e){var t=e.getRelevantOrders,a=e.onSetDone,n=e.clickSpecialItem,c=e.setClickSpecialItem,l=t("prepared"),i=l.map((function(e,t){return r.a.createElement(w,{key:t,id:t,name:l[t][0],table:l[t][1],time:l[t][2],status:l[t][3],comment:l[t][4],onSetDone:a,clickSpecialItem:n,setClickSpecialItem:c})}));return r.a.createElement("div",{className:"statisticsMain"},r.a.createElement("div",{className:"containerOfContainer"},r.a.createElement("h3",null,"Ready for delivery:"),r.a.createElement(v,null,i)))};function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("tables"),m=Object(s.a)(l,2),d=m[0],f=m[1],v=Object(n.useState)(0),b=Object(s.a)(v,2),g=b[0],h=b[1],E=Object(n.useState)({orders:[],total:0,waiting:0,prepared:0,delivered:0}),C=Object(s.a)(E,2),k=C[0],y=C[1],O=Object(n.useState)(""),T=Object(s.a)(O,2),N=T[0],w=T[1],I=Object(n.useState)({name:"",price:0,category:""}),M=Object(s.a)(I,2),x=M[0],L=M[1],B=Object(n.useState)(!1),z=Object(s.a)(B,2),W=z[0],_=z[1],U=Object(n.useState)("All"),F=Object(s.a)(U,2),H=F[0],q=F[1],G=Object(n.useState)(0),J=Object(s.a)(G,2),K=J[0],Y=J[1],$=Object(n.useState)(0),Q=Object(s.a)($,2),V=Q[0],X=Q[1],Z=Object(n.useState)(!1),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({status:"false",toggle:!1}),re=Object(s.a)(ne,2),ce=re[0],le=re[1],ie=Object(n.useState)("false"),oe=Object(s.a)(ie,2),se=oe[0],ue=oe[1],me=Object(n.useState)(!1),de=Object(s.a)(me,2),pe=de[0],fe=de[1],ve=Object(n.useState)([{id:0,orders:[],total:0,tableActive:"false",timeAdded:new Date}]),be=Object(s.a)(ve,2),ge=be[0],he=be[1],Ee=Object(n.useState)([{id:1,name:"grilled chicken",price:80,category:"main dishes",active:!0},{id:2,name:"ceaser salad",price:55,category:"starters",active:!0},{id:3,name:"beef steak",price:120,category:"main dishes",active:!0},{id:4,name:"pepperony",price:90,category:"pizzas",active:!0}]),Ce=Object(s.a)(Ee,2),ke=Ce[0],ye=Ce[1],Oe=function(e,t){var a=[];if("waiters"===d||"kitchen"===d)for(var n=0;n<ge.length;n++)a.push(ge[n].orders.filter((function(t){return t.status===e})));else if(d.includes("order_")){var r=ge[g].orders.filter((function(t){return t.status===e&&0===t.comments.length})),c=ge[g].orders.filter((function(t){return t.status===e&&t.comments.length>0}));t?a.push(c):a.push(r)}var l=a.flat(1);l.sort((function(e,t){return e.time.getTime()-t.time.getTime()}));for(var i=[],o=0;o<l.length;o++)i.push([l[o].name,l[o].table,l[o].time.getTime(),l[o].status,l[o].comments,l[o].price]);return i},Te=function(e){var t=e.time,a=e.table,n=e.status,r=Object(i.a)(ge),c=r[a].orders.findIndex((function(e){return e.time.getTime()===t}));"waiting"===n?r[a].orders[c].status="prepared":(r[a].orders[c].status="delivered",r[a].orders.filter((function(e){return"delivered"===e.status})).length===r[a].orders.filter((function(e){return"returned"!==e.status})).length&&(r[a].tableActive="eating"));he(r)};return r.a.createElement("div",{className:"App"},r.a.createElement(u,{tempTables:ge,openNav:pe,setOpenNav:fe,setNavActive:X,navActive:V,resetWhenChangingPath:function(){Y(0),q("All"),w(""),L({name:"",price:0,category:""}),_(!1);var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},ce);e.status="false",le(e),ue("false"),fe(!1)},setPath:f}),"tables"===d?r.a.createElement(p,{clickedTable:g,setClickedTable:h,clickCount:a,setClickCount:c,setTempTables:he,tempTables:ge,path:d,setPath:f}):d.includes("order_")?r.a.createElement(S,{setPath:f,clickSpecialItem:se,setClickSpecialItem:ue,clickMenuItem:ce,setClickMenuItem:le,clickedOnDelivered:te,setClickedOnDelivered:ae,tempMenu:ke,setTempMenu:ye,path:d,enumerateOrders:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a][0]);var n={};t.forEach((function(e){n[e]=(n[e]||0)+1}));var r=Object.entries(n);return r.sort(),r},getRelevantOrders:Oe,categoryActive:K,setCategoryActive:Y,selectedCategory:H,setSelectedCategory:q,menuSearch:N,setMenuSearch:w,logTables:k,setLogTables:y,tempTables:ge,clickedTable:g,setTempTables:he}):d.includes("customize")?r.a.createElement(A,{setClickMenuItem:le,clickMenuItem:ce,tempMenu:ke,setTempMenu:ye,path:d,setSelectedCategory:q,selectedCategory:H,menuSearch:N,clickedTable:g,tempTables:ge,setMenuSearch:w,categoryActive:K,setCategoryActive:Y,setTempTables:he,addNewItemtoMenu:W,setAddNewItemtoMenu:_,menuInput:x,setMenuInput:L}):"Statistics"===d?r.a.createElement(j,{clickSpecialItem:se,setClickSpecialItem:ue,onSetDone:Te,getRelevantOrders:Oe,logTables:k}):"kitchen"===d?r.a.createElement(P,{clickSpecialItem:se,setClickSpecialItem:ue,onSetDone:Te,getRelevantOrders:Oe}):r.a.createElement(D,{clickSpecialItem:se,setClickSpecialItem:ue,onSetDone:Te,getRelevantOrders:Oe}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.b15fcdaa.chunk.js.map