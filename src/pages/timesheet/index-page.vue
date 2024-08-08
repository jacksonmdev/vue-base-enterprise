<template>
  <DataTable :columns="columns" :data="timelogs" />
</template>

<script setup lang="ts">
import { useTimesheet } from 'src/core/composables'

const { columns, timelogs } = useTimesheet()
</script>

<style scoped></style>
