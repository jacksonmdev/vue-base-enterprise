import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { AppConfig } from 'modules/base/types'
import * as CoreUiComponents from 'modules/base/ui'
import enLocale from 'src/locales/en.json'

export const useAppConfig = (app: App<Element>) => {
  const config: AppConfig = {
    loadCoreUiComponents: (): AppConfig => {
      Object.entries(CoreUiComponents).forEach(([name, component]) =>
        app.component(name, component),
      )
      return config
    },

    setLocal: (locale: string): AppConfig => {
      const messages = {
        en: enLocale
      }

      const i18n = createI18n({
        locale: locale,
        fallbackLocale: 'en',
        messages: messages,
        legacy: false,
      })

      app.use(i18n)

      return config
    }
  }

  return config
}
