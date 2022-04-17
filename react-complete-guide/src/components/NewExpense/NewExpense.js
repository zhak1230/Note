import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [visible, setVisible] = useState(false);

  return (
    <div className='new-expense'>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? 'Cancel' : 'Add New Expense'}
      </button>
      {visible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
