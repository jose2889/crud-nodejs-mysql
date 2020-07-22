import 'reflect-metadata'; 

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {createConnection} from 'typeorm'

import  userRoutes from './routes/user.route'


const app = express(); 

createConnection(); 

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());  

//routes 
app.use(userRoutes);

app.listen(3000);

console.log("server on port ", 3000);

