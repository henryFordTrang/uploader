import Vue from 'vue';
import Router from 'vue-router';
import henry from './views/home.vue';
import refresh from './views/refresh.vue';
import shapes from './views/shapes.vue';
import video from './views/video.vue';
import table from './views/table.vue';
import divTable from './views/divTable.vue';
import MenuTab from './views/MenuTab.vue';
import mTry from './views/menuTry.vue';
import mTry1 from './views/menuTry1.vue';
import mTry2 from './views/menuTry2.vue';
import switch1 from './views/cstComponent/switch.vue';
import datePicker from './views/datePicker.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/henry',
            name:'henry',
            components: {
                mainKeep: henry,
                menuTab: MenuTab,
                
              }
        },

        {
            path:'/video',
            name:'video',
            components: {
                mainKeep: video,
              }
        },

        {
            path:'/table',
            name:'table',
            components: {
                mainKeep: table,
              }
        },

        {
            path:'/divTable',
            name:'divTable',
            components: {
                mainKeep: divTable,
              }
        },



        {
            path:'/shapes',
            name:'shapes',
            components: {
                mainKeep: shapes,
              }
        },

        {
            path:'/refresh',
            name:'refresh',
            components: {
                mainKeep: refresh,
                //menuTab: MenuTab,
                
              }
        },


        {
            path:'/datePicker',
            name:'datePicker',
            components: {
                sub: datePicker,
                menuTab: MenuTab
              }
        },

        {
            path:'/switch1',
            name:'switch1',
            components: {
                mainKeep: switch1,
                
              }
        },

        {
            path:'/mTry',
            name:'mTry',
            components: {
                sub: mTry,
                menuTab: MenuTab
              }
        },

        {
            path:'/mTry1',
            name:'mTry1',
            //component:henry
            components: {
                mainKeep: mTry1,
                menuTab: MenuTab
              }
        },

        {
            path:'/mTry2',
            name:'mTry2',
            //component:henry
            components: {
                mainKeep: mTry2,
                menuTab: MenuTab
              }
        },

        {
            path:'/MenuTab',
            name:'MenuTab',
            component:MenuTab
        },

        {
            path:'*',
            name:'error',
            components: {
                mainKeep: table,
                //menuTab: MenuTab
              }
        }
    ]
})