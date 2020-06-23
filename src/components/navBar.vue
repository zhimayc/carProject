/ 公共组件NavBar
<template>
  <footer class="mint-footer">
    <li
      v-for="(item,index) in bars"
      :key="index"
      :class="{on: $route.path.includes(item.path)}"
      class="tab-item"
      @click="switchTo(item)"
    >
      <img
        :src="$route.path.includes(item.path) ? item.imagesrc.selected : item.imagesrc.normal"
        alt
      />
      <span>{{item.name}}</span>
    </li>
  </footer>
</template>

<script>
import Bus from "./../common/js/bus.js";
export default {
  name: "NavBar",

  data() {
    return {
      //注意，数组对象中可以根据需要添加id,如id:"/integrationDynamic"等
      currentTitle: "",
      bars: [
        {
          title: "首页",
          name: "首页",
          path: "/homePage",
          imagesrc: {
            normal: require("../assets/images/home.png"),
            selected: require("../assets/images/homeSelect.png")
          }
        },
        {
          title: "个人中心",
          name: "个人中心",
          path: "/myCenter",
          imagesrc: {
            normal: require("../assets/images/center.png"),
            selected: require("../assets/images/centerSelect.png")
          }
        }
      ]
    };
  },
  methods: {
    switchTo(item) {
      this.$router.replace(item.path);
      Bus.$emit("currentTitle", item.title);
    }
  }
};
</script>

<style lang='less' scoped>
.mint-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  // height: 50px;
  border: 2px solid #f5f5f5;
  background: #ffffff;
  z-index: 499;
  display: flex;
  padding: 2px 0;
  align-items: center;
  .tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #a4a4a4;

    img {
      width: 28px;
      height: 28px;
      margin-bottom: 2px;
    }
  }
}
.on {
  transform: scale(1.06);
  span {
    color: #212b36;
  }
}
</style>