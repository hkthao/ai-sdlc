<script setup lang="ts">


interface Props {
  currentFilter: 'all' | 'active' | 'completed';
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'filter-selected', filter: 'all' | 'active' | 'completed'): void;
}>();

const selectFilter = (filter: 'all' | 'active' | 'completed') => {
  emit('filter-selected', filter);
};
</script>

<template>
  <div class="filters">
    <button
      :class="{ active: props.currentFilter === 'all' }"
      @click="selectFilter('all')"
    >
      All
    </button>
    <button
      :class="{ active: props.currentFilter === 'active' }"
      @click="selectFilter('active')"
    >
      Active
    </button>
    <button
      :class="{ active: props.currentFilter === 'completed' }"
      @click="selectFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<style scoped>
.filters {
  margin: 20px 0;
  text-align: center;
}

.filters button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px 15px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;
}

.filters button:hover {
  background-color: #e0e0e0;
}

.filters button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
