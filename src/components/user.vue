<template>
  <div>
      <h1>userInfo</h1>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import userInfo from "@/data/data.json"


export default {
  mounted(){
      // console.log(userInfo);

      


  },
  computed:{
    ...mapState("indexModel",["msg"]),
  },
  methods:{
    ...mapMutations("indexModel",["setName"])
  }
};
</script>
