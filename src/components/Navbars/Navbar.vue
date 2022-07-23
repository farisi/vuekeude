<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm" role="navigation" >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="" role="button" aria-controls="navbarSupportedContent">Backoffice</router-link>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        type="button" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
          class="fas fa-bars fa-1x"></i></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" ><i class="fa fa-home"></i></router-link>
          </li>
          <li class="nav-item" >
            <router-link to="/products" class="nav-link">Produk</router-link></li>
          <li class="nav-item" route="">
            <router-link to="/categories" class="nav-link" >Kategori</router-link></li>
          <li class="nav-item">
            <!-- Navbar dropdown -->
            <div class="dropdown nav-item " :class="{show:dropdown1}">
              <a type="button" class="dropdown-toggle nav-link" aria-expanded="false"
                aria-haspopup="true" data-trigger="" @click="test">PKB Header</a>
                <div class="dropdown-menu dropdown-menu-right"  :class="{show:dropdown1}" aria-labelledby="navbarDropdown">
                  <router-link class="dropdown-item" @click="close()" to="/users">Pkb Header</router-link>
                  <router-link class="dropdown-item" @click="close()" to="/posts">Posts</router-link>
                  <router-link class="dropdown-item" @click="close()" to="/authors">Author</router-link>
                  <router-link class="dropdown-item" @click="close()" to="/todo">Todo</router-link>
                  <router-link class="dropdown-item" @click="close()" to="/items">Item</router-link>
                </div>
            </div>
          </li>
        </ul><!-- Search form -->
        <form class="d-flex input-group w-auto"><input type="search" class="form-control" placeholder="Type query"
            aria-label="Search"><button type="button" role="button" class="btn btn-outline-primary ripple-surface">
            Search </button></form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-4">
          <li class="nav-item">
            <!-- Navbar dropdown -->
            <div class="dropdown nav-item" :class="{show:userDropdonw}">
              <a type="button" class="dropdown-toggle nav-link" aria-expanded="false"
                aria-haspopup="true" data-trigger="" @click="rightDropdown">Username</a>
              <div class="dropdown-menu dropdown-menu-left"  :class="{show:userDropdonw}" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/users">Logout</a>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!---->
  </nav>
</template>
<script>

import { ref,onMounted,onBeforeUnmount } from 'vue';
export default {

  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    const userDropdonw = ref(false);
    const test = ()=>dropdown1.value=!dropdown1.value;
    const rightDropdown = ()=>userDropdonw.value=!userDropdonw.value;
    const close = ()=> dropdown1.value=false
    
    onMounted(()=>{
    })

    onBeforeUnmount(()=>{
    })

    return {
      collapse1,
      dropdown1,
      userDropdonw,
      test,
      rightDropdown,
      close
    }
  }
};
</script>