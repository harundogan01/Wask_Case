import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/tailwind.css'
import VueApexCharts from "vue3-apexcharts";
import 'vuetify/styles'
import Vuetify from 'vuetify'

createApp(App).use(store).use(VueApexCharts).use(Vuetify).mount('#app')
