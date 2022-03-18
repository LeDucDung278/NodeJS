// const express = require('express');
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRoute from '../routes/product'
import userRoute from '../routes/user'
import categoryRoute from '../routes/category'

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api",productRoute)
app.use("/api", userRoute)
app.use("/api", categoryRoute)
// connect database
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log('Ket noi thanh cong'))
    .catch((error) => console.log(error))

//  connection
const PORT = 9999;
app.listen(PORT, () => {
    console.log("Server is running port" , PORT)
})