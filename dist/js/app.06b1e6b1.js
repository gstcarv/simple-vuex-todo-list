(function(t){function e(e){for(var o,s,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],a[s]&&f.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),a=n.n(o);a.a},"19d9":function(t,e,n){},"48dd":function(t,e,n){"use strict";var o=n("19d9"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TheNavbar"),n("br"),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("todos-table")],1),n("div",{staticClass:"col-md-6"},[n("new-todo-form")],1)])])],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-striped table-hover",staticStyle:{"margin-bottom":"50px"}},[t._m(0),n("tbody",t._l(t.todos,function(e,o){return n("tr",{key:o},[n("td",[t._v(t._s(e.content))]),n("td",[t._v(t._s(t._f("time")(e.createdAt)))]),n("td",{staticClass:"text-center"},[n("i",{staticClass:"fa fa-trash delete-button",on:{click:function(e){t.deleteTodo({index:o})}}})])])}))])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Todo")]),n("th",[t._v("Created At")]),n("th",{staticClass:"text-center"},[t._v("Delete")])])])}],c=n("c93e"),l=n("2f62"),u={name:"TodosTable",computed:Object(c["a"])({},Object(l["c"])(["todos"])),filters:{time:function(t){return t.toLocaleTimeString()}},methods:Object(c["a"])({},Object(l["b"])(["deleteTodo"]))},d=u,f=(n("cc37"),n("2877")),b=Object(f["a"])(d,s,i,!1,null,"d4cee544",null);b.options.__file="TodosTable.vue";var p=b.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light bg-light"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("h5",{staticClass:"text-primary"},[t._v("Vuex Todos List")])]),n("div",{staticClass:"navbar-end"},[n("a",{attrs:{href:"http://github.com/gstcarv",target:"_blank"}},[n("i",{staticClass:"fa fa-github fa-2x"})])])])}],h={name:"TheNavbar"},_=h,T=(n("48dd"),Object(f["a"])(_,v,m,!1,null,null,null));T.options.__file="TheNavbar.vue";var g=T.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.clear(e)}}},[n("h3",{staticClass:"text-primary"},[t._v("Add new Todo")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.todoValue,expression:"todoValue"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Insert your todo here"},domProps:{value:t.todoValue},on:{input:function(e){e.target.composing||(t.todoValue=e.target.value)}}}),n("br"),n("button",{staticClass:"btn btn-primary btn-block",class:t.isDisabled,attrs:{disabled:t.isDisabled},on:{click:function(e){t.addTodo({todoContent:t.todoValue})}}},[t._v("Add Todo")])])},x=[],w={name:"NewTodoForm",data:function(){return{todoValue:""}},computed:{isDisabled:function(){return!this.todoValue}},methods:Object(c["a"])({},Object(l["b"])(["addTodo"]),{clear:function(){this.todoValue=""}})},C=w,O=(n("c07a"),Object(f["a"])(C,y,x,!1,null,null,null));O.options.__file="NewTodoForm.vue";var j=O.exports,V={name:"app",components:{TheNavbar:g,TodosTable:p,NewTodoForm:j}},k=V,N=(n("034f"),Object(f["a"])(k,a,r,!1,null,null,null));N.options.__file="App.vue";var S=N.exports;o["a"].use(l["a"]);var P=new l["a"].Store({state:{todos:[]},mutations:{addTodo:function(t,e){var n=e.todoContent;t.todos.push({content:n,createdAt:new Date})},deleteTodo:function(t,e){var n=e.index;t.todos=t.todos.filter(function(t,e){return e!==n})}},actions:{}});n("ab8b"),n("7f10");o["a"].config.productionTip=!1,new o["a"]({store:P,render:function(t){return t(S)}}).$mount("#app")},"8f53":function(t,e,n){},b11a:function(t,e,n){},c07a:function(t,e,n){"use strict";var o=n("b11a"),a=n.n(o);a.a},c21b:function(t,e,n){},cc37:function(t,e,n){"use strict";var o=n("8f53"),a=n.n(o);a.a}});
//# sourceMappingURL=app.06b1e6b1.js.map