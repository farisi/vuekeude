<template>
    <div v-for="todo in todoList" :key="todo.id">
        <span :class="{ completed: todo.completed }">{{todo.item}}</span>
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useTodoListStore } from "../../stores/todoList";
export default {
    setup () {
        const store = useTodoListStore();
        // storeToRefs lets todoList keep reactivity:
        const { todoList } = storeToRefs(store);
        const {toggleCompleted} = store;
        return { todoList,toggleCompleted  };
    }
}
</script>

<style  scoped>
.completed {
  text-decoration: line-through;
}
</style>