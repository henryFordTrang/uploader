<template>
  <div
    class="scroll"
    ref="scroll"
    :style="style"
    @touchstart="touchSt"
    @touchmove="touchMo"
    @touchend="touchEd"
  >
    <div class="scrollContent" ref="scrollContent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "page-scroll",
  props: {
    height: {
      type: String,
      default: ""
    }
  },

  computed: {
    style: function() {
      return this.height ? { height: this.height } : "";
    }
  },
  data() {
    return {
      orgPos: 0,
      orgPos1:0,
      ScrollTop: 0,
      movingPos: 0,
      touchStartStop: false,
      touchMoveStop: false,
      timeout:'',
    };
  },
  methods: {
    touchSt(e) {
      !this.touchStartStop && event.stopPropagation();
      this.orgPos = e.pageY;
      this.orgPos1 = e.changedTouches[0].clientY;
      this.ScrollTop = this.$refs.scroll.scrollTop;
    },

    touchMo(e) {
      var _this = this;
      !_this.touchMoveStop && event.stopPropagation();
      _this.movingPos = e.pageY;
      var movePos = e.pageY;
      var scrollTop = _this.$refs.scroll.scrollTop;
      var scrollOffset = _this.$refs.scroll.offsetHeight;
      var contentScrollHeight = _this.$refs.scrollContent.scrollHeight;

      //判断边距  ((是否滚到顶&&向上滚动)||是否overflow了||(是否滚到底&&向下滚动))
      if (
        (_this.ScrollTop <= 0 && _this.orgPos <= movePos) ||
        scrollOffset > contentScrollHeight ||
        (scrollOffset + scrollTop >= contentScrollHeight &&
          _this.orgPos >= movePos)
      ) {
         e.preventDefault();
      }
    
      var distance1 = 0; //滑动距离 初始值0
      var distance2=0;//下拉提示 初始位置
      var endPos = e.changedTouches[0].clientY; //滑动终止的时候的位置
      distance1 = _this.orgPos1 - endPos; //滑动距离 <0 向下滑 >0向上滑

      distance2=distance1;
      // if (distance1 > 200) {
      //   distance1 = 200;
      // } else if (distance1 < -200) {
      //   distance1 = -200;
      // }

      // if(distance2>76){
      //   distance2=76;
      // }else if(distance2<-76){
      //   distance2=-76;
      // }  

      // if(scrollTop <= 0||scrollTop + scrollOffset >= contentScrollHeight){
      //   _this.$refs.scroll.style.top=-distance1+'px';
      //   //console.log('组件传值到父页面')
      //   _this.$emit('revealSpiner',distance2);
      // }

      // if (distance1 < -176 && scrollTop <= 0) {
      //   //下拉且拉到顶部
      //   //console.log('下拉刷新.......')

      // } else if (
      //   distance1 > 176 &&
      //   scrollTop + scrollOffset >= contentScrollHeight
      // ) {
      //   //上拉加载更多
      //   //console.log('上拉加载更多----')
      // }
    },

    touchEd(e) {
      var _this=this;
      _this.$refs.scroll.style.top=76;
      _this.timeout=setTimeout(()=>{
        _this.$refs.scroll.style.top=0;
        _this.$emit('revealSpiner',0);
      },200)
      
    },

    
  },
  created() {}
};
</script>
<style lang="less">
.scroll {
  position: relative;
  top: 0;
  left: 0;
  height: calc(100vh - 96px);
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
 
  transition:.4s;
}


.scrollContent {
  &::before,
  &::after {
    content: "";
    display: table;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  &::after {
    clear: both;
  }
}
</style>

