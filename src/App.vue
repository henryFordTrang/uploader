<template>
  
<div id="app">
<div id="iosStatusBar" v-if="device=='iPhone1'" class="topPad" ref="iosStatusBar"></div>
<div id="appContainer" ref="appContainer"  :class="device=='iPhone'?'evacuate' : false">
  <transition name="van-fade" mode="out-in">
        <keep-alive>
          <router-view name="mainKeep"/>
        </keep-alive>
      </transition>

  <!-- 页面不缓存 -->
    <transition name="van-fade" mode="out-in">
        <router-view name="sub"/>
    </transition>
      
  <transition name="van-fade" mode="out-in">
          <router-view name="menuTab"/>
      </transition> 
  
  </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
//import customized from '@/views/cstComponent/switch.vue';

export default {
name: 'app',
// components: {
//     customized
//   },
computed: mapGetters(["menuTabShow","device"]),

// watch: {
//       // 监听设备类型，ios增加顶部状态栏
//       "device": function (newV, oldV) {
//         if (newV === "iPhone") {
          
//           var barHeight = window.screen.height - window.screen.availHeight;    
//           barHeight=10;      
//           this.$refs.iosStatusBar.style.height = barHeight + "px";
//           this.$refs.appContainer.style.height = "calc(100% - " + barHeight + "px)";
       
//         }
//       },
//     },

methods:mapMutations({
  setMenuTabShow: "menuTabShow"
}),

  created(){
    this.setMenuTabShow(true);
    let u=navigator.userAgent;
    
    var ifIphone=u.indexOf('iPhone');

    if(ifIphone>-1){
      this.$store.commit('device','iPhone');                     
    }else{
     
      this.$store.commit('device','android');
    }
    
    
  }
}

Date.prototype.Format = function (fmt) { 
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#iosStatusBar{
  width:100% ! important;
  height:.2rem  ! important;
  background-color:orange  ! important;
}

.evacuate{
  margin-top:.2rem;
  height:calc(100% - .2rem)
  
}
</style>
