<template>
  <div id="app">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    
    
    <div id="calendar" class="layui-inline" ></div>
    <!-- <img src="../assets/img/seg/odesa1.png" alt="" class="testimg"> -->
  </div>
</template>
<script>
//import mapGetter from 'vuex';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      henry: "have little money",
      url:'',
    }
  },
  computed: mapGetters(["user", "forShow", "add","menuTabShow"]),
  methods: {
    // ...mapMutations([
    //    "menuTabShow"
    // ]),
    checkParam() {
      var url=this.$route.query.url;
      this.url=url;
    },
    onClickLeft() {
      AppUtils.closeView();
    },
    onClickRight() {
      
    },

    datePicker(){
      var _this=this;
     laydate.render({
        elem: '#calendar',
        position: "static",
        min: "1988-01-01",
        max: "2118-12-31",
        format: "yyyy-MM-dd",
        done: function(value, date) {
          // this.pickingDate = value;          
          // localStorage.tcPickingDate=value;
          console.log(value,'===')
          _this.$router.push({path:_this.url,query:{'date':value}})
        },
        ready: function(date) {
          console.log('---',date)
          // let elem = document.getElementById("calendar");
          // let attributes = elem.attributes;
          // let dataV = null;
          // let childs = elem.querySelectorAll("*");
          
          // for (let i = 0; i < attributes.length; i++) {
          //   let name = attributes[i].name;
          //   if (name.indexOf("data-v-") > -1) {
          //     dataV = name;
          //   }
          // }

          // for (let j = 0; j < childs.length; j++) {
          //   childs[j].setAttribute(dataV, "");
          // }
        }
      });
      
    },

    
  },

  created() {
    
    
    //this.setMenuTabShow(false)
    
  },

  activated(){
    
   
  },
  
  mounted(){

    this.datePicker();    
    this.checkParam();
    
  }
};
</script>

<style scoped>

</style>



