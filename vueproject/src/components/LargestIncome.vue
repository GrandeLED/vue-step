<template>
  <div>
    <h3>Самый большой доход</h3>
    <p>Источник: {{ data.source }}</p>
    <p>Сумма: {{ data.amount }}</p>
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>