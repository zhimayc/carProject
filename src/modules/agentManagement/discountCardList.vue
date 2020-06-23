  <template>
  <div class="discountCardList" scoped>
    <Header></Header>
    <div class="container discountCardList-container">
      我是优惠卡列表页面！
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "../../common/js/bus.js";
export default {
  name: "discountCardList",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "优惠卡列表");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.discountCardList {
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