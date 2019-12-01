import directive from "./directive.js"
import Apis from "@/core/api/apis.js"
import Global from "@/core/global"
import Common from "@/components/common" //fn(){}
// import swiper from "@/components/common/swiper.vue"

import { Button } from 'mint-ui';


export default (Vue)=>{
    directive(Vue);
    Common(Vue);
    Vue.prototype.$eventBus=new Vue();  //$on $emit  {$on:fn(),$emit:fn}
    Vue.prototype.$apis=Apis;       //Apis->   {fn(){}};
    Vue.prototype.$global=Global;
    // Vue.prototype.uname="Msea____";        测试  this.uname
}