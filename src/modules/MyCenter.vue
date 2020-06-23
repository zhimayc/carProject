<template>
  <div class="center">
    <div class="center-top">
      <div class="logo">
        <img :src="personInfo.image" alt />
      </div>
      <div class="personInfo-wrap">
        <span>{{personInfo.name}}</span>
        <div class="ticket">
          <span>优惠券：{{personInfo.remainingCoupon}}张</span>
          <span>(共{{personInfo.rechargeMoney}}元)</span>
        </div>
      </div>
    </div>

    <ul class="personEntry-wrap">
      <li v-for="(item,index) in personEntryList" :key="index" @click="toItemPage(item)">
        <div class="entry-item-wrap">
          <img :src="item.imgSrc" alt />
          <span>{{item.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "center",
  path: "/center",
  data() {
    return {
      personInfo: {},
      personEntryList: [
        {
          imgSrc: require("../assets/images/dealer.png"),
          name: "经销商登录",
          enterType: 1,
          path:'/distributorLogin'
        },
        {
          imgSrc: require("../assets/images/feedback.png"),
          name: "意见反馈",
          enterType: 2,
          path:'/feedback'
        },
        {
          imgSrc: require("../assets/images/FAQ.png"),
          name: "关于我们",
          enterType: 3,
          path:'/aboutUs'
        },
        {
          imgSrc: require("../assets/images/connect.png"),
          name: "联系客服",
          enterType: 4,
          path:'/connect'
        }
      ]
    };
  },
  mounted() {
    this.getPersonInfo();
  },
  beforeCreate() {},
  computed: {},
  methods: {
    getPersonInfo() {
        this.$axios.post("base/info/user").then(response => {
          if (response.data.retCode == "0") {
            this.personInfo = response.data.data;
          }
          console.log(this.personInfo, "66666");
          this.handlePersonEntryTitle(this.personInfo.type);
        });


    },
    handlePersonEntryTitle(type) {
      if (type == 1) {
        this.personEntryList[0].name = "经销商登录";
        this.personEntryList[0].path = "/distributorLogin";
        return;
      }
      if (type == 2) {
        this.personEntryList[0].name = "经销商管理";
        this.personEntryList[0].path = "/distributorManagement";
        return;
      }
      if (type == 3) {
        this.personEntryList[0].name = "代理员管理";
        this.personEntryList[0].path = "/agentManagement";
        return;
      }
      if (type == 4) {
        this.personEntryList[0].name = "推广员管理";
        this.personEntryList[0].path = "/expandManagement";
        return;
      }
    },
    toItemPage(item){
      this.$router.push(item.path)
    }
  }
};
</script>

<style lang='less'>
.center {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 55px;
  background: #ffffff;
  .center-top {
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    .logo {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #dddddd;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .personInfo-wrap {
      padding-left: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      .ticket {
        margin-top: 5px;
      }
    }
  }
  .personEntry-wrap {
    display: flex;
    flex-wrap: wrap;
    border-top: 5px solid #f5f5f5;
    padding: 15px;
    li {
      width: 50%;
      padding:3% 5%;
      .entry-item-wrap {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 90px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
