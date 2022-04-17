import React, { useState } from 'react';
import ExpenseBtn from './ExpenseBtn';
import './ExpenseForm.css';

const ShowBtn = () => {
  return (
    <form>
      <div className='new-expense__actions'>
        <ExpenseBtn />
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
export default ShowBtn;
