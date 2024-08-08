import { defineStore } from 'pinia'
import type { Navigation } from 'src/core/types'
import { ref } from 'vue'

export default defineStore('sidebar-navigation', () => {
  const defaultMenu = ref<Navigation[]>([
    {
      url: '/',
      icon: 'home',
      title: 'Home',
    },
    {
      url: '/profile',
      icon: 'person',
      title: 'Profile',
    },
    {
      url: '/timesheet',
      icon: 'punch_clock',
      title: 'Timesheet',
    },
    {
      url: '/leaves',
      icon: 'view_column',
      title: 'Leaves',
    },
    {
      url: '/payslips',
      icon: 'credit_card',
      title: 'Payslips',
    },
  ])

  const adminMenu = ref<Navigation[]>([
    {
      url: '/administration',
      icon: 'home',
      title: 'Dashboard',
    },
    {
      url: '/administration/members',
      icon: 'people',
      title: 'Members',
    },
    {
      url: '/administration/requests',
      icon: 'list_alt',
      title: 'Requests',
    },
  ])

  return { defaultMenu, adminMenu }
})
