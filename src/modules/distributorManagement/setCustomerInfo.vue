  <template>
  <div class="setCustomerInfo">
    <Header></Header>
    <div class="container setCustomerInfo-container">
      我是设置客服信息页面！
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "setCustomerInfo",
  path: "/setCustomerInfo",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "设置客服信息");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
.setCustomerInfo {
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