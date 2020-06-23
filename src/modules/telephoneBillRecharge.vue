  <template>
  <div class="telephoneBillRecharge" scoped>
    <!-- 子路由todo/panorama/concat等的坑 -->
    <Header></Header>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in pics" :key="index">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="billRecharge-container">
      <div class="billRecharge-inp-wrap">
        <input type="text" placeholder="请输入手机号码" />
      </div>
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
      <div class="recharge-info-wrap billRecharge-info-wrap">
        <span>可用券:{{ticketInfo.totalNum}}张({{ticketInfo.money}}元)</span>
        <span>本次用券:{{ticketInfo.num}}</span>
        <span>抵扣{{ticketInfo.countMoney}}元</span>
      </div>
      <div class="recharge-btn-wrap billRecharge-btn-wrap">
        <button>立即支付</button>
      </div>

      <div class="container-historyList-wrap">
        <div class="s-title">历史充值记录</div>
        <ul class="historyList-wrap">
          <li class="historyList" v-for="(item,index) in rechargeList" :key="index">
            <span>{{item.tel}}</span>
            <span>{{item.time}}</span>
            <span>{{item.money}}元</span>
            <span>{{item.status}}</span>
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
      rechargeList: [
        {
          tel: "18627597132",
          time: "2020-5-30",
          money: "100",
          status: "已到账"
        },
        {
          tel: "15527597131",
          time: "2020-5-30",
          money: "600",
          status: "已到账"
        },
        {
          tel: "13727597562",
          time: "2020-5-30",
          money: "300",
          status: "已到账"
        },
        {
          tel: "15527597131",
          time: "2020-5-30",
          money: "600",
          status: "已到账"
        },
        {
          tel: "15527597131",
          time: "2020-5-30",
          money: "600",
          status: "已到账"
        }
      ],
      ticketInfo: {
        totalNum: 10,
        money: 16,
        num: 4,
        countMoney: 5
      }
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "话费充值");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
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
    
  }
}
</style>