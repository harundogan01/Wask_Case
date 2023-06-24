import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import VueApexCharts from "vue3-apexcharts";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(VueApexCharts)
  .mount('#app')
