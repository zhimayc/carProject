<template>
  <div class="agentManagement" scoped>
    <Header></Header>
    <div class="container distributor-container">
      <div class="distributor-info-wrap">
        <span>代理ID:{{extensioUserInfo.extensioNumber}}</span>
        <span>经营区域：{{extensioUserInfo.area}}</span>
        <span>返佣点数：{{extensioUserInfo.rebate}}</span>
      </div>
      <div class="distributor-entry-wrap">
        <div
          class="distributor-entry-item"
          v-for="item in agentEntryList "
          :key="item.path"
          @click="goAgentPage(item)"
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
    name: "agentManagement",
    path: "/agentManagement",
    components: {
      Header
    },
    data() {
      return {
        agentEntryList: [
          {
            id: 1,
            title: "优惠卡列表",
            path: "/discountCardList"
          },
          {
            id: 2,
            title: "用户列表",
            path: "/agentUserList"
          },
          {
            id: 3,
            title: "创建推广员",
            path: "/creatcustomer"
          },
          {
            id: 4,
            title: "推广员列表",
            path: "/customerList"
          }

        ],
        extensioUserInfo:{},
      };
    },
    mounted() {
      Bus.$emit("currentTitle", "代理员管理");
      this.getExtensioUserInfo();
    },
    beforeCreate() {},
    computed: {},
    methods: {
      goAgentPage(item) {
        this.$router.push(item.path)
        //window.location.reload();//此处需手动刷新
      },
      getExtensioUserInfo(){
        this.$axios.post("/extensio/rebate/info",{}).then(response => {
          if (response.data.retCode == "0") {
            this.extensioUserInfo = response.data.data;
          }
          console.log(this.extensioUserInfo, "999999");
        });
      }
    }
  };
</script>

<style lang="less">
  @w: 75rem;
  .agentManagement {
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
      span {
        margin-bottom: 5px;
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
