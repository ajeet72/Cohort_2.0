const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Ajeet%4011055@cluster0.aapl1pm.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}