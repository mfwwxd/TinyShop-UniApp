(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/feedback/feedback"],{"28d7":function(e,t,n){"use strict";n.r(t);var a=n("be7d"),o=n("ac29");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("44cf");var c=n("2877"),i=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"2a71":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("a34a")),r=n("802d");function c(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t,n,a,o,r,c){try{var i=e[r](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(a,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var r=e.apply(t,n);function c(e){f(r,a,o,c,i,"next",e)}function i(e){f(r,a,o,c,i,"throw",e)}c(void 0)}))}}var d={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],token:null,imageList:[],feedbackType:[{value:"1",name:"功能建议"},{value:"2",name:"BUG反馈"},{value:"3",name:"业务咨询"}],sendDate:{type:"1",covers:"",content:"",contact_way:""}}},onLoad:function(){this.token=e.getStorageSync("accessToken")||void 0},methods:{handleFeedbackTypeChange:function(e){this.sendDate.type=e.detail.value},uploadImage:function(){var t=this;e.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.handleUploadFile(e.tempFilePaths)}})},handleUploadFile:function(t){var n=this;t.forEach((function(t){e.uploadFile({url:r.uploadImage,filePath:t,name:"file",header:{"x-api-key":n.token},formData:{"access-token":n.token},success:function(t){e.hideLoading();var a=JSON.parse(t.data);200===a.code?n.imageList.push(a.data.url):this.$api.msg(a.message)}})}))},close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},previewImage:function(){e.previewImage({urls:this.imageList})},send:function(){var t=l(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.sendDate.covers=JSON.stringify(this.imageList),t.next=3,this.$post("".concat(r.opinionCreate),u({},this.sendDate)).then((function(){e.navigateBack({delta:1})})).catch((function(e){console.log(a(e," at pages/feedback/feedback.vue:157"))}));case 3:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"44cf":function(e,t,n){"use strict";var a=n("8033"),o=n.n(a);o.a},8033:function(e,t,n){},"8a32":function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");a(n("66fd"));var t=a(n("28d7"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},ac29:function(e,t,n){"use strict";n.r(t);var a=n("2a71"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},be7d:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}))}},[["8a32","common/runtime","common/vendor"]]]);