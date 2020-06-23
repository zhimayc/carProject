  <template>
  <div class="oilChariotHistory">
    <Header></Header>
    <div class="container oilChariotHistory-container">
      我是屯油记录页面！
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "oilChariotHistory",
  path: "/oilChariotHistory",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "屯油记录");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.oilChariotHistory {
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