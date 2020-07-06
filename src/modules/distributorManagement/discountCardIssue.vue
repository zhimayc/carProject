  <template>
  <div class="discountCardIssue" scoped>
    <Header></Header>
    <div class="container discountCardIssue-container">
      <div class="faceVal-range">
        <p class="left-tip fl">选择面值</p>
        <ul @click="modifyFaceVal">
          <li v-for="(item, index) in faceValRange" :key="index" :class="index==faceValIndex?'active':''" :currentIndex="index">{{faceValRange[index]}}</li>
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
          :options="selectOptions" @change="getSelectList();" >
        </mt-radio>
      </div>
      <div class="promoter-select">
        <div class="select-container fr" @click="openPromoterSelect">
          <p class="fl">{{promoterSelect?promoterSelect:'选择推广员'}}</p>
          <img class="fr" src="../../assets/images/arrow_right.png"/>
        </div>
        <!-- 推广员弹框 -->
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="bottom" style="width:100%">
          <mt-picker :slots="popupSlots" @change="onValuesChange" valueKey="name"  showToolbar>
            <div class="picker-toolbar-title">
              <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
              <div>请选择推广员</div>
              <div class="usi-btn-sure" @click="popupOk()">确定</div>
            </div>
          </mt-picker>
        </mt-popup>
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
import { Indicator } from 'mint-ui';

export default {
  name: "discountCardIssue",
  path: "/discountCardIssue",
  components: {
    Header
  },
  data() {
    return {
      bindType: '1',
      selectOptions : [{
		    label: '是',
		    value: '1'
			},
			{
		    label: '否',
		    value: '2'
			}],
      couponNumber:"",
      extensioCode:"",
      faceValue:100,
      faceValRange: [
        '8元面值，包含1张8元优惠券',
        '50元面值，包含6张8元优惠券',
        '100元面值，包含13张8元优惠券'
      ],
      faceValIndex: 2,
      promoterSelect: '', // 当前推广人员
      promoterSelectVal: '', // 当前推广人员-改变后的
      promoterSelectValue:'',
      popupVisible: false, // 推广人员选择弹框
      popupSlots: [ // 推广人员选择弹框数据
        {
          values:[
            {name:'',value:''}
          ]
        }
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "发行优惠卡");
    this.getSelectList();
  },
  beforeCreate() {},
  computed: {},
  methods: {
    //
    getSelectList(){
      this.promoterSelect = '选择推广员';
      this.extensioCode = '';
      this.$axios.post("/agency/extensio/list/select",{type:this.bindType}).then(response => {
        if (response.data.retCode == "0") {
          this.popupSlots[0].values = response.data.data;
        }
        console.log(this.personInfo, "66666");
      });
    },
    // 确认发行
    sureSend(){
      Indicator.open();
      let sendInfo = { bindType: this.bindType,couponNumber:this.couponNumber,extensioCode:this.extensioCode,faceValue:this.faceValue};
        console.log(sendInfo);
      this.$axios.post("/agency/send/coupon/card", sendInfo).then(response => {
        Indicator.close();
        if (response.data.retCode == "0") {

          this.$router.push("/distributorManagement");
        }else{
          this.$toast(response.data.message);
        }
        console.log( response, "88888");
      });
    },
    // 更改面额
    modifyFaceVal(e) {
      if (e.target.nodeName == 'LI') {
        let currentIndex = e.target.attributes.currentindex.nodeValue;
        console.log(currentIndex,"------")

        this.faceValIndex = currentIndex
        this.faceValue = currentIndex==0?8:(this.faceValIndex==1?50:100)
      }
    },
    // 打开推广人员选择弹框
    openPromoterSelect(){
      this.popupVisible = true;


    },
    // 推广人员选择弹框点击确认
    popupOk(){
      this.promoterSelect = this.promoterSelectVal;
      this.popupVisible = false;
      this.extensioCode = this.promoterSelectValue;
      console.log(this.extensioCode,"extensioCode")

    },
    //推广人员选择的弹框picker值发生改变
    onValuesChange(picker, values){
      this.promoterSelectVal = values[0].name;
      this.promoterSelectValue = values[0].value;
      console.log(this.promoterSelectVal,"99999999999")
      console.log(this.promoterSelectValue,"99999999999")

    }
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
        &.active {
          background-color: #fbec96;
        }
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
  // 绑定类型选择
  .faceVal-bind {
    height: 40px;
    &>p {
      width: 120px;
      line-height: 40px;
    }
    &>.select-radio {
      width: 160px;
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
  // 推广员选择
  .promoter-select {
    .select-container {
      width: 140px;
      height: 40px;
      border-bottom: 1px solid #ccc;
      p {
        line-height: 40px;
        padding-left: 10px;
      }
      img {
        width: 10px;
        margin: 11px 16px 0 0;
        transform: rotate(90deg);
      }
    }
    // 推广员弹框样式
    .picker-toolbar-title {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: #eee;
      height: 44px;
      line-height: 44px;
      font-size: 16px;
      .usi-btn-cancel, .usi-btn-sure{
        color:#26a2ff;
        font-size: 16px;
      }
    }
  }
}
</style>
