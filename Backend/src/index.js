// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';


dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server is running at ${process.env.PORT}`)
    }) 
})
.catch(err => console.log(err))

//jo niche ni method karu to .....
// import mongoose from 'mongoose'
// import { DB_name } from './constants';
// ;(async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}4{DB_name}`)
//     }catch(error){
//         console.log(error)
//         throw error
//     }
// })()