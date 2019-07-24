<template>
  <div id="app">
    <page-view>
      <van-nav-bar
        title="视频测试"
        left-text="返回"
        right-text="新建"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />       
      <page-scroll>                
    


      </page-scroll>      
    </page-view>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },

    watch:{
      
    },

    methods:{
        

        onClickLeft(){

        },

        onClickRight(){

        },
    },

    mounted(){
       
    },

};
</script>
<style lang="less" scoped>
   .scroll{
       height:calc(100% - 44px)
   }

   
</style>
