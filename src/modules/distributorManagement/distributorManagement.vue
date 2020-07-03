  <template>
  <div class="distributorManagement" scoped>
    <Header></Header>
    <div class="container distributor-container">
      <div class="distributor-info-wrap">
        <span>经销商ID:12324354654</span>
        <span>预存余额：1000</span>
      </div>
      <div class="distributor-entry-wrap">
        <div
          class="distributor-entry-item"
          v-for="item in distributorEntryList "
          :key="item.path"
          @click="goItemPage(item)"
        >
          <span class="title-required">{{item.title}}</span>
          <div>
            <img src="../../assets/images/arrow_right.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "../../common/js/bus.js";
export default {
  name: "distributorManagement",
  path: "/distributorManagement",
  components: {
    Header
  },
  data() {
    return {
      distributorEntryList: [
        {
          id: 1,
          title: "屯油记录",
          path: "/oilChariotHistory "
        },
        {
          id: 2,
          title: "优惠卡信息",
          path: "/discountCardInfo "
        },
        {
          id: 3,
          title: "用户列表",
          path: "/userList "
        },
        {
          id: 4,
          title: "发行优惠卡",
          path: "/discountCardIssue "
        },
        {
          id: 5,
          title: "创建代理/推广员",
          path: "/createAgent "
        },
        {
          id: 6,
          title: "代理/推广员列表",
          path: "/agentList "
        },
        // {
        //   id: 7,
        //   title: "上传广告图",
        //   path: "/uploadPictures"
        // },
        {
          id: 8,
          title: "设置客服信息",
          path: "/setCustomerInfo "
        }
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "经销商管理");
  },
  beforeCreate() {},
  computed: {},
  methods: {
    goItemPage(item) {
      this.$router.push(item.path)
      window.location.reload();//此处需手动刷新
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.distributorManagement {
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
  .distributor-container {
    overflow: auto;
    .distributor-info-wrap {
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: center;
      height: 100px;
      width: 90%;
      margin: 5px auto;
      border: 1px solid #dddddd;
      padding-left: 20px;
      border-radius: 15px;
    }
    .distributor-info-wrap :first-child {
      margin-bottom: 10px;
    }
    .distributor-entry-item {
      width: 100%;
      min-height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px 0 10px;
      background: #fff;
      color: #212b36;
      font-family: PingFang-SC-Regular;
      font-size: 16px;
      border: 1px solid #c8c8cd !important;
      margin-top: 10px;
      border-radius: 10px;
      span {
        flex:1
      }
      div {
        img {
          width: 8px;
          height: 12px;
        }
      }
    }
  }
}
</style>