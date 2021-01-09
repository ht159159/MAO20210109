<template>
  <div class="main">
    <div class="stickyTop">
      <div class="swiper-container banners" id="Banner">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            data-hash="slide1"
            v-for="(b, i) in banner"
            :key="`${b.link}${i}`"
            @click.prevent="pageChange(b.link)"
          >
            <img :src="b.imageUrl" />
          </div>
          <div v-if="banner.length===0" class="swiper-loading">
            <div class="loading"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="announcement" @click="showMarqueeDetail">
        <div class="img">
          <img src="~@/assets/images/icons/announcement.png" alt />
        </div>
        <div class="text" ref="marquee">{{ marquee.currentMessage }}</div>
      </div>
    </div>

    <div class="games_area" @scroll="game_add($event)">
      <div class="games_area_box" v-for="item in gameData" @click.prevent="playGame(item.gameId, item.gameCode, item.gameName)">
        <!-- <div class="game_title">
          {{item.gameName}}
          <div></div>
      </div>  -->
      <!-- <img class="testClass" :src="'../assets/images/game/test_1.jpg'" alt /> -->
        <div class="game_img" :style="{ 'background': 'url(' + imgUrl + item.gameImg +') no-repeat center center', 'background-size': '100% 100%', 'margin': '0 auto', 'background-size' : 'contain'}"></div>
        <!-- <div class="game_img" :style="{ 'background': 'url(' + imgUrl + item.gameImg +') no-repeat center center', 'background-size': '100% 100%', 'margin': '0 auto', 'background-size' : 'contain'}"></div> -->
        
        <!-- <img :src=item.imgUrl alt=""> -->
      </div>
      <!-- <div
        class="game"
        :class="{ unfold: game.open }"
        v-for="(game, index) in gameLists"
        :key="game.typeImg"
      >
        <div class="full" @click.prevent="OpenHandler(index)"></div>
        <div class="bg">
          <img
            :src="
              game.open
                ? require('@/assets/images/game/' +
                    game.typeImg +
                    '/bg-unfold.png')
                : require('@/assets/images/game/' +
                    game.typeImg +
                    '/bg.png')
            "
          />
        </div>
        <div class="content">
          <div class="icon">
            <img
              :src="
                game.open
                  ? require('@/assets/images/game/' +
                      game.typeImg +
                      '/icon-unfold.png')
                  : require('@/assets/images/game/' +
                      game.typeImg +
                      '/icon.png')
              "
            />
          </div>
          <div class="text">
            <div class="title">
              <div class="name">{{ game.name }}</div>
              <div class="subname">{{ game.englishName }}</div>
            </div>
            <div class="tags">
              <div class="tag"></div>
              <div class="name" v-for="tag in game.tagList.slice(0, 3)" :key="tag">{{ tag }}</div>
              <div class="name" v-if="game.tagList.length > 3">......</div>
            </div>
          </div>
          <div class="swiper-games" :class="'swiper-games-' + game.typeId">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="model in game.gameModel" :key="model.gameName">
                <img
                  :src="`${imgUrl}${localUrl}${model.gameImg}`"
                  alt
                  @click.prevent="
                    playGame(
                      model.gameId,
                      model.gameCode,
                      model.gameName,
                      model.isChildGame
                    )
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="btn-unfold" @click.prevent="OpenHandler(index)"></div>
      </div> -->
      
    </div>
    <transition name="pop">
      <div class="marquee-detail" v-show="marquee.show">
        <header-cmp :title="$t('Marquee_Message')">
          <template #back>
            <a href="#" class="back" @click.prevent="marquee.show = false">
              <img src="~@/assets/images/icons/back.png" />
            </a>
          </template>
        </header-cmp>
        <div class="top_area">
          <a
            href="#"
            class="toggle_btn left"
            :class="{ active: marquee.detailPage === 3 }"
            @click.prevent="marquee.detailPage = 3"
          >{{ $t("Maintain") }}</a>
          <a
            href="#"
            class="toggle_btn right"
            :class="{ active: marquee.detailPage === 4 }"
            @click.prevent="marquee.detailPage = 4"
          >{{ $t("Pay") }}</a>
        </div>
        <div class="marquees">
          <div class="marquee" v-for="m in marquee.shownDetail" :key="m.id">
            <div v-if="m.type===marquee.detailPage">
              <div class="date">
                <div class="day">{{ m.beginTime | marqueeDate(1) }}</div>
                <div class="other">{{ m.beginTime | marqueeDate }}</div>
                <div class="space"></div>
                <div class="triangle"></div>
              </div>
              <div class="content">{{ m.noticeContent }}</div>
            </div>
          </div>
          <div class="noData" v-show="marquee.shownDetail.length==0">{{ $t("NoData") }}</div>
        </div>
      </div>
    </transition>
    <modal-alert
      v-if="showAlert"
      imgName="alert"
      @close="showAlert = ''"
      :text="$t('Please_Login')"
    >
      <template #btn>
        <div class="alert-box-cancel alert-box-btn" @click="showAlert = false">{{ $t("Cancel") }}</div>
        <div
          class="alert-box-cancel alert-box-btn alert-box-btn-bright"
          @click="toPage()"
        >{{ $t("Confirm") }}</div>
      </template>
    </modal-alert>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import {
  apiGetBanner,
  apiMarqueeScrollContent,
  apiGameTypeList,
  apiShowScrollMessage,
  apiStartGame,
  apiGetGames
} from "@/api";
export default {
  name: "mainPage",
  data() {
    return {
      sportOpen: true,
      isFinacialcenter: false,
      banner: [],
      gameLists: [],
      marquee: {
        currentMessage: "",
        show: false,
        detailPage: 0,
        detail: [],
        shownDetail: []
      },
      imgUrl: process.env.VUE_APP_IMG_BASE_URL + "child/53/",
      showAlert: false,
      aud: "",
      timeout: null,
      gameData: [],
      getGamesData:{
        typeId: 6,
        pageIndex: 1,
        pageSize: 10
      },
      moreGames: false,
      totalPages: '',
    };
  },
  watch: {
    "marquee.detailPage"(val) {
      this.marquee.shownDetail = [];
      if (this.marquee.detail == 0) return;
      let i = 0;
      this.marquee.detail.forEach(data => {
        if (data.type == val) {
          this.$set(this.marquee.shownDetail, i, data);
          i++;
        }
      });
    }
  },
  created() {},
  mounted() {
    // 取得跑馬燈資訊 之後MarqueeScroll重複顯示
    let params = {
      lang: this.$storage.local.get("lang").tag
    };
    apiMarqueeScrollContent(params).then(res => {
      if (res.result === 1 && res.data.length) {
        this.$nextTick(() => {
          this.MarqueeScroll(res.data, 0);
        });
      }
    });
    this.createBannerSwiper();
    // this.getGameTypeList();
    this.getGames();
  },
  computed: {
    localUrl() {
      return `${this.$storage.local.get("lang").tag}/`;
    }
  },
  methods: {
    OpenHandler(i) {
      this.gameLists[i].open = this.gameLists[i].open ? false : true;
      new Swiper(".swiper-games-" + this.gameLists[i].typeId, {
        slidesPerView: 2.5,
        spaceBetween: 5
      });
    },
    // 打開財務中心
    openFinacialCenter(finacial) {
      this.isFinacialcenter = finacial;
    },
    // 跑馬燈重複跑
    MarqueeScroll(data = [], i) {
      this.marquee.currentMessage = data[i];
      let dur =
        this.marquee.currentMessage.length * 150 > 5000
          ? this.marquee.currentMessage.length * 150
          : 5000;
      let marquee = this.$refs.marquee;
      marquee.style.transitionDuration = `0s`;
      marquee.style.left = "";
      setTimeout(() => {
        marquee.style.transitionDuration = `${dur / 1000}s`;
        marquee.style.left = `${-dur / 13}px`;
      }, 10);
      this.timeout = setTimeout(() => {
        this.MarqueeScroll(data, (i + 1) % data.length);
      }, dur + 100);
    },
    // 取得banner資訊
    async createBannerSwiper() {
      let bannerRes = await apiGetBanner({ projectType: 2 });
      this.banner = bannerRes.data.banners;
      this.$nextTick(() => {
        new Swiper("#Banner", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            bulletClass: "bullet",
            bulletActiveClass: "active-bullet"
          },
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          scrollbar: ".swiper-scrollbar",
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          }
        });
      });
    },
    // 取得主遊戲列表
    // getGameTypeList() {
    //   apiGameTypeList().then(res => {
    //     let games = [];
    //     for (let i = 0; i < res.data.length; i++) {
    //       res.data[i].open = false;
    //       for (let j = 0; j < res.data[i].gameModel.length; j++) {
    //         const element = res.data[i].gameModel[j];
    //         games.push({ id: element.gameId, name: element.gameName });
    //       }
    //     }
    //     this.$storage.local.set("games", games);
    //     this.gameLists = res.data;
    //   });
    // },
    getGames() {
      apiGetGames(this.getGamesData).then(res => {
        this.gameData = res.data.list
        this.totalPages = Math.ceil(res.data.count/10)
      })
    },
    showMarqueeDetail() {
      let params = {
        lang: this.$storage.local.get("lang").tag
      };
      apiShowScrollMessage(params).then(res => {
        this.marquee.show = true;
        this.marquee.detail = res.data;
        this.marquee.detailPage = 3;
      });
    },
    // 玩遊戲或是轉到子遊戲頁面
    playGame(gameId, childId, title) {
      // 判定遊客
      if (this.$storage.local.get("isGuest")) {
        this.showAlert = true;
        return;
      }
      // 如果有子遊戲 轉頁面
      // if (isChild > 0) {
      //   this.$toast('not open...')
      //   //this.$router.push({ name: "childGame",query:{ title:title,gameId:gameId } });

      //   return;
      // }
      // 開始遊戲
      let params = {
        gameId,
        childId,
        title
      };
      apiStartGame(params).then(res => {
        if (res.result == 1) {
          //app处理
          this.$APP.autoHandel(res.data, gameId, title);
          window.location = res.data;
        }
      })
    },
    pageChange(link) {
      location.href = link;
    },
    toPage() {
      this.$storage.local.remove("token");
      this.$router.push({ name: "login" });
    },
    // 無限下滑加載
    game_add (e) {
      // let wrapheight = document.querySelector('.games_area').clientHeight// 容器的高度
      // let wrapheight1 = document.querySelector('.games_area').scrollHeight// 容器的高度
      // let scrolltop = document.querySelector('.games_area').scrollTop// 滚动条的scrolltop

      let wrapheight = e.target.clientHeight// 容器的高度
      let wrapheight1 = e.target.scrollHeight// 容器的高度
      let scrolltop = e.target.scrollTop// 滚动条的scrolltop

      // let scrollheight = document.querySelector('.AllOrder').prop('scrollHeight')// 内容的高度

      if (wrapheight1 - scrolltop <= wrapheight + 10) { // 判斷是否滑到底
        this.getGamesData.pageIndex++
        this.moreGames = true
        if (this.totalPages !== '') { // 判斷頁數是超出總頁數
          if (this.getGamesData.pageIndex > this.totalPages) {
            this.moreGames = false
            return
          }
        }

        apiGetGames(this.getGamesData).then(res => {
          // this.gameData = res.data.list
          if (res.data.list < 1) {
            this.getGamesData.pageIndex--
            return
          }

          for (let i = 0; i < res.data.list.length; i++) {
            this.gameData.push(res.data.list[i])
          }

        })
        
      }
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  filters: {
    marqueeDate(val, isDay) {
      // val = new Date(val);
      // if (isDay) {
      //   let day = val.getDate() > 10 ? val.getDate() : "0" + val.getDate();
      //   return day;
      // }
      // let year = val.getFullYear();
      // let month = val.getMonth() + 1;
      // return year + "-" + (month > 10 ? "" : "0") + month;
      return val;
    }
  }
};
</script>
<style lang="scss">
.main {
  padding-bottom: rem(121);
  height: 100%;
}

