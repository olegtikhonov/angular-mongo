const mongoose = require('mongoose');

//https://mongoosejs.com/docs/schematypes.html
const TodoListSchema = mongoose.Schema({
    id: Number,
    name: String,
    complete: Boolean
},
{
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoListSchema);
