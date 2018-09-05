<script>
export default {
  created () {
    console.log('小程序启动啦')
    var sysinfo=wx.getSystemInfoSync();
    console.log(sysinfo);
  }
}
</script>

<style lang=scss>

/*在这里引入全局公共的CSS,并且style标签不加scoped,所有页面都有效*/
@import '@/common/css/base.scss';

.container{
  padding: 10rpx 0rpx;
  background: $page-bg;
}

</style>
