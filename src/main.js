import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false


import './assets/styles/common.scss'
import './assets/styles/fugai.scss'
import './assets/styles/_element-color.scss';
import './assets/font/style.css'
import './assets/font1/style.css'
import './assets/font-set/style.css'
import './assets/styles/popup.scss'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
