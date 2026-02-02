<script setup lang="ts">
import { computed } from 'vue';

type FilterType = 'all' | 'active' | 'completed';

const props = defineProps<{
  currentFilter: FilterType;
}>();

const emit = defineEmits<{
  (e: 'filter-selected', filter: FilterType): void;
}>();

const filters: { label: string; value: FilterType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

const selectFilter = (filter: FilterType) => {
  emit('filter-selected', filter);
};

const isFilterActive = (filter: FilterType) => computed(() => props.currentFilter === filter);
</script>

<template>
  <div class="todo-filters">
    <button
      v-for="filter in filters"
      :key="filter.value"
      @click="selectFilter(filter.value)"
      :class="{ active: isFilterActive(filter.value).value }"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<style scoped>
.todo-filters {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.todo-filters button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.todo-filters button:hover {
  background-color: #e0e0e0;
}

.todo-filters button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
