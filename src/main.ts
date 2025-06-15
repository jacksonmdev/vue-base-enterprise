import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { Quasar, plugins } from './modules/base/extensions'
import { useAppConfig } from './modules/base/composables'
import App from './App.vue'
import Router from './router'

const app = createApp(App)

app.use(createHead())
app.use(Router)
app.use(Quasar, {
  plugins: plugins,
})

const config = useAppConfig(app)

config.loadCoreUiComponents()
config.setLocal('en', true)
config.setStore()

app.mount('#app')
