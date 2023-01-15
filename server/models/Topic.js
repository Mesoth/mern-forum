import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    title: String,
})

const TopicModel = mongoose.model('Topic', TopicSchema)

export default TopicModel
