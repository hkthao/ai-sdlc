<script setup lang="ts">
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'toggle-todo', id: number): void;
  (e: 'delete-todo', id: number): void;
}>();

const toggle = () => {
  emit('toggle-todo', props.todo.id);
};

const remove = () => {
  emit('delete-todo', props.todo.id);
};
</script>

<template>
  <li class="todo-item" :class="{ completed: todo.completed }">
    <input type="checkbox" :checked="todo.completed" @change="toggle" class="todo-checkbox" />
    <span class="todo-text">{{ todo.text }}</span>
    <button @click="remove" class="delete-button">X</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.todo-checkbox {
  margin-right: 10px;
  transform: scale(1.2);
}

.todo-text {
  flex-grow: 1;
  font-size: 18px;
  color: #333;
}

.delete-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
