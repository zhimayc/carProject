  <template>
  <div class="discountCardInfo" scoped>
    <Header></Header>
    <div class="container discountCardInfo-container">
      <!-- 使用总览 -->
      <ul class="discount-num">
        <li v-for="(item, index) in discountCardsNum" :key="index">
          <div>{{discountCardsNum[index].num}}张</div>
          <div>
            <p>优惠券</p>
            <p>{{discountCardsNum[index].txt}}</p>
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
          <div class="list-icon fr">
            <div><span>down</span>下载</div>
            <div><span>人</span>张三</div>
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
      discountCardsNum: [
        {
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
      ],
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
  },
  beforeCreate() {},
  computed: {},
  methods: {}
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
      height: 120px;
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
          display: inline;
        }
      }
    }
  }
}
</style>