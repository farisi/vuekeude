<template>
    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="loading">
                <td colspan="3">Loading post...</td>
            </tr>
            <tr v-if="error">
                <td colspan="3">{{ error }}</td>
            </tr>
            <tr v-for="(item, i) in categories" :key="item.id">
                <td>{{ i + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>
                    <a href=""><i class="fa fa-edit text-warning"></i></a>
                    <a href=""><i class="fa fa-trash text-danger"></i></a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '../../stores/category';

const { categories, error, loading } = storeToRefs(useCategoryStore())
const { fetchItems } = useCategoryStore()
fetchItems()
</script>

<style lang="scss" scoped>
</style>