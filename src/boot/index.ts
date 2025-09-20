import type { App } from 'vue'

type BootFn = (app: App) => Promise<void> | void

export const loadBootFiles = async (app: App) => {
  const bootFiles = import.meta.glob('./*.ts', { eager: false })

  for (const path in bootFiles) {
    const bootFile = bootFiles[path]
    if (typeof bootFile === 'function') {
      const bootModule = await bootFile()
      const bootFn = (bootModule as any).default as BootFn

      if (typeof bootFn === 'function') {
        await bootFn(app)
      }
    }
  }
}
