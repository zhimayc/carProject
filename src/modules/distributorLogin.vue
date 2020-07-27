  <template>
  <div class="distributorLogin" scoped>
    <Header></Header>
    <div class="container login-container">
      <div class="login-item userName">
        <span>账号：</span>
        <input type="text" v-model="userName" placeholder="请输入账号" />
      </div>
      <div class="login-item password">
        <span>密码：</span>
        <input type="text" v-model="password" placeholder="请输入密码" />
      </div>
      <div class="recharge-btn-wrap login-btn-wrap">
        <button @click="longin();">安全登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
import { Toast} from 'mint-ui';
export default {
  name: "distributorLogin",
  path: "/distributorLogin",
  components: {
    Header
  },
  data() {
    return {
      userName:"",
      password:"",
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "经销商登录");
  },
  beforeCreate() {},
  computed: {},
  methods: {
    longin(){
      if (this.userName == null && this.password == null){
        Toast("账号密码不能为空！");
      }
      let loginUserInfo = { account: this.userName,password:this.password};
      console.log(loginUserInfo,"222");
      this.$axios.post("/center/login", loginUserInfo).then(response => {
        if (response.data.retCode == "0") {

          if(response.data.data.type == 2){
            this.$router.push("/distributorManagement");
          }else if(response.data.data.type == 3){
            this.$router.push("/agentManagement");
          }else if(response.data.data.type == 4){
            this.$router.push("/expandManagement");
          }

        }
        console.log( response, "88888");
      });
    },
  }
};
</script>

<style lang="less">
@w: 75rem;
.distributorLogin {
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
        width: 80%;
        border:1px solid #dddddd;
        padding:0 5px;
        border-radius: 5px;
      }
    }
    .login-btn-wrap{
      margin-top:100px;
    }
  }
}
</style>
