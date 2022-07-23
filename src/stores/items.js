import { defineStore } from "pinia";
export const useItemStore = defineStore({
    id:'item',
    state:()=>({
        items:[],
        item:null,
        loading:false,
        error:null
    }),
    getters:{
        // getPostsPerAuthor:(state)=>{
        //     return (authorId)=>state.items.filter((post)=>post.userId==authorId)
        // }
    },
    actions:{
        async fetchPost(id) {
            this.item = null
            this.loading = true
            try {
              this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
              .then((response) => response.json())
            } catch (error) {
              this.error = error
            } finally {
              this.loading = false
            }
        },
        async fetchPosts() {
            this.items = []
            this.loading = true
            try {
              this.items = await fetch('http://localhost:8080/api/items')
              .then((response) => response.json()) 
            } catch (error) {
              this.error = error
            } finally {
              this.loading = false
            }
        }
    }
})