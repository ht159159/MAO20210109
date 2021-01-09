<template>
  <div class="customerService">
    <header-cmp :title="$t('Service')"></header-cmp>
    <main>
      <div class="serviceList" v-for="(item, i) in serviceData">
        <div class="title" @click="toggle(item)">
          <img class="icon" :src=item.img v-if="item.titleName !=='聯絡客服'">
          <div class="contentBox" :class="{serviceBox: item.titleName ==='聯絡客服'}" >
            <div class="contentTitleBox">
              <div>{{item.titleName}}</div>
              <div class="titleContent">{{item.titleContent}}</div>
            </div>
            <div class="left-arrow" :class="{active: item.choose}"></div>
          </div>
          
        </div>
        <transition name="draw">
          <!--这里的name 和 css 类名第一个字段要一样-->

          <div class="box" :class="{questionBox: item.titleName ==='常見問題'}" v-show="item.choose">
            <div class="serviceData" :class="{questionData: item.titleName ==='常見問題'}" v-for="(list, questionI) in item.dataList">
              <section v-if="list.urlCode">
                <img :src="list.Headimg" alt="">
                <div>暱稱:{{ list.nickName }}</div>

                <div class="connection">
                  <div>Line ID</div>
                  <div>{{ list.chatNo }}</div>
                </div>
                <div class="connection">
                  <div>Telegram ID</div>
                  <div>{{ list.chatNo }}</div>
                </div>
                <div class="connection">
                  <div>Wechat ID</div>
                  <div>{{ list.chatNo }}</div>
                </div>
                <!-- <a :href="list.urlCode">點擊進入</a> -->
              </section>

              <section v-if="!list.urlCode" class="questionDataContent">
                <div class="questionNumber">{{questionI + 1}}</div>
                <div class="questionContent">
                  <div>{{ list.titleName }}</div>
                  <div>{{ list.content }}</div>
                </div>
              </section>
              
            </div>
          </div>
        </transition>
      </div>

      <!-- <div class="commonProblem">
          <div class="title" @click="boxshow = !boxshow">QQ克服</div>
        <transition name="draw">

          <div class="box" v-show="boxshow"></div>
        </transition>
      </div>-->
    </main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      serviceData: [
        {
          titleName: "聯絡客服",
          titleContent: "海量用戶的第一選擇,優質的服務",
          choose: false,
          img:require('../../assets/images/icons/qqService_Icon.png'),
          dataList:''
        },
        {
          titleName: "常見問題",
          titleContent: "常見問題諮詢,智能,自助",
          choose: false,
          img:require('../../assets/images/icons/commonProblem_Icon.png'),
          dataList:[
            {
              titleName:'怎麼代理?',
              content:'掃碼或者點擊邀請鏈接選擇在流覽器中打開，註冊下載遊戲，用您的專屬二維碼或邀請鏈接推廣。'
            },
            {
              titleName:'自己的邀請碼在哪?',
              content:'遊戲主介面，點擊“推廣賺錢”會有您自己的專屬二維碼和註冊鏈接哦~ 保存圖片就可以分享了，通過此方式註冊的會員即成為您的直屬代理，其邀請的下級會員皆算做您的團隊成員，以此類推，可無限裂變式發展。'
            },
            {
              titleName:'自己的業績等級及傭金在哪里查看?',
              content:'遊戲主介面，點擊“推廣賺錢”-“我的傭金”就能看到您的業績等級、可領取傭金、歷史結算傭金情況。'
            },
            {
              titleName:'業績是怎麼算的?',
              content:'業績是指玩家在遊戲內有效投注的情況，比如你推廣一個玩家，他這把下注贏500元，下把輸300元，則他為你帶來的業績為800元'
            },
            {
              titleName:'充值提現有什麼要求?',
              content:'充值通道有線上充值、公司入款和代理充值通道，最低充值金額10元，最低提現金額100元，單筆提現高達200萬元。通過審核後即可到賬。'
            },
            {
              titleName:'傭金多久結算?',
              content:'無限代模式返傭制度為日結算，每日23:59分清零，當日業績達到多少按照傭金表進行返傭哦~'
            },
            {
              titleName:'MG遊戲有哪些優勢?',
              content:'①境外集團自主研發，全新技術與銀行採用128位SSL加密技術和嚴格的安全管理體系，確保客戶的所有交易活動都是在極其嚴密的情況下進行。②不用湊人，24小時真人線上，萬人棋牌對戰；線上匹配，自動結算，沒有局數限制， 玩大玩小，玩多玩少，由您決定！③擁有高素質的客戶服務，即時存取款，24小時即時回復玩家的線上諮詢及問答，真金1:1，自由結算，大額提現秒到賬。'
            }
          ]
        }
      ],
      qqServiceUrl: process.env.VUE_APP_QQ_BASE_URL
    };
  },
  // created() {
  //   // this.serviceData[0].dataList = serviceInfo.Data
  // },
  mounted() {
      axios.get('kefu.json').then(res => {
        this.serviceData[0].dataList = res.data.Data
      })
      // var json = require('../../../resources/kefu.json');
      // console.log(json)
  },
  methods: {
    toggle(item) {
      item.choose = !item.choose;
    }
  },
  filters: {}
};
</script>

