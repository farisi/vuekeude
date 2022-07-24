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
                this.products = await fetch('http://localhost:8080/api/products')
                .then((response) => response.json()) ;
            } catch (error) {
              this.error = error;
            } finally {
              this.loading = false;
            }
        }
    }
});