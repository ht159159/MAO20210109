<template>
  <div class="bg container">
    <img src="~@/assets/images/background/logoWhite.png" class="logo" alt />
    <div class="nav">
      <div class="btn login" @click.prevent="login()"></div>
      <div class="btn register"  @click.prevent="register"></div>
    </div>
    <div class="bottom" @click.prevent="guestLogin">
      <!-- <img src="~@/assets/images/icons/head.png" alt />
      {{ $t("Guest_Login") }} -->
    </div>
  </div>
</template>
<script>
import { apiYkLogIn } from "@/api";
export default {
  beforeCreate() {
  },
  methods: {
    login() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$router.push({ name: "register" });
    },
    guestLogin() {
      apiYkLogIn().then(res => {
        if (res.result == 1) {
          this.$storage.local.set("token", res.data.accessToken);
          this.$storage.local.set("isGuest", true);
          this.$storage.local.set(
            "expireInMinutes",
            Date.now() + res.data.expireInMinutes * 60 * 1000
          );
          this.$storage.session;
          this.$router.push({ name: "main" });
          return;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background: url("~@/assets/images/background/navigatorPage.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top center;
  font-size: 0.35rem;
  .logo {
    width: rem(500);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 0.2rem;
    display: block;
  }
  .nav {
    width: 100%;
    margin-top: 6.85rem;
    display: flex;
    //   align-items: center;
    justify-content: space-between;
    .btn {
      width: 3rem;
    }
    .btn:nth-child(1) {
      margin-right: 0.2rem;
    }

    .login{
      width: 45%;
      height: 0.55rem;
      background: url("~@/assets/images/background/login.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    .register{
      width: 45%;
      height: 0.55rem;
      background: url("~@/assets/images/background/register.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
  .bottom {
    width: 100%;
    height: 0.9rem;
    font-size: 0.25rem;
    text-align: center;
    margin-top: 0.5rem;
    // color: #2b8ebd;
    background: url("~@/assets/images/background/guestLogin.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    img {
      height: 0.23rem;
      margin-right: 0.1rem;
    }
  }
  .languageChange {
    margin-top: rem(50);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: block;
      margin: 0 rem(30);
      background-color: red;
      height: rem(80);
      width: rem(80);
    }
  }
}
</style>
