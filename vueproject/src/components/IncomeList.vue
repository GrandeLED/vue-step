<template>
  <div>
    <h3>Список доходов</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.date }} - {{ item.source }}: {{ item.amount }}
        <button @click="deleteIncome(index)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    deleteIncome(index) {
      this.$emit('delete-income', index);
    }
  }
};
</script>