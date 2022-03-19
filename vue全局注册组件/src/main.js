import Vue from 'vue'
import App from './App.vue'

import count from './components/count.vue'

//注册全局组件
Vue.component('mycount',count)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
