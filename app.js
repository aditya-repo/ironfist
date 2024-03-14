// Import All the necesary modules
const express = require('express')
const dotenv = require('dotenv').config()
const authRouter = require('./routes/authRouter')
const { connectToDatabase, mongoClientDbOpen, mongooseDbOpen } = require('./configs/mongodb')
const PORT = process.env.PORT || 8000
const DBURL = process.env.MONGOURL

const app = express()

// Database connection
mongooseDbOpen(DBURL)

// Import middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Import Routes
app.use('/', authRouter)


app.listen(PORT, ()=>{
    console.log(`The server is running on PORT : ${PORT}`)
})