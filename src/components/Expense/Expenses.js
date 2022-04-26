import React, {useState} from "react";

import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseList from "./ExpenseList";


const Expenses = (props)=>{
  
  const [filteredYear,setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear =>{
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }
  
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
 
  
 
  
  return (
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpenseList items={filteredExpenses} />
      </Card>
    );
}

export default Expenses;
