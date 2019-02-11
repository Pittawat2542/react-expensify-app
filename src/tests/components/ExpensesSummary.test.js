import { shallow } from "enzyme";
import React from "react";

import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("should render ExpensesSumamry with 1 expense correctly", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSumamry with multiple expenses correctly", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={243982395} />);
    expect(wrapper).toMatchSnapshot();
});
