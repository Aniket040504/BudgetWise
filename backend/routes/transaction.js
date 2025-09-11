const express=require('express');
const router=express.Router();
const {getTransaction,addTransaction,deleteTransaction}=require('../controller/transaction');

router.get('/get',getTransaction);
router.post('/add',addTransaction)
router.delete('/del/:id',deleteTransaction);

module.exports=router;