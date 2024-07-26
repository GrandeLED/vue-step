<template>
  <div class="modal">
    <h2>Внести расход</h2>
    <input v-model="amount" placeholder="Сумма" type="number"/>
    <input v-model="date" placeholder="Дата" type="date"/>
    <input v-model="category" placeholder="Категория расхода"/>
    <button @click="submitExpense">Добавить</button>
    <button @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      date: '',
      category: ''
    };
  },
  methods: {
    submitExpense() {
      this.$emit('add-expense', {
        amount: Number(this.amount),
        date: this.date,
        category: this.category
      });
      this.$emit('close');
    }
  }
};
</script>