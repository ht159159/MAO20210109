(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c09ed4d"],{"0944":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"outer"},[n("header-cmp",{attrs:{title:e.$t("Message_Box")}}),n("section",{ref:"scroll",staticClass:"messages",on:{scroll:function(t){return e.$scrollLoad(e.loadMore,t)}}},[e.messages.length>0?n("div",e._l(e.messages,function(t){return n("div",{key:t.id,staticClass:"message",on:{click:function(n){return e.myMessage(t.message,t.createTime,t.id)}}},[n("div",{staticClass:"top"},[n("div",{staticClass:"title"},[t.isRead?e._e():n("div",{staticClass:"read"}),n("div",{staticClass:"name"},[e._v(e._s(t.subjectName))])]),n("div",{staticClass:"icon"})]),n("div",{staticClass:"buttom"},[n("div",{staticClass:"time"},[e._v(e._s(e._f("dateFormat")(t.createTime)))])])])}),0):n("div",{staticClass:"noData"},[e._v(e._s(e.$t("NoData")))])])],1)},s=[],i=n("365c"),o=n("5d2d"),c=(n("3e8f"),n("ab99")),r=(n("5118"),{mixins:[c["a"]],data:function(){return{messages:[],pageIndex:1,bottomStatus:"",allLoaded:!1}},mounted:function(){this.getMessage()},methods:{getMessage:function(){var e=this,t={pageIndex:1,pageSize:10};Object(i["u"])(t).then(function(t){1===t.result&&(e.messages=t.data.internalMessageDTOs,t.data.totalCount>10?e.allLoaded=!1:e.allLoaded=!0)})},myMessage:function(e,t,n){t=this.$options.filters.dateFormat(t),o["a"].session.set("message",{message:e,time:t,id:n}),this.$router.push({name:"mynews"})},loadMore:function(){var e=this;this.pageIndex++;var t={pageIndex:this.pageIndex,pageSize:10};Object(i["u"])(t).then(function(t){var n=e.messages;e.messages=n.concat(t.data.internalMessageDTOs),e.allLoaded=e.messages.length===t.data.totalCount,e.$refs.loadmore.onBottomLoaded()})}},filters:{dateFormat:function(e){return e}}}),l=r,u=(n("fd23"),n("2877")),d=Object(u["a"])(l,a,s,!1,null,null,null);t["default"]=d.exports},"3e8f":function(e,t){},5118:function(e,t,n){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,s=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(s.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new i(s.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var a,s=1,i={},o=!1,c=e.document,r=Object.getPrototypeOf&&Object.getPrototypeOf(e);r=r&&r.setTimeout?r:e,"[object process]"==={}.toString.call(e.process)?m():g()?p():e.MessageChannel?h():c&&"onreadystatechange"in c.createElement("script")?v():y(),r.setImmediate=l,r.clearImmediate=u}function l(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return i[s]=o,a(s),s++}function u(e){delete i[e]}function d(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a);break}}function f(e){if(o)setTimeout(f,0,e);else{var t=i[e];if(t){o=!0;try{d(t)}finally{u(e),o=!1}}}}function m(){a=function(e){t.nextTick(function(){f(e)})}}function g(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function p(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),a=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},a=function(t){e.port2.postMessage(t)}}function v(){var e=c.documentElement;a=function(t){var n=c.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function y(){a=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},ab99:function(e,t,n){"use strict";t["a"]={data:function(){return{timer:""}},methods:{$scrollLoad:function(e,t){t.target.scrollHeight-t.target.scrollTop<=t.target.clientHeight+10&&(clearTimeout(this.timer),this.timer=setTimeout(function(){e(t)},40))}}}},b29a:function(e,t,n){},fd23:function(e,t,n){"use strict";var a=n("b29a"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-0c09ed4d.e437b1cf.js.map