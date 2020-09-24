import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add Transaction</h3>
            <form>
                <div>
                    <label htmlFor='new-text'>Text</label><br/>
                    <input type='text' id='new-text' placeholder='Text...'/>
                </div>
                <div>
                    <label htmlFor='new-amount'>Amount</label><br/>
                    <input type='number' id='new-amount' placeholder='Amount...'/>
                </div>
                <button className= 'add-transaction-btn'>Add Transaction</button>
            </form>
        </div>
    )
}
