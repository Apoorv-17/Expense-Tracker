import React, { useState } from "react";

import Card from "../UI/Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
