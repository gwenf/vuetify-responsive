import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'

// styles
import './styles/index.sass'

// plugins
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
