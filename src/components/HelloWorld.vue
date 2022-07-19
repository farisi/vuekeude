<template>
  <MDBContainer sm>100% wide until small breakpoint</MDBContainer>
  <MDBContainer md>100% wide until medium breakpoint</MDBContainer>
  <MDBContainer lg>100% wide until large breakpoint</MDBContainer>
  <MDBContainer xl>100% wide until extra large breakpoint</MDBContainer>
  <MDBContainer xxl>100% wide until extra extra large breakpoint</MDBContainer>
</template>
<script>
  import { MDBContainer } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBContainer
    },
  };
</script>