export type AppConfig = {
  loadCoreUiComponents: () => AppConfig
  loadComponents: () => AppConfig
  setLocal: (locale: string) => AppConfig
  setStore: () => AppConfig
}
