<template>
  <div>
    <div class="pt">
      <header-cmp title="代理中心 Trung tâm đại lý" />
      <div class="top">
        <input type="text" placeholder="请输入昵称" v-model="name.teamName">
        <div class="btn btn-round btn-blue" @click="search">搜索</div>
        <div class="btn btn-round btn-coffee" @click="create">二維碼生成</div>
      </div>

      <div class="bottom">
        <div class="box" v-for="i in teamInfo" :key="i.id">
         
            <div class="box-top">
              <span class="name" @click="revise(i.id)">{{i.name}}</span> <span class="revise">(点击修改)</span>
            </div>
            <div class="advise">
            <div class="button clickBtn" @click="shareUrl(i.id)">分享</div>
            <div class="button clickBtn" @click="reset(i.id)">二维码重制</div>
            <div class="button clickBtn" @click="getMember(i.id, i.name)">团队列表</div>
          </div>
          <div class="info">
            <div>{{`团队人数:`+i.number}}</div>
            <div>{{`排线人数:`+i.maxNumber}}</div>
            <div>{{`最新加入:`+i.lastMemId}}</div>
          </div>
        </div>
      </div>
    </div>
 
  </div>
</template>
<script>
export default {
    data(){
        return{
            name:{
                teamName:""
            },
            teamInfo:[
                {name:456}
            ]
        }
    },
    methods:{
        search(){

        },
        create(){

        },
        revise(){

        },
        shareUrl(){

        },
        reset(){

        },
        getMember(){

        }
    }
}
</script>


<style lang="scss" scoped>

.pt {
  .top {
    position: sticky;
    top: rem(30);
    margin-top: rem(24);
    width: 100%;
    text-align: center;
    height: rem(124);
    background-color: #1c1b29;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    input {
      display: block;
      width: rem(249);
      height: rem(65);
      padding: 0 rem(20);
      border: 1px solid #3a3d55;
      margin: 0 rem(13);
      font-size: 0.3rem;
      background-color: #13121c;
      box-sizing: border-box;
    }
    input::placeholder {
      color: #4e5164;
    }
    .btn {
      font-size: 0.27rem;
      text-align: center;
      line-height: rem(65);
      margin-right: rem(9);
      color: #ffffff;
      height: 50%;
      padding: 0;
    }
    // .button:nth-child(3) {
    //   background: linear-gradient(
    //     to right,
    //     #d1b16c 0%,
    //     #d1b16c 0.4%,
    //     #bd9e5c 100%
    //   );
    // }
  }
  .bottom {
    width: 95%;
    margin: rem(20) auto 0 auto;
    font-size: 0.3rem;
    z-index: 1;
    .box {
      width: 100%;
      height: rem(143);
      margin-bottom: 0.2rem;
      border: 1px solid #3b4378;
      box-shadow: 0 rem(5) 5px 2px #1c1e2a;
      border-radius: 0 0 5px 5px;
      box-sizing: border-box;
      &-top{
          background: #171723;
          height: rem(76);
          line-height: rem(76);
          padding: 0 rem(20);
          .name{
              color: #d29f05;
          }
          }
  }
    }
    
}
</style>


