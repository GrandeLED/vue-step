<template>
  <div>
    <h3>Самый большой расход</h3>
    <p>Категория: {{ data.category }}</p>
    <p>Сумма: {{ data.amount }}</p>
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>