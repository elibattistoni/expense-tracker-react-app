import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

//==============================================================================
//# Component for the list of Expenses
//==============================================================================
const Expenses = (props) => {
  // Define the state for the expenses that should be displayed (by year)
  const [filteredYear, setFilteredYear] = useState("2020");

  // Handler function to change the state of the selected/filtering year
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Function that filters the expenses
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
