import React from 'react'

export const Transaction = ({transactions}) => {
    return (
        <li className='transaction-container'>
            Cash<span>NGN{}</span><button className= 'delete-btn'>x</button>    
        </li>  
    )
}
