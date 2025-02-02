import './style.css'
// import { createApp } from 'vue'
// import AppVue from './App.vue'
import AppReact from './App.tsx'

// createApp(AppVue).mount('#app')

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app')!)
root.render(
  <AppReact />
)