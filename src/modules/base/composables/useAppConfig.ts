import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { AppConfig } from 'modules/base/types'
import * as CoreUiComponents from 'modules/base/ui'
import enLocale from 'src/locales/en.json'

const registerCoreUiComponents = (app: App<Element>) => {
  Object.entries(CoreUiComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
}

const setupI18n = (app: App<Element>) => {
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en: enLocale },
    legacy: false,
  })

  app.use(i18n)
}

export const useAppConfig = (app: App<Element>): AppConfig => {
  const config: AppConfig = {
    setCoreUiComponents: () => {
      registerCoreUiComponents(app)
      return config
    },

    setLocal: () => {
      setupI18n(app)
      return config
    },
  }

  return config
}
