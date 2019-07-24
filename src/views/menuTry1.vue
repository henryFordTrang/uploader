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
    
    
    
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="my_scroller" >
      
    <img src="../assets/img/seg/odesaBeach.jpg" alt="" class="testimg" v-for="(item,index) in xxx" :key="index">
    </scroller>
    
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
      xxx:[1,2,3]
    }
  },
  computed: mapGetters(["user", "forShow", "add","menuTabShow"]),
  methods: {
    // ...mapMutations([
    //    'add'
    // ]),
    checkParam() {},
    onClickLeft() {
      AppUtils.closeView();
    },
    onClickRight() {
      this.$store.commit("add", 9888);
    },

    datePicker(){
     
      
    },

    refresh(){
      //this.$toast('refresh')
    },

    infinite(done){
      //this.$toast('pulling');
      if(this.xxx.length==0||this.xxx.length>20) {
          this.$refs.my_scroller.finishInfinite(true);
        return;
      }
      this.xxx.push(3);
      this.xxx.push(3);
      this.xxx.push(3);
    //this.$refs.my_scroller.resize();
        done();
    }
    
  },

  created() {
    this.checkParam();
    
  },

  activated(){
    this.$store.commit('menuTabActive',2)
    //this.setMenuTabShow(true)
   
  },
  
  mounted(){
    
    
  }
};
</script>

<style scoped>
.testimg{
  margin-top:20%;
  width:100%;
}
</style>



