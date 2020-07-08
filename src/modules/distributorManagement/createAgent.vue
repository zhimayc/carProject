<template>
  <div class="createAgent" scoped>
    <Header></Header>
    <div class="container createAgent-container">
      <div class="create-item">
        <span>用户名：</span>
        <input type="text" v-model="account"/>
      </div>
      <div class="create-item">
        <span>密码：</span>
        <input type="password" v-model="password"/>
      </div>
      <div class="create-item">
        <span>手机号：</span>
        <input type="text" v-model="phone"/>
      </div>
      <div class="create-item">
        <span>区域：</span>
        <input type="text" v-model="area"/>
      </div>
      <!-- 判断用户类型 -->
      <div class="create-item">
        <span class="fl">级别：</span>
        <mt-radio
          class="select-radio"
          v-model="type"
          :options="options" @change="check">
        </mt-radio>
      </div>
      <div class="create-item return-support">
        <span>返拥点数：</span>
        <input type="text" v-model="rebate"/>&nbsp;%
      </div>
      <div class="recharge-btn-wrap login-btn-wrap">
        <button @click="createAgent();">创建</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "createAgent",
  path: "/createAgent",
  components: {
    Header
  },
  data() {
    return {
      account: "",
      area: "",
      password: "",
      phone: "",
      type: "",
      rebate: "",
      options:[
        {
          label: '代理员',
          value: '1'
        },
        {
          label: '推广员',
          value: '2'
        }
      ],
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "创建代理/推广员");
  },
  beforeCreate() {},
  computed: {},
  methods: {
    check(val){
      this.type= val
      console.log(val,"999")
      console.log(this.type)
    },
    createAgent(){
      let agentInfo = { account: this.account,password:this.password,
        area:this.area,phone:this.phone,type:this.type,rebate:this.rebate};
      this.$axios.post("/agency/create/extensio/agent", agentInfo).then(response => {
        if (response.data.retCode == "0") {
          if(response.data.data.type == "2"){
            this.$router.push("/distributorManagement");
          }else if(response.data.data.type == "3"){
            this.$router.push("/agentManagement");
          }else if(response.data.data.type == "4"){
            this.$router.push("/expandManagement");
          }
        }
        console.log( response, "88888");
      });
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.createAgent {
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
  .create-item {
    margin:15px 0;
    height: 36px;
    line-height: 36px;
    &.return-support {
      input {
        width: 80px;
      }
    }
    &>span {
      width: 70px;
      display: inline-block;
    }
    &>input{
      height: 36px;
      width: calc(100% - 80px);
      border:1px solid #dddddd;
      padding:0 5px;
      border-radius: 5px;
    }
    &>.select-radio {
      width: 200px;
      height: 36px;
      line-height: 36px;
      display: inline-block;
      .mint-radiolist-title {
        margin: 0;
      }
      .mint-cell {
        width: 100px;
        min-height: 36px;
        line-height: 36px;
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