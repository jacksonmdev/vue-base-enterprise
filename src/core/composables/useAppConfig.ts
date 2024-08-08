import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import type { AppConfig } from 'src/core/types'
import * as Components from 'src/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import en from 'src/core/locales/en.json'

export const useAppConfig = (app: App<Element>) => {
  const config: AppConfig = {
    loadComponents: (): AppConfig => {
      Object.entries(Components).forEach(([name, component]) =>
        app.component(name, component),
      )
      return config
    },

    setLocal: (locale: string): AppConfig => {
      const messages = {
        en: en,
      }

      const i18n = createI18n({
        locale: locale,
        fallbackLocale: 'en',
        messages: messages,
      })

      app.use(i18n)

      return config
    },

    setStore: (): AppConfig => {
      const pinia = createPinia()
      pinia.use(piniaPluginPersistedstate)
      app.use(pinia)

      return config
    },
  }

  return config
}
