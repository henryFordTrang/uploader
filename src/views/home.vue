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
    <page-scroll>
      <div class="wrapper" id="iii" v-show="1==1">
      <img src="../assets/img/seg/odesa1.png" alt class="testimg">
      <img src="../assets/img/seg/odesa1.png" alt class="testimg">
      <img src="../assets/img/seg/odesa1.png" alt class="testimg">
      <img src="../assets/img/seg/odesa1.png" alt class="testimg">
      
    </div>
    </page-scroll>
    <div v-show="false">
    <div class="refresh" ref="refresh"><van-loading type="spinner"/><p>{{textTip}}</p></div>
    <div class="noData" ref="noData" @touchstart="touchSt($event)" @touchmove="touchMv($event)" @touchend="touchEd($event)"><img src="../assets/img/seg/img_no_reading_default@3x.png" alt="" class="noDataImg"><p>暂无数据</p></div>   
    <!-- <div class="loadMore" ref="loadMore">加载下一页</div> -->
    </div>
    </page-view>

    
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
      selected: "选择日期",
      picSet: [],
      picU: "",
      orgPos:0,
      movPos:0,
      timeout:'',
      textTip:'下拉刷新'
    };
  },
  computed: mapGetters(["user", "forShow", "add", "menuTabShow"]),
  methods: {
    
    checkParam() {
      var date = this.$route.query.date;
      if (date != undefined) {
        this.selected = date;
      }
    },
    onClickLeft() {
      AppUtils.closeView();
    },
    onClickRight() {},

    datePicker() {
      this.$router.push({ path: "datePicker", query: { url: "henry" } });
    },

    loadPic(v) {
      this.picSet.push(v);
    },

    touchSt(e){
      window.clearTimeout(this.timeout)
      //var block=this.$refs.noData.style.top=10+'px'
      this.orgPos=e.changedTouches[0].clientY;
    },

    touchMv(e){
      
      this.movPos=e.pageY;
      var touch=e.changedTouches[0];
      var distance=this.orgPos-e.changedTouches[0].clientY;
      var refreshing=0;
      refreshing=-distance;

      if(Math.abs(distance)>56){
        this.textTip='正在刷新';
      }

      if(distance<-200){
        distance=-200;
      }else if(distance>200){
        distance=200;
      }

      distance=-distance+'px';      
      this.$refs.noData.style.top=distance;     
      
      if(refreshing>=56){
        refreshing=56
      }

      refreshing=refreshing+'px';
      this.$refs.refresh.style.top=refreshing;
      
    },

    touchEd(e){
      var _this=this;
      _this.timeout=setTimeout(function(){
       
        _this.$refs.noData.style.top=0;
        _this.$refs.refresh.style.top='-6px';
        _this.textTip='下拉刷新';
      },500)
    }
  },

  activated() {
    this.checkParam();
    this.$store.commit("menuTabActive", 0);
    this.$store.commit("menuTabShow", true);
    //var v = new Vivian("iii");
    //v.act1();

  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-height: auto;
  
}

.testimg {
  margin-top: 20%;
  width: 100%;
}

.noData{
  width:calc(100% - 0rem);
  height:calc(100% - 3.5rem);
  margin:46px 0 1.5rem 0;
  /* background:#eee; */
  position:absolute;
  top:0rem;

}

.noData .noDataImg{
  width:3rem;
  height:3rem;
  margin-top:calc(50% - 1.5rem);
  
}

.loadMore{
  position:absolute;
  top:calc(100% - 3.5rem);
  width:100%;
  height:50px;
  line-height:50px;
}

.refresh{
  position:absolute;
  top:-6px;
  width:100%;
  height:46px;
  line-height:46px;
  text-align:center;
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