<style lang="scss">
$back-icon-padding: 10;
.customerService {
  height: 100%;

  main {
    width: 100%;
    height: 90%;
    padding: 0.3rem 0.3rem 0px 0.3rem;
    box-sizing: border-box;
    overflow-y: scroll;

    .serviceList {
      width: 100%;
      margin-bottom: 20px;

      .title {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        border-radius: 20px;
        font-size: 0.34rem;
        background-color: #1b1b26;
        margin-bottom: 5px;

        .icon{
            width: 40px;
            height: 40px;
        }

        .contentBox{ 
            width: 85%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .titleContent{
                margin-top: 5px;
                font-size: 0.28rem;
                color: #6c6c77;
            }
        }
        .serviceBox{
          width: 100%;
        }
      }
      .questionBox{
        flex-flow: column;
        padding: 0 10px;
        box-sizing: border-box;
        
      }
      .box{
        display: flex;
        justify-content: space-between;
        overflow-y: hidden;
        
        .serviceData{
          width: 23%;
          margin: 5%;

          img{
            width: 100%;
            border-radius: 10px;
            border: 3px solid #36394e;
            box-sizing: border-box;
            margin-bottom: 0.2rem;
          }

          div{
            color: #6c6c77;
            font-size: 0.24rem;
            white-space:nowrap;
            margin-top: 0.1rem;
          }

          a{
            display: block;
            text-align: center;
            color: #daab60;
            border: 1px solid #c39853;
            border-radius: 21px;
            padding: 0.1rem 0.1rem;
            box-sizing: border-box;
            margin-top: 0.2rem;
          }

          .connection{
            margin: 0.2rem 0;
            border: 1px solid #c39853;
            border-radius: 5px;
            padding: 0.1rem;
            box-sizing: border-box;
            text-align: center;

            div{
              color: #daab60;
            }
            div:last-child{
              margin-top: 0.2rem;
            }
          }
        }
        .questionData{
          width: 100%;
          margin: 5% 0 0 0;
          border: 1px solid #36394e;
          padding: 10px;
          box-sizing: border-box;

          .questionDataContent{
            display: flex;
            align-items: baseline;
            justify-content: space-between;

            div{
              white-space:initial;
              line-height: 18px;
              margin: 0;
            }
            .questionNumber{
              width: 18px;
              height: 18px;
              border-radius: 18px;
              background-color: #6c6c77;
              color: #000;
              text-align: center;
            }
            .questionContent{
              width: 94%;

            }
          }
        }
      }
    }

    .box {
      height: auto;
      width: 100%;
      border-radius: 20px;
      background-color: #1b1b26;
      font-size: 0.24rem;
      color: #6c6c77;
      
    }
    .draw-enter-active,
    .draw-leave-active {
      transition: all 1s ease;
    }
    .draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
      height: 0;
    }
  }

  .left-arrow {
    display: inline-block;
    position: relative;
    width: 14px;
    height: 14px;
    transition: transform .3s;
  }

  .left-arrow::after {
    display: inline-block;
    content: " ";
    height: 14px;
    width: 14px;
    border-width: 2px 2px 0 0;
    border-color: #23affa;
    border-style: solid;
    border-radius: 3px;
    transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
  }
  .active {
    transform-origin: center;
    transform: rotate(-90deg);
    transition: transform .3s;
}
}

.messages {
  padding: 0 rem(40-$back-icon-padding);
  height: calc(100% - #{rem(101)});
  overflow-y: auto;
}

.message {
  border-radius: rem(15);
  padding: rem(38) rem(22);
  padding-bottom: rem(44);
  margin-top: rem(20);
  box-sizing: border-box;
  background-color: $bg-dark;

  &:active {
    filter: brightness(1.4);
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: rem(24);
    .title {
      display: flex;
      align-items: center;

      .read {
        width: rem(12);
        height: rem(12);
        margin-right: rem(11);
        background-color: #ffa200;
        border-radius: rem(30);
      }
      .name {
        font-size: rem(29);
        color: $white;
      }
    }
    .icon {
      width: rem(15);
      height: rem(26);
      background-image: url("~@/assets/images/icons/back.png");
      background-position: center;
      background-size: cover;
      transform: rotate(180deg);
    }
  }
  .time {
    font-size: rem(24);
    color: $gray;
  }
}
</style>
