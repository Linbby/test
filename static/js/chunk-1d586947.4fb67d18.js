(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d586947"],{"22cb":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"e",(function(){return i})),s.d(e,"d",(function(){return r})),s.d(e,"b",(function(){return l})),s.d(e,"c",(function(){return o}));var n=s("b775");function a(t){return Object(n["a"])({url:"/detect",method:"post",data:t})}function i(){return Object(n["a"])({url:"/resultList",method:"get"})}function r(t){return Object(n["a"])({url:"/getHubResult",method:"get",params:{uuid:t}})}function l(t){return Object(n["a"])({url:"/getFileResult",method:"get",params:{uuid:t}})}function o(t,e){return Object(n["a"])({url:"/getFunctionResult",method:"get",params:{uuid:t,location:e}})}},2909:function(t,e,s){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}function a(t){if(Array.isArray(t))return n(t)}s.d(e,"a",(function(){return o}));s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}s("fb6a"),s("b0c0"),s("ac1f"),s("00b4");function r(t,e){if(t){if("string"===typeof t)return n(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?n(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return a(t)||i(t)||r(t)||l()}},"57f4":function(t,e,s){},e0cd:function(t,e,s){"use strict";s("57f4")},e81a:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"analysis-wrapper"},[s("el-container",[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"upload"},[s("h2",[t._v("上传文件")]),s("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"",multiple:!1,"auto-upload":!1,"on-change":t.onChange,"file-list":t.clear}},[s("i",{staticClass:"el-icon-upload"}),s("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),s("em",[t._v("点击上传")])]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传压缩文件,且不超过500kb ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"progress"},[s("el-progress",{attrs:{percentage:t.process}})],1),s("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.submitUpload}},[t._v("确 定")])],1)]),s("h2",[t._v("检测结果")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showresult,expression:"showresult"}],staticClass:"result"},[s("div",{staticClass:"title"},[t._v("项目名"+t._s(t.result.hubname))]),s("div",{staticClass:"subtitle"},[s("span",{staticClass:"time"},[t._v(" 上传时间:"+t._s(t.result.time)+" ")]),s("span",{staticClass:"number"},[t._v(" 检测到"+t._s(t.result.list.length||0)+"相似项目 ")])]),s("div",{staticClass:"demo-block"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.result.list},on:{"row-click":t.rowclick}},[s("el-table-column",{attrs:{prop:"sameProjectID",label:"相似项目名",width:"600"}}),s("el-table-column",{attrs:{prop:"similarity",label:"相似度"}})],1)],1)])],1)},a=[],i=s("2909"),r=s("5530"),l=(s("ac1f"),s("00b4"),s("5319"),s("4d63"),s("2c3e"),s("25f0"),s("e9c4"),s("b0c0"),s("22cb")),o={data:function(){function t(t,e){if("string"==typeof t)return t;if(e||(e="yyyy-MM-dd"),!t||null==t)return null;var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),s)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?s[n]:("00"+s[n]).substr((""+s[n]).length)));return e}return{offset:0,filelist:[],loading:!1,process:0,clear:[],showresult:!1,result:{hubname:"",uuid:"",time:t(new Date),list:[]}}},activated:function(){window.scrollTo(0,this.offset)},deactivated:function(){this.offset=window.pageYOffset},methods:{rowclick:function(t){var e=Object(r["a"])(Object(r["a"])({},t),{},{uuid:this.result.uuid});console.log(111,e),this.$router.push({path:"/analysis/file",query:{data:JSON.stringify(e),title:this.result.hubname+"—"+t.sameProjectID}})},change:function(t){this.activeNames=t},handleEdit:function(t,e){console.log(t,e),this.$router.push({path:"/analysis/function",query:{row:JSON.stringify(e)}})},onChange:function(t,e){this.filelist=e},getresultList:function(){var t=this;Object(l["e"])().then((function(e){var s=e.data[e.data.length-1];Object(l["d"])(s).then((function(e){var n;console.log(e),t.showresult=!0,t.result.uuid=s,(n=t.result.list).push.apply(n,Object(i["a"])(e.data.sameHubs))}))}))},submitUpload:function(){var t=this;if(this.filelist.length){console.log(this.filelist),this.loading=!0;var e=new FormData;e.append("file",this.filelist[0].raw),e.append("name",this.filelist[0].name),Object(l["a"])(e).then((function(e){t.result.hubname=t.filelist[0].name,t.getresultList(),t.process=0,t.loading=!1,t.filelist=[],t.clear=[],t.$message({type:"success",message:"上传成功!"})})).catch((function(e){t.process=0,t.loading=!1}))}else this.$message({type:"error",message:"文件为空"})}}},u=o,c=(s("e0cd"),s("2877")),d=Object(c["a"])(u,n,a,!1,null,"4976269a",null);e["default"]=d.exports},e9c4:function(t,e,s){var n=s("23e7"),a=s("d066"),i=s("d039"),r=a("JSON","stringify"),l=/[\uD800-\uDFFF]/g,o=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,c=function(t,e,s){var n=s.charAt(e-1),a=s.charAt(e+1);return o.test(t)&&!u.test(a)||u.test(t)&&!o.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},d=i((function(){return'"\\udf06\\ud834"'!==r("\udf06\ud834")||'"\\udead"'!==r("\udead")}));r&&n({target:"JSON",stat:!0,forced:d},{stringify:function(t,e,s){var n=r.apply(null,arguments);return"string"==typeof n?n.replace(l,c):n}})}}]);