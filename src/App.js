import React from 'react';
import './App.css';
import { AddTransaction } from './component/AddTransaction';
import { Balance } from './component/Balance';
import { Header } from './component/Header';
import { IncomeExpense } from './component/IncomeExpense';
import { TransactionList } from './component/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
