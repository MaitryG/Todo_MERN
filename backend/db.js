const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.t1twl.mongodb.net/my-todo-app');

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean,
})

const todos = mongoose.model('todos', todoSchema);

module.exports = {
    todos: todos,
}