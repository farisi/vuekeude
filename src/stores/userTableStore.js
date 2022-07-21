import { defineStore } from 'pinia'

export const userTableStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'userTableStore',
  state: () =>({
    users:[
    {
        name: 'John Doe', email: 'fake@email.com', username: 'jd123',id:1
      },
      {
        name: 'Salman Farisi', email: 'salman@email.com', username: 'salman',id:2
      },
      {
        name: 'Novializa', email: 'novi@email.com', username: 'novi',id:3
      },
      {
        name: 'Nur Akmalia', email: 'nur@email.com', username: 'salman',id:4
      },
      {
        name: 'Khaidar Ihsan', email: 'isan@email.com', username: 'isan',id:5
      }
  ],
  errors:[]
}),
  getters: {
    userTableCount(){
        return this.users.length
    }
  },
  actions:{
    insertUserTableData(user) {
      console.log(user);
      this.users.push(user);
      showTooltip(this.users);
    }
  }
})