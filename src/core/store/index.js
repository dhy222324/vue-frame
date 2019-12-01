import Vue from "vue";
import Vuex from "vuex";
import apis from "@/core/api/apis";

import Store from "storejs";

Vue.use(Vuex); 





export default new Vuex.Store({
  state: {
    city: "上海",
    cartList:Store.get("cartList")||[]
  },
  mutations: {
    add(state,data){
      var bool=true;

      state.cartList.map((item)=>{
        // 重复

        if(item.ID===data.ID){
          // 两种情况   ++ +=
          // 先实现 list 在实现  show
          if(data.num>1){
             item.num=item.num+data.num;
             bool=false;
          }else{
            item.num++;
            bool=false;
          }
        }

        // 不重复  不处理

      })


      if(bool){
        // 新增数据    ||
        data.num=data.num||1;
        state.cartList.push(data);
      }
      Store.set("cartList",state.cartList)
      //存入store
    },
    test(state){
      console.log(state.cartList)
    }
  },
  getters: {},
  actions: {}
});
