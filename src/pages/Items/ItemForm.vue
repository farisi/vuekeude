<template>
    <div class="card">
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th v-for="h in headers"></th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'vue';
</script>

<style lang="scss" scoped>

</style>