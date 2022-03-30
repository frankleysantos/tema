import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import moment from 'moment';
Vue.prototype.moment = moment 

import VueExcelXlsx from "vue-excel-xlsx";
Vue.use(VueExcelXlsx);

import VueHtml2pdf from 'vue-html2pdf'
Vue.use(VueHtml2pdf)

import Snotify from 'vue-snotify'
import "vue-snotify/styles/material.css";
Vue.use(Snotify)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
