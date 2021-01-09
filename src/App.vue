<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
    
    <div class="screenPrompt" v-if="screenPrompt">
<!-- 请竖屏浏览 以获得更好的体验  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "",
      input: [],
      screenPrompt: false
    };
  },
  created() {
    window.addEventListener("beforeunload", this.beforePageDestroyed);
    
    // 判斷裝置語系 設定語系
    this.$storage.local.set("lang", { name: "繁体中文", tag: "zh-TW" });

    // console.log('123')
    // function rotate() {

    //   if (window.orientation == 180 || window.orientation == 0) {
    //   alert('竖屏')
    //   }
    //   if (window.orientation == 90 || window.orientation == -90) {
    //   alert('横屏')
    //   }
    // }
    // window.addEventListener("load", rotate, false);
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", rotate, false);
  },
  mounted() {
    // var __this = this;
    // var rotate = () => {

    //   if (window.orientation == 180 || window.orientation == 0) {
    //   console.log("竖屏了");
    //   this.screenPrompt = false;
    //   }
    //   if (window.orientation == 90 || window.orientation == -90) {
    //     this.screenPrompt = true;
    //   console.log("横屏了");
    //   }
    // }
    // window.addEventListener("load", rotate, true);
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", rotate, false);

    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", () => {
      if (window.screen.orientation.angle === 180 || window.screen.orientation.angle === 0) {
        this.screenPrompt = false;
        // console.log("竖屏了");
      } 
      if (window.screen.orientation.angle === 90 || window.screen.orientation.angle === -90 ){
        this.screenPrompt = true;
        // console.log("横屏了");
      } 
    }, false);  


    if (isApp) {
      plus.screen.lockOrientation("portrait-primary"); // 把屏幕方向改变成竖屏正方向
      window.addEventListener(
        "onorientationchange" in window ? "orientationchange" : "resize",
        function() {
          if (window.orientation === 180 || window.orientation === 0) {
            // 设置应用非全屏显示！
            plus.navigator.setFullscreen(true);
            // console.log("竖屏了");
          }
          if (window.orientation === 90 || window.orientation === -90) {
            // alert('横屏状态！');
            // console.log("横屏了");
            // 设置应用全屏显示！
            plus.navigator.setFullscreen(true);
          }
        },
        false
      );
      //移动端的浏览器一般都支持window.orientation这个参数，通过这个参数可以判断出手机是处在横屏还是竖屏状态。
    }
  },
  methods: {
    blurInput(el) {
      el.target.blur();
    },
    // 判定是否遊客登出
    beforePageDestroyed: function(event) {
      if (this.$storage.local.get("isGuest")) {
        localStorage.clear();
      }
    }
  },
  watch: {
    $route(to, from) {
      // 過廠動畫 頁面名稱:動畫名稱
      const AnimeObj = {
        index: "R-Slide-vertical",
        login: "Slide-vertical",
        register: "Slide-vertical",
        forgetpassword: "Slide-horizontal",
        main: "R-Slide-horizontal",
        childGame: "Slide-vertical",
        center: "R-Slide-horizontal",
        thirdpartypayment: "Slide-horizontal",
        withdraw: "Slide-horizontal",
        transfermoney: "Slide-horizontal",
        personal: "Slide-horizontal",
        gamebalance: "Slide-horizontal",
        message: "Slide-horizontal",
        records: "Slide-horizontal",
        betrecords: "Slide-horizontal",
        bankcardsetting: "Slide-horizontal",
        changepassword: "Slide-horizontal",
        fundpasswordsetting: "Slide-horizontal",
        address: "Slide-horizontal",
        agentjoin: "Slide-horizontal",
        phonechange:"Slide-horizontal",
        redeem:"Slide-horizontal",
        traderecord:"Slide-horizontal",
        bankcardedit:"Slide-horizontal",
        bankcard:"Slide-horizontal",
        CustomerService:"Slide-horizontal",
      };
      if (from.name == "mynews"&&to.name=="message") {
        this.transitionName = "R-Slide-horizontal";
        return;
      }
      if (to.name == "mynews") {
        this.transitionName = "Slide-horizontal";
        return;
      }
      this.transitionName = AnimeObj[to.name];
    }
  }
};
</script>

<style lang="scss">
@import "~@/style/_reset.scss";
body {
  background-color: $bg-primary;
  font-family: "Microsoft Yahei", "STHeiti Light", serif;
}
#app {
  height: 100%;
  overflow: hidden;
}
.screenPrompt{
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 0 auto;
  background-image: url('../src/assets/images/background/screenPrompt.jpg');
  // background-size: cover;
  background-size: 100% 100%;
}
</style>
