<template>
  <div id="app">
    <page-view>
      <van-nav-bar
        title="视频测---试"
        left-text="返回"
        right-text="新建"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
       <div class="dateSwitch">
      <a href="javascript:;">
      <div class="arrowL" id="prew" @click="preW">&lsaquo;</div>
      </a>
      <a href="javascript:;">
      <div class="showBoard" id="showB">{{weekSpan}}</div>
      </a>
      <a href="javascript:;">
      <div class="arrowR" id="nexw" @click="nexW">&rsaquo;</div>
      </a>
      </div>
      <page-scroll>
          <!-- <van-uploader :after-read="onRead" icon="photo" type="primary" accept="image/*" class="uploader"/>
          <div class="videoWra" ref="videoWra"></div> -->
    <div class="tableWra" id="tableWra" ref="tableWra1" @touchmove.stop @touchstart="hTouchStart" @touchmove="hTouchMove" @touchend="hTouchEnd">
    <hr ref="hr">
    <table id="table" ref="table1">
        <thead ref="thead">
        <tr>
            <td><div style="width:25px"></div></td>
            <td><div>一</div></td>
            <td><div>二</div></td>
            <td><div>三</div></td>
            <td><div>四</div></td>
            <td><div>五</div></td>
            <td><div>六</div></td>
            <td><div>日</div></td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="firstCol">1 1</td>
            <td>1 2</td>
            <td>1 3</td>
            <td>1 4</td>
            <td>1 5</td>
            <td>1 6</td>
            <td>1 7</td>
            <td>1 8</td>
        </tr>
        <tr>
            <td class="firstCol">2 1</td>
            <td>2 2</td>
            <td>2 3</td>
            <td>2 4</td>
            <td>2 5</td>
            <td>2 6</td>
            <td>2 7</td>
            <td>2 8</td>
        </tr>
        <tr>
            <td class="firstCol">3 1</td>
            <td>3 2</td>
            <td>3 3</td>
            <td>3 4</td>
            <td>3 5</td>
            <td>3 6</td>
            <td>3 7</td>
            <td>3 8</td>
        </tr>
        <tr>
            <td class="firstCol">4 1</td>
            <td>4 2</td>
            <td>4 3</td>
            <td>4 4</td>
            <td>4 5</td>
            <td>4 6</td>
            <td>4 7</td>
            <td>4 8</td>
        </tr>
        <tr class="nap" ref="nap" id="nap">
            <td class="nap">5 1</td>
            <td class="nap">5 2</td>
            <td class="nap">5 3</td>
            <td class="nap">5 4</td>
            <td class="nap">5 5</td>
            <td class="nap">5 6</td>
            <td class="nap">5 7</td>
            <td class="nap">5 8</td>
        </tr>

        <tr class="liveMark">
            <td class="firstCol">6 1</td>
            <td>6 2</td>
            <td>6 3</td>
            <td>6 4</td>
            <td>6 5</td>
            <td>6 6</td>
            <td>6 7</td>
            <td>6 8</td>
        </tr>

        <tr id="try">
            <td class="firstCol">7 1</td>
            <td>7 2</td>
            <td>7 3</td>
            <td>7 4</td>
            <td>7 5</td>
            <td>7 6</td>
            <td>7 7</td>
            <td>7 8</td>
        </tr>
        <tr>
            <td class="firstCol">8 1</td>
            <td>8 2</td>
            <td>8 3</td>
            <td>8 4</td>
            <td>8 5</td>
            <td>8 6</td>
            <td>8 7</td>
            <td>8 8</td>
        </tr>
        <tr>
            <td class="firstCol">9 1</td>
            <td>9 2</td>
            <td>9 3</td>
            <td>9 4</td>
            <td>9 5</td>
            <td>9 6</td>
            <td>9 7</td>
            <td>9 8</td>
        </tr>
        <tr>
            <td class="firstCol">10 1</td>
            <td>10 2</td>
            <td>10 3</td>
            <td>10 4</td>
            <td>10 5</td>
            <td>10 6</td>
            <td>10 7</td>
            <td>10 8</td>
        </tr>
        </tbody>
    </table>
    </div>
      </page-scroll>
    </page-view>
  </div>
