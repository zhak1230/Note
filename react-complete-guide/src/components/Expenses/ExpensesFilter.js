import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [yearData, setYearData] = useState('');

  const dropdownChangeHander = (event) => {
    console.log(event);
    setYearData(event.target.value);
  };

  const filterHandler = (event) => {
    event.preventDefault();

    const filterData = {
      year: new Date(yearData),
    };
    props.onFilterChangeData(filterData);
    setYearData('');
  };
  return (
    <div className='expenses-filter'>
      <div onChange={filterHandler} className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHander}>
          <option value={yearData}>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
