import { createApp } from 'vue'
import { Quasar, plugins } from './core/extensions'
import { useAppConfig } from './core/composables'
import App from './App.vue'
import Router from './router'

const app = createApp(App)

app.use(Router)
app.use(Quasar, {
  plugins: plugins,
})

const config = useAppConfig(app)
config.loadComponents()
config.setLocal('en')
config.setStore()

app.mount('#app')
