import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import en from 'src/locales/en.json'

export default (app: App) => {
  const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en },
    legacy: false,
  })
  app.use(i18n)
}
