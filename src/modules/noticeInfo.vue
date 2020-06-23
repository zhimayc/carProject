  <template>
  <div class="noticeInfo" scoped>
    <Header></Header>
    <div class="noticeInfo-container">
      <ul>
        <li v-for="(item,index) in noticeList" :key="index">
          <span>{{index+1}}.</span>
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
      noticeList: ["周六周日不可充值"]
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
  overflow: hidden;
  box-sizing: border-box;
  .noticeInfo-container {
    padding: 15px;

    ul {
      li {
        height: 36px;
        line-height: 36px;
      }
    }
  }
}
</style>