import expensesReducer from "../../reducers/expenses";

import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expenses by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "4",
    description: "Yummy",
    note: "",
    amount: 23123123,
    createdAt: 91230
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const description = "Hello World!";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(description);
});

test("should not edit an expense if id not found", () => {
  const description = "Hello World!";
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
});
