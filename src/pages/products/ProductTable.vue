<script setup>
import { useProductStore } from '../../stores/useProductStore';
import { storeToRefs } from 'pinia';

const {products,error,loading} = storeToRefs(useProductStore);
const fetchProducts = useProductStore;
fetchProducts();
</script>

<template>
    <div class="card">
        <div class="card-body">
            {{products}}
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th><b>Nama</b> <i class="fa fa-fw fa-sort-up"></i></th>
                        <th><b>Kuantiti</b> <i class="fa fa-fw fa-sort"></i> </th>
                        <th><b>Harga</b></th>
                        <th><b>Dikson</b></th>
                        <th><b>Pajak</b></th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="loading"><td colspan="7">Loading</td></tr>
                    <tr  v-for="(u,i) in products" :key="u.id">
                        <td>{{i+1}}</td>
                        <td>{{u.name}}</td>
                        <td>{{u.quantity}}</td>
                        <td>{{u.amount}}</td>
                        <td>{{u.discount}}</td>
                        <td>{{u.tax}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>