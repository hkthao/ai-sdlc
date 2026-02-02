<script setup lang="ts">
import { ref } from 'vue';

const newTodoText = ref('');

const emit = defineEmits<{
  (e: 'add-todo', text: string): void;
}>();

const addTodo = () => {
  if (newTodoText.value.trim()) {
    emit('add-todo', newTodoText.value.trim());
    newTodoText.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="addTodo" class="todo-form">
    <input
      type="text"
      v-model="newTodoText"
      placeholder="Add a new todo"
      class="todo-input"
    />
    <button type="submit" class="add-button">Add Todo</button>
  </form>
</template>

<style scoped>
.todo-form {
  display: flex;
  margin-bottom: 20px;
}

.todo-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
}

.todo-input:focus {
  outline: none;
  border-color: #007bff;
}

.add-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>
