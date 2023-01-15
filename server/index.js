import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Topic from './models/Topic.js'

mongoose.set('strictQuery', true)

dotenv.config()

const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())

app.post('/topics', async (req, res) => {
    const newTopic = new Topic({
        title: req.body.title,
    })
    const createdTopic = await newTopic.save()
    res.json(createdTopic)
})

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}...`)
    )
})
