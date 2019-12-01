<template>
  <div>
    <div class="table">
      <button @click="selecData(1)" :class="{active:num==1}">自营</button>
      <button @click="selecData(2)" :class="{active:num==2}">贝式严选</button>
    </div>
    <div>
      <div class="title">
        <ul>
          <li v-for="(item,index) in listData" :key="index" @click="itemData(index)">
            <button>{{item.title}}</button>
          </li>
        </ul>
      </div>

      <hr/>
      <div class="goods">
        <ul>
          <li v-for="(item,index) in goods" :key="index" style="float:left">
            <img :src="item.ImgUrl" style="width:100px;height:100px;" @click="toPath(item)"/>
            <h1>{{item.Name}}</h1>
            <button @click="add(item)">购买</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsLIst: [
        { title: "女神", mark: "NS", list: [] }, //0
        { title: "经典", mark: "KSK", list: [] }, //1
        { title: "伴手礼", mark: "JZ", list: [] }, //2

        { title: "乳品", mark: "RP", list: [] } //0
      ],
      listData: [],
      goods: [],
      num:1
    };
  },
  mounted() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      this._getListData(res => {
        var res = res.data.Tag.cakelist;

        this.goodsLIst.map((item, index) => {
          res.map(it => {
            if (it.SupplyNo.indexOf(item.mark) !== -1) {
              item.list.push(it);
              it.ImgUrl = this.$global.setImgUel(it);
            }
          });
        });
        this.selecData(1);
        this.itemData(0);
      });
    },
    selecData(status) {
      this.num=status;
      if (status === 1) {
        this.listData = this.goodsLIst.slice(0, 3);
      } else {
        this.listData = this.goodsLIst.slice(3);
        this.itemData(0);
      }
    },
    itemData(index) {
      this.goods = this.listData[index].list;
    },
    add(item){
      var temp={
        ID:item.ID,
        Name:item.Name,
        CurrentPrice:item.CurrentPrice,
        ImgUrl:item.ImgUrl,
        Size:item.Size
      }
      
      this.$store.commit("add",temp);
      // console.log(temp);
    },
    toPath(item){
      this.$router.push({path:"/show",query:{SupplyNo:item.SupplyNo,Name:item.Name,ID:item.ID,ImgUrl:item.ImgUrl}});
    },
    _getListData(callBack) {
      this.$apis.getListData().then(res => {
        callBack(res);
      });
    }
  }
};
</script>
<style lang="scss">
  .active{
    background:red;
  }
</style>