  <template>
  <div class="uploadPictures" scoped>
    <Header></Header>
    <div class="container uploadPictures-container">
      我是上传广告图页面！
    </div>
  </div>
</template>

<script>
import Header from "../../components/header.vue";
import Bus from "./../../common/js/bus.js";
export default {
  name: "uploadPictures",
  path: "/uploadPictures",
  components: {
    Header
  },
  data() {
    return {
    
    };
  },
  mounted() {
    Bus.$emit("currentTitle", "上传广告图");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.uploadPictures {
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