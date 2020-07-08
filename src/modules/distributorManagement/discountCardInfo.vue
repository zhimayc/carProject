<template>
  <div class="discountCardInfo" scoped>
    <Header></Header>
    <div class="container discountCardInfo-container">
      <!-- 使用总览 -->
      <ul class="discount-num">
        <li>
          <div>{{discountCardsNum.bindCouponNumber}}张</div>
          <div>
            <p>优惠券</p>
            <p>总发行量</p>
          </div>
        </li>
        <li>
          <div>{{discountCardsNum.activeCouponNumber}}张</div>
          <div>
            <p>优惠券</p>
            <p>已激活量</p>
          </div>
        </li>
        <li >
          <div>{{discountCardsNum.usedCouponNumber}}张</div>
          <div>
            <p>优惠券</p>
            <p>已使用量</p>
          </div>
        </li>
      </ul>
      <div class="title-info">
        <span></span>
        <p>开卡记录</p>
      </div>
      <!-- 记录列表 -->
      <ul class="discount-list">
        <li v-for="(item, index) in cardLists" :key="index">
          <div class="list-date">
            <p class="fl">{{cardLists[index].createdDate}}</p>
            <p class="fr">过期时间：{{cardLists[index].expireDate}}</p>
          </div>
          <div class="list-cont">
            <p>面值：<span>{{cardLists[index].faceValue}}¥</span></p>
            <p>数量：<span>{{cardLists[index].couponNumber}}张</span></p>
            <p>已激活：<span>{{cardLists[index].activaNumber}}张</span></p>
            <p>已使用：<span>{{cardLists[index].usedNumber}}%</span></p>
          </div>
          <div class="list-icon">
            <div class="fr"><img src="../../assets/images/dealer.png"><span class="fr">{{cardLists[index].name}}</span></div>
            <div class="fr" @click="downCode"><img src="../../assets/images/download-black.png"><span class="fr">下载</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "discountCardInfo",
  path: "/discountCardInfo",
  components: {
    Header
  },
  data() {
    return {
      discountCardsNum: {}
        /*{
          txt: '总发行量',
          num: 10000
        },
        {
          txt: '已激活量',
          num: 500
        },
        {
          txt: '已使用量',
          num: 500
        }
      ]*/,
      cardLists: [
        {
          "activaNumber": 0,
          "couponCardCode": "string",
          "couponNumber": 0,
          "createdDate": "2020-07-02",
          "expireDate": "2020-07-02",
          "faceValue": 0,
          "image": "string",
          "name": "string",
          "promotionUrl": "string",
          "usedNumber": 0
        },
        {
          "activaNumber": 0,
          "couponCardCode": "string",
          "couponNumber": 0,
          "createdDate": "2020-07-02",
          "expireDate": "2020-07-02",
          "faceValue": 0,
          "image": "string",
          "name": "string",
          "promotionUrl": "string",
          "usedNumber": 0
        }
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "优惠卡信息");
    this.getCouponInfo();
    this.getCouponList();
  },
  beforeCreate() {},
  computed: {},
  methods: {
      getCouponInfo() {
        this.$axios.post("/agency/info").then(response => {
          if (response.data.retCode == "0") {
            this.discountCardsNum = response.data.data;
          }
          console.log(this.discountCardsNum, "66666");
        });
      },
    getCouponList(){
      this.$axios.post("/agency/coupon/card/list",{}).then(response => {
        if (response.data.retCode == "0") {
          // this.cardLists = response.data.data;
        }
        console.log(this.cardLists, "66666");
      });
    },
    // 下载二维码
    downCode() {
      console.log('down');
      // this.downloadFile(fileUrl, fileName)
    },
    // 文件下载
    downloadFile(fileUrl, fileName) {
      if (!fileUrl) {
        return
      }
      if (window.navigator.msSaveBlob) {  // IE以及IE内核的浏览器
        try {
          window.navigator.msSaveBlob(fileUrl, fileName)
        } catch (e) {
          console.log(e)
        }
      } else {
        let url = window.URL.createObjectURL(new Blob([fileUrl]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', fileName)// 文件名
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link) // 下载完成移除元素
        window.URL.revokeObjectURL(url) // 释放掉blob对象
      }
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.discountCardInfo {
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
  // 使用总览
  .discount-num {
    height: 100px;
    display: flex;
    background: cornflowerblue;
    li {
      height: 100%;
      flex: 1;
      text-align: center;
      &>div:first-child {
        height: 50px;
        line-height: 50px;
      }
    }
  }
  // 记录列表
  .discount-list{
    li{
      height: 130px;
      padding: 5px 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);
      background: #ffffff;
      .list-date {
        height: 30px;
        line-height: 30px;
        &>p:last-child {
          color: red;
        }
      }
      .list-cont {
        height: 60px;
        &>p {
          width: 50%;
          line-height: 30px;
          float: left;
          &>span {
            font-size: 18px;
          }
        }
      }
      .list-icon {
        height: 30px;
        &>div {
          height: 30px;
          line-height: 30px;
          &:last-child {
            margin-right: 10px;
          }
          &:first-child span {
            max-width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          img {
            width: 16px;
            height: 16px;
            margin: 7px 2px 0 0;
          }
        }
      }
    }
  }
}
</style>