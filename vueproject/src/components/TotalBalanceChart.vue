<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Chart as ChartJS, PieController, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(PieController, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

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
    data() {
      this.renderChart();
    }
  },
  methods: {
    renderChart() {
      if (this.chart) {
        this.chart.destroy();
      }
      this.chart = new ChartJS(this.$refs.canvas, {
        type: 'pie',
        data: {
          labels: ['Расходы', 'Доходы'],
          datasets: [
            {
              label: 'Баланс',
              backgroundColor: ['#FFA726', '#66BB6A'],
              data: this.data.map(item => item.amount)
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