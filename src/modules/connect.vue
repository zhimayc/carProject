  <template>
  <div class="connect" scoped>
    <Header></Header>
    <div class="container setCustomerInfo-container">
      <div class="customer-line">
        <p class="fl">客服电话：</p>
        <p class="myIpt fl">{{connectInfo.servicePhone}}</p>
      </div>
      <div class="customer-line">
        <p class="fl">客服微信：</p>
        <p class="myIpt fl">{{connectInfo.serviceWeixin}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
export default {
  name: "connect",
  path: "/connect",
  components: {
    Header
  },
  data() {
    return {
        connectInfo:{}
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "联系客服");
    this.getConnect();
  },
  beforeCreate() {},
  computed: {},
  methods: {
    getConnect(){
      this.$axios.post("/agency/get/service/info").then(response => {
        if (response.data.retCode == "0") {
          this.connectInfo = response.data.data;
        }
      });
    }

  }
};
</script>

<style lang="less">
@w: 75rem;
.connect {
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
    .myIpt {
      width: calc(100% - 75px);
      height: 35px;
      line-height: 35px;
      padding: 0 10px;
    }
  }
}
</style>
