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

      const sources = [...new Set(this.data.map(item => item.source))];
      const amounts = sources.map(source => {
        return this.data
          .filter(item => item.source === source)
          .reduce((total, item) => total + item.amount, 0);
      });

      this.chart = new ChartJS(this.$refs.canvas, {
        type: 'pie',
        data: {
          labels: sources,
          datasets: [
            {
              label: 'Доходы',
              backgroundColor: sources.map(() => this.generateRandomColor()),
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