<template>
  <div class="register">
    <header-cmp :title="$t('Register')"></header-cmp>
    <div class="container">
      <div class="input_box">
        <input type="text" :placeholder="$t('ReferralCode')" v-model="registerData.referralCode" />
      </div>
      <div class="input_box">
        <input type="text" :placeholder="$t('Placehoder_Accout')" v-model="registerData.memId" />
        <span href="#" class="clear" @click.prevent="$clearInput('registerData', 'memId')"></span>
        <!-- <div class="alert" v-if="alert.memId">{{ alert.memId }}</div> -->
      </div>
      <div class="input_box">
        <input type="text" :placeholder="$t('Placehoder_Mobile')" v-model="registerData.mobile" />
        <!-- <div class="alert" v-if="alert.mobile">{{ alert.mobile }}</div> -->
      </div>

      <div class="input_box">
        <input type="text" :placeholder="'Line ID'" v-model="registerData.lineId" />
        <!-- <div class="alert" v-if="alert.mobile">{{ alert.mobile }}</div> -->
      </div>

      <!-- 圖形驗證碼 -->
      <!-- <div class="input_box">
        <input
          type="text"
          :placeholder="$t('Placeholder_Validation')"
          v-model="registerData.imgCode"
        />
        <span href="#" class="imgcode" @click.prevent="changeImg">
          <img :src="img" />
        </span> -->
        <!-- <div class="alert" v-if="alert.imgCode">{{ alert.imgCode }}</div> -->
      <!-- </div> -->
      <div class="input_box">
        <input type="text" :placeholder="$t('Placeholder_SMSCode')" v-model="registerData.smsCode" />
        <span
          href="#"
          class="confirm border"
          @click.prevent="getSMScode"
          :class="{ dontClick: countDown }"
        >{{ SMSCodeMessage }}</span>
        <!-- <div class="alert" v-if="alert.smsCode">{{ alert.smsCode }}</div> -->
      </div>

      <div class="input_box">
        <input
        class="password"
          type="password"
          :placeholder="$t('Placeholder_Password_Min')"
          ref="passwordInput"
          v-model="registerData.password"
        />
        <span
          href="#"
          class="hide"
          ref="passwordButton"
          @click.prevent="$togglePassword('password')"
        ></span>
        <!-- <div class="alert" v-if="alert.password">{{ alert.password }}</div> -->
      </div>
      <div class="input_box">
        <input
          type="password"
          :placeholder="$t('Placeholder_ConfirmPassword')"
          ref="confirmpasswordInput"
          v-model="registerData.confirmPassword"
        />
        <span
          href="#"
          ref="confirmpasswordButton"
          class="hide"
          @click.prevent="$togglePassword('confirmpassword')"
        ></span>
        <!-- <div class="alert" v-if="alert.confirmPassword">{{ alert.confirmPassword }}</div> -->
      </div>

      <a href="#" class="btn btn-round btn-blue" @click.prevent="sendRegisterData">{{ $t("Start") }}</a>
    </div>
  </div>
</template>
<script>
import { apiRegister, apiGetSMSCode } from "@/api";
export default {
  data() {
    return {
      registerData: {
        memId: "",
        mobile: "",
        smsCode: "",
        password: "",
        confirmPassword: "",
        referralCode: "",
        imgCode: "",
        affiliateId: "",
        lineId: ''
      },
      img: "",
      SMSCodeMessage: this.$t("Send_ValidationCode"),
      countDown: 0,
      showAlert: false
    };
  },
  created() {
    this.changeImg();
  },
  mounted() {
    this.registerData.referralCode = this.$route.query.referralCode || "";
  },
  methods: {
    getSMScode() {
      let { mobile, imgCode } = this.registerData;
      if (!this.$verifyData({ mobile, imgCode })) return;

      apiGetSMSCode({ mobile, imgCode }).then(res => {
        if (!res.result) this.$toast(res.message);
        else if (res.result === 1) {
          this.$toast(this.$t("Error_SMSCode_IsSent"));
          this.countDown = 60;
          let interval = setInterval(() => {
            this.countDown = this.countDown - 1;
            if (!this.countDown) clearInterval(interval);
          }, 1000);
        }
      });
    },
    sendRegisterData() {
      if (!this.$verifyData(this.registerData)) return;
      apiRegister(this.registerData).then(res => {
        if (!res.result) this.$toast(res.message);
        else if (res.result === 1) {
          this.$toast(this.$t("RegisterDone"));
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 3000);
        }
      });
    },
    changeImg() {
      this.img =
        process.env.VUE_APP_API_BASE_URL +
        "/Account/GetImgCode?t=" +
        Math.random();
    }
  },
  watch: {
    countDown(val) {
      this.SMSCodeMessage =
        val == 0
          ? this.$t("Send_ValidationCode")
          : `${val}${this.$t("SendSMSCodeAfterSec")}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding-top: rem(85);
}
.register {
  height: 100%;
  background-color: $bg-primary;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.password::placeholder{
font-size: rem(28)
}
</style>
