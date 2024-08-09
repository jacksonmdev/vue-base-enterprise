<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
      {{ t('common.app.name') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped></style>
