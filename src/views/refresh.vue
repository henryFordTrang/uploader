<template>
  <div id="app">
    <page-view>
      <van-nav-bar
        title="年段考勤"
        left-text="返回"
        right-text="新建"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="refresh" ref="refresh"><van-loading type="spinner"/><p>{{textTip}}</p></div>
      <page-scroll :height="compatible" @revealSpiner="blockData">
        <ul>
          <li v-for="(item,index) in list" :key="index">{{item.name}}</li>
        </ul>
      </page-scroll>
    </page-view>
  </div>
</template>
<script>
export default {
    data(){
        return{
          list:[],
          compatible:'',
          textTip:'下拉刷新',
          labelDistance:0,
        }
    },

    watch:{
      labelDistance(nv,ov){
        if(nv==76){
          this.textTip='正在刷新';
        }else if(nv==0){
          this.textTip='下拉刷新'
        }
      }
    },

    methods:{
        onClickLeft(){

        },

        onClickRight(){

        },

        blockData(cd){
          console.log('cd vale:',cd);
          this.labelDistance=cd;
          this.$refs.refresh.style.top=-cd+'px';
          if(cd<=-76){
            this.textTip='正在刷新';
          }
        },

        adjustHeight(){
            //compatible
            var _this=this;           
            var iosPad=window.screen.availHeight-window.screen.height;
            var rootSize = parseFloat(document.documentElement.style.fontSize);
            var reduceH = (iosPad+46)/rootSize+'rem';
            _this.compatible=`calc(100% - ${reduceH}`;
        },
    },

    mounted(){
      var _this=this;
        for(let i=0;i<5;i++){
          var unit=Object.assign({
            name:'vivian'+i,
            gender:'female',
            occupation:'stu'
          })
          _this.list.push(unit);
        }

        _this.adjustHeight();

        console.log(_this.list)
    },

  

};
</script>
<style lang="less" scoped>
.refresh{
  position:absolute;
  top:-6px;
  width:100%;
  height:46px;
  line-height:46px;
  text-align:center;
  transition:.4s;
  /* background-color:#eee; */
}

.refresh p{
  width:100%;
  margin:0;
  padding:0;
  text-align:center;
  height:16px;
  line-height:16px;
  margin-top:8px;
  }

.van-loading{
  margin-left:calc(50% - 15px);
}
</style>
