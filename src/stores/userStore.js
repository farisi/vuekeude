import { defineStore } from 'pinia'

export const userStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'userStore',
  state: () =>({}),
  getters: {},
  actions:{}
})