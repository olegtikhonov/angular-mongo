// Public APIs
module.exports = (app) => {
    const todos = require('../controllers/todolist.controller.js');
    // Creates a new Note
    app.post('/todos', todos.create);
    // Retrieves all todos
    app.get('/todos', todos.findAll);
    // Retrieves a single Todo task with id
    app.get('/todos/:id', todos.findOne);
    // Retrieves by name
    app.get('/todos/names/:name', todos.findByName);
    // Updates a Todo task with id
    app.put('/todos/:id', todos.update);
    // Deletes a Todo task with id
    app.delete('/todos/:id', todos.delete);
}
