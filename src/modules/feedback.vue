  <template>
  <div class="feedback" scoped>
    <Header></Header>
    <div class="container feedback-container">
      <div class="feedback-textarea">
        <textarea  name id cols="30" rows="10" placeholder="请留下您宝贝的建议"></textarea>
      </div>

      <div class="feedback-btn-wrap">
        <button>提交建议</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Bus from "./../common/js/bus.js";
export default {
  name: "feedback",
  path: "/feedback",
  components: {
    Header
  },
  data() {
    return {};
  },
  mounted() {
    Bus.$emit("currentTitle", "意见反馈");
  },
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.feedback {
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
  .feedback-container {
    .feedback-textarea {
      width: 90%;
      border: 1px solid #a4a4a4;
      border-radius: 10px;
      padding: 10px;
      margin: 10px auto;
    }
    .feedback-btn-wrap{
      display: flex;
      justify-content: center;
      width: 90%;
      margin: 30px auto;
      button{
        height:40px;
        line-height: 40px;
        width: 40%;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
}
</style>