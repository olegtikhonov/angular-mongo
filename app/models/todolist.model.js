const mongoose = require('mongoose');

const TodoListSchema = mongoose.Schema({
    id: Number,
    name: String,
    complete: Boolean
},
{
    timestamps: true
});

module.exports = mongoose.model('TodoList', TodoListSchema);
