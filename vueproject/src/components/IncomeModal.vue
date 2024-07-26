<template>
  <div class="modal">
    <h2>Внести доход</h2>
    <input v-model="amount" placeholder="Сумма"/>
    <input v-model="date" placeholder="Дата" type="date"/>
    <input v-model="source" placeholder="Источник дохода"/>
    <button @click="submitIncome">Добавить</button>
    <button @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
      date: '',
      source: ''
    };
  },
  methods: {
    submitIncome() {
      this.$emit('add-income', {
        amount: Number(this.amount),
        date: this.date,
        source: this.source
      });
      this.$emit('close');
    }
  }
};
</script>