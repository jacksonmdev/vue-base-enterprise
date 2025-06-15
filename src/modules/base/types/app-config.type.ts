export type AppConfig = {
  loadCoreUiComponents: () => AppConfig
  setLocal: (locale: string) => AppConfig
}
