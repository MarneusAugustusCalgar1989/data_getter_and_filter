import './assets/main.css'

import { createApp } from 'vue'
import GetDataComp from './GetDataComp.vue'
import { PrimeVue } from '@primevue/core'
import Aura from '@primeuix/themes/aura'

const app = createApp(GetDataComp)
app
  .use(PrimeVue, { theme: { preset: Aura } })

  .mount('#get_data_comp')
