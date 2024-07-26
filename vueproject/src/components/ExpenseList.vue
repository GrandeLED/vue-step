<template>
  <div>
    <h3>Список расходов</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.date }} - {{ item.category }}: {{ item.amount }}
        <button @click="deleteExpense(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    deleteExpense(index) {
      this.$emit('delete-expense', index);
    }
  }
};
</script>