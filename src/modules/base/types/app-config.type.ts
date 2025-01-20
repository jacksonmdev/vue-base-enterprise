export type AppConfig = {
  loadCoreUiComponents: () => AppConfig
  loadComponents: () => AppConfig
  setLocal: (locale: string, useCustomLocal: boolean) => AppConfig
  setStore: () => AppConfig
}
