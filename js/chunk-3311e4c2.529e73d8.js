(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3311e4c2"],{1909:function(t,e,a){"use strict";var s=a("e82a"),i=a.n(s);i.a},6911:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter"},[a("header-cmp",{attrs:{title:t.$t("Select_Time"),isBack:!1},scopedSlots:t._u([{key:"btn",fn:function(){return[a("div",{staticClass:"records",on:{click:function(e){return e.preventDefault(),t.filter(e)}}},[t._v(t._s(t.$t("Done")))])]},proxy:!0}])}),a("main",[a("div",{staticClass:"time"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("Time")))]),a("div",{staticClass:"options"},t._l(t.date,function(e){return a("div",{key:e.id,staticClass:"option",class:{selected:t.selectedDate===e.id},on:{click:function(a){return t.chooseDate(e.id)}}},[t._v(t._s(e.name))])}),0),a("div",{staticClass:"date"},[a("div",{staticClass:"text"},[a("datetime",{staticClass:"input_box",attrs:{"input-class":"datetime-input","max-datetime":t.maxDatetime,title:t.$t("Start_Time"),format:"yyyy-MM-dd"},model:{value:t.startDate.date,callback:function(e){t.$set(t.startDate,"date",e)},expression:"startDate.date"}}),a("div",{staticClass:"line"}),a("datetime",{staticClass:"input_box",attrs:{"input-class":"datetime-input","max-datetime":t.maxDatetime,format:"yyyy-MM-dd",title:t.$t("End_Time")},model:{value:t.endDate.date,callback:function(e){t.$set(t.endDate,"date",e)},expression:"endDate.date"}})],1)])]),t.gameList?a("div",{staticClass:"platform"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("Search_PlatForm")))]),a("div",{staticClass:"row"},t._l(t.gameListArry,function(e){return a("div",{key:e.gameId,ref:e.gameId,refInFor:!0,staticClass:"box",on:{click:function(a){return t.chooseGames(e.gameId)}}},[t._v(t._s(e.name))])}),0)]):t._e()])],1)},i=[],r=a("365c"),n={props:{gameList:{type:Boolean}},data:function(){return{selectedDate:0,date:[{name:this.$t("Today"),id:0},{name:this.$t("Yesterday"),id:-1},{name:this.$t("Three_Day"),id:-2},{name:this.$t("Seven_Day"),id:-6}],startDate:{selectDate:"",date:"",time:""},endDate:{selectDate:"",date:"",time:""},maxDatetime:"",gameListArry:[],gameIds:[]}},beforeMount:function(){this.maxDatetime=(new Date).toISOString()},activated:function(){var t=this;this.gameList&&Object(r["r"])().then(function(e){1==e.result&&(t.gameListArry=e.data)})},mounted:function(){this.startDate.date=this.storeStartDate,this.endDate.date=this.storeEndDate},methods:{filter:function(){var t=new Date(this.startDate.date).getTime(),e=new Date(this.endDate.date).getTime();if(t>e)this.$toast($t("Error_Date"));else{for(var a="",s=0;s<this.gameIds.length;s++)s!=this.gameIds.length-1?a+="".concat(this.gameIds[s],"|"):a+="".concat(this.gameIds[s]);this.$store.dispatch("updateFilterDate",{startDate:this.startDate.date,endDate:this.endDate.date,gameIds:a}),this.$emit("confirm")}},chooseDate:function(t){this.selectedDate=t;var e=new Date,a=-e.getTimezoneOffset()/60*3600*1e3,s=e.toISOString(),i=e.getFullYear(),r=e.getMonth(),n=e.getDate();e=new Date(i,r,n),e=e.getTime();var c=864e5*t,o=new Date(+e+c+a).toISOString();this.startDate.selectDate=o,this.startDate.date=o,this.endDate.selectDate=s,this.endDate.date=s},chooseGames:function(t){if(this.gameIds.some(function(e){return e==t})){for(var e=0;e<this.gameIds.length;e++)this.gameIds[e]==t&&this.gameIds.splice(e,1);this.addSelectedClass(t)}else this.gameIds.push(t),this.addSelectedClass(t)},addSelectedClass:function(t){"selected"===this.$refs[t][0].classList[1]?this.$refs[t][0].classList.remove("selected"):this.$refs[t][0].classList.add("selected")}},watch:{"endDate.date":function(t){t!=this.endDate.selectDate&&(this.selectedDate="")},"startDate.date":function(t){t!=this.startDate.selectDate&&(this.selectedDate="")}},computed:{storeStartDate:function(){return this.$store.state.filterDate.startDate},storeEndDate:function(){return this.$store.state.filterDate.endDate}}},c=n,o=(a("1909"),a("2877")),d=Object(o["a"])(c,s,i,!1,null,"720d0140",null);e["a"]=d.exports},db6c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recordPage"},[a("header-cmp",{attrs:{title:t.$t("Trade_Record")},scopedSlots:t._u([{key:"btn",fn:function(){return[a("div",{staticClass:"records",on:{click:function(e){e.preventDefault(),t.isFilter=!0}}},[t._v(t._s(t.$t("Filter")))])]},proxy:!0}])}),a("div",{staticClass:"nav-bar"},[a("router-link",{staticClass:"nav",class:{active:"records"==t.records},attrs:{to:{name:"records"},replace:""}},[t._v(t._s(t.$t("Deposit")))]),a("router-link",{staticClass:"nav",class:{active:"withdrawRecord"==t.records},attrs:{to:{name:"withdrawRecord"},replace:""}},[t._v(t._s(t.$t("Withdraw")))]),a("router-link",{staticClass:"nav",class:{active:"commissionRecord"==t.records},attrs:{to:{name:"commissionRecord"},replace:""}},[t._v(t._s(t.$t("Commision")))])],1),a("div",{staticClass:"container recordBox"},[t.isRouterAlive?a("router-view"):t._e()],1),a("transition",{attrs:{name:"pop"}},[a("keep-alive",[t.isFilter?a("record-filter",{staticClass:"filter",attrs:{page:t.records,gameList:t.gameList},on:{confirm:t.confirm}}):t._e()],1)],1)],1)},i=[],r=(a("7f7f"),a("6911")),n={components:{RecordFilter:r["a"]},data:function(){return{records:this.$route.name,isFilter:!1,gameList:!1,isRouterAlive:!0}},mounted:function(){},methods:{reload:function(){var t=this;this.isRouterAlive=!1,this.$nextTick(function(){return t.isRouterAlive=!0})},confirm:function(){this.isFilter=!1,this.reload()}},beforeRouteUpdate:function(t,e,a){this.gameList="commissionRecord"===t.name,this.records=t.name,a()}},c=n,o=a("2877"),d=Object(o["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports},e82a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3311e4c2.529e73d8.js.map