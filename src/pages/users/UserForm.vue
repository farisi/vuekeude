<template>
    <form @submit.prevent="submitForm({name:name,email:email,username:username})" >
        <div class="form-group row">
            <label class="form-label col-lg-3 offset-lg-1">Nama Lengkap</label>
            <div class="col-lg">
                <input v-model="name" class="form-control" />
            </div>
        </div>
                <div class="form-group row">
            <label class="form-label col-lg-3 offset-lg-1">Email</label>
            <div class="col-lg">
                <input v-model="email" class="form-control" />
            </div>
        </div>
                <div class="form-group row">
            <label class="form-label col-lg-3 offset-lg-1">Nama Panggilan</label>
            <div class="col-lg">
                <input v-model="username" class="form-control" />
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
        const username = ref("")
        const name=ref("")
        const email=ref("")

        function submitForm(user)
        {
            if(user.length ===0) {
                return 
            }
          userTbStore.insertUserTableData(user);
          username.value='';
          name.value='';
          email.value='';
        }

        return {
            userTbStore,
            username,
            name,
            email,
            submitForm
        }
    }
}
</script>