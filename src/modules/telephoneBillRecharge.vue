<template>
  <div class="telephoneBillRecharge" scoped>
    <!-- 子路由todo/panorama/concat等的坑 -->
    <Header></Header>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in pics" :key="index">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="container billRecharge-container">
      <div class="billRecharge-inp-wrap">
        <input type="text" v-model="phone" placeholder="请输入手机号码" />
      </div>

      <ul class="money-wrap billRecharge-money-wrap">
        <li
          class="money-item"
          :class="{'money-item-active': activeIndex == index}"
          v-for="(item,index) in priceList"
          :key="index"
          @click="checkPrice(item,index)"
        >
          <span>{{item.price}}元</span>
          <span>优惠后：￥{{item.reducedPrice}}</span>
        </li>
      </ul>
      <div class="recharge-info-wrap billRecharge-info-wrap">
        <span>可用券:{{ticketInfo.remainingCoupon}}张({{ticketInfo.money}}元)</span>
        <span>本次用券:{{ticketInfo.num}}</span>
        <span>抵扣{{ticketInfo.countMoney}}元</span>
      </div>
      <div class="recharge-btn-wrap billRecharge-btn-wrap">
        <button @click="payPhone();">立即支付</button>
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
export default {
  name: "telephoneBillRecharge",
  path: "/telephoneBillRecharge",
  components: {
    Header
  },
  data() {
    return {
      pics: [
        require("../assets/images/banner.jpg"),
        require("../assets/images/banner.jpg"),
        require("../assets/images/banner.jpg")
      ],
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
      ticketInfo: {
        remainingCoupon: "0",
        money: "0",
        num: 1,
        countMoney: 0
      },
      checkPriceValue:"",
      phone:"",
      activeIndex: 0
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "话费充值");
    this.getCouponNumber();
    this.weixinInit();
    this.getRechargeList();
    this.checkPrice(this.priceList[0],0);
  },
  beforeCreate() {},
  computed: {},
  methods: {
    //获取充值历史
    getRechargeList(){
      this.$axios.post("/base/record/list", { type: 2 }).then(response => {
        if (response.data.retCode == "0") {
          this.rechargeList = response.data.data;
        }
      });
    },
    checkPrice(item,index){
      console.log(item.price)
      this.activeIndex=index;
      console.log(this.activeIndex,"this.activeIndex")
      this.checkPriceValue = item.price;
      // if(item.price == "100"){
      //   this.ticketInfo.num = 1;
      //   this.ticketInfo.countMoney=8;
      // }else if(item.price == "200"){
      //   this.ticketInfo.num = 2;
      //   this.ticketInfo.countMoney=16;
      // }else if(item.price == "300"){
      //   this.ticketInfo.num = 3;
      //   this.ticketInfo.countMoney=24;
      // }else if(item.price == "500"){
      //   this.ticketInfo.num = 5;
      //   this.ticketInfo.countMoney=40;
      // }
      var number = item.price/100;
      if(this.ticketInfo.remainingCoupon >= number){
        this.ticketInfo.num = number;
        this.ticketInfo.countMoney = number*8;
      }else{
        this.ticketInfo.num = this.ticketInfo.remainingCoupon;
        this.ticketInfo.countMoney = this.ticketInfo.remainingCoupon*8;
      }
    },
    //获取剩余优惠券
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
          //config.debug = true;
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
    //支付
    payPhone(){
      Indicator.open();
      let payPhoneInfo = { phone: this.phone,money:this.checkPriceValue}
        this.$axios.post("/base/recharg/phone",payPhoneInfo).then(response => {
          if (response.data.retCode == "0") {
            //this.$router.push("/homePage");
            let orderNumber = response.data.data.orderNumber;
            try {
              this.wx.chooseWXPay({
                timestamp: response.data.data.timeStamp, // 支付签名时间戳，注意微信js sdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: response.data.data.nonceStr, // 支付签名随机串，不长于 32 位
                package: 'prepay_id=' + response.data.data.prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                signType: response.data.data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: response.data.data.sign, // 支付签名
                success: function () {
                  this.$router.push("/telephoneBillRecharge");
                  // this.doWxPayCallback(orderNumber);
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
            this.$toast(response.data.message);
          }
          Indicator.close();
        });
    },
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
.telephoneBillRecharge {
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
  .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .billRecharge-container {
     background: #ffffff;
    .billRecharge-inp-wrap {
      margin:5px auto;
      width: 80%;
      display: flex;
      border-bottom: 1px solid #b5b5b5;
      input{
        height:36px;
        line-height: 36px;
      }
    }
    .money-item-active{
      background:#fbec96;
    }
    
  }
}
</style>