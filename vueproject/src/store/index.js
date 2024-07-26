import { createStore } from 'vuex';

export default createStore({
  state: {
    income: [],
    expenses: []
  },
  mutations: {
    addIncome(state, income) {
      state.income.push(income);
    },
    addExpense(state, expense) {
      state.expenses.push(expense);
    },
    deleteIncome(state, index) {
      state.income.splice(index, 1);
    },
    deleteExpense(state, index) {
      state.expenses.splice(index, 1);
    }
  },
  getters: {
    totalIncome: state => state.income.reduce((total, item) => total + item.amount, 0),
    totalExpenses: state => state.expenses.reduce((total, item) => total + item.amount, 0),
    balance: (state, getters) => getters.totalIncome - getters.totalExpenses,
    largestExpense: state => state.expenses.reduce((max, item) => item.amount > max.amount ? item : max, { category: 'N/A', amount: 0 }),
    largestIncome: state => state.income.reduce((max, item) => item.amount > max.amount ? item : max, { source: 'N/A', amount: 0 })
  }
});