<script setup lang="ts">
import TodoItem from './TodoItem.vue';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const props = defineProps<{
  todos: Todo[];
}>();

const emit = defineEmits<{
  (e: 'toggle-todo', id: number): void;
  (e: 'delete-todo', id: number): void;
}>();

const handleToggleTodo = (id: number) => {
  emit('toggle-todo', id);
};

const handleDeleteTodo = (id: number) => {
  emit('delete-todo', id);
};
</script>

<template>
  <ul class="todo-list">
    <li v-if="todos.length === 0" class="no-todos">No todos yet! Add some above.</li>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="handleToggleTodo"
      @delete-todo="handleDeleteTodo"
    />
  </ul>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
}

.no-todos {
  padding: 20px;
  text-align: center;
  color: #888;
  font-style: italic;
}
</style>
