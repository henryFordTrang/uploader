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
    
    
    <div class="wrapper" >
    <img src="../assets/img/seg/odesa.jpg" alt="" class="testimg">
    
    <img v-for="(item,index) in pName" :key="index" :src="pName[index]" alt="" class="testimg">

    <van-button type="primary" @click="datePicker">{{selected}}</van-button>
    <div class="loaderWra">
    
    </div>

  <customized @imgInfo="getImg" :cName="pName"></customized>

  </div>
  
  </div>
</template>
<script>

import { mapGetters, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      selected: "请选择日期",
      pName:[],
    }
  },
  
  computed: mapGetters(["user", "forShow", "add","menuTabShow"]),
  methods: {
    
    checkParam() {
      var date=this.$route.query.date;    
      if(date!=undefined){   
        this.selected=date;
      }
    },
    onClickLeft() {
      AppUtils.closeView();
    },
    onClickRight() {
      this.$store.commit("add", 9888);
    },

    datePicker(){    
      this.$router.push({path:'datePicker',query:{url:'mTry'}});
    },
    getImg(value){
      this.pName.push(value);

    },

    onRead(file){
      
      this.pName=file.content;
    },

   
    
  },

  activated(){
    
    
  },
  
  mounted(){
    this.checkParam();
    this.$store.commit('menuTabActive',1);
    this.$store.commit('menuTabShow',true);
  }
};
</script>

<style scoped>
.testimg{
  margin-top:20%;
  width:100%;
}

.showing{
  font-size:.5rem;
  color:blue;
  margin-top:1rem;
}

.wrapper{
  background-color:orange;
  width:100%;
  max-height:11rem;
  overflow-y:scroll;
}

.loaderWra{
  width:100%;
  height:.7rem;
  margin-top:.2rem;
  
}
</style>



