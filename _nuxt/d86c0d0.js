(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10,11],{4581:function(t,n,e){var content=e(4589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("17f0b0f4",content,!0,{sourceMap:!1})},4582:function(t,n,e){var content=e(4591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("8fa6d272",content,!0,{sourceMap:!1})},4588:function(t,n,e){"use strict";e(4581)},4589:function(t,n,e){var r=e(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nspan[data-v-79ccd033]{\n  margin:auto;\n  display:block;\n  width:-webkit-min-content;\n  width:-moz-min-content;\n  width:min-content;\n  font-size:2.25rem;\n  line-height:2.5rem;\n  --tw-text-opacity:1;\n  color:hsla(var(--bc) / var(--tw-text-opacity))\n}\n@media (min-width: 640px){\nspan[data-v-79ccd033]{\n    font-size:3.75rem;\n    line-height:1\n}\n}\n@media (min-width: 768px){\nspan[data-v-79ccd033]{\n    font-size:4.5rem;\n    line-height:1\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},4590:function(t,n,e){"use strict";e(4582)},4591:function(t,n,e){var r=e(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.navbar[data-v-5ed6e13f]{\n  display:flex;\n  justify-content:center\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},4593:function(t,n,e){var content=e(4602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(52).default)("539dee96",content,!0,{sourceMap:!1})},4597:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{title:this.$nuxt.$options.head.title}}},o=(e(4588),e(3)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"py-24"},[e("NuxtLink",{attrs:{to:"/"}},[t._v(t._s(t.title))])],1)}),[],!1,null,"79ccd033",null);n.default=component.exports},4598:function(t,n,e){"use strict";e.r(n);var r=e(2),o=(e(32),e(42),e(77),e(66)),c={data:function(){return{collections:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content({deep:!0}).where({draft:{$ne:!0}}).sortBy("dir").sortBy("order").sortBy("title").fetch().catch((function(){}));case 2:e=n.sent,t.collections=Object(o.groupBy)(e,(function(t){return"/".concat(t.dir.split("/")[1])}));case 4:case"end":return n.stop()}}),n)})))()}},l=(e(4590),e(3)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navbar"},[e("nav",[t._l(t.collections,(function(n,r){return["/"!=r?e("NuxtLink",{key:r,staticClass:"btn btn-ghost",attrs:{to:r}},[e("span",[t._v(t._s(t._f("titleize")(r.split("/").pop())))])]):t._l(n,(function(n){return e("NuxtLink",{key:n.slug,staticClass:"btn btn-ghost",attrs:{to:n}},[e("span",[t._v(t._s(n.title))])])}))]}))],2),e("TntUIThemeToggle")],1)}),[],!1,null,"5ed6e13f",null);n.default=component.exports;installComponents(component,{TntUIThemeToggle:e(2334).default})},4601:function(t,n,e){"use strict";e(4593)},4602:function(t,n,e){var r=e(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nheader[data-v-2541c494]{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:1.25rem;\n  padding-bottom:1.25rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},4624:function(t,n,e){"use strict";e.r(n);e(4601);var r=e(3),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("header",[n("TntLayoutsClassicHeaderTitle"),n("TntLayoutsClassicHeaderMenu")],1)}),[],!1,null,"2541c494",null);n.default=component.exports;installComponents(component,{TntLayoutsClassicHeaderTitle:e(4597).default,TntLayoutsClassicHeaderMenu:e(4598).default})}}]);