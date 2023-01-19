import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { createTopicController, getTopicsController } from './api/apiControllers.js'

mongoose.set('strictQuery', true)

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/topics', getTopicsController)
app.post('/topics', createTopicController)

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}...`)
    )
})
