<template>
  <div>
    <h1>Two</h1>
    <h1>名称:{{name}}</h1>
    <p>价格:{{price}}</p>
    <!-- <p>总价:{{price*num}}</p> -->
    <p>总价:{{count}}</p>

      <p>数量:{{num}}</p>
      <button @click="add">add</button>

    <button @click="getTestData">test</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    console.log("Two");
  },
  computed: {
    ...mapState(["name", "num", "price"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["getTestData"]),
  }
};
</script>
