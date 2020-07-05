  <template>
  <div class="userList" scoped>
    <Header></Header>
    <div class="container userList-container">
      <!-- 用户量总览 -->
      <ul class="user-num">
        <li >
          <div>{{usersNum.totalUserNumber}}人</div>
          <div>
            <p>历史用户量</p>
          </div>
        </li>
        <li >
          <div>{{usersNum.nowUserNumber}}人</div>
          <div>
            <p>剩余用户量</p>
          </div>
        </li>
      </ul>
      <!-- 用户列表 -->
      <ul class="user-list">
        <li>
          <p>用户</p>
          <p>总数</p>
          <p>剩余张数</p>
          <p>使用率</p>
        </li>
        <li v-for="(item, index) in userLists" :key="index">
          <p>{{userLists[index].name}}</p>
          <p>{{userLists[index].couponTotal}}</p>
          <p>{{userLists[index].remainingCoupon}}</p>
          <p>{{userLists[index].rate}}%</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "userList",
  path: "/userList",
  components: {
    Header
  },
  data() {
    return {
      usersNum: {
          totalUserNumber: 0,
          nowUserNumber: 0
        },
      userLists: [
        {
          "couponTotal": 1000,
          "name": "张三三三三三",
          "rate": "10.88",
          "remainingCoupon": 888
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "0.88",
          "remainingCoupon": 0
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "0.88",
          "remainingCoupon": 0
        }
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "用户列表");
    this.getUserInfo();
    this.getUserList();
  },
  beforeCreate() {},
  computed: {},
  methods: {
    getUserInfo() {
      this.$axios.post("/agency/user/total").then(response => {
        if (response.data.retCode == "0") {
          this.usersNum = response.data.data;
        }
        console.log(this.usersNum, "66666");
      });
    },
    getUserList(){
      this.$axios.post("/agency/user/list",{}).then(response => {
        if (response.data.retCode == "0") {
          this.userLists = response.data.data;
        }
        console.log(this.userLists, "66666");
      });
    }
  }
};
</script>

<style lang="less">
@w: 75rem;
.userList {
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
  // 使用总览
  .user-num {
    height: 100px;
    display: flex;
    background: cornflowerblue;
    li {
      height: 100%;
      flex: 1;
      text-align: center;
      &>div {
        height: 50px;
        line-height: 50px;
      }
    }
  }
  // 用户列表
  .user-list {
    font-size: 12px;
    &>li {
      height: 40px;
      margin-top: 10px;
      padding: 5px 10px;
      display: flex;
      margin-bottom: 10px;
      border-radius: 10px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);
      background: #ffffff;
      text-align: center;
      &>p {
        float: left;
        flex: 1;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span {
          width: 30px;
          display: inline-block;
          text-align: center;
        }
      }
    }
  }
}
</style>