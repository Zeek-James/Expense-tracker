import React from 'react'

export const Transaction = ({transactions}) => {
    transactions.map(transaction => transaction.amount)
    return (
        <li className='transaction-container'>
            Cash<span>NGN50,000</span><button className= 'delete-btn'>x</button>    
        </li>  
    )
}
