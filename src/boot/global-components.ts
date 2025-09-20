import type { App } from 'vue'
import * as CoreUiComponents from 'modules/base/ui'

export default (app: App) => {
  Object.entries(CoreUiComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
}