</template>
<script>
export default {
    data(){
        return{
         x:1,
         courseSet:[
           {
             course:'English',
             dura:'8:00-8:45',
             ser:'1'
           },
           {
             course:'Math',
             dura:'8:00-8:45',
             ser:'2'
           },
           {
             course:'Physic',
             dura:'8:00-8:45',
             ser:'3'
           }
         ],

         weekSpan:'',
         weekShift:0,

         //固定表头
         hOrgPos:0,
         hMovPos:0,
         hFinPos:0,

         //固定第一栏
         rOrgPos:0,
         rMovPos:0,
         rFinPos:0,
        }
    },

    watch:{

    },

    methods:{
        videoupload(){
           var _this=this;

        },

        onRead(file){
          var _this=this;
          var url='../zyschool/api/route/video';
          console.log(file)
          var mes=Object.assign({
            file:file.content,
            fileName:file.file.name
          })

          _this.$axios.post(url,mes).then((data)=>{
            console.log('henry get feedback',data);
          })
        },

        exceed(){
          this.$toast('too big');
          return false;
        },

        changeVideo(e){
          var file = e.target.files[0];
          var _this=this;
          var header=window.location;
          var url='../zyschool/api/route/video';
          var mes=Object.assign({
            file:e.target.files[0],
            id:'pussy'
          })
          _this.$axios.post(url,mes).then((data)=>{
            console.log('henry get feedback',data);
          })
          _this.x++;
        },

        preW(){
          var _this=this;
          _this.weekShift--;
          _this.weekSpanCal();
        },

        nexW(){
          var _this=this;
          _this.weekShift++;
          _this.weekSpanCal();
        },

        //计算每周起始时间
        weekSpanCal(){
          var _this=this;
          var date=new Date();
          var wDate=date.getDay();
          if(wDate==0){
              wDate=7;
          }
          var curMil=0;
          var fsMil=0;
          var fnMil=0;
          var firstDate='';
          var lastDate='';
          var curDate='';
          curMil=Date.parse(new Date());
          fsMil=curMil-(wDate-1)*24*60*60*1000+_this.weekShift*(24*60*60*1000*7);
          fnMil=curMil+(7-wDate)*24*60*60*1000+_this.weekShift*(24*60*60*1000*7);
          curDate=date.Format('yyyy-MM-dd');
          firstDate=new Date(fsMil).Format('yyyy-MM-dd');
          lastDate=new Date(fnMil).Format('yyyy-MM-dd');
          _this.weekSpan=firstDate+' ~ '+lastDate;
        },

        //午休那一栏合并
        napMerge(){
          var _this=this;
          // $('#nap').children('td').eq(0).attr('colspan',8)
          // // console.log(_this.$refs.nap.children[0],'------')
          // // _this.$refs.nap.children[0];

          // for(var i=0;i<7;i++){
          //   var colIndex=i+1;
          //   $('#nap').children('td').eq(colIndex).hide();
          // }

          $('table').children('tbody').children('tr').eq(3).children('td').eq(3).css('background-color','red');
          $('table').children('tbody').children('tr').eq(3).children('td').eq(3).attr('rowspan',4);

          for(var i=0;i<3;i++){
            var rowIndex=3+i+1;
            $('table').children('tbody').children('tr').eq(rowIndex).children('td').eq(3).hide();
          }
        },


        //固定表头
        hTouchStart(e){
          // var _this=this;
          // _this.hOrgPos=e.touches[0].clientY;
          // _this.rOrgPos=e.touches[0].clientX;

        },

        hTouchMove(e){
          // var _this=this;
          // //console.log(e)
          // _this.hMovPos=e.changedTouches[0].clientY;
          // _this.rMovPos=e.changedTouches[0].clientX;
          // var driftDst=_this.hOrgPos-_this.hMovPos;
          // var scrollH=$('.scroll').scrollTop();


          // if(scrollH>0&&driftDst>0){
          //   console.log(111)
          //   _this.$refs.thead.childNodes.forEach(function(dom,i){
          //   dom.childNodes.forEach(function(sbDom,index){
          //     _this.$refs.thead.childNodes[i].childNodes[index].style.top=driftDst+'px';
          //     })
          //   })
          // }else if(scrollH>0&&driftDst<0){
          //   console.log(222)
          //   _this.$refs.thead.childNodes.forEach(function(dom,i){
          //   dom.childNodes.forEach(function(sbDom,index){
          //     _this.$refs.thead.childNodes[i].childNodes[index].style.top=_this.hMovPos-_this.hOrgPos+'px';
          //     })
          //   })
          // }

          //console.log(scrollH,'scrollTop',_this.$refs.tableWra1.scrollTop,'---offsetHeight---',_this.$refs.tableWra1.offsetHeight,'---offsetHeight---',_this.$refs.tableWra1.scrollHeight,'移动距离',driftDst,'---table scrollTop--',_this.$refs.table1.scrollTop)
          var hMovDst=$('.scroll').scrollTop()+'px';//上下移动多少值
          var vMovDst=$('#tableWra').scrollLeft()+'px';//左右移动多少值
          console.log(vMovDst,'horizontal shifting.......')
          //console.log($('table').children('tbody').children('tr').children('td'))
          $('.firstCol').each(function(){
            $(this).css('left',vMovDst)
          })

          $('table').children('thead').children('tr').children('td').css('top',hMovDst);
        },

        hTouchEnd(e){
          var _this=this;
          //console.log('touch end')
        },

        onClickLeft(){
            AppUtils.closeView();
        },

        onClickRight(){

        },
    },

    mounted(){
      var _this=this;
      _this.weekSpanCal();
      _this.napMerge();
      console.log(_this.$refs.table1.childNodes[1].childNodes[3].offsetTop,'----o')
      _this.$refs.hr.style.top=_this.$refs.table1.childNodes[1].childNodes[2].offsetTop+'px';
    },

};
</script>
<style lang="less" scoped>
    .scroll{
        height:calc(100% - 81px);
    }

    .videoWra{
      width:100px;
      height:120px;
      border:1px solid #eee;
    }

    .uploader{
      height:100px;
      width:100px;
      background-image:url('../assets/img/seg/flag.jpg');
      background-repeat: no-repeat;
      background-size:cover;
    }

    .tableWra{
    height:calc(100% - 0rem);
    overflow:scroll;
}

