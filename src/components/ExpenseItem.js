import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id,
            });
    };

    const increaseAllocation = (name) => {
        const expense = {
        name: name,
        cost: 10,
        };

        dispatch({ type: 'ADD_EXPENSE',
        payload: expense });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
        type: 'RED_EXPENSE',
        payload: expense});
    }

    const baseButtonStyle = {
        border: 'none', 
        color: 'white', 
        textAlign: 'center', 
        textDecoration: 'none',
        fontSize: '35px', 
        fontWeight: 'bold',
        borderRadius: '50%',
        display: 'flex', // add flex
        alignItems: 'center', // align items vertically
        justifyContent: 'center', // align items horizontally
        transitionDuration: '0.4s',
        cursor: 'pointer',
        width: '30px', // adjust button size
        height: '30px', // adjust button size
        paddingBottom: '5px'
    };

 return (
 <tr>
    <td>{ props.name }</td>
    <td>{ currency } { props.cost }</td>
    <td>
        <button 
        onClick={event=> increaseAllocation(props.name)} 
        style={{
        ...baseButtonStyle,
        backgroundColor: '#4CAF50'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#45a049'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
        >
        +
        </button>
    </td>
    <td>
        <button 
        onClick={event=> decreaseAllocation(props.name)} 
        style={{
        ...baseButtonStyle,
        backgroundColor: '#f44336'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#e43327'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#f44336'}
        >
        -
        </button>
    </td>
    <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
 </tr>
    );
};

export default ExpenseItem;
