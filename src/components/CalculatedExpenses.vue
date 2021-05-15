<template>
  <div>
    <p class="title">
      Uitgaven per persoon
    </p>
    <div
      v-for="expense in expenses"
      :key="expense"
    >
      <span class="left">{{ expense.name }}</span>
      <span class="right">{{ expense.expense }}</span>
    </div>
    <p class="title">
      Totalen
    </p>
    <div>
      <span class="left">Aantal personen</span>
      <span class="right">{{ expenses.length }}</span>
    </div>
    <div>
      <span class="left">Totaal uitgaven</span>
      <span class="right">{{ totalExpenses }}</span>
    </div>
    <div>
      <span class="left">Gimiddelde uitgaven p/p</span>
      <span class="right">{{ averageExpenses }}</span>
    </div>
    <p class="title">
      Te betalen / ontvangen
    </p>
    <div
      v-for="expense in expenses"
      :key="expense"
    >
      <span class="left">{{ expense.name }}</span>
      <span
        v-if="difference(expense) < 0"
        class="right"
      >ontvangt {{ Math.abs(difference(expense)) }}</span>
      <span
        v-else
        class="right"
      >betaald {{ difference(expense) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    expenses: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const totalExpenses = computed(() => props.expenses.reduce((acc: any, curr: any) => acc + parseInt(curr.expense, 10), 0));

    const averageExpenses = computed(() => Math.round(props.expenses.reduce((acc: any, curr: any) => acc + parseInt(curr.expense, 10), 0) as number / props.expenses.length * 100) / 100);

    const difference = (expense: any) => {
      return averageExpenses.value - parseInt(expense.expense);
    };

    return { totalExpenses, averageExpenses, difference };
  },
});
</script>

<style scoped>
.title {
  @apply text-xl;
}

.left {
  @apply text-left;
}

.right {
  @apply text-right;
  @apply float-right;
}
</style>
