<template>
  <van-tabbar class="menu-tab"                      
              :fixed="false"
              v-if="menuTabShow"
              :value="menuTabActive"
              @change="menuTabChange">

    
    <van-tabbar-item v-if="forShow.seg" @click="segAtt">
      <span class="menu-tab__text">年段考勤</span>
      <img slot="icon" class="menu-tab__icon--normal" src="../assets/img/seg/abs.png">
      <img slot="icon" class="menu-tab__icon--active" src="../assets/img/seg/flag.jpg">
    </van-tabbar-item>

    <van-tabbar-item v-if="forShow.sc" @click="schoolAtt">
      <span class="menu-tab__text">全校考勤</span>
      
      <img slot="icon" class="menu-tab__icon--normal" src="../assets/img/seg/abs.png">
      <img slot="icon" class="menu-tab__icon--active" src="../assets/img/seg/flag.jpg">
    </van-tabbar-item>

    <van-tabbar-item v-if="forShow.tc" @click="teachersAtt">
      <span class="menu-tab__text">教师考勤</span>
      <img slot="icon" class="menu-tab__icon--normal" src="../assets/img/seg/abs.png">
      <img slot="icon" class="menu-tab__icon--active" src="../assets/img/seg/flag.jpg">
    </van-tabbar-item>

    <van-tabbar-item v-if="forShow.re" @click="replenish">
      <span class="menu-tab__text">考勤补登</span>
      <img slot="icon" class="menu-tab__icon--normal" src="../assets/img/seg/abs.png">
      <img slot="icon" class="menu-tab__icon--active" src="../assets/img/seg/flag.jpg">
    </van-tabbar-item>

    
  </van-tabbar>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";

  export default {
    // watch: {
    //   "userRole": function (newV, oldV) {
    //     // 角色对应菜单
    //     switch (newV) {
    //     //  班主任
    //     case "classTeacher":
    //       this.setforShow({
    //         segment: true,
    //         schoolAttendance: true,
    //         teacherAttendance: true,
    //         attendanceFill: true
    //       });
         
    //       break;

    //     }
    //   }
    // },
    
    computed: mapGetters(["user", "forShow","menuTabShow","menuTabActive"]),
    methods: {
      // ...mapMutations({
      //   setMenuTabShow: "menuTabShow",
      //   setMenuTabActive: "menuTabActive",
      //   setMenuTabItemShow: "menuTabItemShow"
      // }),
      menuTabChange (active) {
        
        //this.setMenuTabActive(active);
        
      },
      schoolAtt(){
        this.$router.replace('./mTry');
      },
      segAtt(){
        this.$router.replace('./henry')
      },
      teachersAtt(){
        this.$router.replace('./mTry1');
        //this.$toast('还没开通')
        //this.$router.replace('./teacherAttendance')
      },

      replenish(){
        this.$router.replace('./mTry2');
        //this.$toast('还没页面sorry')
        //this.$router.replace('./xxx')
      },

      checkParam(){
        
      }
    },

    mounted(){
      this.checkParam();
    }
  };
</script>

<style scoped>
  .menu-tab {
    z-index: 100;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    overflow: hidden;
    /*transition: bottom 0.3s ease-in-out;*/
  }

  .menu-tab__text {
    color: #bbb;
  }

  .van-tabbar-item--active .menu-tab__text {
    color: #242424;
  }

  .van-tabbar-item .menu-tab__icon--normal {
    display: block;
  }

  .van-tabbar-item--active .menu-tab__icon--normal {
    display: none;
  }

  .van-tabbar-item .menu-tab__icon--active {
    display: none;
  }

  .van-tabbar-item--active .menu-tab__icon--active {
    display: block;
  }
</style>
