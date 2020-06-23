  <template>
  <div class="home" scoped>
    <Header></Header>
    <router-view></router-view>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "../components/navBar.vue";
import Header from "../components/header.vue";
export default {
  name: "Home",
  path: "/home",
  components: {
    NavBar,
    Header
  },
  data() {
    return {};
  },
  mounted() {},
  beforeCreate() {},
  computed: {},
  methods: {}
};
</script>

<style lang="less">
@w: 75rem;
.home {
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