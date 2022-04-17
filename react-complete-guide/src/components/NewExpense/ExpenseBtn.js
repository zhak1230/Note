import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ShowBtn from './ShowBtn';
const ExpenseBtn = () => {
  const [visible, setVisivle] = useState(false);
  return (
    <button
      onClick={() => {
        setVisivle(!visible);
      }}
    >
      {visible ? <ShowBtn /> : 'Cancel'}
      {visible && <ExpenseForm />}
    </button>
  );
};

export default ExpenseBtn;
