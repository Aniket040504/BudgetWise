import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const safeTransactions = Array.isArray(transactions) ? transactions : [];
  const amounts=safeTransactions.map(transaction=>transaction.amount);
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}

export default Balance
