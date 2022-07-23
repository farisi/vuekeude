<template>
{{categories}}
    <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                     <tr v-if="loading"><td colspan="3">Loading post...</td></tr> 
                     <tr v-if="loading"><td colspan="3">{{ error.message }}</td></tr> 
                    <tr v-for="(category, i) in categories" :key="item.id">
                        <td>{{i+1}}</td>
                        <td>{{category.name}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '../../stores/category';
    const {categories,error,loading} = storeToRefs(useCategoryStore());
    const {fetchItems} = useCategoryStore();
    fetchItems();
</script>

<style lang="scss" scoped>

</style>