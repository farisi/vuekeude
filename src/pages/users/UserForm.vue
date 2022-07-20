<template>
    <form @submit="submitForm">

        <div class="form-group row">
            <label class="form-label col-lg-3 offset-lg-1">Nama Lengkap</label>
            <div class="col-lg">
                <input name="name" class="form-control" />
            </div>
        </div>
                <div class="form-group row">
            <label class="form-label col-lg-3 offset-lg-1">Email</label>
            <div class="col-lg">
                <input name="email" class="form-control" />
            </div>
        </div>
                <div class="form-group row">
            <label class="form-label col-lg-3 offset-lg-1">Nama Panggilan</label>
            <div class="col-lg">
                <input name="username" class="form-control" />
            </div>
        </div>
        <div class="form-group py-4">
            <button class="col-lg-2 btn btn-primary offset-lg-4" >Simpan</button>
            <a class="col-lg-2 btn btn-secondary offset-lg-1" @click="$emit('batal')">Batal</a>
        </div>
        
    </form>
</template>
<script>
import {ref} from 'vue'
import { userTableStore } from '../../stores/userTableStore';
export default {
    setup(){
        const userTbStore = userTableStore()
        const submitForm= ()=>{
            
        }
        return {
            submitForm,
            userTbStore
        }
    }
}
</script>