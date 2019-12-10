// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'

import router from './router.js'
import store from './store/index.js'
import moment from 'moment'

// import 'tailwindcss/dist/tailwind.min.css'

Vue.use(VueMaterial)
// Vue.use(VueResource)
Vue.config.productionTip = false

moment.locale('ru')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
