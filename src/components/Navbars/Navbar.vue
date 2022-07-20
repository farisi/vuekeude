<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm" role="navigation" >
    <div class="container-fluid">
      <a class="navbar-brand" href="#navbarSupportedContent" role="button" aria-controls="navbarSupportedContent">Backoffice</a>
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        type="button" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
          class="fas fa-bars fa-1x"></i></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a href="/" class="nav-link" ><i class="fa fa-home"></i></a>
          </li>
          <li class="nav-item" ><a href="/products" class="nav-link"> Akend </a></li>
          <li class="nav-item" route=""><a href="/categories" class="nav-link" > Akend R
            </a></li>
          <li class="nav-item">
            <!-- Navbar dropdown -->
            <div class="dropdown nav-item " :class="{show:dropdown1}">
              <a type="button" class="dropdown-toggle nav-link" aria-expanded="false"
                aria-haspopup="true" data-trigger="" @click="test">PKB Header</a>
                <div class="dropdown-menu dropdown-menu-right"  :class="{show:dropdown1}" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/users">Pkb Header</a>
                </div>
            </div>
          </li>
        </ul><!-- Search form -->
        <form class="d-flex input-group w-auto"><input type="search" class="form-control" placeholder="Type query"
            aria-label="Search"><button type="button" role="button" class="btn btn-outline-primary ripple-surface">
            Search </button></form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-lg-0">
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

import { ref } from 'vue';
export default {

  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    const userDropdonw = ref(false);
    const test = ()=>dropdown1.value=!dropdown1.value;
    const rightDropdown = ()=>userDropdonw.value=!userDropdonw.value;
    return {
      collapse1,
      dropdown1,
      userDropdonw,
      test,
      rightDropdown
    }
  }
};
</script>