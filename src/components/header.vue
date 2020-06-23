<template>
  <div class="mt-header">
    <mt-header :title="title">
      <div slot="left">
        <img class="head-back-img" src="../assets/images/head-back.png" @click="back" alt />
      </div>
    </mt-header>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import Bus from "./../common/js/bus.js";
export default {
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.title = this.$route.meta.title;
    this.accpetTitle();
  },

  methods: {
    back() {
      // 增加项目中的主页用来跳转到微服务页面
      this.$router.go(-1);
    },

    accpetTitle() {
      //给该组件绑定一个自定义事件和对应的处理函数
      //调用bus中的on方法
      //事件的触发一般是接收数据然后处理
      let that = this;
      Bus.$on("currentTitle", function(msg) {
        that.title = msg;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.mint-header {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  color: #212b36 !important;
  background-color: #ffffff !important;
  border-bottom: 1px solid #f5f5f5;
  z-index: 1;

  h1 {
    font-size: 16px;
    font-weight: 500;
  }

  button {
    width: auto !important;
  }

  .head-back-img {
    position: relative;
    top: 4px;
    left: 3px;
    width: 22px;
    height: 22px;
  }
}
</style>