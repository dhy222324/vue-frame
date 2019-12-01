<template>
  <div>
      <h1>购物车xxxx</h1>
      <ul>
        <li v-for="(item,index) in cartList" :key="index">
          <div>
            <input type="checkbox" v-model="item.bool" @change="count">
            <p>商品名称:{{item.Name}}</p>
            <p>商品单价:{{item.CurrentPrice}}</p>

            <button @click="add(item)">+</button>
            <span>{{item.num}}</span>
            <button>-</button>
            <span>{{item.num*item.CurrentPrice}}</span>
          </div>
          <hr>
        </li>
      </ul>
      <hr/>
      <div>总价:{{allPrice}}</div>
      <div>全选:
         <input type="checkbox" v-model="isBool">
      </div>
  </div> 
</template>

<script>

export default {
  data(){
    return {
      cartList:[],
      allPrice:0,
      isArr:[],
      isBool:false
    }
  },
  mounted(){
    this.cartList=this.$store.state.cartList;
    this.cartList.map((item)=>{
      item.bool=false;
    })
  },
  methods:{
      add(item){
        item.num++;
        this.count();
      },
      count(){
        this.allPrice=0;
        this.isArr=[];
        this.cartList.map((item)=>{
          if(item.bool){
            this.allPrice+=item.num*item.CurrentPrice;
            this.isArr.push(item);
          }
        })
        if(this.isArr.length===this.cartList.length){
          // console.log("all")
          this.isBool=true;
        }else{
           this.isBool=false;
        }

      }


  },

};
</script>
