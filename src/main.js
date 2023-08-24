import Vue from 'vue'
import App from './App.vue'
import lbwUI from 'my-ui-lbw'
Vue.config.productionTip = false
Vue.use(lbwUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
