<template>
  <div class="container">
    <card :text="motto"></card>
    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <view style="width:200rpx;height:200rpx;background-color:#00ff00;margin-top:100rpx;margin-left:275rpx;">ic</view>
    <view style="width:100px;height:100px;background-color:#00ff00;margin-top:100px;margin-left:100px;">ic</view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World'
    }
  },

  components: {
    card
  },

  created () {
    
  }
}
</script>

<style lang=scss scoped>

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
