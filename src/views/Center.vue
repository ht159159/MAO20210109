<template>
  <div class="center">
    <div class="info">
      <img class="info-bg" src="~@/assets/images/background/centerTop.jpg" />
      <div class="info-user">
        <div class="info-user-header">
          <img class="info-user-header-bg" src="~@/assets/images/center/header.png" />
          <!-- 頭像放這裡  用class avatar -->
          <img class="info-user-avatar" src="~@/assets/images/center/avatar.png" />
          <div class="info-user-vip">
            <img src="~@/assets/images/center/point.png" alt />
            <p>{{ personalInfo.level }}</p>
          </div>
        </div>
        <div class="info-user-text">
          <div class="info-user-text-title">{{ personalInfo.userName }}</div>
          <div class="info-user-text-point">{{ maoBalance }}</div>
          <div class="info-user-text-spreadCode">推廣碼:
            <div class="spreadCode" id="copythis">1234567890</div> <a href="javascript:void(0)"
                @click="CopyTextToClipboard('copythis')">複製</a></div>
        </div>
      </div>
      <ul class="info-list">
        <router-link tag="li" :to="{ name: 'thirdpartypayment' }">
          <a href="#">
            <img src="~@/assets/images/icons/deposit.png" class="info-list-img" />
            <span class="info-list-text">{{ $t("Deposit") }}</span>
          </a>
        </router-link>
        <router-link tag="li" :to="{ name: 'withdraw' }">
          <a href="#">
            <img src="~@/assets/images/icons/withdraw.png" class="info-list-img" />
            <span class="info-list-text">{{ $t("Withdraw") }}</span>
          </a>
        </router-link>
        
        <router-link tag="li" :to="{ name: 'CustomerService' }">
          <a href="#">
            <img class="info-list-img" src="~@/assets/images/icons/service-white.png" />
            <span class="info-list-text">{{ $t("Service") }}</span>
          </a>
        </router-link>

        <router-link tag="li" :to="{ name: 'personal' }">
          <a href="#">
            <img src="~@/assets/images/icons/personInfo.png" class="info-list-img" />
            <span class="info-list-text">{{ $t("Personal") }}</span>
          </a>
        </router-link>
      </ul>
    </div>
    <div class="menus">
      <ul class="menu">
        <!-- <router-link tag="li" :to="{ name: 'gamebalance' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/wallet.png" />
            </div>
            <div class="list-l-text">{{ $t("CenterWallet") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-text">{{ $t("Check_Wallet") }}</div>
            <div class="list-r-icon"></div>
          </div>
        </router-link> -->
        <router-link tag="li" :to="{ name: 'message' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/message.png" />
            </div>
            <div class="list-l-text">{{ $t("Message_Box") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-text list-r-text-blue">{{ unreadMessage }} {{ $t("Not_Read") }}</div>
            <div class="list-r-icon"></div>
          </div>
        </router-link>
      </ul>
      <ul class="menu">
        <router-link tag="li" :to="{ name: 'records' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/tradeRecord.png" />
            </div>
            <div class="list-l-text">{{ $t("Trade_Record") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" :to="{ name: 'betrecords' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/betRecord.png" />
            </div>
            <div class="list-l-text">{{ $t("Bet_Record") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" :to="{ name: 'bankcard' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/creditCard.png" />
            </div>
            <div class="list-l-text">{{ $t("BankCardInfo") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
      </ul>
      <ul class="menu">
        <router-link tag="li" :to="{ name: 'changepassword' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/password.png" />
            </div>
            <div class="list-l-text">{{ $t("Change_Password") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <router-link tag="li" :to="{ name: 'fundpasswordsetting' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/walletPassword.png" />
            </div>
            <div class="list-l-text">{{ $t("Wallet_Password") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
        <!-- <router-link tag="li" :to="{ name: 'address' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/address.png" />
            </div>
            <div class="list-l-text">{{ $t("Send_Address") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>-->
      </ul>
      <ul class="menu">
        <!-- <router-link tag="li" :to="{ name: 'agentjoin' }" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/agentJoin.png" />
            </div>
            <div class="list-l-text">{{ $t("Agent_Join") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>-->
        <!-- <li class="list">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/changeLang.png" />
            </div>
            <div class="list-l-text">{{ $t("Select_Language") }}</div>
          </div>
          <div class="list-r">
            <picker
              v-model="language"
              :text="language ? language.name : ''"
              :list="languageList"
              :placeholder="$t('Placeholder_Select_Language')"
            ></picker>
            <div class="list-r-icon"></div>
          </div>
        </li>-->
      </ul>

      <!-- <ul class="menu">
        <router-link tag="li" to="/agent" class="list list-clickable">
          <div class="list-l">
            <div class="list-l-icon">
              <img src="~@/assets/images/icons/walletPassword.png" />
            </div>
            <div class="list-l-text">{{ $t("Wallet_Password") }}</div>
          </div>
          <div class="list-r">
            <div class="list-r-icon"></div>
          </div>
        </router-link>
      </ul> -->

      <a href="#" class="mt btn btn-red" @click.prevent="logout">
        {{
        $t("Log_Out")
        }}
      </a>
    </div>

    <modal-alert v-if="showAlert" imgName="alert" @close="showAlert = ''" :text="alertText">
      <template #btn>
        <div class="alert-box-cancel alert-box-btn" @click="showAlert = ''">{{ $t("Leave") }}</div>
        <div
          class="alert-box-cancel alert-box-btn alert-box-btn-bright"
          @click="toPage(showAlert)"
        >{{ $t("Goto") }}</div>
      </template>
    </modal-alert>
  </div>
</template>

<script>
import { apiGetLanguages, apiMaoGetBalanceAsync } from "@/api";
import { mapState } from "vuex";
export default {
  data() {
    return {
      userName: "",
      wallet: 0,
      level: 0,
      showAlert: "",
      alertText: "",
      language: {},
      languageList: [],
      timer: null,
      maoBalance:''
    };
  },
  computed: mapState(["personalInfo", "unreadMessage"]),
  created() {
    apiMaoGetBalanceAsync().then(res => {
      this.maoBalance = res.data
    })
  },
  mounted() {
    this.getLanguages();
    this.$store.dispatch("getPersonalInfo");
    this.$storage.local.set("isNullWallet", this.personalInfo.isNullWallet);
    if (!this.unreadMessage) this.$store.dispatch("getUnreadMessage");
    this.timer = setInterval(() => {
      this.$store.dispatch("getUnreadMessage");
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    langInit() {
      this.language = this.$storage.local.get("lang");
    },
    toPage(name) {
      this.$router.push({ name });
    },
    getLanguages() {
      apiGetLanguages().then(res => {
        if (res.result === 1) {
          this.languageList = res.data.langs;
          this.langInit();
        }
      });
    },
    logout() {
      let lang = this.$storage.local.get("lang");
      localStorage.clear();
      sessionStorage.clear();
      this.$storage.local.set("lang", lang);
      this.$router.push("/");
    },
    // 複製文字
    CopyTextToClipboard (id) {
      let TextRange = document.createRange()
      TextRange.selectNode(document.getElementById(id))
      let sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(TextRange)
      document.execCommand('copy')
      // alert('複製完成！') 此行可加可不加
    }
  },
  watch: {
    personalInfo(val) {
      this.$storage.local.set("isNullWallet", val.isNullWallet);
    },
    language(lang) {
      this.$i18n.locale = lang.tag;
      this.$storage.local.set("lang", lang);
    }
  }
};
</script>
<style lang="scss">
.center {
  height: 100%;
  overflow: hidden;
  padding-bottom: rem(121);
}
.info {
  position: sticky;
  height: rem(400);
  width: 100%;
  top: 0;
  left: 0;
  &-bg {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  &-user {
    position: absolute;
    left: rem(50);
    top: rem(50);
    display: flex;
    &-header {
      width: rem(193);
      height: rem(193);
      position: relative;
      &-bg {
        width: 100%;
      }
    }
    &-avatar {
      width: rem(163);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &-vip {
      position: absolute;
      bottom: 0;
      left: rem(94);
      width: rem(104);
      height: rem(48);
      img {
        display: block;
        width: 100%;
      }
      p {
        position: absolute;
        top: 50%;
        right: rem(21);
        transform: translateY(-50%);
        font-size: rem(32);
        color: $blue;
        font-weight: bold;
      }
    }
    &-text {
      margin-left: rem(30);
      margin-top: rem(29);
      font-size: rem(32);
      div {
        color: $white;
      }
      &-title {
        margin-bottom: rem(28);
      }
      &-spreadCode {
        display: flex;
        margin-top: rem(28);

        .spreadCode{
          margin-right: 0.2rem;
        }

        a{
          color: #000;
        }
      }
    }
  }
  &-list {
    position: absolute;
    bottom: rem(17);
    left: 0;
    font-size: rem(26);
    display: flex;
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    li {
      padding: rem(10) rem(20);
      transition: 0.2s;
      border-radius: rem(8);
      &:active {
        background-color: rgba($color: #fff, $alpha: 0.5);
      }
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-img {
      height: rem(43);
      display: block;
    }
    &-text {
      color: $white;
      padding-top: rem(8);
    }
  }
}
.menus {
  height: calc(100% - #{rem(523)});
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.mt {
  display: block;
  margin-top: rem(88);
}
</style>
