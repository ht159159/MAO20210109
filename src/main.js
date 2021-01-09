import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/lang"; // 語言切換
import "mint-ui/lib/style.css"; // mint ui
import Mint from "mint-ui"; // mint ui
import Datetime from "vue-datetime"; // 日期選擇
import "vue-datetime/dist/vue-datetime.css"; // 日期選擇
import "@/components/globalComponents"; // 全域元件註冊
import mixins from "./mixin/index"; // mixin
import storage from "@/utils/storage"; //storage工具
import "@/style/common.scss";
import VueClipboard from "vue-clipboard2";
import H5Plus from '@/utils/h5plus'
Vue.mixin(mixins);
Vue.use(Datetime);

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

Vue.use(Mint);
Vue.prototype.$storage = storage;
Vue.prototype.$APP=H5Plus;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
