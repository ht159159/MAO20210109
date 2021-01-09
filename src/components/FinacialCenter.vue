<template>
  <div class="container">
    <div class="bg"></div>
    <img src="~@/assets/images/background/logo.png" class="logo" />
    <div class="bottom">
      <div @click.prevent="goTo('thirdpartypayment')" class="item">
        <img src="~@/assets/images/finacialcenter/deposit.png" />
        <p>{{ $t("Deposit") }}</p>
      </div>
      <div @click.prevent="goTo('withdraw')" class="item">
        <img src="~@/assets/images/finacialcenter/withdraw.png" />
        <p>{{ $t("Withdraw") }}</p>
      </div>
      
      <div @click.prevent="goTo('CustomerService')" class="item">
        <img src="~@/assets/images/finacialcenter/service.png" />
        <p>{{ $t("Service") }}</p>
      </div>

      <!-- <div @click.prevent="goTo('redeem')" class="item">
        <img src="~@/assets/images/finacialcenter/redeem.png" />
        <p>兑换码</p>
      </div> -->

      <div @click.prevent="goTo('personal')" class="item">
        <img src="~@/assets/images/finacialcenter/personInfo.png" />
        <p>{{ $t("Personal") }}</p>
      </div>

      <div @click.prevent="goTo('records')" class="item">
        <img src="~@/assets/images/finacialcenter/traderecord.png" />
        <p>{{ $t("Trade_Record") }}</p>
      </div>
      <div @click.prevent="goTo('betrecords')" class="item">
        <img src="~@/assets/images/finacialcenter/betrecord.png" />
        <p>{{ $t("Bet_Record") }}</p>
      </div>
      <div @click.prevent="goTo('changepassword')" class="item">
        <img src="~@/assets/images/finacialcenter/loginpwd.png" />
        <p>{{ $t("Change_Password") }}</p>
      </div>
      <div @click.prevent="goTo('fundpasswordsetting')" class="item">
        <img src="~@/assets/images/finacialcenter/tradepwd.png" />
        <p>{{ $t("Wallet_Password") }}</p>
      </div>
    </div>
    <!-- <slot name="btn"></slot> -->
    <img
      src="~@/assets/images/finacialcenter/close.png"
      class="close"
      @click.prevent="close()"
    />
  </div>
</template>
<script>
export default {
  methods: {
    goTo(name) {
      this.close();
      setTimeout(() => {
        this.$router.push({ name });
      }, 250);
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  background: url("~@/assets/images/finacialcenter/background.png");
  background-size: cover;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(#000, 0.5);
    z-index: -1;
  }
  .logo {
    width: rem(500);
    position: relative;
    top: rem(90);
  }
  .bottom {
    width: 100%;
    margin-top: rem(400);
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    .item {
      width: 25%;
      margin-bottom: 0.5rem;
      img {
        width: rem(118);
      }
      p {
        font-size: rem(26);
        color: #fff;
      }
    }
  }
  .close {
    margin-top: 0.5rem;
    height: rem(42);
  }
}
.mint-toast.is-placemiddle{
  z-index: 10000;
}
</style>
