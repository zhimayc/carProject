  <template>
  <div class="agentList" scoped>
    <Header></Header>
    <div class="container agentList-container">
      <ul class="agent-list">
        <li v-for="(item, index) in agentLists" :key="index">
          <div class="agent-info">
            <div class="info-img fl">
              <img src="/">
              <p>{{agentLists[index].type}}</p>
            </div>
            <div class="info-main fl">
              <p>{{agentLists[index].account}}<span class="freeze-account fr">冻结</span></p>
              <p>{{agentLists[index].area}}&nbsp;{{agentLists[index].extensioNumber}}</p>
              <p>返佣点数{{agentLists[index].rebate}}%</p>
            </div>
          </div>
          <div class="info-num">
            <ul>
              <li>已绑定{{agentLists[index].bindCouponNumber}}张优惠券</li>
              <li>已激活{{agentLists[index].activeCouponNumber}}张优惠券</li>
              <li>已消费{{agentLists[index].usedCouponNumber}}张优惠券<div class="info-modify fr">修改信息</div></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "../../common/js/bus.js";
export default {
  name: "agentList",
  components: {
    Header
  },
  data() {
    return {
      agentLists: [
        {
          "account": "string",
          "activeCouponNumber": 0,
          "area": "string",
          "bindCouponNumber": 0,
          "extensioNumber": "string",
          "rebate": 0,
          "rebateMoneyTotal": 0,
          "type": 0,
          "usedCouponNumber": 0
        },
        {
          "account": "string",
          "activeCouponNumber": 0,
          "area": "string",
          "bindCouponNumber": 0,
          "extensioNumber": "string",
          "rebate": 0,
          "rebateMoneyTotal": 0,
          "type": 0,
          "usedCouponNumber": 0
        }
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "代理/推广员列表");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.agentList {
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
  .agent-list {
    &>li {
      height: 150px;
      margin-bottom: 10px;
      padding: 5px 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);
      background: #ffffff;
      .agent-info {
        width: 100%;
        height: 80px;
        .info-img {
          width: 50px;
          margin-right: 15px;
          &>img {
            height: 50px;
            display: block;
          }
          &>p {
            line-height: 20px;
            text-align: center;
          }
        }
        .info-main {
          width: calc(100% - 65px);
          &>p {
            line-height: 25px;
            .freeze-account {
              color: red;
            }
          }
        }
      }
    }
  }
}
</style>