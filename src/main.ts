import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { Quasar, plugins } from './modules/base/extensions'
import { useAppConfig } from './modules/base/composables'
import { setRouter } from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const router = setRouter()
const pinia = createPinia().use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(Quasar, {
  plugins: plugins,
})
app.use(createHead())

useAppConfig(app)
.loadCoreUiComponents()
.setLocal('en')

router.isReady().then(() => {
  app.mount('#app')
})
