<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  //小程序，页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
  onLoad() {
      this.initData()
      console.log('onLoad')
  },

  //vue,在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
  created(){ console.log('created') },

  //vue,在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
  mounted(){ console.log('mounted') },

  //小程序 页面显示/切入前台时触发。
  onShow(){ console.log('onShow') },

  //小程序 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
  onHide(){ console.log('onHide') },

  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  methods: {
    initData(){
      this.logs = ['a', 'b', 'c']
    }
  }

}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
