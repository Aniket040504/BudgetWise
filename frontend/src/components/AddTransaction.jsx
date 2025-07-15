import React from 'react'

const AddTransaction = () => {
  return (
   <>
   <h3>Add Transaction</h3>
   <form>
    <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" placeholder='Enter Text'/>
    </div>
    <div className="form-control">
        <label htmlFor="amount">
            Amount
            <br/>
            (negative-expense,positive-income)
        </label>
        <input type="number" placeholder='Enter Amount...'/>
    </div>
    <button className='btn'>Add Transaction</button>
   </form>
   </>
  )
}

export default AddTransaction
