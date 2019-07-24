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
    
    <div class="wra">
    <van-swipe :autoplay="30000" indicator-color="white">
    <van-swipe-item v-for="(item,index) in dataSet" :key="index"><div class="lineChart" :id="'myEchart'+index">{{'myEchart'+index}}</div></van-swipe-item>
    
    </van-swipe>

    <van-swipe :autoplay="30000" indicator-color="white">
    <van-swipe-item v-for="(item,index) in list" :key="index"><div class="lineChart" :id="'myEchart1'+index">{{'myEchart1'+index}}</div></van-swipe-item>
    
    </van-swipe>

    <van-swipe :autoplay="30000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in dataSet" :key="index"><img src="../assets/img/seg/odesaBitch.jpg" alt class="testimg"></van-swipe-item>
  
  </van-swipe>
  </div>
  
  </div>
</template>
<script>
//import mapGetter from 'vuex';
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      dataSet:[1,2,3,4,5],
      list:[11,21,31,41,51]
    };
  },
  computed: mapGetters(["user", "forShow", "add", "menuTabShow"]),
  methods: {

    checkParam() {
      var _this=this;
      $.each(_this.dataSet,function(i,dom){
        var ref="myEchart"+i;                         
        _this.lineChart(ref);               
      })

      $.each(_this.list,function(i,dom){
        var pieRef="myEchart1"+i;       
        _this.pieChart(pieRef)
      })
    },

    onClickLeft() {
      AppUtils.closeView();
    },

    onClickRight() {
      this.$store.commit("add", 9888);
    },

    // infinite(){

    // },

    // refresh(done){
    //   setTimeout(()=>{
    //     _this.$refs.my_scroller.finishInfinite(true);
    //   },500)
      
    //   return;
    //   done();
    // },

    datePicker() {},

    pieChart(pieRef){
    var option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

     var xxx = this.$echarts.init(document.getElementById(pieRef));
      xxx.setOption(option);

    },

    lineChart(ref) {
      
      var _this = this;
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "grey",
              width: .5 //这里是坐标轴的宽度
            }
          },

          axisLabel: {
              textStyle: {
                color: "grey",
                fontSize: "10"
              }
            },
          
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
            //  改变轴线颜色
            lineStyle: {
              // 使用深浅的间隔色
              color: ["red"]
            }
          },

          axisLine: {
            lineStyle: {
              color: "grey",
              width: .5 //这里是坐标轴的宽度
            }
          },

          axisLabel: {
              textStyle: {
                color: "grey",
                fontSize: "10"
              }
            },
        },

        //color: ["#0080ff","#4cd5ce"],

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },

        grid: {
          //设置图标上面和下面的距离
          left: 10,
          right: 10,
          bottom: 25,
          y: 20,
          containLabel: true
        },

        series: [
          {
            data: [820, 932, 901, 934, 1790, 1330, 1320],
            type: "line",
            smooth: true,
            areaStyle: {
              normal: {
                color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#f33155" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff" // 100% 处的颜色
                  }
                ])
              },
              itemStyle: { color: "#f33155" },
            }
          },
          {
            data: [720, 1732, 901, 534, 190, 1730, 320],
            type: "line",
            smooth: true,
            areaStyle: {
              normal: {
                color: new _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#7ace4c" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#ffffff" // 100% 处的颜色
                  }
                ])
              },
              itemStyle: { color: "#7ace4c" },

            }
          }
        ]
      };

      var xxx = this.$echarts.init(document.getElementById(ref));
      xxx.setOption(option);

      
    }
  },

  created() {
    
  },

  activated() {
    this.checkParam();
   
    this.$store.commit("menuTabActive", 3);
  },

  mounted() {}
};
</script>

<style scoped>
.testimg {
  margin-top: 10%;
  width: 100%;
}

.lineChart {
  width: 7.5rem;
  height: 4rem;
}

#appContainer /deep/ #app{
  height:1rem;
  overflow-y:scroll;
}

.wra{
  height:11rem;
  
  overflow-y:scroll;
}
</style>



