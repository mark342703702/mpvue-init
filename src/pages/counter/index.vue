<template>
  <div class="counter-warp">
    <p>{{title}} ：{{ count }}</p>
    <button @click="increment">增加1</button>
    <button @click="decrement">减少1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "Vuex counter"
    }
  },
  computed: {
    count () {
      return this.$store.getters.GET_COUNT;
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>

<style lang=scss>

@import "@/common/css/base.scss";
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: $page-bg;
  border: 1px solid $page-bg;
}

</style>
