import  React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: 1, text: "Cash", amount: 50000 },
        {id: 2, text: "Kr foods", amount: 140000 },
        {id: 3, text: "GIG", amount: 10000 }
        
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
 
    function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
  }

  function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
  }

 return (<GlobalContext.Provider value={{addTransaction, deleteTransaction, transactions: state.transactions}}>{children}</GlobalContext.Provider>);

}
