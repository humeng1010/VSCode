(function(){"use strict";var t={5506:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},s=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试go")])])])},a=[],l={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(-2)}}},u=l,c=n(1001),v=(0,c.Z)(u,o,a,!1,null,null,null),p=v.exports,h={name:"App",components:{Banner:p}},f=h,d=(0,c.Z)(f,r,s,!1,null,null,null),m=d.exports,_=n(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeRouteEnter(t,e,n){t.meta.isAuth?"atguigu"===localStorage.getItem("school")?n():alert("请先登录"):n()},beforeRouteLeave(t,e,n){console.log("About组件即将离开",t,e),n()}},y=w,x=(0,c.Z)(y,g,b,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},Z=[],O={name:"Home"},A=O,j=(0,c.Z)(A,C,Z,!1,null,null,null),q=j.exports,P=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习VUE")]),t._m(0),t._m(1),t._m(2)])},S=[function(){var t=this,e=t._self._c;return e("li",[t._v(" news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v(" news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v(" news003 "),e("input",{attrs:{type:"text"}})])}],$={name:"News",data(){return{opacity:1}},activated(){this.timer=setInterval((()=>{this.opacity-=.01,this.opacity<0&&(this.opacity=1)}),10)},deactivated(){clearInterval(this.timer)}},B=$,E=(0,c.Z)(B,P,S,!1,null,null,null),H=E.exports,I=function(){var t=this,e=t._self._c;return e("div",[e("ul",[t._l(t.message,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{path:"/home/message/detail",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),e("hr"),e("router-view")],2)])},M=[],N={name:"Message",data(){return{message:[{id:"001",title:"message001"},{id:"002",title:"message002"},{id:"003",title:"message003"}]}},methods:{pushShow(t){this.$router.push({path:"/home/message/detail",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({path:"/home/message/detail",query:{id:t.id,title:t.title}})}}},R=N,T=(0,c.Z)(R,I,M,!1,null,null,null),D=T.exports,V=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号:"+t._s(t.id))]),e("li",[t._v("消息标题:"+t._s(t.title))])])},z=[],F={name:"Detail",props:["id","title"]},L=F,U=(0,c.Z)(L,V,z,!1,null,null,null),G=U.exports;const J=new _.Z({mode:"history",routes:[{meta:{isAuth:!0,title:"关于我们"},name:"guanyu",path:"/about",component:k},{meta:{title:"首页"},name:"zhuye",path:"/home",component:q,children:[{meta:{isAuth:!0,title:"新闻"},name:"xinwen",path:"news",component:H},{meta:{isAuth:!0,title:"消息"},name:"xiaoxi",path:"message",component:D,children:[{meta:{isAuth:!0,title:"详情"},name:"xiangqing",path:"detail",component:G,props(t){return{id:t.query.id,title:t.query.title}}}]}]}]});var K=J;i.ZP.use(_.Z),i.ZP.config.productionTip=!1,new i.ZP({el:"#app",render:t=>t(m),router:K})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,s){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],s=t[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,s<o&&(o=s));if(a){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[i,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,o=i[0],a=i[1],l=i[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(e&&e(i);u<o.length;u++)s=o[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(c)},i=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5506)}));i=n.O(i)})();
//# sourceMappingURL=app.69ee69af.js.map