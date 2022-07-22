import { defineStore } from "pinia";

export const useProductStore = defineStore({
    id:'productstore',
    state:()=>({
        products:[],
        product:null,
        errors:null,
        loading:false
    }),
    getters:{

    },
    actions:{
        async fetchProducts(){
            this.products=[];
            this.loading=true;
            try {
                this.products = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json()) ;
            } catch (error) {
              this.error = error;
            } finally {
              this.loading = false;
            }
        }
    }
});