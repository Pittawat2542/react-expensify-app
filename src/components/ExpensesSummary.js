import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";

import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <h1>
    Viewing{" "}
    {expenseCount +
      (expenseCount === 1 || expenseCount === 0
        ? " expense"
        : " expenses")}{" "}
    totalling {numeral(expensesTotal / 100).format("$0,0.00")}
  </h1>
);

const mapStateToProps = state => {
  return {
    expenseCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(
      selectExpenses(state.expenses, state.filters)
    )
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
