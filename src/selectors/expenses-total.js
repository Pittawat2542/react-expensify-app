export default expenses =>
  expenses
    .map(expense => expense.amount)
    .reduce((prev, current) => prev + current, 0);
