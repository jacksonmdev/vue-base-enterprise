<template>
  <div ref="grid" class="row grid q-col-gutter-md">
    <div class="col-12 col-sm-6 col-md-6 col-lg-3 grid-item">
      <MemberCard></MemberCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import Isotope from 'isotope-layout'
import { onMounted, onUnmounted, ref } from 'vue'

const grid = ref<HTMLElement>()
const isotope = ref()

const onResize = () => {
  if (isotope.value) {
    isotope.value = new Isotope(grid.value as HTMLElement, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    })
  }
}

onMounted(() => {
  if (grid.value) {
    onResize()
  }
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  if (isotope.value) {
    isotope.value.destroy()
  }
  window.removeEventListener('resize', onResize)
})
</script>
