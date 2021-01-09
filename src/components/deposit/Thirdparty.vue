<template>
  <div class="thirdparty container">
    <input class="thirdparty-input" type="number" :placeholder="$t('Placeholder_DepositAmout')" v-model="amount" />
    <picker
      class="plat"
      v-model="selectedPlay"
      :large="true"
      :text="selectedPlay.text"
      :list="payPlat"
      :placeholder="$t('Placeholder_ChooseGate')"
    ></picker>
    <div class="thirdparty-options">
      <div
        class="option"
        v-for="(rule, index) in selectedPlay.rule"
        :key="index"
        :class="{ selected: amount == rule }"
        @click="amount = rule"
      >{{rule}}</div>
      <!-- <div class="option" :class="{ selected: amount == 100 }" @click="amount = 100">100</div>
      <div class="option" :class="{ selected: amount == 500 }" @click="amount = 500">500</div>
      <div class="option" :class="{ selected: amount == 1000 }" @click="amount = 1000">1000</div>
      <div class="option" :class="{ selected: amount == 5000 }" @click="amount = 5000">5000</div>-->
    </div>
    <p class="thirdparty-tips">
      {{ $t("MinimumDeposit") }}{{ selectedPlay.min | $currency }}，上限
      <span>{{ selectedPlay.max | $currency }}</span>
    </p>
    <div class="btn btn-round btn-blue" @click.prevent="sendPay">充值</div>
  </div>
</template>
<script>
import { apiGetPlat, apiMaoPay } from "@/api";
export default {
  props: {
    selectedType: Object
  },
  data() {
    return {
      payPlat: [],
      selectedPlay: {
        rule: "",
        text: "",
        value: 0
      },
      amount: ""
    };
  },
  mounted() {
    this.getChannel();
  },
  methods: {
    sendPay() {
      // 將format過的金額還原成數字字串
      //   this.amount = this.amount.toString().replace(/[^0-9]/g, "");
      // 確認是否輸入進額
      if (!this.amount) {
        this.$toast("尚未输入金额");
        return;
      }
      //   輸入金額介於
      if (
        this.amount < this.selectedType.minAmount ||
        this.amount > this.selectedType.maxAmount
      ) {
        this.$toast(
          `存款金額請介於${this.selectedType.minAmount} ~ ${this.selectedType.maxAmount} `
        );
        return;
      }
      //   有無選擇渠道
      if (!this.selectedPlay.value) {
        this.$toast("请选择渠道");
        return;
      }

      let params = {
        type: Number(this.selectedType.id),
        payPlatId: this.selectedPlay.value,
        amount: Number(this.amount),
        // isJoinActivity: this.isJoinActivity,
        // data: ""
      };
      //   params.data = `${this.selectProvider.value},${this.cardNumber},${
      //     this.serialNumber
      //   },${this.amount}`;
      // 送出充值

      
      apiMaoPay(params).then(res => {
        // this.amount = this.$options.filters.$currency(this.amount);
        if (res.result === 1) {
          // console.log(res)
          //this.$toast(res.message);
          //app处理
          this.$APP.autoHandelAPP(res.data.url ,"收银台");
        }
      });
    },

    getChannel() {
      let param = {
        channelId: this.selectedType.id
      };
      apiGetPlat(param).then(res => {
        if (res.result === 1) {
          this.payPlat = res.data;
          // console.log(res);
        } else {
         this.initialData()
        }
      });
    },
    initialData(){
          this.payPlat = [];
          this.selectedPlay = {};
          this.amount=""
    }
  },
  watch: {
    selectedType() {
      this.getChannel();
      this.initialData()
    }
  }
};
</script>
<style lang="scss">
.thirdparty {
  &-input {
    border-radius: rem(15);
    border: rem(2) $gray solid;
    background-color: transparent;
    width: 100%;
    padding: rem(30) rem(40);
    font-size: rem(27);
    box-sizing: border-box;
    outline: none;
    color: #fff;
  }
  &-options {
    margin-top: rem(65);
    display: flex;
    align-items: center;
    border-radius: rem(15);
    margin-bottom: rem(48);
    padding: rem(15) 0;
    font-size: rem(32);
    color: $gray;
    .option {
      width: 25%;
      text-align: center;
      padding: rem(35) 0;
      background-color: #222434;
      &:nth-child(1) {
        border-top-left-radius: rem(15);
        border-bottom-left-radius: rem(15);
      }
      &:nth-child(4) {
        border-top-right-radius: rem(15);
        border-bottom-right-radius: rem(15);
      }
      &.selected {
        border-radius: rem(15);
        padding: rem(50) 0;
        margin: rem(-50) 0;
        background-color: #232330;
        box-shadow: 0 0 5px rgba(#000, 0.3);
        z-index: 1;
      }
    }
  }
  &-tips {
    font-size: rem(27);
    color: $gray;
    margin-bottom: rem(64);
    text-align: center;
    span {
      color: #ffae01;
    }
  }
}
</style>
