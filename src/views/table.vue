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
        <div class="wrapper">
        <div class="text">
          <img class="imgClass" moveindex="0" src="http://dev.bp.zcloudtechs.cn/resource/xxtz/20190717164238374.jpeg" alt="">
        </div>
        <div class="text">      
          <img class="imgClass" moveindex="1" src="http://dev.bp.zcloudtechs.cn/resource/xxtz/20190717150225907.png" alt="">    
        </div>
        <div class="text">        
          <img class="imgClass" moveindex="2" src="http://dev.bp.zcloudtechs.cn/resource/xxtz/20190717150227180.png" alt="">
        </div>
        </div>
        <!-- <van-button type="primary" @click="wechat">主要按钮</van-button> -->
        
       
      </page-scroll>
    </page-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  watch: {},
  methods: {
    wechat(){
      
    },
   
    onClickLeft(){

    },
    onClickRight(){

    }
  },

  mounted() {
    $('.imgClass').each(function(){
      $(this).press()
    })
  }
};

$.fn.press = function () {
    var timeOutEvent = 0,startX,startY,offsetX,offsetY,moveX,moveY,imgOffsetTop,imgOffsetLeft,scrollTop,imgHeight,imgWidth,modalHeight,windowHeight,imgIndex,imgArr = [],imgStartOffsetLeft,imgStartOffsetTop,isLongPress;
    var img = $(this);
    var imgWidthHeight = img[0].clientWidth;
    $.each($('.imgClass'),function (i,e) {
        $(this).css({
            'position' : 'absolute',
            'left'     : e.offsetLeft,
            'top'      : e.offsetTop
        })  
    })
    
    $(img).on({
        touchstart: function(e){
            timeOutEvent = setTimeout(function(){
                timeOutEvent = 0;
                $(img).css({'width':'113px','height':'113px'});
                imgStartOffsetLeft = $(img)[0].offsetLeft;
                imgStartOffsetTop = $(img)[0].offsetTop;
                startX  = e.originalEvent.targetTouches[0].pageX;
                startY  = e.originalEvent.targetTouches[0].pageY;
                offsetX = startX - imgStartOffsetLeft;
                offsetY = startY - imgStartOffsetTop;
                imgIndex = parseInt($(img).attr('moveindex'));
                $(img).css({
                    'position':'absolute',
                    'z-index':'200',
                    'left':imgStartOffsetLeft + 'px',
                    'top':imgStartOffsetTop + 'px'
                });
                //防止微信露底
                document.body.ontouchmove = function (e) {
                    e.preventDefault();
                };
                //阻止长按默认行为，比如微信长按图片弹出菜单
                $(img).bind('contextmenu', function(e) {
                    e.preventDefault();
                })
                //获取当前所有图片的占位位置，为长按拖动后的移动做准备
                $.each($('.imgClass'),function (i,e) {
                    var index = $(e).attr('moveindex');
                    imgArr[index] = {
                        x1 : e.offsetLeft,
                        x2 : imgWidthHeight,
                        y1 : e.offsetTop,
                        y2 : imgWidthHeight,
                        trigger : {
                            x : e.offsetLeft + imgWidthHeight / 2,
                            y : e.offsetTop + imgWidthHeight / 2
                        }
                    };
                })
                isLongPress = true;
            },200);

        },
        touchmove: function(e){
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
            if(isLongPress) {
                moveX = e.originalEvent.targetTouches[0].pageX;
                moveY = e.originalEvent.targetTouches[0].pageY;
                $(img).css({
                    'left': moveX - offsetX + 'px',
                    'top': moveY - offsetY + 'px'
                })
                imgOffsetTop = $(img)[0].offsetTop;
                imgOffsetLeft = $(img)[0].offsetLeft;
                scrollTop = document.body.scrollTop;
                imgHeight = $(img)[0].offsetHeight;
                imgWidth = $(img)[0].offsetWidth;
                windowHeight = window.innerHeight;             

                //判断当前图片是否移动到其它图片上面
                if (imgArr.length > 1) {
                    for(var i = 0;i < imgArr.length;i++){
                        var trigger = imgArr[i].trigger;//trigger是图片中心点位置
                        if( i != imgIndex && trigger.x >= imgOffsetLeft && trigger.x <= (imgOffsetLeft + imgWidth/2) && trigger.y >= imgOffsetTop && trigger.y <= (imgOffsetTop + imgHeight/2)){
                            //i!=imgIndex 除了按住的那个图片
                            //trigger.x>=imgOffsetLeft 按住和没按住的图片 距离左边的距离比值。trigger.x 没按住的图片距离左边的距离,imgOffsetLeft 按住的图片距离左边的距离 也就在按住的图片的右边的图片
                            //trigger.x<=(imgOffsetLeft + imgWidth) 没按住的图片处于按住的图片的右边,且距离不超过图片宽度
                            //trigger.y>=imgOffsetTop 
                            //trigger.y<(imgOffsetTo + imgHeight)
                            $('.imgClass[moveindex=' + i + ']').css('position', 'absolute').attr('moveindex',imgIndex).animate({
                                'left': imgArr[imgIndex].x1 + 'px',
                                'top': imgArr[imgIndex].y1 + 'px'
                            }, 300);
                            //按住移到右边的时候,就把按住的初始位置赋给没按住的且已经到右边的图片
                            $(img).attr('moveindex', i);
                            console.log('切换moveId',imgIndex,i)
                            imgIndex = i;
                            //更换moveId 之后按的那个图片根据moveId获取位置信息
                        }
                    }
                }
            }

        },
        touchend: function () {
            clearTimeout(timeOutEvent);
            if(isLongPress){
                var imgLeft = imgArr[ imgIndex ].x1 + 'px';
                var imgTop = imgArr[ imgIndex ].y1 + 'px';
                $(img).css({
                    'position': 'absolute',
                    'width': '93px',
                    'height': '93px',
                    'left':  imgLeft,
                    'top': imgTop,
                    'z-index': 0
                });
            }
            isLongPress = false;
            document.body.ontouchmove = function (e) {
                e.stopPropagation();
            };
            if(timeOutEvent != 0){
                console.log('单击了')
            }
        }
    })
}

</script>
<style lang="less" scoped>
.text{
  width:93px;
  height:93px;
  display:inline-block;
  float:left;
}
.text img{
  width:93px;
  height:93px;
}
</style>
