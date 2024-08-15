const mongoose = require('mongoose')
const { boolean } = require('zod')

mongoose.connect('mongodb+srv://subhammallik553:ubYtBdoOPu477tCf@cluster0.tjdj1ue.mongodb.net/todos-project')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)

module.exports=({
    todo:todo
})