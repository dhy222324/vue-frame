<template>
  <div>
    <!-- logo -->
    <div>
      <p>bsk</p>
    </div>
    <!-- 轮播图组件 -->
    <div v-if="SwiperBannerList.length!==0">
      <swiper :config="{id:'banner',info:{pagination:'.swiper-pagination'}}">
        <div class="swiper-slide" v-for="(item,index) in SwiperBannerList" :key="index">
          <img class="banner_img" :src="item.ImgUrl" />
        </div>
      </swiper>
    </div>

    <div>
      <div v-for="(item,index) in SaleList" :key="index">
        <img class="title_img" :src="item.TabImgUrl" alt />

        <swiper :config="{id:'banner'+index,info:{  slidesPerView: 2.2,spaceBetween:30}}">
          <div class="swiper-slide" v-for="(value,idx) in item.CakeList" :key="idx">
            <img class="banner_img" :src="value.ImgUrl" />
            <span>{{value.Name}}</span>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SwiperBannerList: [], //ImgUrl
      SaleList: [] //TabImgUrl,CakeList
    };
  },
  mounted() {
    this.$apis.getIndexData().then(res => {
      var res = res.data.Tag.mainresult;
      console.log(res);
      var SaleList = res.SaleList;
      SaleList.map(item => {
        item.CakeList = JSON.parse(item.CakeList);
        item.CakeList.map(item => {
          item.ImgUrl = this.$global.setImgUel(item);
        });
      });

      this.SaleList = SaleList;
      this.SwiperBannerList = res.SwiperBannerList;
    });
  }
};
</script>

<style lang="scss" scoped>
.banner_img {
  width: 100%;
  height: 100%;
}
.title_img {
  width: 100%;
  height: r(142);
}
</style>
