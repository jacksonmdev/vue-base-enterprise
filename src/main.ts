import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import { Quasar, plugins } from './modules/base/extensions'
import { setRouter } from './router'
import { createPinia } from 'pinia'
import { loadBootFiles } from './boot'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)
const router = setRouter()
const pinia = createPinia().use(piniaPluginPersistedstate)

const setupApp = async () => {
  app
    .use(pinia)
    .use(router)
    .use(Quasar, { plugins })
    .use(createHead())

  await loadBootFiles(app)

  await router.isReady()
  app.mount('#app')
}

setupApp().catch((err) => {
  console.error('Failed to start application:', err)
})
