import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const setRouter = () => {

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory('/'),
    routes: [...routes]
  })

  return router

}