import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState={
    transactions:[
        {id:1,text:"Flower",amount:-20},
        {id:2,text:"Chocolates",amount:-10},
        {id:3,text:"Salary",amount:100},
        {id:4,text:"Books",amount:-5},
    ]
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    return (<GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
         </GlobalContext.Provider>)
}