<template>
  <div class="homePage">
    <div class="homepage-top">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imageUrl" alt />
        </mt-swipe-item>
      </mt-swipe>
      <ul class="container-info-wrap">
        <li>
          <span>{{baseUserInfo.rechargeMoney}}</span>
          <span>已充值金额</span>
        </li>
        <li>
          <span>{{baseUserInfo.reducedPrice}}</span>
          <span>已优惠金额</span>
        </li>
        <li>
          <span>{{baseUserInfo.remainingCoupon}}</span>
          <span>剩余优惠券</span>
        </li>
      </ul>
      <div class="container-notice-wrap">
        <img src="../assets/images/notice.png" alt />
        <span>{{notice}}</span>
      </div>
      <ul class="container-entry-wrap">
        <li v-for="(item,index) in entryList" :key="index" @click="toItemDetail(item)">
          <img :src="item.imgSrc" alt />
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="homePage-container">
      <div class="container-historyList-wrap">
        <div class="title-info">
          <span></span>
          <p>历史充值记录</p>
        </div>
        <ul class="historyList-wrap">
          <li class="historyList" v-for="(item,index) in rechargeList" :key="index">
            <span>{{item.account}}</span>
            <span>{{item.createdDate}}</span>
            <span>{{item.money}}元</span>
            <span>{{item.status=="1"?"充值中":(item.status=="2"?"已到账":(item.status=="3"?"已提交":"已退款"))}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div style="height: 60px"></div>

  </div>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      baseUserInfo: {},
      notice: "芝麻油惠招商火热进行中...",
      entryList: [
        {
          name: "油卡充值",
          imgSrc: require("../assets/images/home-oli.png"),
          path: "/oilCardRecharge"
        },
        {
          name: "话费充值",
          imgSrc: require("../assets/images/home-telBill.png"),
          // imgSrc: require("../assets/images/telephoneBill.png"),
          path: "/telephoneBillRecharge"
        },
        {
          name: "注意事项",
          imgSrc: require("../assets/images/home-notice.png"),
          path: "/noticeInfo"
        }
      ],
      rechargeList: [],
      bannerList:[]
    };
  },
  mounted() {
    this.getBaseUserInfo();
    this.getRechargeList();
    this.getBannerList();
  },
  methods: {
    // 获取首页用户基础信息
    getBaseUserInfo() {
      this.$axios.post("base/info/user").then(response => {
        if (response.data.retCode == "0") {
          this.baseUserInfo = response.data.data;
        }
        console.log(this.baseUserInfo, "66666");
      });
    },
    // 获取首页充值记录（全部）
    getRechargeList() {
      this.$axios.post("/base/record/list",{}).then(response => {
        if (response.data.retCode == "0") {
          this.rechargeList = response.data.data;
        }
        console.log(this.rechargeList, "999999");
      });
    },
    // 获取首页轮播图
    getBannerList() {
      this.$axios.post("/base/banner/list", { type: 1}).then(response => {
        if (response.data.retCode == "0") {
          this.bannerList = response.data.data;
        }
        console.log( response, "88888");
      });
    },
    toItemDetail(item) {
      // console.log(item,"9999")
      this.$router.push(item.path);
    }
  }
};
</script>

<style lang='less' scoped>
.homePage {
  width: 100%;
  /*height: 100%;*/
  overflow: auto;
  .homepage-top{
    position: sticky;
    top:0;
    z-index:999;
  }
  .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 190px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .container-info-wrap {
    position: relative;
    top: -30px;
    width: 92%;
    margin: 0 4%;
    height: 70px;
    background: #ffffff;
    z-index: 999;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);
    border-radius: 10px;
    display: flex;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span:last-child {
        color: #a4a4a4;
      }
    }
  }
  .container-notice-wrap {
    width: 92%;
    margin: 0 4%;
    height: 45px;
    padding-left: 10px;
    position: relative;
    top: -15px;
    background: #ffffff;
    z-index: 999;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);
    border-radius: 10px;
    display: flex;
    align-items: center;
    img {
      height: 22px;
      width: 22px;
    }
    span {
      flex: 1;
      padding-left: 8px;
    }
  }
  .container-entry-wrap {
    display: flex;
    background: #ffffff;
    padding: 10px 0;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 45px;
        height: 45px;
      }
      span:last-child {
        color: #a4a4a4;
      }
      &:nth-child(1) img {
        width: 45px;
        margin: 7px;
      }
      &:nth-child(2) img {
        width: 45px;
        margin: 7px;
      }
      &:nth-child(3) img {
        height: 45px;
        margin: 7px;
      }
    }
  }
  .homePage-container {
    // background: #ffffff;
    /*height: 100%;*/
    @w: 75rem;
    /*overflow: auto;*/

  }
}
</style>
