<template>
    <div class="container container-lg">
        <TodoForm></TodoForm>
        <TodoList></TodoList>
    </div>
</template>
<script>
import TodoForm from '../pages/todos/TodoForm.vue';
import TodoList from '../pages/todos/TodoList.vue';

  export default {
    components: { TodoForm, TodoList }
};
</script>