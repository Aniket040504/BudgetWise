import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from  'axios';

const initialState={
    transactions:[],
    error:null,
    loading:true
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

     async function getTransactions(){
        try{
            const res=await axios.get('/get');
            const data =res.data.data
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: data
            })
        }
        catch(err){
               dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err?.response?.data?.error || 'Unknown error'
            })
        }
    }

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return (<GlobalContext.Provider value={{
        transactions:Array.isArray(state.transactions) ? state.transactions : [],
        error:state.error,
        loading:state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
         </GlobalContext.Provider>)
}