import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const {deleteTransaction}=useContext(GlobalContext);
  const sign=transaction.amount<0?'-':'+';
  // Use _id if available, fallback to id
  const id = transaction._id || transaction.id;
  return (
   <li className={transaction.amount<0?'minus':'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransaction(id) } className='delete-btn'>x</button>
        </li>
  )
}

export default Transaction
