import { ref } from 'vue'

export const useTimelog = () => {
  const isClockedIn = ref<boolean>(false)
  const isClockedOut = ref<boolean>(false)

  const clockIn = () => {
    isClockedIn.value = true
  }

  const clockOut = () => {
    isClockedOut.value = true
  }

  return { isClockedIn, isClockedOut, clockIn, clockOut }
}
