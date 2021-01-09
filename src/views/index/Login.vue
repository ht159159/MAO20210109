<template>
  <div class="bg">
    <header-cmp :title="$t('Login')" />
    <!-- <div class="logo"></div> -->
    <img class="logo" src="../../assets/images/background/logo.png" alt="">
    <div class="container">
      <div class="input_box">
        <input type="text" :placeholder="$t('Placehoder_Accout')" v-model="loginData.memId" />
        <span href="#" class="clear" @click.prevent="$clearInput('loginData', 'memId')"></span>
        <!-- <div class="alert" v-if="alert.memId">{{ alert.memId }}</div> -->
      </div>
      <div class="input_box">
        <input
          type="password"
          :placeholder="$t('Placeholder_Password')"
          v-model="loginData.password"
          ref="passwordInput"
        />
        <span
          href="#"
          ref="passwordButton"
          class="hide"
          @click.prevent="$togglePassword('password')"
        ></span>

        <!-- <div class="alert" v-if="alert.password">{{ alert.password }}</div> -->
      </div>
      <div class="input_box">
        <input type="text" :placeholder="$t('Placeholder_Validation')" v-model="loginData.imgCode" />
        <span href="#" class="imgcode">
          <img :src="imgCode" @click.prevent="changeImgCode" />
        </span>

        <!-- <div class="alert" v-if="alert.imgCode">{{ alert.imgCode }}</div> -->
      </div>
      <a href="#" class="btn btn-round btn-blue" @click.prevent="login">{{ $t("Login") }}</a>
      <a href="#" class="pwd" @click.prevent="pwd">{{ $t("Forget_Password") }}</a>
    </div>
  </div>
</template>
<script>
import { apiGetToken } from "@/api";
export default {
  data() {
    return {
      loginData: {
        memId: "",
        password: "",
        imgCode: ""
      },
      // alert: {
      //   memId: "",
      //   password: "",
      //   imgCode: ""
      // },
      imgCode: process.env.VUE_APP_API_BASE_URL + "/Account/GetImgCode"
    };
  },
  mounted() {
    this.changeImgCode();
  },
  methods: {
    login() {
      if (!this.$verifyData(this.loginData)) return;

      // if (err.length) {
      //   const alertKeys = Object.keys(this.alert);
      //   console.log(alertKeys);

      //   for (let i = 0; i < alertKeys.length; i++) {
      //     this.alert[alertKeys[i]] = "";
      //   }
      //   for (let i = 0; i < err.length; i++) {
      //     this.alert[err[i].key] = err[i].message;
      //   }
      //   return;
      // }

      apiGetToken(this.loginData).then(res => {
        if (res.result == 1) {
          this.$storage.local.set("token", res.data.accessToken);
          this.$storage.local.set("isGuest", false);
          this.$storage.local.set(
            "expireInMinutes",
            Date.now() + res.data.expireInMinutes * 60 * 1000
          );
          this.$router.push({ name: "main" });
          
          // if (isApp) {
          //   this.$router.push({ name: "main" });
          // } else {
          //   location.href = `/download/index.html?v=${new Date().getTime()}`;
          // }

          return;
        } else {
          this.changeImgCode();
        }
      });
    },
    pwd() {
      this.$router.push({ name: "forgetpassword", params: { id: "verify" } });
    },
    changeImgCode() {
      this.imgCode =
        process.env.VUE_APP_API_BASE_URL +
        "/Account/GetImgCode?o=" +
        Math.random();
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background: #20212f;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top center;
  font-size: 0.35rem;
  text-align: center;

  .logo{
    width: 90%;
    // min-height: 90%;
    vertical-align: middle;
    margin-top: 0.5rem;
  }

  .container {
    text-align: center;
    .input_box:nth-child(1) {
      margin-top: 1rem;
    }
    a:nth-child(4) {
      margin-top: 0.8rem;
    }
    a:nth-child(5) {
      position: relative;
      top: 0.5rem;
      font-size: 0.25rem;
      color: #3ec1fe;
    }
  }
}
</style>
