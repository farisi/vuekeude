<template>
    <table class="table">
        <thead>
            <tr>
                <th>No</th>
                <th><b>Nama</b> <i class="fa fa-fw fa-sort-up"></i></th>
                <th><b>Email</b> <i class="fa fa-fw fa-sort"></i> </th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(u,i) in users" :key="u.id">
                <td>{{i+1}}</td>
                <td>{{u.name}}</td>
                <td>{{u.email}}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<script>
import { userTableStore } from '../../stores/userTableStore';
import { storeToRefs } from 'pinia';

export default {
    setup(){
        const store = userTableStore()
        const {users} = storeToRefs(store)
        return {
            users
        }
    }
}
</script>