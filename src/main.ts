import './assets/main.css'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './settings/routing'
import { pinia } from './settings/store'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Calendar from 'primevue/calendar'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

registerSW({ immediate: true })

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue)
  .component('Button', Button)
  .component('Card', Card)
  .component('Checkbox', Checkbox)
  .component('FloatLabel', FloatLabel)
  .component('Calendar', Calendar)
  .component('InputText', InputText)
  .mount('#app')