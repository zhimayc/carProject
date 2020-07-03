  <template>
  <div class="setCustomerInfo">
    <Header></Header>
    <div class="container setCustomerInfo-container">
      <div class="customer-line">
        <p class="fl">客服电话：</p>
        <input type="text" class="myinput">
      </div>
      <div class="customer-line">
        <p class="fl">客服微信：</p>
        <input type="text" class="myinput">
        <!-- <div class="fl"><mt-field v-model="customerWec" class="myinput"></mt-field></div> -->
      </div>
      <div class="recharge-btn-wrap">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "setCustomerInfo",
  path: "/setCustomerInfo",
  components: {
    Header
  },
  data() {
    return {
      customerTel: '',
      customerWec: ''
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "设置客服信息");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
.setCustomerInfo {
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
  .customer-line {
    height: 35px;
    margin: 0 10px 15px;
    &>p {
      width: 75px;
      line-height: 35px;
    }
    .myinput {
      width: calc(100% - 75px);
      height: 35px;
      line-height: 35px;
      padding: 0 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}
</style>