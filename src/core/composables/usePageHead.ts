import { unref } from 'vue'
import { computedEager } from '@vueuse/core'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import type { PageSeo } from 'src/core/types'

export const usePageHead = (data: PageSeo) => {
  const { t } = useI18n()

  return useHead({
    title: computedEager(() => t(`${data.title}`)),
    meta: () => {
      if (!data.meta) {
        return []
      }
      return Object.entries(data.meta).map(([name, content]) => ({
        name,
        content: unref(content) ?? '',
      }))
    },
  })
}
