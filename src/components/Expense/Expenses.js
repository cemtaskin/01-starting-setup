import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from '../UI/Card';


const Expenses = (props)=>{
  
  const [filteredYear,setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear =>{
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    
  }

  return (
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        {props.items.map((expense)=>(
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    );
}

export default Expenses;
