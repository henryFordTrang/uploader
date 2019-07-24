<template>
<template>
  <zc-page-view class="home">
    <zc-ios-status-bar ref="iosStatusBar"></zc-ios-status-bar>
    <van-nav-bar
      class="nav-bar--white"
      ref="navBar"
      title="课程表"
      left-text
      left-arrow
      right-text="查询"
      :border="false"
      @click-left="$root.close"
      @click-right="querying"
    ></van-nav-bar>
    <div class="weekSwit">
      <div class="weekSp ib fl">
        <a href="javascript:;" class="left ib fl" @click="preW">
          <img src="static/img/go.png" alt>
        </a>

        <div class="mid ib fl">{{weekSpan}}</div>

        <a href="javascript:;" class="right ib fl" @click="nexW">
          <img src="static/img/go.png" alt>
        </a>
      </div>

      <a href="javascript:;" class="reverse1 ib fl" @click="liveW">
        <div class="reverse">
          <div class="left ib fl">
            <img src="static/img/go.png" alt>
          </div>
          <div class="right ib fl">返回本周</div>
        </div>
      </a>
    </div>
    <!-- <zc-scroll-view :style="{ height: pageContentHeight }"> -->

    <zc-scroll-view>
      <div class="tableWra" id="tableWra" ref="tableWra1" @touchmove.stop>
        <hr ref="hr">

        <table id="table" ref="table1">
          <thead ref="thead">
            <tr>
              <td>
                <div style="width:25px"></div>
              </td>
              <td>
                <div>一</div>
              </td>
              <td>
                <div>二</div>
              </td>
              <td>
                <div>三</div>
              </td>
              <td>
                <div>四</div>
              </td>
              <td>
                <div>五</div>
              </td>
              <td>
                <div>六</div>
              </td>
              <td>
                <div>日</div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in seriesSet.length+1" :key="index">
              <td class="firstCol" :class="monSet[index]?computNap(monSet[index]):''"></td>
              <td
                :style="comput(monSet[index])"
                :class="monSet[index]?computCc(monSet[index]):''"
                :rowspan="monSet[index]?computRs(monSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{monSet[index]?monSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="monSet[index]&&monSet[index].skcdmc">@</span>
                  {{monSet[index]?monSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="monSet[index]&&monSet[index].skjsxm">@</span>
                  {{monSet[index]?monSet[index].skjsxm:''}}
                </div>
              </td>

              <td
                :style="comput(tueSet[index])"
                :class="tueSet[index]?computCc(tueSet[index]):''"
                :rowspan="tueSet[index]?computRs(tueSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{tueSet[index]?tueSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="tueSet[index]&&tueSet[index].kcmc">@</span>
                  {{tueSet[index]?tueSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="tueSet[index]&&tueSet[index].skjsxm">@</span>
                  {{tueSet[index]?tueSet[index].skjsxm:''}}
                </div>
              </td>
              <td
                :style="comput(wenSet[index])"
                :class="wenSet[index]?computCc(wenSet[index]):''"
                :rowspan="wenSet[index]?computRs(wenSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{wenSet[index]?wenSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="wenSet[index]&&wenSet[index].kcmc">@</span>
                  {{wenSet[index]?wenSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="wenSet[index]&&wenSet[index].skjsxm">@</span>
                  {{wenSet[index]?wenSet[index].skjsxm:''}}
                </div>
              </td>
              <td
                :style="comput(thiSet[index])"
                :class="thiSet[index]?computCc(thiSet[index]):''"
                :rowspan="thiSet[index]?computRs(thiSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{thiSet[index]?thiSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="thiSet[index]&&thiSet[index].kcmc">@</span>
                  {{thiSet[index]?thiSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="thiSet[index]&&thiSet[index].skjsxm">@</span>
                  {{thiSet[index]?thiSet[index].skjsxm:''}}
                </div>
              </td>
              <td
                :style="comput(friSet[index])"
                :class="friSet[index]?computCc(friSet[index]):''"
                :rowspan="friSet[index]?computRs(friSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{friSet[index]?friSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="friSet[index]&&friSet[index].kcmc">@</span>
                  {{friSet[index]?friSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="friSet[index]&&friSet[index].skjsxm">@</span>
                  {{friSet[index]?friSet[index].skjsxm:''}}
                </div>
              </td>
              <td
                :style="comput(satSet[index])"
                :class="satSet[index]?computCc(satSet[index]):''"
                :rowspan="satSet[index]?computRs(satSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{satSet[index]?satSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="satSet[index]&&satSet[index].kcmc">@</span>
                  {{satSet[index]?satSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="satSet[index]&&satSet[index].skjsxm">@</span>
                  {{satSet[index]?satSet[index].skjsxm:''}}
                </div>
              </td>
              <td
                :style="comput(sunSet[index])"
                :class="sunSet[index]?computCc(sunSet[index]):''"
                :rowspan="sunSet[index]?computRs(sunSet[index]):1"
              >
                <div
                  class="course"
                  style="-webkit-box-orient: vertical"
                >{{sunSet[index]?sunSet[index].kcmc:''}}</div>
                <div class="room">
                  <span v-show="sunSet[index]&&sunSet[index].kcmc">@</span>
                  {{sunSet[index]?sunSet[index].skcdmc:''}}
                </div>
                <div class="teacher">
                  <span v-show="sunSet[index]&&sunSet[index].skjsxm">@</span>
                  {{sunSet[index]?sunSet[index].skjsxm:''}}
                </div>
              </td>
            </tr>
          </tbody>

          <!-- <tbody>
            <tr v-for="(item,index) in seriesSet" :key="index">
              <td class="firstCol"></td>
              <td :style="comput(monSet[index])" :rowspan="monSet[index]?monSet[index].rowspan:1" v-if="monSet[index]?monSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{monSet[index]?monSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="monSet[index]">@</span>{{monSet[index]?monSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="monSet[index]">@</span>{{monSet[index]?monSet[index].skjsxm:''}}</div>
              </td>

              <td :style="comput(tueSet[index])" :rowspan="tueSet[index]?tueSet[index].rowspan:1" v-if="tueSet[index]?tueSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{tueSet[index]?tueSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="tueSet[index]">@</span>{{tueSet[index]?tueSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="tueSet[index]">@</span>{{tueSet[index]?tueSet[index].skjsxm:''}}</div>
              </td>
              <td :style="comput(wenSet[index])" :rowspan="wenSet[index]?wenSet[index].rowspan:1" v-if="wenSet[index]?wenSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{wenSet[index]?wenSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="wenSet[index]">@</span>{{wenSet[index]?wenSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="wenSet[index]">@</span>{{wenSet[index]?wenSet[index].skjsxm:''}}</div>
              </td>
              <td :style="comput(thiSet[index])" :rowspan="thiSet[index]?thiSet[index].rowspan:1" v-if="thiSet[index]?thiSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{thiSet[index]?thiSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="thiSet[index]">@</span>{{thiSet[index]?thiSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="thiSet[index]">@</span>{{thiSet[index]?thiSet[index].skjsxm:''}}</div>
              </td>
              <td :style="comput(friSet[index])" :rowspan="friSet[index]?friSet[index].rowspan:1" v-if="friSet[index]?friSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{friSet[index]?friSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="friSet[index]">@</span>{{friSet[index]?friSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="friSet[index]">@</span>{{friSet[index]?friSet[index].skjsxm:''}}</div>
              </td>
              <td :style="comput(satSet[index])" :rowspan="satSet[index]?satSet[index].rowspan:1" v-if="satSet[index]?satSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{satSet[index]?satSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="satSet[index]">@</span>{{satSet[index]?satSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="satSet[index]">@</span>{{satSet[index]?satSet[index].skjsxm:''}}</div>
              </td>
              <td :style="comput(sunSet[index])" :rowspan="sunSet[index]?sunSet[index].rowspan:1" v-if="sunSet[index]?sunSet[index].isShow:true">
                <div class="course" style="-webkit-box-orient: vertical">{{sunSet[index]?sunSet[index].kcmc:''}}</div>
                <div class="room"><span v-show="sunSet[index]">@</span>{{sunSet[index]?sunSet[index].skcdmc:''}}</div>
                <div class="teacher"><span v-show="sunSet[index]">@</span>{{sunSet[index]?sunSet[index].skjsxm:''}}</div>
              </td>
            </tr>
          </tbody>-->
        </table>
      </div>
    </zc-scroll-view>
  </zc-page-view>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      weekSpan: "",
      weekShift: 0,
      seriesSet: [],
      monSetTemp: [],
      tueSetTemp: [],
      wenSetTemp: [],
      thiSetTemp: [],
      friSetTemp: [],
      satSetTemp: [],
      sunSetTemp: [],
      monSet: [],
      tueSet: [],
      wenSet: [],
      thiSet: [],
      friSet: [],
      satSet: [],
      sunSet: [],
      tempSet: [
        {
          skcdmc: "信息1班",
          skrq: "2018-12-20",
          kcdm: "SX2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "1",
          jxrwid: 56335,
          kcmc: "数学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息2班",
          skrq: "2018-12-20",
          kcdm: "SX2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "2",
          jxrwid: 56334,
          kcmc: "数学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息3班",
          skrq: "2018-12-20",
          kcdm: "10010000010",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "3",
          jxrwid: 54334,
          kcmc: "体育",
          skcddm: "110110"
        },
        {
          skcdmc: "信息4班",
          skrq: "2018-12-20",
          kcdm: "ZX3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "4",
          jxrwid: 56346,
          kcmc: "自习",
          skcddm: "110110"
        },
        {
          skcdmc: "信息5班",
          skrq: "2018-12-20",
          kcdm: "YW2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "5",
          jxrwid: 56334,
          kcmc: "语文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息6班",
          skrq: "2018-12-20",
          kcdm: "PD",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "6",
          jxrwid: 56337,
          kcmc: "品德",
          skcddm: "110110"
        },
        {
          skcdmc: "信息7班",
          skrq: "2018-12-20",
          kcdm: "BH3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "7",
          jxrwid: 56345,
          kcmc: "班会",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-21",
          kcdm: "SX2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "1",
          jxrwid: 56335,
          kcmc: "数学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息2班",
          skrq: "2018-12-21",
          kcdm: "YW2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "2",
          jxrwid: 56334,
          kcmc: "语文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息3班",
          skrq: "2018-12-21",
          kcdm: "ZX3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "3",
          jxrwid: 56346,
          kcmc: "自习",
          skcddm: "110110"
        },
        {
          skcdmc: "信息4班",
          skrq: "2018-12-21",
          kcdm: "YW2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "4",
          jxrwid: 56334,
          kcmc: "语文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息5班",
          skrq: "2018-12-21",
          kcdm: "YL4",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "6",
          jxrwid: 56336,
          kcmc: "音乐",
          skcddm: "110110"
        },
        {
          skcdmc: "信息6班",
          skrq: "2018-12-21",
          kcdm: "10020003640",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "7",
          jxrwid: 52538,
          kcmc: "美---术",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "SX2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "1",
          jxrwid: 56335,
          kcmc: "数学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "YW2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "2",
          jxrwid: 56334,
          kcmc: "语文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "DF",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "3",
          jxrwid: 56337,
          kcmc: "品德",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "DF",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "4",
          jxrwid: 56347,
          kcmc: "地----方",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "DF",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "5",
          jxrwid: 56347,
          kcmc: "地方",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "ZX3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "6",
          jxrwid: 56346,
          kcmc: "自习",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-24",
          kcdm: "TH",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "7",
          jxrwid: 56349,
          kcmc: "体活",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "ZW",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "x---x二班",
          jc: "1",
          jxrwid: 56344,
          kcmc: "作-----文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "ZW",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "2",
          jxrwid: 56344,
          kcmc: "作文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "ZW",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "3",
          jxrwid: 54334,
          kcmc: "体育",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "ZH",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "4",
          jxrwid: 56341,
          kcmc: "综合",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "PD",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "5",
          jxrwid: 56337,
          kcmc: "品德",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "KX4",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "6",
          jxrwid: 56338,
          kcmc: "科学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-25",
          kcdm: "TH",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "7",
          jxrwid: 56349,
          kcmc: "体活",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "SX2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "1",
          jxrwid: 56335,
          kcmc: "数学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "YW2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "2",
          jxrwid: 56334,
          kcmc: "语文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "YL4",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "3",
          jxrwid: 56336,
          kcmc: "音乐",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "10020003640",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "4",
          jxrwid: 52538,
          kcmc: "美术",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "XZ3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "5",
          jxrwid: 56340,
          kcmc: "写字",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "ZX3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "6",
          jxrwid: 56346,
          kcmc: "自习",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-26",
          kcdm: "XB2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "7",
          jxrwid: 56348,
          kcmc: "校本",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "SX2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "1",
          jxrwid: 56335,
          kcmc: "数--学",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "YW2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "2",
          jxrwid: 56334,
          kcmc: "语文",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "YL4",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "3",
          jxrwid: 56336,
          kcmc: "音乐",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "10020003640",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "4",
          jxrwid: 52538,
          kcmc: "美术",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "XZ3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "5",
          jxrwid: 56340,
          kcmc: "写字",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "ZX3",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "6",
          jxrwid: 56346,
          kcmc: "自习",
          skcddm: "110110"
        },
        {
          skcdmc: "信息1班",
          skrq: "2018-12-23",
          kcdm: "XB2",
          skjs: "xxxxxx12",
          skbj: "xxbj2",
          skjsxm: "xx2",
          skbjmc: "xx二班",
          jc: "7",
          jxrwid: 56348,
          kcmc: "校本",
          skcddm: "110110"
        }
      ],
      colorM: new Map(),
      napIndex: 6,
      colorSet: [
        "#FFB7DD",
        "#FF44AA",
        "#FF8888",
        "#FF7744",
        "#FFBB66",
        "#FFFF33",
        "#DDFF77",
        "#77FF00",
        "#99FF99",
        "#77FFEE",
        "#CCDDFF",
        "#9999FF",
        "#D1BBFF",
        "#9955FF",
        "#FFB3FF",
        "#D28EFF",
        "#FFB7DD",
        "#FF44AA",
        "#FF8888",
        "#FF7744",
        "#FFBB66",
        "#FFFF33",
        "#DDFF77",
        "#77FF00",
        "#99FF99",
        "#77FFEE",
        "#CCDDFF",
        "#9999FF",
        "#D1BBFF",
        "#9955FF",
        "#FFB3FF",
        "#D28EFF"
      ]
    };
  },
  computed: mapGetters(["androidKeyboard", "fdyStatus", "rybh"]),
  methods: {
    //查询课程
    loadInfo() {
      var _this = this;
      //var data='{"msg":"操作成功","jcInfo":{"msg":"查询成功","code":0,"data":[{"jcdm":1,"org_id":1,"sjlb":"冬令制","jcskkssj":"08:00:00","jcskjssj":"08:45:00","deltag":false,"remark":"1","id":126,"jcmc":"第一节"},{"jcdm":2,"org_id":1,"sjlb":"冬令制","jcskkssj":"09:00:00","jcskjssj":"09:45:00","deltag":false,"remark":"2","id":127,"jcmc":"第二节"},{"jcdm":3,"org_id":1,"sjlb":"冬令制","jcskkssj":"10:00:00","jcskjssj":"10:45:00","deltag":false,"remark":"3","id":128,"jcmc":"第三节"},{"jcdm":4,"org_id":1,"sjlb":"冬令制","jcskkssj":"11:00:00","jcskjssj":"12:00:00","deltag":false,"remark":"4","id":129,"jcmc":"第四节"},{"jcdm":5,"org_id":1,"sjlb":"冬令制","jcskkssj":"14:00:00","jcskjssj":"14:45:00","deltag":false,"remark":"5","id":130,"jcmc":"第五节"},{"jcdm":6,"org_id":1,"sjlb":"冬令制","jcskkssj":"15:00:00","jcskjssj":"15:45:00","deltag":false,"remark":"6","id":131,"jcmc":"第六节"},{"jcdm":7,"org_id":1,"sjlb":"冬令制","jcskkssj":"16:00:00","jcskjssj":"16:45:00","deltag":false,"remark":"7","id":132,"jcmc":"第七节"}],"count":7},"code":0,"kcInfo":{"msg":"查询成功","code":0,"data":[{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"10010000010","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":54334,"kcmc":"体育","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"BH3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56345,"kcmc":"班会","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"YL4","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56336,"kcmc":"音乐","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"10020003640","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":52538,"kcmc":"美术","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"DF","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56347,"kcmc":"地方","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"DF","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56347,"kcmc":"地方","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"TH","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56349,"kcmc":"体活","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"ZW","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56344,"kcmc":"作文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"ZW","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56344,"kcmc":"作文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"10010000010","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":54334,"kcmc":"体育","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"ZH","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56341,"kcmc":"综合","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"KX4","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56338,"kcmc":"科学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"TH","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56349,"kcmc":"体活","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"YL4","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":56336,"kcmc":"音乐","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"10020003640","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":52538,"kcmc":"美术","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"XZ3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56340,"kcmc":"写字","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"XB2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56348,"kcmc":"校本","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"10010000010","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":54334,"kcmc":"体育","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-27","kcdm":"BH3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56345,"kcmc":"班会","skcddm":"110110"}],"count":41}}'
      var data =
        '{"msg":"操作成功","jcInfo":{"msg":"查询成功","code":0,"data":[{"jcdm":1,"org_id":1,"sjlb":"冬令制","jcskkssj":"08:00:00","jcskjssj":"08:45:00","deltag":false,"remark":"1","id":126,"jcmc":"第一节"},{"jcdm":2,"org_id":1,"sjlb":"冬令制","jcskkssj":"09:00:00","jcskjssj":"09:45:00","deltag":false,"remark":"2","id":127,"jcmc":"第二节"},{"jcdm":3,"org_id":1,"sjlb":"冬令制","jcskkssj":"10:00:00","jcskjssj":"10:45:00","deltag":false,"remark":"3","id":128,"jcmc":"第三节"},{"jcdm":4,"org_id":1,"sjlb":"冬令制","jcskkssj":"11:00:00","jcskjssj":"12:00:00","deltag":false,"remark":"4","id":129,"jcmc":"第四节"},{"jcdm":5,"org_id":1,"sjlb":"冬令制","jcskkssj":"14:00:00","jcskjssj":"14:45:00","deltag":false,"remark":"5","id":130,"jcmc":"第五节"},{"jcdm":6,"org_id":1,"sjlb":"冬令制","jcskkssj":"15:00:00","jcskjssj":"15:45:00","deltag":false,"remark":"6","id":131,"jcmc":"第六节"},{"jcdm":7,"org_id":1,"sjlb":"冬令制","jcskkssj":"16:00:00","jcskjssj":"16:45:00","deltag":false,"remark":"7","id":132,"jcmc":"第七节"}],"count":7},"code":0,"kcInfo":{"msg":"查询成功","code":0,"data":[{"skcdmc":"信息1班","skrq":"2018-12-20","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息2班","skrq":"2018-12-20","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息3班","skrq":"2018-12-20","kcdm":"10010000010","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":54334,"kcmc":"体育","skcddm":"110110"},{"skcdmc":"信息4班","skrq":"2018-12-20","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息5班","skrq":"2018-12-20","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息6班","skrq":"2018-12-20","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息7班","skrq":"2018-12-20","kcdm":"BH3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56345,"kcmc":"班会","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-21","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息2班","skrq":"2018-12-21","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息3班","skrq":"2018-12-21","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息4班","skrq":"2018-12-21","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息5班","skrq":"2018-12-21","kcdm":"YL4","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56336,"kcmc":"音乐","skcddm":"110110"},{"skcdmc":"信息6班","skrq":"2018-12-21","kcdm":"10020003640","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":52538,"kcmc":"美术","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"DF","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56347,"kcmc":"地方","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"DF","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56347,"kcmc":"地方","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-24","kcdm":"TH","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56349,"kcmc":"体活","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"ZW","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56344,"kcmc":"作文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"ZW","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56344,"kcmc":"作文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"10010000010","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":54334,"kcmc":"体育","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"ZH","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":56341,"kcmc":"综合","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"PD","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56337,"kcmc":"品德","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"KX4","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56338,"kcmc":"科学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-25","kcdm":"TH","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56349,"kcmc":"体活","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"SX2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"1","jxrwid":56335,"kcmc":"数学","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"YW2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"2","jxrwid":56334,"kcmc":"语文","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"YL4","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"3","jxrwid":56336,"kcmc":"音乐","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"10020003640","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"4","jxrwid":52538,"kcmc":"美术","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"XZ3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"5","jxrwid":56340,"kcmc":"写字","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"ZX3","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"6","jxrwid":56346,"kcmc":"自习","skcddm":"110110"},{"skcdmc":"信息1班","skrq":"2018-12-26","kcdm":"XB2","skjs":"xxxxxx12","skbj":"xxbj2","skjsxm":"xx2","skbjmc":"xx二班","jc":"7","jxrwid":56348,"kcmc":"校本","skcddm":"110110"}],"count":41}}';
      data = $.parseJSON(data);
      if (data.code == "0") {
        if (data.jcInfo.code == "0") {
          _this.seriesSet = data.jcInfo.data;
        } else {
          _this.$toast(data.jcInfo.msg);
        }
        //console.log('before:',JSON.stringify(_this.monSetTemp))
        if (data.kcInfo.code == "0") {
          //初始化课程
          for (var j = 0; j < data.jcInfo.data.length + 1; j++) {
            var unit = {};

            if (j == _this.napIndex) {
              //午休
              unit = Object.assign({
                skcdmc: "",
                skrq: "",
                kcdm: "nap",
                skjs: "",
                skbj: "",
                skjsxm: "",
                skbjmc: "",
                jc: "",
                jxrwid: "",
                kcmc: "",
                skcddm: "",
                conceal: false,
                expire: false
              });
            } else if (j < _this.napIndex) {
              //早上
              unit = Object.assign({
                skcdmc: "",
                skrq: "",
                kcdm: "",
                skjs: "",
                skbj: "",
                skjsxm: "",
                skbjmc: "",
                jc: j + 1,
                jxrwid: "",
                kcmc: "",
                skcddm: "",
                conceal: false,
                expire: false
              });
            } else {
              unit = Object.assign({
                //下午
                skcdmc: "",
                skrq: "",
                kcdm: "",
                skjs: "",
                skbj: "",
                skjsxm: "",
                skbjmc: "",
                jc: j,
                jxrwid: "",
                kcmc: "",
                skcddm: "",
                conceal: false,
                expire: false
              });
            }


            _this.monSet.push(unit);
             _this.tueSet.push(unit);
             _this.wenSet.push(unit);
            _this.thiSet.push(unit);
            _this.friSet.push(unit);
            _this.satSet.push(unit);
            _this.sunSet.push(unit);
          }

          //console.log('initial:',JSON.stringify(_this.wenSet))

          //初始化课程end
          _this.colorM = new Map();
          var count = 0;
          //data.kcInfo.data.forEach(function(dom,i){
          _this.tempSet.forEach(function(dom, i) {
            if (!_this.colorM.has(dom.kcdm)) {
              //每个课程配一个颜色
              count++;
              _this.colorM.set(dom.kcdm, _this.colorSet[count]);
            }


            //每天一个集合
            switch (new Date(dom.skrq).getDay()) {

              case 1:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.monSet[index] = dom;
                } else {
                  _this.monSet[dom.jc] = dom;
                }
                break;
              case 2:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.tueSet[index] = dom;
                } else {
                  _this.tueSet[dom.jc] = dom;
                }
                break;
              case 3:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.wenSet[index] = dom;
                } else {
                  _this.wenSet[dom.jc] = dom;
                }
                break;
              case 4:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.thiSet[index] = dom;
                } else {
                  _this.thiSet[dom.jc] = dom;
                }

                break;
              case 5:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.friSet[index] = dom;
                } else {
                  _this.friSet[dom.jc] = dom;
                }
                break;
              case 6:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.satSet[index] = dom;
                } else {
                  _this.satSet[dom.jc] = dom;
                }
                break;
              case 0:
                var index = dom.jc - 1;
                if (index < _this.napIndex) {
                  _this.sunSet[index] = dom;
                } else {
                  _this.sunSet[dom.jc] = dom;
                }
                break;
            }
          });

          //console.log(JSON.stringify(_this.wenSet))

          // _this.monSet=_this.removeRepeat(_this.monSet);
          //_this.tueSet=_this.removeRepeat(_this.tueSet);
          // _this.wenSet=_this.removeRepeat(_this.wenSet);
          // _this.thiSet=_this.removeRepeat(_this.thiSet);
          // _this.friSet=_this.removeRepeat(_this.friSet);
          // _this.satSet=_this.removeRepeat(_this.satSet);
          // _this.sunSet=_this.removeRepeat(_this.sunSet);
          //console.log(JSON.stringify(_this.tueSet),'***')
          //去重
          // _this.duplicate(_this.monSet);
          //  _this.duplicate(_this.tueSet);
          // _this.duplicate(_this.wenSet);
          // _this.duplicate(_this.thiSet);
          // _this.duplicate(_this.friSet);
          _this.duplicate(_this.satSet);
          //_this.duplicate(_this.sunSet);
        } else {
          _this.$toast(data.kcInfo.msg);
        }
      } else {
        _this.$toast(data.msg);
      }
    },

    removeRepeat(list) {
      var beforeList = [];
      list.forEach(function(item, index) {
        beforeList.push(item);
      });
      list.forEach(function(item, index) {
        var count = 0;
        item.rowspan = 1;
        list.forEach(function(item1, index1) {
          if (item.kcdm == item1.kcdm) {
            //连续课程课程代码相同
            count++;
          } else {
            list.splice(index + 1, count - 1); //删除重复数据
            if (count > 0) {
              list[index].rowspan = count; //表格占行数
            }
            count = 0;
          }
        });
      });

      beforeList.forEach(function(item2, index2) {
        console.log(item2, index2);
        var isExist = false;
        list.forEach(function(item3, index3) {
          if (item2.kcdm == item3.kcdm && item2.jc == item3.jc) {
            isExist = true;
            item2.rowspan = item3.rowspan;
          }
        });
        item2.isShow = isExist;
      });
      console.log(beforeList);
      return beforeList;
    },

    //合并相同元素
    duplicate(list) {
      var _this = this;
      //console.log('before:',JSON.stringify(list))
      var temp = [];
      var newList = [];
      list.forEach(function(dom, i) {
        if (temp.indexOf(dom.kcdm) == -1) {
          //console.log(temp.indexOf(dom.kcdm),dom.kcdm,'===')
          //没重复
          temp.push(dom.kcdm);
          newList.push(dom);
        } else {
          //重复数据--连续或不间断
          console.log("出现重复", i, list[i].kcmc,'----');
          //console.log(JSON.stringify(list))
          var napCount = false;
          var repeat = [];
          var count = 0;
          list.forEach(function(dom1, i1) {
            //判断是否连续
            if (dom1.kcdm == dom.kcdm) {
              //不连续,检查是否因为午休而不连续
              count++;
              repeat.push(i1);

              //如果是最后一个
              //----------------------------------
              if (i1 == list.length - 1) {
                if (
                  dom1.kcdm == "nap" &&
                  list[i1 + 1].kcdm == dom.kcdm &&
                  _this.napIndex > 0
                ) {
                  //不连续,查看是否因为午休中断,如果当前是午休且下一个元素是连续的,就继续count++
                  count++;
                  napCount = true;
                  //console.log(list[i1+1].kcdm==dom.kcdm,count)
                } else {
                  if (count > 1 && repeat.indexOf(i) > -1) {
                    //有连续元素 //判断出现重复元素脚标是否在 连续的脚标之内 在范围内说明是连着的，不在范围内说明有连着的也有断

                    //console.log(repeat,i,'----',)

                    if (napCount) {
                      //count 包含午休 所以count--
                      //console.log(JSON.stringify(list))

                      if (list[i].conceal) {
                        return;
                      }

                      var x = 0;
                      if (i-_this.napIndex==1) {
                        x = 1;
                      } else {
                        x = 0;
                      }

                      console.log(
                        "nap",
                        _this.napIndex,
                        "起始角标",
                        i,
                        "有连续元素,数量包含午休",
                        "连续",
                        count,
                        "x:",
                        x
                      );
                      //if(_this.napIndex-1==i)

                      var ccjc = "";
                      for (var re = 0; re < count; re++) {
                        ccjc += i - 1 + re + ",";
                      }
                      list[i - 1 - x].jc = ccjc.substring(0, ccjc.length - 1);
                      //console.log(ccjc)

                      for (var cc = 0; cc < count - 1; cc++) {
                        list[cc + i - x].conceal = true;
                      }

                      //console.log(ccjc,'----------------------',JSON.stringify(list))
                    } else {
                      //count 不包含午休 count 保持不变

                      if (list[i].conceal) {
                        return;
                      }

                      console.log(
                        i1,
                        "有连续元素---count",
                        count,
                        "---",
                        "重现角标",
                        i,
                        list[i - 1].kcmc,
                        list[i - 1].conceal
                      );

                      var ccjc = "";
                      for (var re = 0; re < count; re++) {
                        ccjc += i - 1 + re + ",";
                      }
                      //console.log(ccjc)

                      list[i - 1].jc = ccjc.substring(0, ccjc.length - 1);
                      for (var cc = 0; cc < count - 1; cc++) {
                        list[cc + i].conceal = true;
                      }
                    }
                  }
                  count = 0;
                }
              }
              //--------------------------------------------------
            } else {
              if (
                count>0&&
                dom1.kcdm == "nap" &&
                list[i1 + 1].kcdm == dom.kcdm &&
                _this.napIndex > 0
              ) {
                //不连续,查看是否因为午休中断,如果当前是午休且下一个元素是连续的,就继续count++  morning--afternoon
                count++;
                napCount = true;
                //console.log(list[i1+1].kcdm==dom.kcdm,count)
              } else {
                if (count > 1 && repeat.indexOf(i) > -1) {
                  //有连续元素 //判断出现重复元素脚标是否在 连续的脚标之内 在范围内说明是连着的，不在范围内说明有连着的也有断

                  //console.log(repeat,i,'----',)

                  if (napCount) {
                    //count 包含午休 所以count--
                    //console.log(JSON.stringify(list))

                    if (list[i].conceal) {
                      return;
                    }

                    var x = 0;
                    if (i-_this.napIndex==1) {
                      x = 1;
                    } else {
                      x = 0;
                    }

                    console.log(
                      "nap",
                      _this.napIndex,
                      "起始角标",
                      i,
                      "有连续元素,数量包含午休",
                      "连续",
                      count,
                      "x:",
                      x
                    );
                    //if(_this.napIndex-1==i)

                    var ccjc = "";
                    for (var re = 0; re < count; re++) {
                      ccjc += i - 1 + re + ",";
                    }
                    list[i - 1 - x].jc = ccjc.substring(0, ccjc.length - 1);
                    //console.log(ccjc)

                    for (var cc = 0; cc < count - 1; cc++) {
                      list[cc + i - x].conceal = true;
                      console.log(list[cc+i-x].kcdm,'----')
                    }

                    //console.log(ccjc,'----------------------',JSON.stringify(list))
                  } else {
                    //count 不包含午休 count 保持不变
                    //console.log(JSON.stringify(list))
                    if (list[i].conceal) {
                      return;
                    }

                    console.log(
                      _this.napIndex,
                      "有连续元素---count",
                      count,
                      "---",
                      "重现角标",
                      i,
                      list[i - 1].kcmc,
                      list[i - 1].conceal
                    );

                    var ccjc = "";
                    for (var re = 0; re < count; re++) {
                      ccjc += i - 1 + re + ",";
                    }
                    //console.log(ccjc)

                    list[i - 1].jc = ccjc.substring(0, ccjc.length - 1);
                    for (var cc = 0; cc < count - 1; cc++) {

                      list[cc + i].conceal = true;
                    }
                  }
                }
                count = 0;
              }
            }
          });
        }
      });
    },

    //合并相同元素
    duplicate1(list) {
      var temp = [];
      var newList = [];
      list.forEach(function(dom, i) {
        if (temp.indexOf(dom.kcdm) == -1) {
          //没重复
          temp.push(dom.kcdm);
          newList.push(dom);
        } else {
          //重复数据

          var count = 0;
          list.forEach(function(dom1, i1) {
            if (dom1.kcdm == dom.kcdm && dom.kcdm) {
              count++;
            } else {
              if (count > 0 && !dom.conceal && dom.kcdm == list[i - 1].kcdm) {
                var jc = ""; //拼接重复节次
                for (var rp = 0; rp < count; rp++) {
                  jc += rp + i + ",";
                }

                jc = jc.substring(0, jc.length - 1);

                for (var rp = 0; rp < count - 1; rp++) {
                  list[rp + i].conceal = true;
                }

                list[i - 1].jc = jc; //发现重复的那个元素，的上一个元素已经重复了。所以在前一个元素添加一个节次系列号
              }
              count = 0;
            }
          });
        }
      });
    },

    //隐藏td
    computCc(obj) {
      //console.log(obj.conceal,obj.kcmc)
      if (obj.conceal&&obj.kcdm!='nap') {
        return "conceal";
        //return '';
      } else {
        return "";
      }
    },

    //合并td
    computRs(obj) {
      //console.log(JSON.stringify(obj),'===')
      var series = obj.jc;

      if (obj.jc.length > 1) {
        series = series.split(",");
        return series.length;
      } else {
        return 1;
      }
    },

    //午休样式
    computNap(param) {
      if (param && param.kcdm == "nap") {
        return "nap";
      } else {
        return "";
      }
    },

    //背景色
    comput(param) {
      var _this = this;
      if (param && param.kcdm == "nap") {
        return "background-color:#eee;height:.7rem;border:none";
      } else if (param && param.kcdm && _this.colorM.has(param.kcdm)) {
        return "background-color:" + _this.colorM.get(param.kcdm);
      } else {
        return "";
      }
    },
    //按条件查询
    querying() {
      var _this = this;
      _this.$router.replace("/ttQuery");
    },

    //上一周
    preW() {
      var _this = this;
      _this.weekShift--;
      _this.weekSpanCal();
    },

    //下一周
    nexW() {
      var _this = this;
      _this.weekShift++;
      _this.weekSpanCal();
    },

    //返回当前周
    liveW() {
      var _this = this;
      _this.weekShift = 0;
      _this.weekSpanCal();
    },

    //计算每周起始时间
    weekSpanCal() {
      var _this = this;
      var date = new Date();
      var wDate = date.getDay();
      if (wDate == 0) {
        wDate = 7;
      }
      var curMil = 0;
      var fsMil = 0;
      var fnMil = 0;
      var firstDate = "";
      var lastDate = "";
      var curDate = "";
      curMil = Date.parse(new Date());
      fsMil =
        curMil -
        (wDate - 1) * 24 * 60 * 60 * 1000 +
        _this.weekShift * (24 * 60 * 60 * 1000 * 7);
      fnMil =
        curMil +
        (7 - wDate) * 24 * 60 * 60 * 1000 +
        _this.weekShift * (24 * 60 * 60 * 1000 * 7);
      curDate = date.Format("yyyy-MM-dd");
      firstDate = new Date(fsMil).Format("MM-dd");
      lastDate = new Date(fnMil).Format("MM-dd");
      _this.weekSpan = firstDate + " ~ " + lastDate;
    }
  },

  mounted() {
    var _this = this;
    _this.weekSpanCal();
    //_util.login(localStorage.uid);
    _this.loadInfo();
    //_this.$refs.hr.style.top=_this.$refs.table1.childNodes[1].childNodes[2].offsetTop+'px';
  }
};
</script>
<style scoped>
.page-scroll {
  height: calc(100% - 94px);
}

.page-scroll__content {
  height: 100%;
}

.conceal {
  display: none;
}

.nap {
  height: 0.7rem;
}

.van-nav-bar {
  background-color: rgb(71, 112, 226);
}

.ib {
  display: inline-block;
}

.fl {
  float: left;
}

.weekSwit {
  height: 48px;
  background-color: #eee;
}

.weekSwit .weekSp {
  height: 100%;
  width: 60%;
}

.weekSwit .weekSp .left {
  height: 100%;
  width: 25%;
  text-align: center;
  display: inline-block;
}

.weekSwit .weekSp .left img {
  height: 26px;
  margin-top: 11px;
  transform: rotate(180deg);
}

.weekSwit .weekSp .mid {
  height: 48px;
  line-height: 48px;
  width: 50%;
  text-align: center;
}

.weekSwit .weekSp .mid img {
  height: 26px;
}

.weekSwit .weekSp .right {
  height: 100%;
  width: 25%;
  text-align: center;
}

.weekSwit .weekSp .right img {
  height: 26px;
  margin-top: 11px;
}

.weekSwit .reverse1 {
  height: 100%;
  width: 40%;
}

.weekSwit .reverse {
  height: 100%;
  width: 100%;
}

.weekSwit .reverse .left {
  height: 48px;
  width: 30%;
  line-height: 48px;
  text-align: right;
}

.weekSwit .reverse .left img {
  height: 26px;
  margin-top: 11px;
}

.weekSwit .reverse .right {
  height: 48px;
  line-height: 48px;
  text-align: center;
  width: 70%;
}

.tableWra {
  height: calc(100% - 1rem);
  overflow: scroll;
}

table {
  overflow-x: scroll;
  table-layout: fixed;
  display: table;
  border-spacing: 0px;
}

table thead tr td {
  position: relative !important;
  text-align: center;
  top: 0px;
  background-color: #eee;
}

table thead tr td,
table thead tr td div {
  height: 20px;
  width: 70px;
}

table thead tr td div {
  text-align: center;
  line-height: 1.5rem;
}

td {
  color: black !important;
  height: 100px;
  padding: 2px;
  border: 1px solid rgb(253, 252, 252);
}

td .course {
  width: 100%;
  height: 60px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: break-all;
}

td .room {
  width: 100%;
  height: 15%;
  font-size: 10px;
}

td .teacher {
  width: 100%;
  height: 15%;
  font-size: 10px;
}

hr {
  height: 1px;
  width: 100%;
  background-color: red;
  border: none;
  margin: 0;
  padding: 0;
  position: absolute;
}

.firstCol {
  background-color: #eee;
  position: relative;
}

.liveMark {
  border-bottom: 2px solid #a23;
}

.nap {
  background-color: #eee;
  height: 10px;
  border-collapse: collapse;
  border: none;
  padding: 0 !important;
}
</style>
