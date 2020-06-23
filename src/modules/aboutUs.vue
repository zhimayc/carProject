  <template>
  <div class="aboutUs" scoped>
    <Header></Header>
    <div>
      我是关于我们页面！
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
export default {
  name: "aboutUs",
  path: "/aboutUs",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "关于我们");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.aboutUs {
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