<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

export default {
  props: ['data'],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    data: {
      handler() {
        this.renderChart();
      },
      deep: true
    }
  },
  methods: {
    generateRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    },
    renderChart() {
      if (this.chart) {
        this.chart.destroy();
      }

      const categories = [...new Set(this.data.map(item => item.category))];
      const amounts = categories.map(category => {
        return this.data
          .filter(item => item.category === category)
          .reduce((total, item) => total + item.amount, 0);
      });

      this.chart = new ChartJS(this.$refs.canvas, {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [
            {
              label: 'Расходы',
              backgroundColor: categories.map(() => this.generateRandomColor()),
              data: amounts
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  }
};
</script>

<style scoped>
</style>