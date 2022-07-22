<template>
<div class="container container-xl">
    <h1>Page Product</h1>
    <div class="row">
        <div class="col-lg">
            <ProductTable></ProductTable>
        </div>
    </div>
</div>
</template>

<script>
import ProductTable from './ProductTable.vue';
export default {
    components: { ProductTable }
}
</script>