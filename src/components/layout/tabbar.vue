<template>
  <div class="home">
    <mt-tabbar v-model="selected">
      <mt-tab-item  v-for="(item,index) in pathList" :key="index" @click.native="selectIco(index)">
        <img
          slot="icon"
          :src="`${item.ImgUrl}${num===index?'2.png':'1.png'}`"
        />
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pathList: [
        { ImgUrl: "https://res.bestcake.com/m-images/ww/foot/foot-menu-a-", path: "/index" },
        { ImgUrl: "https://res.bestcake.com/m-images/ww/foot/foot-menu-b-", path: "/list" },
        { ImgUrl: "https://res.bestcake.com/m-images/ww/foot/foot-menu-c-", path: "/cart" },
        { ImgUrl: "https://res.bestcake.com/m-images/ww/foot/foot-menu-d-", path: "/user" }
      ],
      selected:"",
      num:0
    };
  },
  mounted(){
  },
  methods: {
    selectIco(index){
        this.num=index;
        this.$router.push(this.pathList[index].path);
    }
  }
};
</script>
<style lang="scss" scoped>
.btm_bar {
  position: fixed;
  bottom: 0;
}
</style>
