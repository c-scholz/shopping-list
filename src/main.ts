import './assets/main.scss'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './settings/routing'
import { pinia } from './settings/store'
import PrimeVue from 'primevue/config'

registerSW({ immediate: true })

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue)
  .mount('#app')