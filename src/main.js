
import Vue from 'vue'
import App from './App'
// 引入路由信息
import VueRouter from 'vue-router'
import Mint from 'mint-ui'   //按需引入部分组件
Vue.use(VueRouter)
Vue.use(Mint)
import routes from './router'
const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes
})
// 引入ui组件（mint-ui）
import { Swipe, SwipeItem,Header,Cell } from 'mint-ui';   //按需引入部分组件

Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
// 引入css
import './common/css/comm.less';
Vue.config.productionTip = false

// 请求
import axios from 'axios'
import qs from 'qs'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withcredentials = true

/**
 * 统一设置后台请求地址
 * 设置请求地址：config文件夹下的request.json
 */
// axios.defaults.baseURL = 'http://192.168.0.11:8099/refillCard/'//本地
axios.defaults.baseURL = 'http://www.zhangrong123131.top/refillCard/'//本地
// axios.defaults.baseURL = 'http://www.zhimayc.com/refillCard/'// 测试
Vue.prototype.$axios = axios

//POST传参序列化(添加请求拦截器)，该序列化方式也是根据实际情况加与不加
axios.interceptors.request.use((config) => {
  //在发送请求之前如果为post序列化请求参数
  if (config.method === 'post' && config.data) {
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8') {
      config.data = qs.stringify(config.data)
    } else {
      config.data = JSON.parse(JSON.stringify(config.data))
    }
  }
  return config;
}, (error) => {
  Toast({
    message: '传参错误，请检查！',
    duration: 1500,
    iconClass: "icon icon-success"
  });
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
// axios.interceptors.response.use((res) => {
//   // 对响应数据做判断，与后台协议统一接口返回格式
 
//     return Promise.reject(res);
  
//   return res.data;
// }, (error) => {
//   Toast({
//     message: '网络异常，请稍后再试！',
//     duration: 1500,
//     iconClass: "icon icon-success"
//   });
//   return Promise.reject(error);
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
