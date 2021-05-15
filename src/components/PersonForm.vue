<template>
  <div>
    <p class="title">
      Persoon toevoegen
    </p>
    <span class="group">
      <span class="label">
        Naam
      </span>
      <input
        v-model="name"
        type="text"
        class="control"
      >
    </span>
    <span class="group">
      <span class="label">
        Uitgaven
      </span>
      <input
        v-model="expense"
        type="number"
        class="control"
      >
    </span>
    <slot />
    <button
      class="button"
      @click="addExpense"
    >
      Volgend Persoon
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  emits: ['add-expense-value'],
  setup(props, { emit }) {
    const name = ref<string>();
    const expense = ref<number | string>();

    const addExpense = () => {
      emit('add-expense-value', { name, expense });
      name.value = '';
      expense.value = '';
    };

    return { name, expense, addExpense };
  },
});
</script>

<style scoped>
.title {
  @apply text-xl;
}

.group {
  @apply flex;
  @apply flex-row;
  @apply mb-5;
}

.label {
  @apply bg-indigo-500;
  @apply w-36 ;
  @apply text-center;
  @apply p-2;
  @apply px-3;
  @apply rounded-l;
}

.control {
  /* field text-sm text-gray-600 p-2 px-3 rounded-r w-full */
  @apply p-2;
  @apply px-3;
  @apply rounded-r;
  @apply w-full;
}

.button {
  @apply bg-white;
  @apply rounded-md;
  @apply border-2;
  @apply border-indigo-500;
  @apply p-3;
}
</style>
