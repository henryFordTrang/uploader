<template>
    <div id="www">
        <van-uploader :after-read="onRead">
            <van-icon name="photograph" />
        </van-uploader>
        
        
    </div>
</template>
<script>


export default {
    name:"cpn",
    data(){
        return{
            price:'9',
            photoInfo:"测试传值976",           
        }
    },

    props:{
        cName:""
    },
    
    switch(){

    },

    
    methods:{
        onInput(){

        },

        onRead(file) {
           this.$emit('imgInfo',file.content);
        },
        
    },

    activated(){
        
    }
}
</script>
<style scoped>
.van-uploader /deep/ .van-icon{
  font-size:.7rem;
  display:block;
}

.testimg{
  margin-top:20%;
  width:100%;
}
</style>

