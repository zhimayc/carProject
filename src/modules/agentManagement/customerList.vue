  <template>
  <div class="customerList" scoped>
    <Header></Header>
    <div class="container customerList-container">
      我是推广员列表页面！
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "../../common/js/bus.js";
export default {
  name: "customerList",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "推广员列表");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.customerList {
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