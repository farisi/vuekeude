<template>
    <div class="container container-xl">
        <h1>Halaman Pengguna</h1>
        <div class="row">
            <div class="col-lg">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="card-title col-lg"></div>
                            <div class="card-action col-lg-1">
                                <a class="btn btn-circle text-primary" @click="isOpen=!isOpen">
                                    <i class='fa fa-plus' v-if="!isOpen"></i>
                                    <i class="fa fa-arrow-right" v-if="isOpen"></i>
                                </a>
                            </div>
                        </div>
                        <UserTable></UserTable>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" v-if="isOpen">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="card-title col-lg"></div>
                            <div class="card-action col-lg-1">
                            </div>
                        </div>
                        <UserForm @batal="isOpen=false"></UserForm>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import UserTable from './UserTable.vue';
import UserForm from './UserForm.vue';
import {ref} from 'vue';

export default {
    setup(){
        const isOpen=ref(false);
        return {
            isOpen
        }
    },
    components: { UserTable, UserForm }
};
</script>