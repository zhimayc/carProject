  <template>
  <div class="connect" scoped>
    <Header></Header>
    <div>
      我是联系客服页面！
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
export default {
  name: "connect",
  path: "/connect",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "联系客服");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.connect {
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