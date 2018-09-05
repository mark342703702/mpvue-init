import Vue from 'vue'
import App from './App'
import store from '@/store/index'

Vue.config.productionTip = false
App.mpType = 'app'

// 挂载全局的store
Vue.prototype.$store = store

//配置 后端统一的请求路径
Vue.prototype.$server = 'http://localhost:3000'

//...等等

const app = new Vue(App)
app.$mount()
