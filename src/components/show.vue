<template>
  <div>
    <h1>Three</h1>
    <swiper :config="{id:'show_banner',info:{pagination:'.swiper-pagination'}}">
      <div class="swiper-slide" v-for="(item,index) in swipers" :key="index">
        <img style="width:100%;height:100%" :src="banners+`${item}.jpg`" />
      </div>
    </swiper>

    <div v-if="isLoad">
      甜度Sweet
      <img
        :src="`https://res.bestcake.com/m-images/ww/jz/tiandu_${info.Sweet||info.CakeType[0].Sweet}.png`"
        alt
      />
    </div>

    <div>
      <li v-for="(item,index) in types" :key="index">
        <button @click="userSelct(index)">{{item.Size}}</button>
      </li>
    </div>
    <hr />
    <div>
      <button @click="add">+</button>
      <span>{{num}}</span>
      <button>-</button>
    </div>
    <span>总价:{{currentType.CurrentPrice*num||0}}</span>
    <button @click="isAdd">购买</button>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      params: {},
      //轮播
      swipers: [1, 2, 3, 4],
      //图片
      banners: "",
      //type
      types: [],
      //名称价格之类
      info: {},
      isLoad: false,
      currentType: {},
      num: 1
    };
  },
  mounted() {
    this.params = this.$route.query;
    this.params.city = this.$store.state.city;
    /*
    ID: "1457"
Name: "一见倾心"
SupplyNo: "NS-0083-1"
city: "上海"
*/

    this.pageInit();
  },
  methods: {
    pageInit() {
      var currentPro;

      if (this.params.SupplyNo.indexOf("NS") !== -1) {
        this.banners = this.setImgUel("ns-detail");
        currentPro = this.$apis.getShowDataOne({
          Name: this.params.Name,
          m: "GetNSCakeByName"
        });
      } else if (this.params.SupplyNo.indexOf("KSK") !== -1) {
        this.banners = this.setImgUel("jd-detail");
        currentPro = this.$apis.getShowDataTwo({
          City: this.params.city,
          ProName: this.params.Name,
          c: "Product",
          m: "GetCakeByName"
        });
      } else if (this.params.SupplyNo.indexOf("JZ") !== -1) {
        this.banners = this.setImgUel("jz-detail");
        currentPro = this.$apis.getShowDataTwo({
          City: this.params.city,
          ProName: this.params.Name,
          c: "IndexCenter",
          m: "GetjzCakeInfo"
        });
      } else if (this.params.SupplyNo.indexOf("RP") !== -1) {
        this.banners = this.setImgUel("rp-detail");
        currentPro = this.$apis.getShowDataOne({
          Name: this.params.Name,
          m: "GetRuPCakeByName"
        });
      }

      currentPro.then(res => {
        var res = res.data.Tag;

        if (res.length) {
          res.map(item => {
            if (item.City == this.params.city) {
              this.types.push(item);
            }
          });
          if (this.types.length === 0) {
            this.types = res;
          }
          this.info = this.types[0];
        } else {
          this.types = res.infos.CakeType;
          this.info = res.infos;
        }
        this.isLoad = true;
        this.userSelct(0);
      });
    },
    userSelct(index) {
      this.currentType = this.types[index];
      console.log(this.currentType);
    },
    add() {
      this.num++;
    },
    isAdd() {
      var temp = {
        ID: this.currentType.Id||this.currentType.ID,
        Name: this.params.Name,
        CurrentPrice: this.currentType.CurrentPrice,
        ImgUrl: this.params.ImgUrl,
        Size: this.currentType.Size,
        num:this.num
      };

      MessageBox.confirm("确认加入购物车?").then(action => {
        // console.log("run");
        this.$store.commit("add",temp);
      }).catch(() => {
          console.log("No");
        });
    },
    setImgUel(no) {
      return `https://res.bestcake.com/m-images/${no}/${this.params.Name}/${this.params.Name}-`; //1.jpg
    }
  }
};
</script>
