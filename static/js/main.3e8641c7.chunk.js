(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),i=(a(11),a(2)),o=a(3),s=a(1),m=(a(12),a(13),function(e){for(var t=e.setPath,a=e.resetWhenChangingPath,n=e.setNavActive,r=e.navActive,l=e.openNav,i=e.setOpenNav,o=e.tempTables,s=c.a.createElement("div",{className:"burgerPosition"},c.a.createElement("div",{className:"burgerContainer ".concat(l?"change":""),onClick:function(){i(!l)}},c.a.createElement("div",{className:"bar1"}),c.a.createElement("div",{className:"bar2"}),c.a.createElement("div",{className:"bar3"}))),m=0,u=0;u<o.length;u++)m+=o[u].orders.filter((function(e){return"waiting"===e.status})).length;for(var d=0,p=0;p<o.length;p++)d+=o[p].orders.filter((function(e){return"prepared"===e.status})).length;return c.a.createElement("div",null,l?c.a.createElement("div",null,c.a.createElement("div",null,s),c.a.createElement("ul",{className:"NavUl"},c.a.createElement("li",{className:"NavLi ".concat(0===r?"navActive":""),onClick:function(){t("tables"),a(),n(0)}},"Tables"),c.a.createElement("li",{className:"NavLi ".concat(1===r?"navActive":""),onClick:function(){t("kitchen"),a(),n(1)}},"Kitchen Stuff ".concat(m)),c.a.createElement("li",{className:"NavLi ".concat(2===r?"navActive":""),onClick:function(){t("waiters"),a(),n(2)}},"Waiters ".concat(d)),c.a.createElement("li",{className:"NavLi ".concat(3===r?"navActive":""),onClick:function(){t("customize"),a(),n(3)}},"Customize menu"),c.a.createElement("li",{className:"NavLi ".concat(4===r?"navActive":""),onClick:function(){t("Statistics"),a(),n(4)}},"Management"))):c.a.createElement("div",null,c.a.createElement("div",null,s),c.a.createElement("ul",{className:"NavUl closeMenu"},c.a.createElement("li",{className:"NavLi ".concat(0===r?"navActive":""),onClick:function(){t("tables"),a(),n(0)}},"Tables"),c.a.createElement("li",{className:"NavLi ".concat(1===r?"navActive":""),onClick:function(){t("kitchen"),a(),n(1)}},"Kitchen Stuff ".concat(m)),c.a.createElement("li",{className:"NavLi ".concat(2===r?"navActive":""),onClick:function(){t("waiters"),a(),n(2)}},"Waiters ".concat(d)),c.a.createElement("li",{className:"NavLi ".concat(3===r?"navActive":""),onClick:function(){t("customize"),a(),n(3)}},"Customize menu"),c.a.createElement("li",{className:"NavLi ".concat(4===r?"navActive":""),onClick:function(){t("Statistics"),a(),n(4)}},"Management"))))}),u=(a(14),a(15),function(e){var t=e.tempTables,a=e.setTempTables,n=e.id,r=e.setClickCount,l=e.clickCount;return c.a.createElement("div",{className:"deleteBtnContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){for(var e=t.filter((function(e){return e.id!==n})),c=0;c<e.length;c++)e[c].id=c;a(e),r(l-1)}}))}),d=function(e){var t=e.id,a=e.setPath,n=e.setClickedTable,r=e.setTempTables,l=e.tempTables,i=e.setClickCount,o=e.clickCount;return c.a.createElement("div",{className:"false"===l[t].tableActive?"tableDiv":"waiting"===l[t].tableActive?"activeTableDiv":"eatingTableDiv",id:t},c.a.createElement(u,{id:t,setTempTables:r,tempTables:l,setClickCount:i,clickCount:o}),c.a.createElement("p",{className:"clickTable",onClick:function(){n(t),a("order_".concat(t))}},"Click here to view and edit table number ".concat(t+1)))},p=function(e){var t=e.tempTables,a=(e.path,e.setPath),n=e.setTempTables,r=e.clickCount,l=e.setClickCount,o=e.setClickedTable,s=e.clickedTable,m=t.map((function(e,i){return c.a.createElement(d,{setClickCount:l,clickCount:r,setClickedTable:o,setPath:a,key:t[i].id,id:t[i].id,tempTables:t,setTempTables:n,clickedTable:s})}));return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},m),c.a.createElement("button",{className:"addTable",onClick:function(){l(r+1),n([].concat(Object(i.a)(t),[{id:r,orders:[],total:0,tableActive:"false",timeAdded:new Date}]))}},"Add a new table"))},v=(a(16),function(e){var t=e.name,a=e.onRemoveOrderedItem;e.clickMenuItem,e.setClickMenuItem,c.a.createElement("div",null);return c.a.createElement("div",null,t[1]<2?c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),c.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0])),c.a.createElement("button",null,"Expand")):c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"waiting")}}),c.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0])),c.a.createElement("button",null,"Expand")))}),f=function(e){return c.a.createElement("div",{className:"menuList",style:{overflowY:"scroll",maxHeight:"250px",margin:"1%"}},e.children)};a(17);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var g=function(e){var t=e.id,a=e.name,n=e.price,r=e.onClickMenu,l=e.clickMenuItem,i=e.setClickMenuItem,s=e.path,m=e.tempMenu,u=function(e){var c=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l);c.status="".concat(t),c.status===e?c.prevState!==e?(c.toggle=!0,c.prevState=e):c.toggle=!c.toggle:r({name:a,id:t,source:e,price:n}),i(c)},d=m.findIndex((function(e){return e.id===t})),p=c.a.createElement("div",{className:"menuContainer"},!0===l.toggle&&l.status==="".concat(t)?c.a.createElement("button",{className:"addTable",onClick:function(){u("".concat(t))}},"\u22cf"):c.a.createElement("button",{className:"addTable",onClick:function(){u("".concat(t))}},"\u22ce"),c.a.createElement("span",{className:"menuItem"},a),c.a.createElement("span",{className:"menuItem"},n),s.includes("order_")?c.a.createElement("button",{className:"addTable",onClick:function(){return u("add")}},"\u2295"):null);return c.a.createElement("div",null,l.status==="".concat(t)&&s.includes("order_")&&!0===l.toggle?c.a.createElement("div",null,p,c.a.createElement("button",{className:"addTable",onClick:function(){return u("addCustom")}},"Add with a custom price"),c.a.createElement("button",{className:"addTable",onClick:function(){return u("addComment")}},"Add with a comment"),c.a.createElement("button",{className:"addTable",onClick:function(){return u("addCustomComment")}},"Add with a custom price and a comment")):l.status==="".concat(t)&&s.includes("custom")&&!0===l.toggle?c.a.createElement("div",null,p,!1===m[d].active?c.a.createElement("button",{className:"addTable",onClick:function(){return u("recover")}},"Recover dish"):c.a.createElement("div",null,c.a.createElement("button",{className:"addTable",onClick:function(){return u("Remove")}},"Remove dish"),c.a.createElement("button",{className:"addTable",onClick:function(){return u("updateName")}},"Update dish name"),c.a.createElement("button",{className:"addTable",onClick:function(){return u("updatePrice")}},"Update dish price"),c.a.createElement("button",{className:"addTable",onClick:function(){return u("updateCategory")}},"Update dish category"))):c.a.createElement("div",null,p))},E=function(e){var t=e.name,a=e.onClickCategory,n=e.categoryActive,r=e.setCategoryActive,l=e.id;return c.a.createElement("div",{className:"menuContainer",id:l===n?"categoryActive":"",onClick:function(){a({name:t}),r(l)}},c.a.createElement("span",{className:"menuItem"},t))},h=function(e){var t=e.setMenuSearch;return c.a.createElement("div",null,c.a.createElement("input",{className:"searchBox",onChange:function(e){return t(e.target.value)}}))},C=function(e){for(var t=e.tempTables,a=e.clickedTable,n=e.setTempTables,r=e.path,l=e.setSelectedCategory,o=e.setMenuSearch,s=e.menuSearch,m=e.selectedCategory,u=e.categoryActive,d=e.setCategoryActive,p=e.tempMenu,v=e.setTempMenu,b=e.clickMenuItem,C=e.setClickMenuItem,k=function(e){var c=e.name,l=e.price,o=e.source,s=e.id;if(r.includes("order_")){var m=Object(i.a)(t);if("add"===o)m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:[],price:l}),m[a].total+=l;else if("addComment"===o){var u=prompt("Enter your custom comment:");if(!u)return;m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:[u],price:l}),m[a].total+=l}else if("addCustom"===o){var d=prompt("Enter your custom price:");if(!d||isNaN(Number(d)))return;m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:["custom price ".concat(d)],price:d}),m[a].total+=Number(d)}else if("addCustomComment"===o){var f=prompt("Enter your custom price:");if(!f||isNaN(Number(f)))return;var b=prompt("Enter your custom comment:");b&&(m[a].orders.push({name:c,status:"waiting",time:new Date,table:a,comments:["custom price ".concat(f),b],price:f}),m[a].total+=Number(f))}m[a].tableActive="waiting",n(m)}else{var g=p.findIndex((function(e){return e.id===s})),E=Object(i.a)(p);if("Remove"===o)E[g].active=!1;else if("recover"===o)E.filter((function(e){return!0===e.active&&e.name===c})).length>0?alert("Unable to recover a dish with the same name as another active dish."):E[g].active=!0;else if("updateName"===o){var h=function(){var e="";if(!(e=prompt("Please provide a new name for the dish")))return{v:void 0};if(e.length>0)for(;p.filter((function(t){return t.name.toLowerCase()===e.toLowerCase()})).length>0;){if(!(e=prompt("Given name already exists, please provide a unique new name")))return{v:void 0};e.length>0&&e.toLowerCase()}E[g].active=!1,E.push({id:E.length+1,name:e,price:E[g].price,category:E[g].category,active:!0})}();if("object"===typeof h)return h.v}else if("updatePrice"===o){var C=null;if(!(C=Number(prompt("Please provide a new price for the dish"))))return;for(;isNaN(C)||0===C;)C=Number(prompt("Please provide a valid price for the dish"));E[g].active=!1,E.push({id:E.length+1,name:E[g].name,price:C,category:E[g].category,active:!0})}else if("updateCategory"===o){var k=prompt("Please provide a category name");if(!k)return;k.length>0&&(E[g].category=k.toLowerCase())}v(E)}},y=function(e){var t=e.name;l(t),o("")},O=function(e){return p.filter((function(t){return t.active===e})).filter((function(e){return"All"===m&&!s.length>0?e:s.length>0?e.name.toLowerCase().includes(s.toLowerCase()):e.category===m}))},N=O(!0),T=N.map((function(e,t){return c.a.createElement(g,{key:N[t].id,id:N[t].id,name:N[t].name,price:N[t].price,onClickMenu:k,clickMenuItem:b,setClickMenuItem:C,path:r,tempMenu:p})})),S=O(!1),w=S.map((function(e,t){return c.a.createElement(g,{key:S[t].id,id:S[t].id,name:S[t].name,price:S[t].price,onClickMenu:k,clickMenuItem:b,setClickMenuItem:C,path:r,tempMenu:p})})),I=["All"],j=["All"],M=0;M<p.length;M++)!0===p[M].active?I.push(p[M].category):j.push(p[M].category);var A=Object(i.a)(new Set(I)),P=Object(i.a)(new Set(j)),D=A.map((function(e,t){return c.a.createElement(E,{categoryActive:u,setCategoryActive:d,onClickCategory:y,key:t,id:t,name:e})})),x=P.map((function(e,t){return c.a.createElement(E,{categoryActive:u,setCategoryActive:d,onClickCategory:y,key:t,id:t,name:e})}));return c.a.createElement("div",null,c.a.createElement("div",{className:"menuArray"},c.a.createElement(f,null,D),c.a.createElement(f,null,T)),"customize"===r&&x.length>1?c.a.createElement("div",null,c.a.createElement("h3",null,"Click a menu item to bring it back from the trash"),c.a.createElement("div",{className:"menuArray"},c.a.createElement(f,null,x),c.a.createElement(f,null,w))):c.a.createElement("span",null),c.a.createElement("div",{className:"searchContainer"},c.a.createElement("span",{id:"searchText"},"Search menu item:"),c.a.createElement(h,{setMenuSearch:o})))},k=function(e){var t=e.name,a=e.onRemoveOrderedItem;e.clickMenuItem,e.setClickMenuItem;return c.a.createElement("div",null,t[1]<2?c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),c.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0])),c.a.createElement("button",null,"Expand")):c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"delivered")}}),c.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0])),c.a.createElement("button",null,"Expand")))},y=function(e){var t=e.name,a=e.onRemoveOrderedItem;e.clickMenuItem,e.setClickMenuItem;return c.a.createElement("div",null,t[1]<2?c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"prepared")}}),c.a.createElement("span",null,"".concat(t[1]," plate of ").concat(t[0])),c.a.createElement("button",null,"Expand")):c.a.createElement("div",{className:"foodContainer"},c.a.createElement("button",{className:"deleteBtn",onClick:function(){return a({name:t},"prepared")}}),c.a.createElement("span",null,"".concat(t[1]," plates of ").concat(t[0])),c.a.createElement("button",null,"Expand")))},O=function(e){var t=e.name,a=e.comment,n=e.time,r=e.status,l=e.price,i=e.clickSpecialItem,o=e.setClickSpecialItem,s=e.onRemoveSpecialItem,m=c.a.createElement("div",null,c.a.createElement("button",{className:"deleteBtn",onClick:function(){return s({time:n,status:r,price:l})}}),c.a.createElement("span",null,t),i===n?c.a.createElement("button",{onClick:function(){return o("false")}},"Hide info"):c.a.createElement("button",{onClick:function(){return o(n)}},"More info")),u=a.join(", ");return c.a.createElement("div",{className:"foodContainer"},i===n?c.a.createElement("div",null,m,c.a.createElement("p",null,u)):c.a.createElement("div",null,m))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){var t=e.path,a=e.tempTables,n=e.clickedTable,r=e.setTempTables,l=e.logTables,o=e.setLogTables,s=e.setMenuSearch,m=e.menuSearch,u=e.selectedCategory,d=e.setSelectedCategory,p=e.categoryActive,b=e.setCategoryActive,g=e.getRelevantOrders,E=e.enumerateOrders,h=e.tempMenu,N=e.setTempMenu,S=e.clickMenuItem,w=e.setClickMenuItem,I=e.clickSpecialItem,j=e.setClickSpecialItem,M=e.setPath,A=a[n].orders.filter((function(e){return"waiting"===e.status})).length,P=a[n].orders.filter((function(e){return"prepared"===e.status})).length,D=a[n].orders.filter((function(e){return"delivered"===e.status})).length,x=g("waiting",!1),L=g("prepared",!1),R=x.concat(L),B=g("waiting",!0),W=g("prepared",!0),z=g("delivered",!0),U=E(x),_=E(L),F=function(e,t){var c=e.name,l=Object(i.a)(a),o=l[n].orders,s=0;if("waiting"===t)s=o.findIndex((function(e){return e.name===c[0]&&"waiting"===e.status&&0===e.comments.length})),l[n].orders.splice(s,1);else if("delivered"===t){s=o.findIndex((function(e){return e.name===c[0]&&"delivered"===e.status&&0===e.comments.length}));var m=prompt("Why was the dish returned?");if(!m)return;l[n].orders[s].comments.push("return reason: ".concat(m)),l[n].orders[s].status="returned"}else{s=o.findIndex((function(e){return e.name===c[0]&&"prepared"===e.status&&0===e.comments.length}));var u=prompt("Why was the dish returned?");if(!u)return;l[n].orders[s].comments.push("return reason: ".concat(u)),l[n].orders[s].status="returned"}for(var d=0,p=h.filter((function(e){return!0===e.active})),v=0;v<p.length;v++)p[v].name===c[0]&&(d=p[v].price);q(d),r(l)},H=function(e){var t=e.time,c=e.status,l=e.price,o=Object(i.a)(a),s=o[n].orders,m=0;"waiting"===c?(m=s.findIndex((function(e){return e.time.getTime()===t})),o[n].orders.splice(m,1)):(m=s.findIndex((function(e){return e.time.getTime()===t})),o[n].orders[m].status="returned"),q(l),r(o)},q=function(e){var t=Object(i.a)(a);t[n].total-=e,0===t[n].total&&0===t[n].orders.length&&(t[n].tableActive="false",t[n].timeAdded=new Date),r(t)},G=U.map((function(e,t){return c.a.createElement(v,{key:t,id:t,name:U[t],onRemoveOrderedItem:F,setClickMenuItem:w,clickMenuItem:S})})),J=E(g("delivered",!1)),K=J.map((function(e,t){return c.a.createElement(k,{key:t,id:t,name:J[t],onRemoveOrderedItem:F,clickMenuItem:S,setClickMenuItem:w})})),Y=_.map((function(e,t){return c.a.createElement(y,{key:t,id:t,name:_[t],onRemoveOrderedItem:F,setClickMenuItem:w,clickMenuItem:S})})),$=B.map((function(e,t){return c.a.createElement(O,{key:t,id:t,name:B[t][0],time:B[t][2],status:B[t][3],comment:B[t][4],price:B[t][5],clickSpecialItem:I,setClickSpecialItem:j,onRemoveSpecialItem:H})})),Q=W.map((function(e,t){return c.a.createElement(O,{key:t,id:t,name:W[t][0],time:W[t][2],status:W[t][3],comment:W[t][4],price:W[t][5],clickSpecialItem:I,setClickSpecialItem:j,onRemoveSpecialItem:H})})),V=z.map((function(e,t){return c.a.createElement(O,{key:t,id:t,name:z[t][0],time:z[t][2],status:z[t][3],comment:z[t][4],price:z[t][5],clickSpecialItem:I,setClickSpecialItem:j,onRemoveSpecialItem:H})})),X=function(){var e=Object(i.a)(a);e[n]={id:n,orders:[],total:0,tableActive:"false",timeAdded:new Date},r(e)},Z=function(){var e=a[n].total,t=a[n].orders.filter((function(e){return"returned"===e.status})),c=T({},l);c.total=l.total+e,c.orders.push(t),o(c)},ee=function(e){var t=T({},S);t.status=e,"waitingOrders"!==e&&"preparedOrders"!==e&&"deliveredOrders"!==e||(t.status===e&&(t.prevState!==e?(t.toggle=!0,t.prevState=e):t.toggle=!t.toggle),w(t))};return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("button",{className:"addTable",onClick:function(){return M("tables")}},"Go back"),c.a.createElement("h1",null,"This is da menu!"),c.a.createElement(C,{clickMenuItem:S,setClickMenuItem:w,setTempTables:r,setCategoryActive:b,categoryActive:p,setMenuSearch:s,tempTables:a,path:t,clickedTable:n,menuSearch:m,selectedCategory:u,setSelectedCategory:d,tempMenu:h,setTempMenu:N}),c.a.createElement("h1",null,"Table ".concat(a[n].id+1," ordered the following items:")),c.a.createElement("div",{className:"menuArrayContainer"},A>0?c.a.createElement("div",{className:"selectedMenu"},"waitingOrders"===S.status&&!0===S.toggle?c.a.createElement("div",null,c.a.createElement("div",{className:"expandableTitle"},c.a.createElement("h3",null,"Waiting orders: ".concat(A)),c.a.createElement("button",{className:"addTable",onClick:function(){return ee("waitingOrders")}},"\u22cf")),c.a.createElement(f,null,G,$)):c.a.createElement("div",{className:"expandableTitle"},c.a.createElement("h3",null,"Waiting orders: ".concat(A)),c.a.createElement("button",{className:"addTable",onClick:function(){return ee("waitingOrders")}},"\u22ce"))):null,c.a.createElement("div",{className:"selectedMenu"},P>0?c.a.createElement("div",null,"preparedOrders"===S.status&&!0===S.toggle?c.a.createElement("div",null,c.a.createElement("div",{className:"expandableTitle"},c.a.createElement("h3",null,"Ready for delivery: ".concat(P)),c.a.createElement("button",{className:"addTable",onClick:function(){return ee("preparedOrders")}},"\u22cf")),c.a.createElement(f,null,Y,Q)):c.a.createElement("div",{className:"expandableTitle"},c.a.createElement("h3",null,"Ready for delivery: ".concat(P)),c.a.createElement("button",{className:"addTable",onClick:function(){return ee("preparedOrders")}},"\u22ce"))):null),c.a.createElement("div",{className:"selectedMenu"},D>0?c.a.createElement("div",null,"deliveredOrders"===S.status&&!0===S.toggle?c.a.createElement("div",null,c.a.createElement("div",{className:"expandableTitle"},c.a.createElement("h3",null,"Orders delivered: ".concat(D)),c.a.createElement("button",{className:"addTable",onClick:function(){return ee("deliveredOrders")}},"\u22cf")),c.a.createElement(f,null,K,V)):c.a.createElement("div",{className:"expandableTitle"},c.a.createElement("h3",null,"Orders delivered: ".concat(D)),c.a.createElement("button",{className:"addTable",onClick:function(){return ee("deliveredOrders")}},"\u22ce"))):null)),c.a.createElement("p",null,"For a total of ".concat(a[n].total)),c.a.createElement("button",{className:"addTable",onClick:function(){R.length>0?alert("Table has not yet received all orders!"):function(){var e=Number(prompt("Is there a tip?","0")),t=Object(i.a)(a);t[n].total+=e,r(t),Z(),X()}()}},"Checkout and add a custom tip"),c.a.createElement("button",{className:"addTable",onClick:function(){R.length>0?alert("Table has not yet received all orders!"):function(){var e=Object(i.a)(a);e[n].total*=1.1,r(e),Z(),X()}()}},"Checkout and add 10% tip"))},w=(a(18),a(19),function(e){var t=e.name,a=e.onSetDone,n=e.time,r=e.table,l=e.status,i=e.comment,o=e.clickSpecialItem,s=e.setClickSpecialItem,m=i.join(", "),u=c.a.createElement("div",null,m.length>0&&"false"===o?c.a.createElement("div",null,c.a.createElement("span",null,"Order ".concat(t," of table ").concat(r+1)),c.a.createElement("button",{onClick:function(){return s(n)}},"More info")):m.length>0&&o===n?c.a.createElement("div",null,c.a.createElement("span",null,"Order ".concat(t," of table ").concat(r+1)),c.a.createElement("button",{onClick:function(){return s("false")}},"Less info"),c.a.createElement("span",null,m)):c.a.createElement("span",null,"Order ".concat(t," of table ").concat(r+1)),"waiting"===l?c.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:r,status:l})}},"Prepared"):"prepared"===l?c.a.createElement("button",{className:"addTable",onClick:function(){return a({time:n,table:r,status:l})}},"Delivered"):null);return c.a.createElement("div",{className:"todoList"},u)}),I=function(e){var t=e.logTables,a=e.clickSpecialItem,n=e.setClickSpecialItem,r=t.orders.flat(1/0),l=r.map((function(e,t){return c.a.createElement(w,{key:t,id:t,name:r[t].name,table:r[t].table,time:r[t].time.getTime(),status:r[t].status,comment:r[t].comments,clickSpecialItem:a,setClickSpecialItem:n})}));return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("h2",null,"Income:"),c.a.createElement("span",null,"The total revenue from all checked out tables is ".concat(parseFloat(t.total).toFixed(2))),c.a.createElement("div",null,c.a.createElement("h3",null,"The following orders were returned:"),c.a.createElement(f,null,l)))};a(20);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A=function(e){var t=e.menuInput,a=e.setMenuInput,n=e.addNewItemtoMenu,r=e.setAddNewItemtoMenu,l=e.setTempTables,i=e.setCategoryActive,o=e.categoryActive,s=e.setMenuSearch,m=e.tempTables,u=e.path,d=e.clickedTable,p=e.menuSearch,v=e.selectedCategory,f=e.setSelectedCategory,b=e.tempMenu,g=e.setTempMenu,E=e.clickMenuItem,h=e.setClickMenuItem;return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("h2",null,"Here you will be able to customize your menu"),n?c.a.createElement("div",{className:"addDish"},c.a.createElement("span",null,"Please enter dish name:"),c.a.createElement("input",{type:"text",onChange:function(e){var n=M({},t);n.name=e.target.value,a(n)}}),c.a.createElement("span",null,"Please enter dish price:"),c.a.createElement("input",{type:"text",onChange:function(e){var n=M({},t);n.price=Math.abs(Number(e.target.value)),a(n)}}),c.a.createElement("span",null,"Please enter a category"),c.a.createElement("input",{type:"text",onChange:function(e){var n=M({},t);n.category=e.target.value.toLowerCase(),a(n)}}),c.a.createElement("button",{className:"addTable",onClick:function(){return function(){for(var e=[],a=0;a<b.length;a++)e.push(b[a].name.toLowerCase());var n=b[b.length-1].id;if(t.name.length>0&&!isNaN(Number(t.price))&&t.category.length>0){if(e.includes(t.name.toLowerCase()))return alert("The dish ".concat(t.name," already exists, please enter a unique dish name"));b.push({id:n+1,name:t.name,price:t.price,category:t.category,active:!0}),r(!1)}else alert("Please enter correct dish details.")}()}},"Add dish"),c.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),c.a.createElement(C,{setTempTables:l,setCategoryActive:i,categoryActive:o,setMenuSearch:s,tempTables:m,path:u,clickedTable:d,menuSearch:p,selectedCategory:v,setSelectedCategory:f,setTempMenu:g,tempMenu:b,clickMenuItem:E,setClickMenuItem:h})):c.a.createElement("div",null,c.a.createElement("h3",null,"Click a menu item to remove it from the menu - This will not affect history"),c.a.createElement(C,{setTempTables:l,setCategoryActive:i,categoryActive:o,setMenuSearch:s,tempTables:m,path:u,clickedTable:d,menuSearch:p,selectedCategory:v,setSelectedCategory:f,tempMenu:b,setTempMenu:g,clickMenuItem:E,setClickMenuItem:h}),c.a.createElement("button",{className:"addTable",onClick:function(){return r(!0)}},"Add a new menu item")))},P=function(e){var t=e.getRelevantOrders,a=e.onSetDone,n=e.clickSpecialItem,r=e.setClickSpecialItem,l=t("waiting"),i=l.map((function(e,t){return c.a.createElement(w,{key:t,id:t,name:l[t][0],table:l[t][1],time:l[t][2],status:l[t][3],comment:l[t][4],onSetDone:a,setClickSpecialItem:r,clickSpecialItem:n})}));return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("div",{className:"containerOfContainer"},c.a.createElement("h3",null,"Waiting list:"),c.a.createElement(f,null,i)))},D=function(e){var t=e.getRelevantOrders,a=e.onSetDone,n=e.clickSpecialItem,r=e.setClickSpecialItem,l=t("prepared"),i=l.map((function(e,t){return c.a.createElement(w,{key:t,id:t,name:l[t][0],table:l[t][1],time:l[t][2],status:l[t][3],comment:l[t][4],onSetDone:a,clickSpecialItem:n,setClickSpecialItem:r})}));return c.a.createElement("div",{className:"statisticsMain"},c.a.createElement("div",{className:"containerOfContainer"},c.a.createElement("h3",null,"Ready for delivery:"),c.a.createElement(f,null,i)))};function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("tables"),o=Object(s.a)(l,2),u=o[0],d=o[1],v=Object(n.useState)(0),f=Object(s.a)(v,2),b=f[0],g=f[1],E=Object(n.useState)({orders:[],total:0,waiting:0,prepared:0,delivered:0}),h=Object(s.a)(E,2),C=h[0],k=h[1],y=Object(n.useState)(""),O=Object(s.a)(y,2),N=O[0],T=O[1],w=Object(n.useState)({name:"",price:0,category:""}),j=Object(s.a)(w,2),M=j[0],x=j[1],R=Object(n.useState)(!1),B=Object(s.a)(R,2),W=B[0],z=B[1],U=Object(n.useState)("All"),_=Object(s.a)(U,2),F=_[0],H=_[1],q=Object(n.useState)(0),G=Object(s.a)(q,2),J=G[0],K=G[1],Y=Object(n.useState)(0),$=Object(s.a)(Y,2),Q=$[0],V=$[1],X=Object(n.useState)(!1),Z=Object(s.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)({status:"false",toggle:!1,prevState:""}),ne=Object(s.a)(ae,2),ce=ne[0],re=ne[1],le=Object(n.useState)("false"),ie=Object(s.a)(le,2),oe=ie[0],se=ie[1],me=Object(n.useState)(!1),ue=Object(s.a)(me,2),de=ue[0],pe=ue[1],ve=Object(n.useState)({status:"false",toggle:!1}),fe=Object(s.a)(ve,2),be=fe[0],ge=fe[1],Ee=Object(n.useState)([{id:0,orders:[],total:0,tableActive:"false",timeAdded:new Date}]),he=Object(s.a)(Ee,2),Ce=he[0],ke=he[1],ye=Object(n.useState)([{id:1,name:"grilled chicken",price:80,category:"main dishes",active:!0},{id:2,name:"ceaser salad",price:55,category:"starters",active:!0},{id:3,name:"beef steak",price:120,category:"main dishes",active:!0},{id:4,name:"pepperony",price:90,category:"pizzas",active:!0}]),Oe=Object(s.a)(ye,2),Ne=Oe[0],Te=Oe[1],Se=function(e,t){var a=[];if("waiters"===u||"kitchen"===u)for(var n=0;n<Ce.length;n++)a.push(Ce[n].orders.filter((function(t){return t.status===e})));else if(u.includes("order_")){var c=Ce[b].orders.filter((function(t){return t.status===e&&0===t.comments.length})),r=Ce[b].orders.filter((function(t){return t.status===e&&t.comments.length>0}));t?a.push(r):a.push(c)}var l=a.flat(1);l.sort((function(e,t){return e.time.getTime()-t.time.getTime()}));for(var i=[],o=0;o<l.length;o++)i.push([l[o].name,l[o].table,l[o].time.getTime(),l[o].status,l[o].comments,l[o].price]);return i},we=function(e){var t=e.time,a=e.table,n=e.status,c=Object(i.a)(Ce),r=c[a].orders.findIndex((function(e){return e.time.getTime()===t}));"waiting"===n?c[a].orders[r].status="prepared":(c[a].orders[r].status="delivered",c[a].orders.filter((function(e){return"delivered"===e.status})).length===c[a].orders.filter((function(e){return"returned"!==e.status})).length&&(c[a].tableActive="eating"));ke(c)};return c.a.createElement("div",{className:"App"},c.a.createElement(m,{tempTables:Ce,openNav:de,setOpenNav:pe,setNavActive:V,navActive:Q,resetWhenChangingPath:function(){K(0),H("All"),T(""),x({name:"",price:0,category:""}),z(!1);var e=L({},ce);e.status="false",e.toggle=!1,re(e),se("false"),pe(!1);var t=L({},be);t.status="false",t.toggle=!1,ge(t)},setPath:d}),"tables"===u?c.a.createElement(p,{clickedTable:b,setClickedTable:g,clickCount:a,setClickCount:r,setTempTables:ke,tempTables:Ce,path:u,setPath:d}):u.includes("order_")?c.a.createElement(S,{expandTableOrders:be,setExpandTableOrders:ge,setPath:d,clickSpecialItem:oe,setClickSpecialItem:se,clickMenuItem:ce,setClickMenuItem:re,clickedOnDelivered:ee,setClickedOnDelivered:te,tempMenu:Ne,setTempMenu:Te,path:u,enumerateOrders:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a][0]);var n={};t.forEach((function(e){n[e]=(n[e]||0)+1}));var c=Object.entries(n);return c.sort(),c},getRelevantOrders:Se,categoryActive:J,setCategoryActive:K,selectedCategory:F,setSelectedCategory:H,menuSearch:N,setMenuSearch:T,logTables:C,setLogTables:k,tempTables:Ce,clickedTable:b,setTempTables:ke}):u.includes("customize")?c.a.createElement(A,{setClickMenuItem:re,clickMenuItem:ce,tempMenu:Ne,setTempMenu:Te,path:u,setSelectedCategory:H,selectedCategory:F,menuSearch:N,clickedTable:b,tempTables:Ce,setMenuSearch:T,categoryActive:J,setCategoryActive:K,setTempTables:ke,addNewItemtoMenu:W,setAddNewItemtoMenu:z,menuInput:M,setMenuInput:x}):"Statistics"===u?c.a.createElement(I,{clickSpecialItem:oe,setClickSpecialItem:se,onSetDone:we,getRelevantOrders:Se,logTables:C}):"kitchen"===u?c.a.createElement(P,{clickSpecialItem:oe,setClickSpecialItem:se,onSetDone:we,getRelevantOrders:Se}):c.a.createElement(D,{clickSpecialItem:oe,setClickSpecialItem:se,onSetDone:we,getRelevantOrders:Se}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.3e8641c7.chunk.js.map