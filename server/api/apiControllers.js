import Topic from '../models/Topic.js'

export async function getTopicsController(req, res) {
    const topics = await Topic.find()
    res.json(topics)
}

export async function createTopicController(req, res) {
    const newTopic = new Topic({
        title: req.body.title,
    })
    const createdTopic = await newTopic.save()
    res.json(createdTopic)
}