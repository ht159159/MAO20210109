(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8c28e86"],{"0c2f":function(t,s,a){"use strict";var e=a("40e4"),i=a.n(e);i.a},"40e4":function(t,s,a){},"7dcf":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{ref:"scroll",attrs:{id:"commission"},on:{scroll:function(s){return t.$scrollLoad(t.loadMore,s)}}},[t.commissionData.length>0?a("div",t._l(t.commissionData,function(s){return a("div",{key:s.id,staticClass:"box container"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("Periods"))+":\n          "),a("p",[t._v(t._s(s.period))])]),a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("Platform"))+":\n          "),a("p",[t._v(t._s(s.gameId))])])]),a("div",{staticClass:"flex"},[a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("TotalBetAmount"))+":\n          "),a("p",{staticClass:"result"},[t._v(t._s(t._f("$currency")(s.effecBet)))])]),a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("Result"))+":\n          "),a("p",{staticClass:"result"},[t._v(t._s(t._f("$currency")(s.winOrLose)))])])]),a("div",{staticClass:"flex"},[a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("Commision"))+":\n          "),a("p",{staticClass:"payStatus",class:{result:"成功"==s.payStatus}},[t._v("\n            "+t._s(t._f("$currency")(s.rebate))+"\n          ")])]),a("div",{staticClass:"title"},[t._v("\n          "+t._s(t.$t("Status"))+":\n          "),a("p",{staticClass:"payStatus",class:{result:"成功"==s.payStatus}},[t._v("\n            "+t._s(s.payStatus)+"\n          ")])])])])}),0):a("div",{staticClass:"noData"},[t._v(t._s(t.$t("NoData")))])])},i=[],n=a("365c"),o={data:function(){return{commissionData:[],pageIndex:1,pageSize:10,totalCount:0}},mounted:function(){this.getComssissionRecord()},methods:{getComssissionRecord:function(){var t=this,s={startDate:this.startDate,endDate:this.endDate,gameIds:this.gameIds,pageIndex:1,pageSize:10};Object(n["B"])(s).then(function(s){t.commissionData=s.data.rebateModels,t.totalCount=s.data.totalCount})},loadBottom:function(){var t=this;if(this.pageIndex++,this.commissionData.length!=this.totalCount){var s={startDate:this.startDate,endDate:this.endDate,pageIndex:this.pageIndex,pageSize:this.pageSize,gameIds:this.gameIds};Object(n["B"])(s).then(function(s){var a=t.commissionData;t.commissionData=a.concat(s.data.rebateModels)})}}},computed:{startDate:function(){return this.$store.state.filterDate.startDate},endDate:function(){return this.$store.state.filterDate.endDate},gameIds:function(){return this.$store.state.filterDate.gameIds}}},c=o,r=(a("0c2f"),a("2877")),l=Object(r["a"])(c,e,i,!1,null,"2079bc04",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-c8c28e86.bb02eccc.js.map