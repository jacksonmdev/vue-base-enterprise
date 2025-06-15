import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { Quasar, plugins } from './modules/base/extensions'
import { useAppConfig } from './modules/base/composables'
import { setRouter } from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)
const router = setRouter()
const pinia = createPinia().use(piniaPluginPersistedstate)

const setupApp = () => {
  app
    .use(pinia)
    .use(router)
    .use(Quasar, { plugins })
    .use(createHead())

  const config = useAppConfig(app)
  config.setCoreUiComponents().setLocal()

  router.isReady().then(() => app.mount('#app'))
}

setupApp()
