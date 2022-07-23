import { defineStore } from "pinia";

export const useCategoryStore=defineStore({
    id:'category',
    store:()=>({
        categories:[],
        category:null,
        error:null,
        loading:false
    }),
    getters:{
    },
    actions:{
        async fetchItems() {
            this.categories = []
            this.loading = true
            try {
              this.categories = await fetch("http://localhost:8080/api/categories")
              .then((response) => response.json()) 
            } catch (error) {
              this.error = error
            } finally {
              this.loading = false
            }
        }
    }
})