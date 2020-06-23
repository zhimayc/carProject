  <template>
  <div class="oilCardRecharge" scoped>
    <Header></Header>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in bannerList" :key="index">
        <img :src="item.imageUrl" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="billRecharge-container">
      <ul class="money-wrap billRecharge-money-wrap">
        <li
          class="money-item"
          v-for="(item,index) in priceList"
          :key="index"
          @click="checkPrice(item)"
        >
          <span>{{item.price}}元</span>
          <span>优惠后：￥{{item.reducedPrice}}</span>
        </li>
      </ul>
      <div class="recharge-info-wrap">
        <span>可用券:{{ticketInfo.totalNum}}张({{ticketInfo.money}}元)</span>
        <span>本次用券:{{ticketInfo.num}}</span>
        <span>抵扣{{ticketInfo.countMoney}}元</span>
      </div>
      <div class="recharge-btn-wrap">
        <button>立即支付</button>
      </div>

      <div class="container-historyList-wrap">
        <div class="s-title">历史充值记录</div>
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
          reducedPrice: "96"
        },
        {
          price: "100",
          reducedPrice: "96"
        },
        {
          price: "100",
          reducedPrice: "96"
        },
        {
          price: "100",
          reducedPrice: "96"
        }
      ],
      rechargeList: [],
      ticketInfo: {
        totalNum: 10,
        money: 16,
        num: 4,
        countMoney: 5
      },
      bannerList: []
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "油卡充值");
    this.getBannerList();
    this.getRechargeList()
  },
  beforeCreate() {},
  computed: {},
  methods: {
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
}
</style>