import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        forShow:{
            seg:true,
            sc:true,
            tc:true,
            re:true,
        },

        user:{
            fid:'1',
            uid:'2'
        },

        device:'android',

        add:1,

        menuTabShow:false,
        menuTabActive:0
    },
    getters:{
        menuTabShow:state=>state.menuTabShow,
        menuTabActive:state=>state.menuTabActive,
        forShow:state=>state.forShow,
        user:state=>state.user,
        add:state=>state.add,
        device:state=>state.device

    },
    mutations:{
        menuTabShow: (state, status) => state.menuTabShow = status,
        menuTabActive: (state, active) => state.menuTabActive = active,
        forShow:(state, forShow) => state.forShow=forShow,
        add:(state,add)=>state.add=add,
        device:(state,device)=>state.device=device,
        // forShow:(state, object) => {
        //     let keys = Object.keys(object);
        //     for (let i = 0; i < keys.length; i++) {
        //       state.forShow[keys[i]] = object[keys[i]];
        //     }
        //   },
        //menuTabShow:(state,menuTabShow)=>state.menuTabShow=menuTabShow,
        //menuTabActive:(state,menuTabActive)=>state.menuTabActive=menuTabActive,
        user:(state,user)=>state.user=user,

    },
    action:{

    }
})