  <template>
  <div class="createAgent" scoped>
    <Header></Header>
    <div class="container createAgent-container">
      我是创建代理/推广员页面！
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
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "创建代理/推广员");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
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
}
</style>