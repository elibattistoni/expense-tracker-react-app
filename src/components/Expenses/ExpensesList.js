import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

// Component that renders the list of expenses
const ExpensesList = (props) => {
  // Define message if no expenses are present
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  // important to define the prop key for each element in the list
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
