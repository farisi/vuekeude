<template>
    <div class="card">
        <div class="card-body py-4">
            <div class="row">
                <div class="card-title col-lg">

                </div>
                <div class="card-action col-lg-1">
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label class="form-label">Nama Kategori</label>
                    <input v-model="name" class="form-control" />
                </div>
                <div class="form-group py-4">
                    <button class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const name = ref("")
        return { name }
    }
}
</script>

<style lang="scss" scoped>
</style>