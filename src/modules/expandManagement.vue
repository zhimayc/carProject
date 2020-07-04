  <template>
  <div class="expandManagement" scoped>
    <Header></Header>
    <div class="container expandManagement-container">
      <div class="expandManagement-info-wrap">
        <span>推广员ID:{{expandManagementInfo.extensioCode}}</span>
        <span>推广区域：{{expandManagementInfo.area}}</span>
        <span>今日返佣点数：{{expandManagementInfo.rebate}}</span>
        <span>名下优惠券:{{expandManagementInfo.bindCouponNumber}}</span>
        <span>已激活优惠券：{{expandManagementInfo.activeCouponNumber}}</span>
        <span>已使用优惠券：{{expandManagementInfo.usedCouponNumber}}</span>
        <span>累计返佣：{{expandManagementInfo.rebateMoneyTotal}}</span>
      </div>
      <div class="list-wrap">
        <div class="list-item-wrap">
          <div class="t-list-item" v-for="(item,index) in rebatelist" :key="index">
            <!-- WMS系统升级 -->
            <div class="t-item-detail">
              <span class="t-detail-msg">{{item.currDate}}</span>
              <div class="t-item-status">
                <span>当日返点{{item.rebate}}%</span>
              </div>
            </div>
            <!-- 下面一行小字 -->
            <div class="t-item-msg">
              <div class="usedCouponNumber">
                <span>当日用户使用券:</span>
                <span class="t-name">{{item.usedCouponNumber}}</span>
              </div>
              <div>
                <span>当日返点收益:</span>
                <span class="t-great-date">{{item.rebateMoney}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
export default {
  name: "expandManagement",
  path: "/expandManagement",
  components: {
    Header
  },
  data() {
    return {
      expandManagementInfo: {
      },
      rebatelist: [
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "推广员管理");
    this.getExpandInfo();
    this.getExpandList();
  },
  beforeCreate() {},
  computed: {},
  methods: {
    getExpandInfo(){
      this.$axios.post("/agency/info").then(response => {
        if (response.data.retCode == "0") {
          this.expandManagementInfo = response.data.data;
        }
      });
    },
    getExpandList(){
      this.$axios.post("/extensio/rebate/list").then(response => {
        if (response.data.retCode == "0") {
          this.rebatelist = response.data.data;
        }
      });
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.expandManagement {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  .expandManagement-info-wrap {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin: 5px auto;
    border: 1px solid #dddddd;
    padding: 10px 10px 10px 15px;
    border-radius: 15px;
    span {
      padding: 5px 0;
    }
  }
  // 列表
  .list-wrap {
    margin-top: 15px;
    .t-list-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #f5f5f5;
      padding: 10px 15px;
      margin-bottom: 8px;
      border-radius: 10px;
      .t-item-detail {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .t-detail-msg {
          width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          color: #212b36;
          font-weight: bold;
        }
        .t-item-status {
          color: red;
          font-size: 14px;
          text-align: right;
        }
      }
      // 下面一行小字
      .t-item-msg {
        display: flex;
        justify-content: space-between;
        padding-top:10px;
        font-size: 14px;
        // .usedCouponNumber{
        //   margin-right:15px;
        // }
      }
    }
  }
}
</style>
