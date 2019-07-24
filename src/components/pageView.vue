<template>
    <div class="pageView" ref="pageView" :style="style">
        <div class="iosPad" id="iosPad" ref="iosPad"></div>
        <slot></slot>      
    </div>
</template>
<script>
export default {
    name:"page-view",
    data(){
        return{
            style:'',
        }
    },
    props:{
        henry:{
            type:String,
            default:''
        },
        
    },

    computed:{
        
    },
    methods:{

    },

    created(){
        this.style=this.henry;
        var u=navigator.userAgent;
        if(u.indexOf('iPhone')>-1){
            var wh=window.screen.height;
            var wah=window.screen.availHeight;
            var gap=wah-wh;
            this.$refs.iosPad=gap;           
        }
        
    }
}
</script>
<style lang="less">
    .pageView{
        height:100%;
    }
</style>
