<template>
  <section id="commission" ref="scroll" @scroll="$scrollLoad(loadMore,$event)" >
      <div v-if="commissionData.length > 0">
      <div class="box container" v-for="data in commissionData" :key="data.id">
        <div class="flex">
          <div class="title">
            {{ $t("Periods") }}:
            <p>{{ data.period }}</p>
          </div>
          <div class="title">
            {{ $t("Platform") }}:
            <p>{{ data.gameId }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="title">
            {{ $t("TotalBetAmount") }}:
            <p class="result">{{ data.effecBet | $currency }}</p>
          </div>
          <div class="title">
            {{ $t("Result") }}:
            <p class="result">{{ data.winOrLose | $currency }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="title">
            {{ $t("Commision") }}:
            <p
              class="payStatus"
              :class="{ result: data.payStatus == '成功' }"
            >
              {{ data.rebate | $currency }}
            </p>
          </div>
          <div class="title">
            {{ $t("Status") }}:
            <p
              class="payStatus"
              :class="{ result: data.payStatus == '成功' }"
            >
              {{ data.payStatus }}
            </p>
          </div>
        </div>
      </div>
      </div>
    <div class="noData" v-else>{{ $t("NoData") }}</div>
  </section>
</template>
<script>
import { apiGetRebates } from "@/api";
export default {
  data() {
    return {
      commissionData: [],
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0
    };
  },
  mounted() {
    this.getComssissionRecord();
    
  },
  methods: {
    getComssissionRecord() {
      let params = {
        startDate: this.startDate,
        endDate: this.endDate,
        gameIds: this.gameIds,
        pageIndex: 1,
        pageSize: 10
      };
      apiGetRebates(params).then(res => {
        this.commissionData = res.data.rebateModels;
        this.totalCount = res.data.totalCount;
      });
    },
    loadBottom() {
      this.pageIndex++;
      if(this.commissionData.length==this.totalCount) return
      let params = {
        startDate: this.startDate,
        endDate: this.endDate,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        
        gameIds: this.gameIds,
      };
      apiGetRebates(params).then(res => {
        let list = this.commissionData;
        this.commissionData = list.concat(res.data.rebateModels);
      });
    }
  },
  computed: {
    startDate() {
      return this.$store.state.filterDate.startDate;
    },
    endDate() {
      return this.$store.state.filterDate.endDate;
    },
    gameIds() {
      return this.$store.state.filterDate.gameIds;
    }
  }
};
</script>

<style lang="scss" scoped>
$green: #01bc06;
#commission {
  
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .box {
    height: rem(403);
    padding-top: rem(20);
    .flex {
      justify-content: space-between;
      .title {
        width: 40%;
        color: #6c6c77;
        text-align: center;
        font-size: rem(30);
        margin-top: rem(20);
        p {
          margin-top: rem(20);
        }
        .payStatus {
          font-size: rem(30);
          color: #d0d1d4;
          &.result {
            color: $green;
          }
        }
      }
    }
    .flex:nth-child(3) {
      margin-top: rem(10);
    }
  }
}
</style>
