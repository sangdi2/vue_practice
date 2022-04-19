import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.directive('color',function(el,bingding){
  el.style.color=bingding.value
})