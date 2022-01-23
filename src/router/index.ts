/*
 * @Author: qqyule@gmail.com
 * @Date: 2022-01-23 14:23:15
 * @LastEditTime: 2022-01-23 18:26:39
 * @Description: 全局路由
 */
import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'
import Index from '@/views/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router