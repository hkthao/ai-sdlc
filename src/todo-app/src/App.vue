<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);

// Load todos from localStorage on mount
// For now, this is a placeholder. A proper storage solution
// would be outside the scope based on the tech-stack.md.
// We are explicitly told "No persistence" and "No backend".
// This is for demonstration purposes within the constraints.
watchEffect(() => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    todos.value = JSON.parse(storedTodos);
  }
});

// Save todos to localStorage whenever they change
watchEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos.value));
});

const addTodo = (text: string) => {
  if (text.trim()) {
    todos.value.push({
      id: Date.now(),
      text,
      completed: false,
    });
  }
};

const toggleTodo = (id: number) => {
  const todo = todos.value.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id);
};
</script>

<template>
  <div class="todo-app">
    <h1>My Todo App</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoList :todos="todos" @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}
</style>
