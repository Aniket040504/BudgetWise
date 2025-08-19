const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db')
const transaction=require('./routes/transaction')

dotenv.config();

const PORT=process.env.PORT||5000;

connectDB();

const app=express();

app.use(express.json());

app.use('/',transaction);

app.listen(PORT,()=>console.log(`Running on ${PORT}`));