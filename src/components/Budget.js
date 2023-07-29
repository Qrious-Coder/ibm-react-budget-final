import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [ editableBudget, setEditableBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    console.log({totalExpenses})

    useEffect(() => {
    setEditableBudget(budget);
    }, [budget]);

    const validateBudget = (value) => {
        if(value > 20000) {
        alert("Budget could not exceed 20000");
        return false;
        }
        if(value <= totalExpenses ) {
        alert(`You cannot reduce the budget value lower than spending!`);
        return false;
        }
        return true;
    };
 
 const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    setEditableBudget(value);
  };

    const handleInputBlur = (e) => {
        let value = parseInt(e.target.value, 10);
        if (!validateBudget(value)) {
            setEditableBudget(budget);
        }
    };

 return (
 <div className='alert alert-secondary'>
    <span>Budget: </span>
    <span>{ currency }</span>
    <input type="number" value={editableBudget} min={ totalExpenses } max={20000} step={10} onChange={handleInputChange} onBlur={handleInputBlur} />
 </div>
  );
};

export default Budget;

