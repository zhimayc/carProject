  <template>
  <div class="discountCardIssue" scoped>
    <Header></Header>
    <div class="container discountCardIssue-container">
      <div class="faceVal-range">
        <p class="left-tip fl">选择面值</p>
        <ul>
          <li><input name="faceValue" type="radio"v value="8">8元面值，包含1张8元优惠券</li>
          <li><input name="faceValue" type="radio"  value="50">50元面值，包含7张8元优惠券</li>
          <li><input name="faceValue" type="radio" value="100">100元面值，包含13张8元优惠券</li>
        </ul>
      </div>
      <div class="faceVal-num">
        <p class="left-tip fl">发行数量</p>
        <div class="num-inp-wrap">
          <input type="text" v-model="couponNumber" placeholder="请输入数量" />
        </div>
      </div>
      <div class="faceVal-bind">
        <p class="left-tip fl">绑定代理/推广员</p>
        <mt-radio
          class="select-radio"
          v-model="bindType"
          :options="['是', '否']">
        </mt-radio>
      </div>
      <div class="recharge-btn-wrap">
        <button @click="sureSend();">确认发行</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "discountCardIssue",
  path: "/discountCardIssue",
  components: {
    Header
  },
  data() {
    return {
      bindType: 3,
      couponNumber:100,
      extensioCode:"222222",
      faceValue:100,
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "发行优惠卡");

  },
  beforeCreate() {},
  computed: {},
  methods: {
    sureSend(){
      let sendInfo = { bindType: this.bindType,couponNumber:this.couponNumber,extensioCode:this.extensioCode,
        faceValue:this.faceValue};
      this.$axios.post("/agency/send/coupon/card", sendInfo).then(response => {
        if (response.data.retCode == "0") {
          this.$router.push("/distributorManagement");
          /* if(response.data.data.type == 2){
             this.$router.push("/distributorManagement");
           }else if(response.data.data.type == 3){
             this.$router.push("/agentManagement");
           }else if(response.data.data.type == 4){
             this.$router.push("/customerList");
           }*/

        }
        console.log( response, "88888");
      });
    },

  }
};
</script>

<style lang="less">
@w: 75rem;
.discountCardIssue {
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
  .left-tip {
    width: 80px;
    height: 100%;
    line-height: 30px;
  }
  .faceVal-range {
    height: 120px;
    &>ul {
      width: calc(100% - 80px);
      height: 100%;
      float: left;
      li {
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        text-align: center;
      }
    }
  }
  .faceVal-num {
    height: 40px;
    .num-inp-wrap {
      width: calc(100% - 80px);
      display: flex;
      margin:5px auto;
      border-bottom: 1px solid #b5b5b5;
      input{
        height:30px;
        line-height: 30px;
      }
    }
  }
  .faceVal-bind {
    height: 40px;
    &>p {
      width: 120px;
      line-height: 40px;
    }    
    &>.select-radio {
      width: 180px;
      height: 40px;
      line-height: 40px;
      display: inline-block;
      .mint-radiolist-title {
        margin: 0;
      }
      .mint-cell {
        width: 80px;
        min-height: 40px;
        float: left;
        background-image: none;
        .mint-cell-wrapper {
          margin: 0;
          padding: 0;
          border: none!important;
          background-image: none;
        }
      }
      .mint-radio {
        width: 20px!important;
      }
    }
  }
}
</style>
