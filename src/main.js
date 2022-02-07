import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Dayjs from 'vue-dayjs'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GMAPS_KEY
  },
  installComponents: true
})

Vue.use(Dayjs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
