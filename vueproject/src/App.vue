<template>
  <div id="app">
    <header>
      <h1>Учет финансов</h1>
    </header>

    <section class="content">
      <section class="expenses">
        <h2>Управление расходами</h2>
        <div>
          <button @click="showExpenseModal = true">Внести расход</button>
        </div>
        <ExpenseList :items="expenseData" @delete-expense="handleDeleteExpense" />
        <LargestExpense :data="largestExpense" />
        <TotalExpenseChart :data="expenseData" />
      </section>

      <section class="balance">
        <h2>Общий баланс</h2>
        <BalanceComponent :data="balance" />
        <TotalBalanceChart :data="balanceData" />
      </section>

      <section class="incomes">
        <h2>Управление доходами</h2>
        <div>
          <button @click="showIncomeModal = true">Внести доход</button>
        </div>
        <IncomeList :items="incomeData" @delete-income="handleDeleteIncome" />
        <LargestIncome :data="largestIncome" />
        <TotalIncomeChart :data="incomeData" />
      </section>
    </section>

    <IncomeModal v-if="showIncomeModal" @close="showIncomeModal = false" @add-income="addIncome" />
    <ExpenseModal v-if="showExpenseModal" @close="showExpenseModal = false" @add-expense="addExpense" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import IncomeModal from './components/IncomeModal.vue';
import ExpenseModal from './components/ExpenseModal.vue';
import TotalIncomeChart from './components/TotalIncomeChart.vue';
import TotalExpenseChart from './components/TotalExpenseChart.vue';
import LargestIncome from './components/LargestIncome.vue';
import LargestExpense from './components/LargestExpense.vue';
import BalanceComponent from './components/BalanceComponent.vue';
import IncomeList from './components/IncomeList.vue';
import ExpenseList from './components/ExpenseList.vue';
import TotalBalanceChart from './components/TotalBalanceChart.vue';

export default {
  components: {
    IncomeModal,
    ExpenseModal,
    TotalIncomeChart,
    TotalExpenseChart,
    LargestIncome,
    LargestExpense,
    BalanceComponent,
    IncomeList,
    ExpenseList,
    TotalBalanceChart
  },
  data() {
    return {
      showIncomeModal: false,
      showExpenseModal: false
    };
  },
  computed: {
    ...mapGetters(['totalIncome', 'totalExpenses', 'balance', 'largestExpense', 'largestIncome']),
    incomeData() {
      return this.$store.state.income;
    },
    expenseData() {
      return this.$store.state.expenses;
    },
    balanceData() {
      return [
        { category: 'Расходы', amount: this.totalExpenses },
        { category: 'Доходы', amount: this.totalIncome }
      ];
    }
  },
  methods: {
    ...mapMutations(['addIncome', 'addExpense', 'deleteIncome', 'deleteExpense']),
    handleDeleteIncome(index) {
      this.deleteIncome(index);
    },
    handleDeleteExpense(index) {
      this.deleteExpense(index);
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

header {
  background-color: #42A5F5;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  gap: 2rem;
}

.expenses, .incomes, .balance {
  flex: 1;
  min-width: 300px;
  padding: 1rem;
  background-color: #f2f2f2;
  border-radius: 8px;
}

.expenses h2, .incomes h2, .balance h2 {
  margin-top: 0;
  color: #333;
}

.charts {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
}

button {
  background-color: #66BB6A;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  border-radius: 4px;
}

button:hover {
  background-color: #4CAF50;
}

button:active {
  transform: translateY(1px);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.modal {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.modal input, .modal button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.modal button {
  background-color: #42A5F5;
  color: white;
  border: none;
  cursor: pointer;
}

.modal button:hover {
  background-color: #1E88E5;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
}
</style>