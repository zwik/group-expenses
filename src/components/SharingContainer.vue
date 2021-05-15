<template>
  <div class="container">
    <div class="divider">
      <div class="title">
        <span>Groepsuitgaven rekenmachine</span>
      </div>
      <div>
        <div>
          <span>Maak personen aan en vul hun uitgaven in.</span>
        </div>
        <person-form @add-expense-value="addExpense">
          <calculated-expenses
            v-if="hasExpenses"
            :expenses="expenses"
          />
        </person-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import PersonForm from '@/components/PersonForm.vue';
import CalculatedExpenses from '@/components/CalculatedExpenses.vue';

export default defineComponent({
  components: {
    PersonForm,
    CalculatedExpenses,
  },
  setup() {
    const expenses: Record<string, number>[] = ref([]);
    const name = ref('');

    const addExpense = (event: { name: { value: string; }; expense: { value: number; }; }) => {
      expenses.value.push({ name: event.name.value, expense: event.expense.value });
    };

    const hasExpenses = computed(() => expenses.value.length > 0);

    return {
      expenses, name, addExpense, hasExpenses,
    };
  },
});
</script>

<style scoped>
.container {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply w-1/3;
  @apply m-auto;
  @apply mt-8;
  @apply p-5;
  @apply bg-gray-300;
  @apply rounded-md;
}

.divider {
  @apply divide-y-2;
  @apply divide-black;
}

.title {
  @apply text-xl;
}
</style>
