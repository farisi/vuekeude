<template>
    <div class="container-fluid">
        <h1>Page Item</h1>
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
                        <ItemTable></ItemTable>
                    </div>
                </div>
            </div>
            <div class="col-lg-6" v-if="isOpen">
                <ItemForm></ItemForm>
            </div>
        </div>
    </div>
</template>

<script>
import ItemTable from './ItemTable.vue';
import ItemForm from './ItemForm.vue';
import { ref } from 'vue';

export default {
    setup()
    {
        const isOpen=ref(false)
        return {
            isOpen
        }
    },
    components: { ItemTable, ItemForm }
}
</script>

<style lang="scss" scoped>

</style>