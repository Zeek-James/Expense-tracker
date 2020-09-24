import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);

    return (
        <section>
          <h3>History</h3>
          <ul>
            <Transaction transactions = {transactions}/>
           
          </ul>  
        </section>
    )
}
