import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';
import mshare from 'm-share';
import VueScroller  from 'vue-scroller'
import {Button,NavBar,Tabbar,TabbarItem,Toast,Swipe,SwipeItem,Uploader,Icon,Loading} from 'vant';
//import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/CSS/base.css';
import "../public/base.css";
import './assets/JS/lib-flexible.js';
import './assets/static/laydate/laydate.js'
import './assets/static/laydate/theme/default/laydate2.css'
import './assets/static/laydate/theme/default/checkDate.css'
import './assets/static/laydate/theme/default/chooseDate.css'
import pageView from './components/pageView.vue'
import pageScroll from './components/pageScroll.vue'
import echarts from "echarts";
import customized from './views/cstComponent/switch.vue';
import pic from './views/cstComponent/pic.vue';
// import vConsole from "vconsole";
// new vConsole;
Vue.prototype.$share = mshare;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
// Vue.use(Vant);
// Vue.use(Vant).use(VueScroller);
// Vue.prototype.$axios=axios.create({
//   baseURL:'http://192.168.10.25:8080/web-bpzx/bpzx/replay'
// })


Vue.use(Button)
   .use(NavBar)
   .use(Tabbar)
   .use(Toast)
   .use(Swipe)
   .use(SwipeItem)
   .use(TabbarItem)
   .use(Icon)
   .use(Loading)
   .use(Uploader)
   //.use(customized)
   .use(VueScroller);
Vue.config.productionTip = false
Vue.component('customized',customized);
Vue.component(pageView.name,pageView);
Vue.component(pageScroll.name,pageScroll);
Vue.component('pic',pic);
//Vue.use(Vant).use(VueScroller);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
