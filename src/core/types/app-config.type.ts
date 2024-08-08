export type AppConfig = {
  loadComponents: () => AppConfig
  setLocal: (locale: string) => AppConfig
  setStore: () => AppConfig
}
