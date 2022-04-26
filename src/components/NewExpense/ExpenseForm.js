import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    /*
    const [userInput,setUserInput]  = useState(
        {
            enteredTitle :'',
            enteredAmount : '',
            enteredDate : ''
        }
    );
    */

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
        /*
        setUserInput({
            ...userInput,
            enteredTitle : event.target.value,
        });

        setUserInput((prevState) =>{
            return {
                ...prevState,
                enteredTitle:event.target.value
            };
        });
        */

    };

    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
        /*
        setUserInput({
            ...userInput,
            enteredAmount : event.target.value,
        });

        setUserInput((prevState) =>{
            return {
                ...prevState,
                enteredAmount:event.target.value
            };
        });*/
    };

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
        /*
        setUserInput({
            ...userInput,
            enteredDate : event.target.value,
        });
        setUserInput((prevState) =>{
            return {
                ...prevState,
                enteredDate:event.target.value
            };
        });*/
    };


    const submitHandler = (event) =>{
        event.preventDefault();
        
        
        //console.log(enteredTitle);
        //console.log(enteredAmount);
        //console.log(enteredDate);

        const expenseData = {
            title: enteredTitle,
            amount: parseFloat(enteredAmount),
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        //console.log(userInput);

        setEnteredTitle('');
        //var randomNumber = Math.random();
        setEnteredAmount('');
        setEnteredDate('');


        
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text'  value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min="0.0.1" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'value={enteredDate}  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
            </div>
            
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>;
};

export default ExpenseForm;