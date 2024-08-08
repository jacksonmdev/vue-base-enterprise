<template>
  <CardContent id="feature--timelog" class="text-white">
    <div class="row">
      <div class="col-12 col-md-6">
        <q-card-section>
          <h2 class="q-ma-none">21:00</h2>
          <h6 class="q-ma-none text-subtitle2">Thursday, May 6, 2024</h6>
        </q-card-section>
      </div>
      <div class="col-12 col-md-6">
        <q-card-section
          class="flex items-center justify-evenly float-right height--full"
        >
          <h6
            class="q-ma-none text-subtitle2"
            v-if="isClockedIn && isClockedOut"
          >
            All set for today!
          </h6>
          <AppButton
            color="warning"
            icon="play_arrow"
            label="Clock In"
            id="clock-in"
            class="clock-btn"
            v-else-if="!isClockedIn"
            @click="clockIn"
          >
          </AppButton>
          <AppButton
            color="warning"
            icon="pause"
            label="Clock Out"
            id="clock-out"
            class="clock-btn"
            v-else
            @click="clockOut"
          >
          </AppButton>
        </q-card-section>
      </div>
    </div>
  </CardContent>
</template>

<script setup lang="ts">
import { useTimelog } from 'src/core/composables'

const { clockIn, clockOut, isClockedIn, isClockedOut } = useTimelog()
</script>

<style scoped>
#feature--timelog {
  position: relative;
  background: linear-gradient(90.31deg, #003d6a -1.02%, #037257 132.59%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 20px;
    border-radius: 0px 0px 10px 0px;
    width: 100px;
    height: 100%;
    transform: skew(12deg);
    background: linear-gradient(90.31deg, #003d6a -1.02%, #037257 132.59%);
  }
}
</style>
