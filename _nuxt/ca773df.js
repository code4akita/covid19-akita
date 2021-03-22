(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{331:function(t,e,n){"use strict";n(16),n(17),n(5);e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),o=e["小計"];if(!isNaN(o)){n+=o;var l="R"+(r.getFullYear()-2018).toString(),d=r.getMonth()+1,c=r.getDate();t.push({label:"".concat(l,"/").concat(d,"/").concat(c),transition:o,cumulative:n})}})),t}},334:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l}));var r="#006400",o=["#006400","#1B75BC"],l=["#00441B","#006400","#1B75BC"]},341:function(t,e,n){var content=n(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("593b0918",content,!0,{sourceMap:!1})},342:function(t,e,n){var content=n(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("67507884",content,!0,{sourceMap:!1})},369:function(t,e,n){"use strict";n(427);var r=n(137),o=(n(38),n(0)),l=n(325),d=n(412),c=n(387),f=n(413),_=n(334),v={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{DataView:l.a,DataSelector:d.a,DataViewBasicInfoPanel:c.a,OpenDataLink:f.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""}},data:function(){return{dataKind:"cumulative",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){return"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(this.chartData.slice(-1)[0].label," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:_.b,borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:_.b,borderWidth:0}]}},displayOption:function(){var t=this.unit,e={tooltips:{displayColors:!1,callbacks:{label:function(e){return"".concat(parseInt(e.value).toLocaleString()," ").concat(t)},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:11,maxTicksLimit:12,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/").slice(1).join("/")}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,maxTicksLimit:3,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0},callback:function(label){return label.split("/")[0]}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return 1.2*Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:this.title,value:"0"}]},tableData:function(){var t=this;return this.displayData.datasets[0].data.map((function(e,i){return Object.assign({text:t.displayData.labels[i]},{0:t.displayData.datasets[0].data[i]})}))}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},h=o.a.extend(v),w=n(14),y=n(51),x=n.n(y),m=n(548),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("bar",{ref:"barChart",style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,null,null,null);e.a=component.exports;x()(component,{VDataTable:m.a})},387:function(t,e,n){"use strict";var r=n(0).a.extend({props:{lText:{type:String,required:!0},sText:{type:String,required:!0},unit:{type:String,required:!0}}}),o=(n(435),n(14)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},393:function(t,e,n){var content=n(429);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("14842cd4",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(436);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("725df030",content,!0,{sourceMap:!1})},396:function(t,e,n){var content=n(438);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5be7885e",content,!0,{sourceMap:!1})},400:function(t,e,n){var content=n(480);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("009d70e2",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";var r=n(324),o=n(0),l=n(325),d=o.a.extend({components:{DataView:l.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""}}}),c=n(423),f=n(14);var _=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{class:t.$style.note},[t._v("\n      "+t._s(t.$t("（注）チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n    ")])]},proxy:!0}])},[t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null).exports,v=(n(16),n(17),n(5),n(45),o.a.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院中":{type:Number,required:!0},"宿泊療養":{validator:function(t){return"number"==typeof t||null===t},required:!0},"軽症中等症":{validator:function(t){return"number"==typeof t||null===t},required:!0},"重症":{validator:function(t){return"number"==typeof t||null===t},required:!0},"死亡":{type:Number,required:!0},"退院":{type:Number,required:!0}},methods:{getAdjustX:function(input){switch(input.toString(10).length){case 1:return 3;case 2:return 0;case 3:return-3;case 4:return-8;default:return 0}}}})),h=n(425);var w={components:{ConfirmedCasesCard:_,ConfirmedCasesTable:Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.tall,t.$style.parent,t.$style.confirmed]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v("\n          "+t._s(t.$t("陽性者数"))+"\n          "),n("br"),t._v("("+t._s(t.$t("累計"))+")\n        ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent,t.$style.hospitalized]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院中")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院中))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.short,t.$style.minor]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("軽症・<br />中等症"))}}),t._v(" "),null!==t.軽症中等症?n("span",[n("strong",[t._v(t._s(t.軽症中等症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]):n("span",[t._v(" --- ")])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.short,t.$style.severe]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),null!==t.重症?n("span",[n("strong",[t._v(t._s(t.重症))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]):n("span",[t._v(" --- ")])])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.staying]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("宿泊療養"))}}),t._v(" "),null!==t.宿泊療養?n("span",[n("strong",[t._v(t._s(t.宿泊療養))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]):n("span",[t._v(" --- ")])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.deceased]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.死亡))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.recovered]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("退院"))+"・"),n("br"),t._v(t._s(t.$t("療養解除")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])])}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null).exports},data:function(){var t=function(data){return{"検査実施人数":data.value,"陽性者数":data.children[0].value,"入院中":data.children[0].children[0].value,"宿泊療養":data.children[0].children[0].children[0].value,"軽症中等症":data.children[0].children[0].children[1].value,"重症":data.children[0].children[0].children[2].value,"死亡":data.children[0].children[2].value,"退院":data.children[0].children[1].value}}(r.main_summary),data={Data:r,confirmedCases:t};return data}},y=n(51),x=n.n(y),m=n(316),$=Object(f.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("confirmed-cases-card",{attrs:{title:this.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:this.Data.patients.date}},[e("confirmed-cases-table",this._b({attrs:{"aria-label":this.$t("検査陽性者の状況")}},"confirmed-cases-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=$.exports;x()($,{VCol:m.a})},411:function(t,e,n){"use strict";n(7),n(43),n(9),n(31),n(42),n(23),n(16),n(17),n(5);var r=n(324),o=n(331),l=n(24),d=n.n(l),c=[{text:"公表日",value:"公表日"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"},{text:"退院※",value:"退院",align:"center"}],f=n(0),_=n(325),v=n(387),h=n(413),w=f.a.extend({components:{DataView:_.a,DataViewBasicInfoPanel:v.a,OpenDataLink:h.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){this.$refs.displayedTable.$el.querySelectorAll("table").forEach((function(table){table.setAttribute("tabindex","0")}))}}),y=(n(479),n(14)),x=n(51),m=n.n(x),$=n(548),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}}),t._v(" "),n("div",{staticClass:"note"})],1)}),[],!1,null,null,null),z=component.exports;function k(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}m()(component,{VDataTable:$.a});var F={components:{DataTable:z},data:function(){var t,e=Object(o.a)(r.patients_summary.data),n=function(data){var t={headers:c,datasets:[]};return data.forEach((function(e){var n,r,o,l,c={"公表日":null!==(n=d()(e["リリース日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"調査中","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(l=e["性別"])&&void 0!==l?l:"不明","退院":e["退院"]};t.datasets.push(c)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}(r.patients.data),l={lText:e[e.length-1].cumulative.toLocaleString(),sText:this.$t("{date}の累計",{date:e[e.length-1].label}),unit:this.$t("人")},f=k(n.headers);try{for(f.s();!(t=f.n()).done;){var header=t.value;header.text="退院"===header.value?this.$t("退院※"):this.$t(header.value)}}catch(t){f.e(t)}finally{f.f()}var _,v=k(n.datasets);try{for(v.s();!(_=v.n()).done;){var h=_.value;if(h["居住地"]=this.$t(h["居住地"]),h["性別"]=this.$t(h["性別"]),h["退院"]=this.$t(h["退院"]),"10歳未満"===h["年代"])h["年代"]=this.$t("10歳未満");else if("不明"===h["年代"])h["年代"]=this.$t("不明");else{var w=h["年代"].substring(0,2);h["年代"]=this.$t("{age}代",{age:w})}}}catch(t){v.e(t)}finally{v.f()}var data={Data:r,patientsTable:n,sumInfoOfPatients:l};return data}},S=n(316),T=Object(y.a)(F,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("data-table",{attrs:{title:this.$t("陽性患者の属性"),"title-id":"attributes-of-confirmed-cases","chart-data":this.patientsTable,"chart-option":{},date:this.Data.patients.date,info:this.sumInfoOfPatients,url:"https://www.pref.akita.lg.jp/pages/archive/51592",source:this.$t("県公式サイトで見る")}})],1)}),[],!1,null,null,null);e.a=T.exports;m()(T,{VCol:S.a})},412:function(t,e,n){"use strict";var r=n(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"cumulative"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(428),n(14)),l=n(51),d=n.n(l),c=n(389),f=n(556),_=n(434),v=n.n(_),h=n(138),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VBtn:c.a,VBtnToggle:f.a}),v()(component,{Ripple:h.a})},413:function(t,e,n){"use strict";var r=n(0).a.extend({props:{url:{type:String,default:""}}}),o=(n(437),n(14)),l=n(51),d=n.n(l),c=n(307),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"OpenDataLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.$t("県公式サイトで見る"))+"\n  "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:c.a})},414:function(t,e,n){"use strict";var r=n(324),o=n(331),l={components:{TimeBarChart:n(369).a},data:function(){var t=Object(o.a)(r.patients_summary.data),data={Data:r,patientsGraph:t};return data}},d=n(14),c=n(51),f=n.n(c),_=n(316),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("陽性患者数"),"title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":this.patientsGraph,date:this.Data.patients.date,unit:this.$t("人"),url:"https://www.pref.akita.lg.jp/pages/archive/51592"}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:_.a})},415:function(t,e,n){"use strict";var r=n(324),o=n(331),l={components:{TimeBarChart:n(369).a},data:function(){var t=r.inspection_persons.labels.map((function(t,i){return{"日付":t,"小計":r.inspection_persons.datasets[0].data[i]}})),e=Object(o.a)(t);return{data:r.inspection_persons,graphData:e}}},d=n(14),c=n(51),f=n.n(c),_=n(316),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:t.$t("1週間ごとの検査実施件数"),"title-id":"number-of-inspection-persons","chart-id":"number-of-inspection-persons","chart-data":t.graphData,date:t.data.date,unit:t.$t("人"),url:"https://www.pref.akita.lg.jp/pages/archive/51592#kennsa",source:t.$t("県公式サイトで見る")},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n          "+t._s(t.$t("（注）県、秋田市が実施した件数であり、民間機関が実施した件数は含まれない"))+"\n        ")]),t._v(" "),n("li",[t._v("\n          "+t._s(t.$t("（注）退院時の陰性確認用の検査等の件数は含まない"))+"\n        ")]),t._v(" "),n("li",[t._v("\n          "+t._s(t.$t("（注）後日修正される場合あり"))+"\n        ")])])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:_.a})},423:function(t,e,n){"use strict";var r=n(341),o=n.n(r);n.d(e,"default",(function(){return o.a}))},424:function(t,e,n){(e=n(12)(!1)).push([t.i,".note_3ycFr{margin-top:10px;margin-bottom:0;font-size:12px;color:#707070}",""]),e.locals={note:"note_3ycFr"},t.exports=e},425:function(t,e,n){"use strict";var r=n(342),o=n.n(r);n.d(e,"default",(function(){return o.a}))},426:function(t,e,n){(e=n(12)(!1)).push([t.i,'.container_37WEO{width:100%;display:flex;justify-content:center;box-sizing:border-box;color:#008830;line-height:1.35;padding-left:0 !important}.container_37WEO *{box-sizing:border-box}.container_37WEO ul{padding-left:0}.pillar_F62Yl{display:flex;flex-direction:column;justify-content:flex-end;flex:0 0 auto;text-align:center;width:100%;border:3px solid #008830}.group_1ksdS{display:flex;flex:0 0 auto;padding-left:0;padding-top:3px;border-top:3px solid #008830;border-left:3px solid #008830}.box_2dey9{display:flex}.box_2dey9.parent_23pyN{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-top:29px}.box_2dey9.parent_23pyN::after{content:"";display:block;position:absolute;top:-1px;right:0;height:30px;border-left:3px solid #008830}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-29px;border-top:none;border-right:none;border-left:none}.box_2dey9.confirmed_P-yFc{width:100%}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc((100% + 3px * 2) / 6 - 3px * 3)}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc((100% + 3px * 2) / 6 * 5 + 3px)}.box_2dey9.hospitalized_3w7PT{margin-left:3px;width:calc(100% / 5 * 3 - 3px)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc((100% + 3px * 2) / 3 - 3px * 3)}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc((100% + 3px * 2) / 3 * 2 + 3px)}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:3px;width:calc(100% / 2 - 3px)}.box_2dey9.staying_LVGrf,.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:3px;width:calc(100% / 5 - 3px)}.content_1gFZ-{min-height:150px;padding:10px 2px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.content_1gFZ->span{display:block;width:100%;font-size:16px;font-size:1rem}.content_1gFZ->span:last-child{margin-top:.1em}.content_1gFZ->span:not(:last-child){word-break:break-all}.content_1gFZ- span strong{font-size:18px;font-size:1.125rem}.content_1gFZ- span.unit_25C4Z{font-size:16px;font-size:1rem}@media screen and (max-width: 1440px){.pillar_F62Yl{border-width:.209vw}.group_1ksdS{padding-top:.209vw;border-top-width:.209vw;border-left-width:.209vw}.content_1gFZ->span{font-size:15px;font-size:0.9375rem}.content_1gFZ- span strong{font-size:17px;font-size:1.0625rem}.content_1gFZ- span.unit_25C4Z{font-size:15px;font-size:0.9375rem}.box_2dey9.parent_23pyN{border-top-width:.209vw;border-left-width:.209vw;padding-top:2.013vw}.box_2dey9.parent_23pyN::after{height:2.223vw;border-left-width:.209vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-2.013vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.209vw * 2) / 6 - 0.209vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.209vw * 2) / 6 * 5 + 0.209vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.209vw;width:calc(100% / 5 * 3 - 0.209vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.209vw * 2) / 3 - 0.209vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.209vw * 2) / 3 * 2 + 0.209vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.209vw;width:calc(100% / 2 - 0.209vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.209vw;width:calc(100% / 5 - 0.209vw)}}@media screen and (max-width: 1263px){.pillar_F62Yl{border-width:.159vw}.group_1ksdS{padding-top:.159vw;border-top-width:.159vw;border-left-width:.159vw}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.159vw;border-left-width:.159vw;padding-top:1.583vw}.box_2dey9.parent_23pyN::after{height:1.742vw;border-left-width:.159vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.583vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.159vw * 2) / 6 - 0.159vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.159vw * 2) / 6 * 5 + 0.159vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.159vw;width:calc(100% / 5 * 3 - 0.159vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.159vw * 2) / 3 - 0.159vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.159vw * 2) / 3 * 2 + 0.159vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.159vw;width:calc(100% / 2 - 0.159vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.159vw;width:calc(100% / 5 - 0.159vw)}}@media screen and (max-width: 1170px){.pillar_F62Yl{border-width:.171vw}.group_1ksdS{padding-top:.171vw;border-top-width:.171vw;border-left-width:.171vw}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.171vw;border-left-width:.171vw;padding-top:1.71vw}.box_2dey9.parent_23pyN::after{height:1.881vw;border-left-width:.171vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.709vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.171vw * 2) / 6 - 0.171vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.171vw * 2) / 6 * 5 + 0.171vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.171vw;width:calc(100% / 5 * 3 - 0.171vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.171vw * 2) / 3 - 0.171vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.171vw * 2) / 3 * 2 + 0.171vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.171vw;width:calc(100% / 2 - 0.171vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.171vw;width:calc(100% / 5 - 0.171vw)}}@media screen and (max-width: 959px){.pillar_F62Yl{border-width:.417vw}.group_1ksdS{padding-top:.417vw;border-top-width:.417vw;border-left-width:.417vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.417vw;border-left-width:.417vw;padding-top:3.333vw}.box_2dey9.parent_23pyN::after{height:3.75vw;border-left-width:.417vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-3.333vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.417vw * 2) / 6 - 0.417vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.417vw * 2) / 6 * 5 + 0.417vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.417vw;width:calc(100% / 5 * 3 - 0.417vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.417vw * 2) / 3 - 0.417vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.417vw * 2) / 3 * 2 + 0.417vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.417vw;width:calc(100% / 2 - 0.417vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.417vw;width:calc(100% / 5 - 0.417vw)}}@media screen and (max-width: 767px){.pillar_F62Yl{border-width:.313vw}.group_1ksdS{padding-top:.313vw;border-top-width:.313vw;border-left-width:.313vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.313vw;border-left-width:.313vw;padding-top:3.541vw}.box_2dey9.parent_23pyN::after{height:3.855vw;border-left-width:.313vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-3.541vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.313vw * 2) / 6 - 0.313vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.313vw * 2) / 6 * 5 + 0.313vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.313vw;width:calc(100% / 5 * 3 - 0.313vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.313vw * 2) / 3 - 0.313vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.313vw * 2) / 3 * 2 + 0.313vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.313vw;width:calc(100% / 2 - 0.313vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.313vw;width:calc(100% / 5 - 0.313vw)}}@media screen and (max-width: 600px){.pillar_F62Yl{border-width:.5vw}.group_1ksdS{padding-top:.5vw;border-top-width:.5vw;border-left-width:.5vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.5vw;border-left-width:.5vw;padding-top:4.834vw}.box_2dey9.parent_23pyN::after{height:5.334vw;border-left-width:.5vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-4.833vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.5vw * 2) / 6 - 0.5vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.5vw * 2) / 6 * 5 + 0.5vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.5vw;width:calc(100% / 5 * 3 - 0.5vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.5vw * 2) / 3 - 0.5vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.5vw * 2) / 3 * 2 + 0.5vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.5vw;width:calc(100% / 2 - 0.5vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.5vw;width:calc(100% / 5 - 0.5vw)}}@media screen and (max-width: 420px){.pillar_F62Yl{border-width:.334vw}.group_1ksdS{padding-top:.334vw;border-top-width:.334vw;border-left-width:.334vw}.content_1gFZ->span{font-size:12px;font-size:0.75rem}.content_1gFZ- span strong{font-size:14px;font-size:0.875rem}.content_1gFZ- span.unit_25C4Z{font-size:12px;font-size:0.75rem}.box_2dey9.parent_23pyN{border-top-width:.334vw;border-left-width:.334vw;padding-top:5.166vw}.box_2dey9.parent_23pyN::after{height:5.5vw;border-left-width:.334vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-5.166vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.334vw * 2) / 6 - 0.334vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.334vw * 2) / 6 * 5 + 0.334vw )}.box_2dey9.hospitalized_3w7PT{margin-left:.334vw;width:calc(100% / 5 * 3 - 0.334vw)}.box_2dey9.hospitalized_3w7PT>.pillar_F62Yl{width:calc( (100% + 0.334vw * 2) / 3 - 0.334vw * 3 )}.box_2dey9.hospitalized_3w7PT>.group_1ksdS{width:calc( (100% + 0.334vw * 2) / 3 * 2 + 0.334vw )}.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.334vw;width:calc(100% / 2 - 0.334vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.334vw;width:calc(100% / 5 - 0.334vw)}}',""]),e.locals={container:"container_37WEO",pillar:"pillar_F62Yl",group:"group_1ksdS",box:"box_2dey9",parent:"parent_23pyN",confirmed:"confirmed_P-yFc",hospitalized:"hospitalized_3w7PT",minor:"minor_1RUXC",severe:"severe_2vs8y",staying:"staying_LVGrf",deceased:"deceased_3u1su",recovered:"recovered_JzYjB",content:"content_1gFZ-",unit:"unit_25C4Z"},t.exports=e},428:function(t,e,n){"use strict";n(393)},429:function(t,e,n){(e=n(12)(!1)).push([t.i,".DataSelector{margin-top:20px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector-Button:focus{outline:dotted #707070 1px}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},435:function(t,e,n){"use strict";n(395)},436:function(t,e,n){(e=n(12)(!1)).push([t.i,"@media screen and (min-width: 1171px){.DataView-DataInfo{text-align:right;width:50%}}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:wrap;display:inline-block;font-size:12px;line-height:12px;color:#707070}",""]),t.exports=e},437:function(t,e,n){"use strict";n(396)},438:function(t,e,n){(e=n(12)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},479:function(t,e,n){"use strict";n(400)},480:function(t,e,n){(e=n(12)(!1)).push([t.i,".cardTable.v-data-table{box-shadow:0 -20px 12px -12px #0003 inset}.cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.cardTable.v-data-table:focus{outline:dotted #707070 1px}.note{padding:8px;font-size:12px;color:#707070}",""]),t.exports=e}}]);