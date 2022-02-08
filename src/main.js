import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Dayjs from 'vue-dayjs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAPS_KEY
  },
  installComponents: true
})
Vue.use(VueAxios, axios)
Vue.use(Dayjs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
