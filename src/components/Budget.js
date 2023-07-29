import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
 const { budget, remaining } = useContext(AppContext);
 const [editableBudget, setEditableBudget] = useState(budget);

 useEffect(() => {
 setEditableBudget(budget);
  }, [budget]);

 const validateBudget = (value) => {
 if(value > 20000) {
 alert("Budget could not exceed 20000");
 return false;
    }
 if(value < remaining) {
 alert(`Budget should not be lower than remaining of ${remaining}`);
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
    <input type="number" value={editableBudget} min={totalExpenses} max={20000} step={10} onChange={handleInputChange} onBlur={handleInputBlur} />
 </div>
  );
};

export default Budget;

