import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { Quasar, plugins } from './modules/base/extensions'
import { useAppConfig } from './modules/base/composables'
import App from './App.vue'
import { setRouter } from './router'

const app = createApp(App)
const router = setRouter()

app.use(createHead())
app.use(router)
app.use(Quasar, {
  plugins: plugins,
})

const config = useAppConfig(app)

config.loadCoreUiComponents()
config.setLocal('en', true)
config.setStore()

router.isReady().then(() => {
  app.mount('#app')
})
