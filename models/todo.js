const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
    text: String,
    completed: Boolean,
})

const Todo = model('Todo', todoSchema)

module.exports = Todo