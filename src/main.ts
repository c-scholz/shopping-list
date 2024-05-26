import './assets/main.css'
import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/themes/md-dark-indigo/theme.css'

import App from './App.vue'

registerSW({ immediate: true })

createApp(App)
  .use(PrimeVue)
  .component('Button', Button)
  .component('Checkbox', Checkbox)
  .component('FloatLabel', FloatLabel)
  .component('InputText', InputText)
  .mount('#app')