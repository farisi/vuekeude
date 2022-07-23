<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                            <div class="card-title col-lg"><h3>Kategori</h3></div>
                            <div class="card-action col-lg-1">
                                <a class="btn btn-circle text-primary" @click="isOpen=!isOpen">
                                    <i class='fa fa-plus' v-if="!isOpen"></i>
                                    <i class="fa fa-arrow-right" v-if="isOpen"></i>
                                </a>
                            </div>
                    </div>
                    <CategoryTable></CategoryTable>
                </div>
            </div>
        </div>
        <div class="col-lg-6" v-if="isOpen">
            <CategoryForm></CategoryForm>
        </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import CategoryTable from './CategoryTable.vue';
import CategoryForm from './CategoryForm.vue';

export default {
    setup() {
        const isOpen = ref(false);
        return { isOpen };
    },
    components: { CategoryTable, CategoryForm }
}
</script>

<style lang="scss" scoped>

</style>