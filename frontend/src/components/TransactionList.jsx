import React, {useContext, useEffect} from 'react'
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalState';

const TransactionList = () => {
  const {transactions, getTransactions, loading, error} = useContext(GlobalContext);
  useEffect(()=>{
    getTransactions();
    // eslint-disable-next-line
  },[]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{color: 'red'}}>Error: {error}</p>;

  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  return (
    <>
    <h3>History</h3>
    <ul className='list'>
      {safeTransactions.map(transaction=>(<Transaction key={transaction._id || transaction.id} transaction={transaction} />))}
    </ul>
    </>
  )
}

export default TransactionList
