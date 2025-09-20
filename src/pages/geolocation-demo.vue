<template>
  <div>
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>Latitude: {{ loc.lat }}</p>
    <p>Longitude: {{ loc.long }}</p>
    <button @click="getCurrentPosition">Get Current Location</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Import Geolocation from Capacitor
import { Geolocation } from '@capacitor/geolocation'

const loc = ref<{ lat: number | null; long: number | null }>({ lat: null, long: null })

const getCurrentPosition = async () => {
  try {
    const pos = await Geolocation.getCurrentPosition()
    loc.value = {
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    }
  } catch (e) {
    alert('Failed to get location: ' + e)
  }
}
</script>

<style scoped>
button {
  margin-top: 1rem;
}
</style>
