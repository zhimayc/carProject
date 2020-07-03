  <template>
  <div class="discountCardIssue" scoped>
    <Header></Header>
    <div class="container discountCardIssue-container">
      <div class="faceVal-range">
        <p class="left-tip fl">选择面值</p>
        <ul>
          <li v-for="(item, index) in faceValRange" :key="index">{{faceValRange[index]}}</li>
        </ul>
      </div>
      <div class="faceVal-num">
        <p class="left-tip fl">发行数量</p>
        <div class="num-inp-wrap">
          <input type="text" placeholder="请输入手机号码" />
        </div>
      </div>
      <div class="faceVal-bind">
        <p class="left-tip fl">绑定代理/推广员</p>
        <mt-radio
          class="select-radio"
          v-model="value"
          :options="['是', '否']">
        </mt-radio>
      </div>
      <div class="recharge-btn-wrap">
        <button>确认发行</button>
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
      value: "是",
      faceValRange: [
        '8元面值，包含1张8元优惠券',
        '50元面值，包含1张50元优惠券',
        '100元面值，包含1张100元优惠券'
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "发行优惠卡");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
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