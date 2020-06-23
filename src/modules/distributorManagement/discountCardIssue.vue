  <template>
  <div class="discountCardIssue" scoped>
    <Header></Header>
    <div class="container discountCardIssue-container">
      我是发行优惠卡页面！
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "discountCardIssue",
  path: "/discountCardIssue",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "发行优惠卡");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.discountCardIssue {
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