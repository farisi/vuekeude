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
            <tr v-for="(item, i) in items" :key="item.id">
                <td>{{ i + 1 }}</td>
                <td>{{ item.name }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useItemStore } from '../../stores/items';

const { items, error, loading } = storeToRefs(useItemStore())
const { fetchItems } = useItemStore();
fetchItems()
</script>

<style lang="scss" scoped>
</style>