table{
    overflow-x:scroll;
    table-layout:fixed;
    display: table;
    //border-collapse: separate;
    border-spacing: 0px;
    //border-color: grey;
}

table thead tr td{
    //background: #EFEFF4 !important;
    position: relative !important;
    text-align: center;
    top: 0px;
    background-color:white;
}

table thead tr td,table thead tr td div{
    height:.5rem;
    width:1.2rem;
    //background-color:orange;
}

table thead tr td div{
  text-align:center;
  line-height:.5rem;
}

td{
    //background-color:greenyellow;
    color:black ! important;
    height:1.5rem;
    border:1px solid rgb(253, 252, 252);
}

hr{
    height:1px;
    width:100%;
    background-color:red;
    border:none;
    margin:0;
    padding:0;
    position:absolute;
    top:140px;

}

.firstCol{
    background-color:white;
    position:relative;

}

.liveMark{
    border-bottom:2px solid #a23;
}

.nap{
    background-color:orange;
    height:.4rem;
    border-collapse:collapse;
    border:none;

}

.dateSwitch{
    height:0.7rem;

}

.dateSwitch a .arrowL{
    width:20%;
    height:100%;
    display:inline-block;
    float:left;
    text-align:center;
    line-height:.7rem;
    font-size:0.7rem;
}

.dateSwitch a .showBoard{
    width:60%;
    height:100%;
    display:inline-block;
    float:left;
    font-size:0.3rem;
    text-align:center;
    line-height:.7rem;
}

.dateSwitch a .arrowR{
    width:20%;
    height:100%;
    display:inline-block;
    float:left;
    text-align:center;
    line-height:.7rem;
    font-size:0.7rem;
}
</style>
