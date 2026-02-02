<script setup lang="ts">
import { ref, computed } from 'vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
import TodoFilter from './components/TodoFilter.vue'; // Import TodoFilter

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todos = ref<Todo[]>([]);
const currentFilter = ref<'all' | 'active' | 'completed'>('all'); // State for current filter

// Initialize with some dummy data since persistence is removed
todos.value = [
  { id: 1, text: 'Learn Vue 3', completed: true },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Add filtering feature', completed: false },
];

// Computed property for filtered todos
const filteredTodos = computed(() => {
  if (currentFilter.value === 'active') {
    return todos.value.filter(todo => !todo.completed);
  } else if (currentFilter.value === 'completed') {
    return todos.value.filter(todo => todo.completed);
  }
  return todos.value; // 'all' filter
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

const handleFilterSelected = (filter: 'all' | 'active' | 'completed') => {
  currentFilter.value = filter;
};
</script>

<template>
  <div class="todo-app">
    <h1>My Todo App</h1>
    <TodoForm @add-todo="addTodo" />
    <TodoFilter
      :current-filter="currentFilter"
      @filter-selected="handleFilterSelected"
    /> <!-- Add TodoFilter -->
    <TodoList
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    /> <!-- Use filteredTodos -->
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
