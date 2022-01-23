/*
 * @Author: qqyule@gmail.com
 * @Date: 2022-01-23 16:01:12
 * @LastEditTime: 2022-01-23 19:39:19
 * @Description: 全局状态管理
 */
import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => ({
    count: 1
  }),
  actions: {},
  getters: {}
})

export default mainStore