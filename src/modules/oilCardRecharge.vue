<template>
  <div class="oilCardRecharge" scoped>
    <Header></Header>
    <div style="height:190px;">
    <mt-swipe :auto="4000" style="height:190px;" >
      <mt-swipe-item v-for="(item,index) in bannerList" :key="index" style="height:190px;">
        <img :src="item.imageUrl" style="height:100%;width:100%" alt />
      </mt-swipe-item>
    </mt-swipe>
    </div>
    <div class="billRecharge-container">
      <ul class="oilCard-list-wrap">
        <li class="list-item"
            :class="{'money-item-active': activeCardIndex == index}"
            v-for="(item,index) in cardList"
            :key="index"
            @click="checkCard(item,index)">
          <div>
            <img src alt />
            <span >{{item.account}}</span>
          </div>

          <span>油卡{{index+1}}</span>
        </li>
      </ul>
      <div class="oilCard-bound-wrap" @click="toOilCardBound()">
        <span>油卡绑定&nbsp;+</span>
      </div>
      <ul class="money-wrap billRecharge-money-wrap">
        <li
          class="money-item"
          :class="{'money-item-active': activeMoneyIndex == index}"
          v-for="(item,index) in priceList"
          :key="index"
          @click="checkOilPrice(item,index)"
        >
          <span>{{item.price}}元</span>
          <span>优惠后：￥{{item.reducedPrice}}</span>
        </li>
      </ul>
      <div class="recharge-info-wrap">
        <span>可用券:{{ticketInfo.remainingCoupon}}张({{ticketInfo.money}}元)</span>
        <span>本次用券:{{ticketInfo.num}}</span>
        <span>抵扣{{ticketInfo.countMoney}}元</span>
      </div>
      <div class="recharge-btn-wrap">
        <button @click="payOilCard();">立即支付</button>
      </div>

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
            <span>{{item.status=="1"?"充值中":"已到账"}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
import { Indicator } from 'mint-ui';
import { Toast} from 'mint-ui';
export default {
  name: "oilCardRecharge",
  path: "/oilCardRecharge",
  components: {
    Header
  },
  data() {
    return {
      priceList: [
        {
          price: "100",
          reducedPrice: "92"
        },
        {
          price: "200",
          reducedPrice: "184"
        },
        {
          price: "300",
          reducedPrice: "276"
        },
        {
          price: "500",
          reducedPrice: "460"
        }
      ],
      rechargeList: [],
      cardList:[],
      ticketInfo: {
        remainingCoupon: 0,
        money: 0,
        num: 0,
        countMoney: 0
      },
      bannerList: [],
      checkCardCode:"",
      checkCardPrice:"",
      activeCardIndex:0,
      activeMoneyIndex:0
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "油卡充值");
    this.getBannerList();
    this.getRechargeList();
    this.getCardList();
    this.getCouponNumber();
    this.weixinInit();
    this.checkOilPrice(this.priceList[0],0);
  },
  beforeCreate() {},
  computed: {},
  methods: {
    //微信初始化
    weixinInit(){
      let config = {
        url: 'http://www.zhimayc.com/',
        nonceStr:"",
        signature:"",
        timestamp:"",
        appId:"",
        debug:"",
        jsApiList:[],
      };
      this.$axios.get("/token/initWeiXin").then(response => {
        if (response.data.retCode == "0") {
          let content = response.data.data;
          config.nonceStr = content.nonceStr;
          config.signature = content.sign;
          config.timestamp = content.timeStamp;
          config.appId = content.appId;
         // config.debug = true;
          config.jsApiList = [
            'chooseWXPay'
          ];
          console.info('error 验证失败', config);
          wx.config(config);
          wx.ready(() => {
            this.wx = wx;
          });
          wx.error(function (res) {
            console.info('error 验证失败', res);
          });
        }
      });
    },
    checkCard(item,index){
      console.log(item.cardCode);
      this.checkCardCode = item.cardCode;
      this.activeCardIndex=index;
    },
    //选择油卡充值金额
    checkOilPrice(item,index){
      console.log(item.price);
      this.activeMoneyIndex = index;
      this.checkCardPrice = item.price;
      var number = item.price/100;
      console.log(number,"122");
      console.log(this.ticketInfo.remainingCoupon);
      if(this.ticketInfo.remainingCoupon >= number){
        console.log("222");
        this.ticketInfo.num = number;
        this.ticketInfo.countMoney = number*8;
      }else{
        this.ticketInfo.num = this.ticketInfo.remainingCoupon;
        this.ticketInfo.countMoney = this.ticketInfo.remainingCoupon*8;
      }
    },
    // 获取油卡充值轮播图
    getBannerList() {
      this.$axios.post("/base/banner/list", { type: 3 }).then(response => {
        if (response.data.retCode == "0") {
          this.bannerList = response.data.data;
        }
        console.log(response, "666666666666666666666666");
      });
    },
    // 获取油卡充值记录（全部）
    getRechargeList() {
      this.$axios.post("/base/record/list", { type: 1 }).then(response => {
        if (response.data.retCode == "0") {
          this.rechargeList = response.data.data;
        }
        console.log(this.rechargeList, "999999");
      });
    },
    //獲取綁卡list
    getCardList(){
      this.$axios.post("/base/oil/card/list").then(response => {
        if (response.data.retCode == "0") {
          this.cardList = response.data.data;
          if(this.cardList != null){
            this.checkCard(this.cardList[0],0);
          }
        }
        console.log(this.cardList, "999999");
      });
    },
    //获取用户的剩余的优惠券
    getCouponNumber(){
      this.$axios.post("/base/info/user").then(response => {
        if (response.data.retCode == "0") {
          this.ticketInfo = response.data.data;
          this.ticketInfo.money = this.ticketInfo.remainingCoupon * 8;
          this.ticketInfo.num = 0;
          this.ticketInfo.countMoney = 0;
        }
        console.log(this.ticketInfo, "66666");
      });
    },
    // 绑定油卡
    toOilCardBound(){
      this.$router.push('/oilCardBound')
    },
    //支付油卡
    payOilCard(){
      Indicator.open();
      let oilCardInfo = {cardCode:this.checkCardCode,money:this.checkCardPrice};
      this.$axios.post("/base/recharg/oil/card",oilCardInfo).then(response => {
        if (response.data.retCode == "0") {
          let orderNumber = response.data.data.orderNumber;
          try {
            this.wx.chooseWXPay({
              timestamp: response.data.data.timeStamp, // 支付签名时间戳，注意微信js sdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: response.data.data.nonceStr, // 支付签名随机串，不长于 32 位
              package: 'prepay_id=' + response.data.data.prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: response.data.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: response.data.data.sign, // 支付签名
              success: function () {
                this.$router.push("/oilCardRecharge");
                //this.doWxPayCallback(orderNumber);
              },
              fail: function () {
               // this.doWxPayCallback(orderNumber);
              },
              cancel: function () {
                console.info('取消支付，如需支付请继续。');
              }
            });
          } catch (e) {
            console.info('订单支付异常, 请稍后重试。');
          }
        }else{
          Toast(response.data.message);
        }
        //console.log(this.cardList, "999999");
        Indicator.close();
      }).catch((error)=>{
          Toast({
              message: '服务异常！',
              duration: 1500,
              iconClass: "icon icon-success"
            });
        Indicator.close();
      });
    },
    //查询订单状态
    doWxPayCallback: function (orderNumber) {
      let taskCount = 0;
      this.intervalid1 = setInterval(() => {
        taskCount++;
        if (taskCount > 5) {
          clearInterval(this.intervalid1);
        }
        this.$axios.post("/base/queryOrderStatus", { orderNumber: orderNumber }).then(response => {
          if (response.data.retCode == "0") {
            if(response.data.data.count > 0){
              Toast("支付成功！");
            }else{
              clearInterval(this.intervalid1);
            }
          }
        });
      }, 2000);
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.oilCardRecharge {
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
  .billRecharge-container{
    flex:1;
    overflow: auto;
  }
  .oilCard-list-wrap {
    width: 80%;
    margin: 5px auto;
    .list-item {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 3px;
      background: #ffffff;
      border-radius: 3px;
      margin-bottom:5px;
    }
  }
  .oilCard-bound-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    span{
      color:#c3ac0c;
    }
  }
  .money-item-active{
    background:#fbec96 !important;
  }
}
</style>
