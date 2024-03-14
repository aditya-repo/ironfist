// Import Mongodb Driver
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

let db, client

// 'connectToDatabase' function connect the application to given database url

const mongoClientDbOpen = async (URL)=>{
    try {
        if (!client) {
            client = new MongoClient(URL, { maxPoolSize : 10}) // 'poolSize' defines the total connection 
            await client.connect()
            console.log("Database Connected")
            db = client.db()  // 'db' variable stores the reference of specific database configuration.
        }
    } catch (error) {
        console.error("Error connecting to database ", error)
        throw error
    }
}

// 'closeDatabase' function close the database

const mongoClientDbClose = async ()=>{
    try {
        if (client) {
            await client.close()
            console.log("Database connection Closed")
        }
    } catch (error) {
        console.error("Error Closing Database ", error)
    }
}

const mongooseDbOpen = async (URL)=>{
    await mongoose.connect(URL, {maxPoolSize: 10}).then(()=> console.log("Database Connected")).catch(error => console.error("Error connecting to ",error))
}

module.exports = { mongoClientDbOpen, mongoClientDbClose, db, mongooseDbOpen}