.stickyTop {
  position: sticky;
  top: 0;
  z-index: 99;
  background: #20212f;
}
.banners {
  // height: rem(360);
  .swiper-slide {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .swiper-pagination {
    width: rem(159);
    left: initial !important;
    right: rem(22) !important;
    display: flex;
    justify-content: space-between;

    .bullet {
      width: rem(22);
      height: rem(22);
      border-radius: rem(22) / 2;
      background-color: $blue;
      opacity: 0.3;
      transition: 0.3s;
    }
    .active-bullet {
      width: rem(62);
      opacity: 1;
    }
  }
}
.swiper-loading {
  width: 100%;
  height: rem(350);
  display: flex;
  align-items: center;
  .loading {
    margin: 0 auto;
    border: 3px solid rgb(24, 27, 24);
    border-right: 3px solid #818181;
    // border-bottom: 3px solid #d6d6d6;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    animation: loading 1s infinite linear;
  }
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.announcement {
  margin: 0 rem(20);
  padding: rem(20) 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: rem(20);
  .img {
    width: rem(41);
    padding-right: rem(16);
    background-color: $bg-primary;
    z-index: 99;
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }
  .text {
    position: absolute;
    left: 100%;
    font-size: rem(30);
    color: $gray;
    transition-timing-function: linear;
    white-space: nowrap;
  }
}
.games_area {
  height: calc(100% - #{rem(380)});
  padding: rem(17) rem(20);
  padding-bottom: rem(400);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-flow: wrap;
  // -webkit-overflow-scrolling: touch;
  position: relative;
 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .game {
    position: relative;
    margin-bottom: rem(35);
    height: rem(186);
    transition: 0.3s;
    -webkit-transform: translateZ(0px);
    &.unfold {
      height: rem(376);
      z-index: 1;
      .full {
        display: none;
      }
      .bg {
        width: 100%;
      }
      .btn-unfold {
        z-index: 2;
        position: absolute;
        display: block;
        top: rem(26);
        right: rem(20);
        width: rem(42);
        height: rem(42);
        background-image: url("~@/assets/images/game/unfold.png");
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 1;
      }
      .content {
        padding-top: rem(22);
        align-items: center;
      }
      .icon {
        margin-left: rem(47);
        margin-right: rem(18);
        padding-top: 0;
        width: rem(77);
        height: rem(77);
      }
      .title {
        padding-top: 0;
        margin-bottom: 0;
        .name {
          font-size: rem(29);
          margin-bottom: rem(8);
          white-space: nowrap;
        }
        .subname {
          font-size: rem(19);
          color: $white;
        }
      }
      .tags {
        display: none;
      }
      .swiper-games {
        height: rem(203);
      }
    }
    .full {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .bg {
      z-index: -1;
      position: absolute;
      right: 0;
      width: calc(100% * 675 / 710);
      height: 100%;
      border-radius: rem(20);
      overflow: hidden;
    }
    .btn-unfold {
      transition: 0.3s;
      opacity: 0;
    }
    .content {
      display: flex;
      align-items: center;
    }
    .icon {
      transition: 0.8s;
      padding-top: rem(12);
      width: rem(165);
      height: rem(161);
      margin-right: rem(35);
      img {
        display: block;
      }
    }
    .title {
      transition: 0.8s;
      padding-top: rem(17);
      margin-bottom: rem(40);
      .name {
        font-size: rem(40);
        margin-bottom: rem(6);
        color: $white;
        white-space: nowrap;
      }
      .subname {
        font-size: rem(28);
        color: $light-gray;
      }
    }
    .tags {
      display: flex;
      align-items: center;
      position: absolute;
      .tagGroup {
        display: flex;
        align-items: center;
      }
      .tag {
        background-image: url("~@/assets/images/icons/tag.png");
        background-size: cover;
        width: rem(24);
        height: rem(24);
        margin-right: rem(13);
      }
      .name {
        font-size: rem(22);
        color: $light-blue;
        margin-right: rem(20);
        white-space: nowrap;
      }
    }
    .swiper-games {
      position: absolute;
      bottom: rem(32);
      width: 100%;
      font-size: 0;
      height: 0;
      overflow: hidden;
      transition: height 0.2s;
      .swiper-wrapper {
        margin-right: rem(60);
        width: 100%;
      }
      .swiper-slide {
        img {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .games_area_box{
    width: 29%;
    margin: 0.5% 2%;
    height: rem(255);
    font-size: rem(25);
    padding: 3px;
    box-sizing: border-box;
    position: relative;
    // background-image: url('../assets/images/game/games_area_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    
    .game_title{
      width: 95%;
      padding: rem(14.5) rem(5);
      box-sizing: border-box;
      // background-image: url('../assets/images/game/games_title_bg.png');
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      left: calc(2%);
      // border-radius: 50%;
      // top: 0%;
      bottom: -9%;
      // margin: 0 auto;
      text-align: center;
      border-radius: 5px;
      // border: 2px solid #ffd37a;
      color: #fff;
    }

    img {
      width: 100%;
      height: auto;

    }
    .game_img{
      width: 100%;
      // border: 2px solid #ffd37a;
      box-sizing: border-box;
      width: 100%;
      height: -webkit-fill-available;
      border-radius: 3px;
    }
  }
}
.marquee-detail {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $bg-primary;
  z-index: 99999;
  .top_area {
    margin-top: rem(21);
    font-size: rem(32);
    display: flex;
    width: 100%;
    text-align: center;
    border: rem(2) solid #343852;
    border-right: none;
    border-left: none;
    .toggle_btn {
      transition: color 0s;
      transition: border 0.8s;
      width: 50%;
      box-sizing: border-box;
      background-color: #171723;
      padding: rem(24) 0;
      color: #4e5164;
      font-weight: bold;
      &.active {
        color: #fff;
        position: relative;
        overflow: hidden;
        &::before {
          content: "";
          width: rem(180);
          height: rem(120);
          background-color: rgba(#7777a5, 0.4);
          border-radius: 100%;
          position: absolute;
          top: 95%;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 rem(-5) rem(80) #7777a5;
        }
      }
    }
  }
  .marquees {
    padding: rem(15) rem(20);
    box-sizing: border-box;
    .marquee {
      background-color: $bg-dark;
      border-radius: rem(5);
      overflow: hidden;
      margin-bottom: rem(20);
      .date {
        width: 60%;
        display: flex;
        align-items: flex-end;
        background-color: #5f5f9b;
        .day {
          padding: rem(7) rem(10);
          font-size: rem(42);
          background-color: #9292b6;
          color: #000;
        }
        .other {
          font-size: rem(24);
          padding-bottom: rem(7);
          padding-left: rem(6);
        }
        .space {
          flex-grow: 1;
        }
        .triangle {
          float: right;
          border-color: transparent $bg-dark $bg-dark transparent;
          border-style: solid;
          border-width: rem(28);
          height: 100%;
        }
      }
      .content {
        font-size: rem(32);
        padding: rem(29) rem(22);
      }
    }
  }
}
</style>
