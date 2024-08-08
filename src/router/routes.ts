import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('src/pages/404-page.vue'),
  },
  {
    path: '/',
    meta: {
      breadCrumbHead: 'HRMS',
    },
    component: () => import('src/layouts/main-layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('src/pages/index-page.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('src/pages/profile/index-page.vue'),
      },
      {
        path: 'timesheet',
        name: 'Timesheet',
        component: () => import('src/pages/timesheet/index-page.vue'),
      },
      {
        path: 'leaves',
        name: 'Leaves',
        component: () => import('src/pages/leaves/index-page.vue'),
      },
      {
        path: 'payslips',
        name: 'Payslips',
        component: () => import('src/pages/payslips/index-page.vue'),
      },
    ],
  },
  {
    path: '/administration',
    meta: {
      breadCrumbHead: 'Administration',
    },
    component: () => import('src/layouts/main-layout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () =>
          import('src/pages/administration/dashboard/index-page.vue'),
      },
      {
        path: 'members',
        name: 'Members',
        component: () =>
          import('src/pages/administration/members/index-page.vue'),
      },
      {
        path: 'requests',
        name: 'Requests',
        component: () =>
          import('src/pages/administration/requests/index-page.vue'),
      },
    ],
  },
]
