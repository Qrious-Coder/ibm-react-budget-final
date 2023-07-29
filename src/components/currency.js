import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value.split(' ')[0]; 
    dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
  };

  return (
    <div className='alert alert-success'>
      <div className='d-flex justify-content-center align-items-center'>
        <span>Currency </span>
        <select 
          className="form-select" 
          style={{border: 'none', backgroundColor: 'transparent', color: '#0C6321'}} 
          value={`${currency} ${currency === '£' ? 'Pound' : currency === '$' ? 'Dollar' : currency === '€' ? 'Euro' : 'Ruppee'}`}
          onChange={handleCurrencyChange}
        >
          <option value="$ Dollar">$ Dollar</option>
          <option defaultValue="£ Pound">£ Pound</option>
          <option value="€ Euro">€ Euro</option>
          <option value="₹ Ruppee">₹ Ruppee</option>
        </select>
      </div>
    </div>
  );
};

export default Currency;
