import type { App } from 'vue'

type BootFn = (app: App) => Promise<void> | void

export const loadBootFiles = async (app: App) => {
  const bootFiles = import.meta.glob('./*.ts', { eager: true })

  for (const path in bootFiles) {
    const bootModule = bootFiles[path]
    const bootFn = (bootModule as any).default as BootFn

    if (typeof bootFn === 'function') {
      await bootFn(app)
    }
  }
}
