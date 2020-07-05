<template>
  <div class="oilCardBound" scoped>
    <Header></Header>
    <div class="container login-container">
      <div class="login-item userName">
        <span>油卡账号：</span>
        <input type="text" v-model="account" placeholder="请输入油卡账号" />
      </div>
      <div class="login-item password">
        <span>卡主姓名：</span>
        <input type="text" v-model="accountName" placeholder="请输入卡主姓名" />
      </div>
      <div class="login-item password">
        <span>卡主手机：</span>
        <input type="text" v-model="phone" placeholder="请输入卡主手机" />
      </div>
      <div class="tips">
        <span>请确认油卡无误，否则充值将无法到账！</span>
      </div>
      <div class="recharge-btn-wrap login-btn-wrap">
        <button @click="bindOilCard();">添加油卡</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../components/header.vue";
  import Bus from "./../common/js/bus.js";
  import { Indicator } from 'mint-ui';
  export default {
    name: "oilCardBound",
    path: "/oilCardBound",
    components: {
      Header
    },
    data() {
      return {
        account:"",
        accountName:"",
        phone:"",
      };
    },
    mounted() {
      Bus.$emit("currentTitle", "绑定油卡");
    },
    beforeCreate() {},
    computed: {},
    methods: {
      bindOilCard(){
        Indicator.open();

        let oilCardInfo = { account: this.account,accountName:this.accountName,
          phone:this.phone};
        this.$axios.post("/base/bind/oil/card", oilCardInfo).then(response => {
          Indicator.close();
          if (response.data.retCode == "0") {
            this.$toast("绑卡成功");
            this.$router.push("/oilCardRecharge");
          }else{
            this.$toast(response.data.message);
          }

          console.log( response, "88888");
        });
      },

    }
  };
</script>

<style lang="less">
  @w: 75rem;
  .oilCardBound {
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
    .login-container{
      flex:1;
      height: 100%;
      padding:15px;
      background: #ffffff;
      .login-item{
        margin:20px 0;
        // span{
        //   color:#fbec96;
        // }
        input{
          height: 36px;
          line-height: 36px;
          width: 70%;
          border:1px solid #dddddd;
          padding:0 5px;
          border-radius: 5px;
        }
      }
      .tips{
        font-size:14px;
        color:red;
        text-align: center;
      }
      .login-btn-wrap{
        margin-top:100px;
      }
    }
  }
</style>
