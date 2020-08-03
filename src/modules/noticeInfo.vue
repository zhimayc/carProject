  <template>
  <div class="noticeInfo" scoped>
    <Header></Header>
    <div class="noticeInfo-container">
      <ul>
        <li v-for="(item,index) in noticeList" :key="index">
<!--          <span>{{index+1}}.</span>-->
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
export default {
  name: "noticeInfo",
  path: "/noticeInfo",
  components: {
    Header
  },
  data() {
    return {
      noticeList: ['充值说明' ,
        '1. 油卡充值：每月不超过1000元，油卡充值到账后，往加油站加油前，必须到站内圈存机上先圈存再加油。',
        '2. 话费充值：每月不超过300元，手机号码必须填写无误，出现充值错误，由此导致的损失由会员本人承担，且不支持携号转网的号码，复制粘贴充值号码时请注意出现空格，需要补全号码！',
        '3. 所有充值未到账查询，本公司仅提供充值到账记录，充值成功的号码，必定到账！如需确定进一步查询，请提供对应的油卡详单截图或号码查询单',
        '4. 充值时间：周一至周五9:00-12:00    14:00-19:00，不在指定时间充值，到账时间会延迟到充值时间段。',
        '5. 出现系统升级或维护会第一时间发出通知；放假时能否充值，会在第一时间通知会员。',
        '6. 油卡绑定属于系统自动审核，输入油卡号码时，不能输错！出现号码输入错误，由此导致充值不到账情况，损失由客户本人负责！如出现输入错误，请联系客服，后台解绑卡号后，再重新输入。解绑需经过审查，若审查存在故意更换号码，替他人充值，芝麻用车将冻结该会员资格，且每个账号解绑仅限2次。',
        '7. 充值加油仅限个人实名主卡，填写油卡信息时，必须姓名、电话和卡号都正确无误！如填写副卡或车队卡，单位卡，集团卡等充值不到账，由自己负责。',
        '8. 加油和话费充值属于优惠充值，不能提供发票。',
        '9. 为防止刷单现象，用户每天限充3笔。'
     ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "注意事项");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.noticeInfo {
  position: relative;
  background: #ffffff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  box-sizing: border-box;
  .noticeInfo-container {
    padding: 15px;

    ul {
      li {
        padding:5px 0;
        /*height: 36px;*/
        line-height: 20px;
      }
    }
  }
}
</style>
