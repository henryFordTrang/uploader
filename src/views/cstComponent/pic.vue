<template>
    <div id="iii">
    <van-uploader :after-read="onRead">
            <van-icon name="photograph" />
        </van-uploader>
        
        <img :src="picUrl" alt="">
        </div>
</template>
<script>
export default {
    name:'pic',
    data(){
        return{
            
        }
    },

    props:{
        picUrl:""
    },

    methods:{
        onRead(file){
            this.$emit('loadPic',file.content)
        }
    }
}
</script>
<style scoped>
.testimg{
  margin-top:20%;
  width:100%;
}
</style>
