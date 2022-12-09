import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// Component that manages the behavior of the form and the adding of a new expense
const NewExpense = (props) => {
  // state for if the user has started writing inside the form or not
  // is not editing before starting to fill the form and after the form submission
  const [isEditing, setIsEditing] = useState(false);

  // Handler function for creating the newly added form data after submission
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // this forwards the adding of a new expense to the component
    // that is calling this component (i.e. App.js)
    props.onAddExpense(expenseData);
    // reset state
    setIsEditing(false);
  };

  // Handler functions for changing the state
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* Show Add nex expense button when is not editing */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
