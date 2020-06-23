  <template>
  <div class="userList" scoped>
    <Header></Header>
    <div class="container userList-container">
      我是用户列表页面！
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
}
</style>