const mongoose = require('mongoose')
const { env } = require('../configs/env')

const uri = `mongodb+srv://${env.dbUsername}:${env.dbPassword}@stvcluster.hezg5zc.mongodb.net/?retryWrites=true&w=majority&appName=STVCluster`
const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri, {
            dbName: env.dbName
        })
        console.log('Connected to the database successfully!!')
    } catch (error) {
        console.error('Failed to connect to the database:', error)
    }
}

module.exports = connectToDatabase
