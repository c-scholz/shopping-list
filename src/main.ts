import './assets/main.scss'
import PrimeVue from 'primevue/config'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/settings/routing'

registerSW({ immediate: true })

createApp(App)
  .use(router)
  .use(PrimeVue)
  .mount('#app')