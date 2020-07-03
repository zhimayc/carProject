  <template>
  <div class="userList" scoped>
    <Header></Header>
    <div class="container userList-container">
      <!-- 用户量总览 -->
      <ul class="user-num">
        <li v-for="(item, index) in usersNum" :key="index">
          <div>{{usersNum[index].num}}人</div>
          <div>
            <p>{{usersNum[index].txt}}</p>
          </div>
        </li>
      </ul>
      <!-- 用户列表 -->
      <ul class="user-list">
        <li v-for="(item, index) in userLists" :key="index">
          <p><span>icon</span>{{userLists[index].name}}</p>
          <p>共<span>{{userLists[index].couponTotal}}</span>张</p>
          <p>剩余<span>{{userLists[index].remainingCoupon}}</span>张</p>
          <p>使用率<span>{{userLists[index].rate}}</span>%</p>
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
      usersNum: [
        {
          txt: '历史用户量',
          num: 10000
        },
        {
          txt: '剩余用户量',
          num: 500
        }
      ],
      userLists: [
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "88",
          "remainingCoupon": 0
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "88",
          "remainingCoupon": 0
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "88",
          "remainingCoupon": 0
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "88",
          "remainingCoupon": 0
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "88",
          "remainingCoupon": 0
        },
        {
          "couponTotal": 0,
          "name": "string",
          "rate": "100",
          "remainingCoupon": 0
        }
      ]
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "用户列表");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
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
    &>li {
      height: 40px;
      margin-top: 10px;
      padding: 5px 10px;
      display: flex;
      margin-bottom: 10px;
      border-radius: 10px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);
      background: #ffffff;
      &>p {
        flex: 1;
        line-height: 30px;
      }
    }
  }
}
</style>