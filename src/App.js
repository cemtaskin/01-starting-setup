import React,{useState} from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 3, 15),
  },
  { id: "e2", title: "New TV", amount: 799.4, date: new Date(2022, 2, 19) },
  { id: "e3", title: "Food", amount: 12.6, date: new Date(2021, 1, 15) },
  { id: "e4", title: "Gas", amount: 56.12, date: new Date(2019, 4, 15) },
  { id: "e5", title: "Electric", amount: 40.06, date: new Date(2022, 7, 15) },
];


const App = ()=> {
  
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense =>{
    console.log('in App.js ');
    setExpenses((prevExpenses)=>{
        return [expense,...prevExpenses];
    });
  };
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
