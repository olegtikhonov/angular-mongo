const TodoTask = require('../models/todolist.model.js');

// Creates and Saves a new Todo task
exports.create = (req, res) => {
    // Validate request's body if exist
    if (!req.body) {
        return res.status(400).send({
            message: "Todo task can not be empty"
        });
    }
    // Creates a Todo task
    var todo = new TodoTask({
        id: req.body.id,
        name: req.body.name,
        complete: req.body.complete
    });

    // Save Note in the database
    todo.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Todo task."
        });
    });
};


function logMessage(req) {
    console.log(req.url);
}

// Loks up a task list associated with user name
exports.findByName = (req, res) => {
    //conditions, projection, options, callback
    const todoName = req.params.name;
    TodoTask.find({name: todoName}, logMessage(req)).then(todoItem => {
        if (!todoItem) {
            return res.status(404).send({
                message: "Todo task not found with name " + todoName
            });
        }
        res.send(todoItem);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todo task not found with name " + todoName
            });
        }
        return res.status(500).send({
            message: "Error retrieving todo task with name " + todoName
        });
    });
};

exports.findAll = (req, res) => {
    TodoTask.find(req.params.name)
        .then(todoItem => {
            if (!todoItem) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });
            }
            res.send(todoItem);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving todo task with id " + req.params.id
        });
    });
};


// Finds a single todo task with a id
exports.findOne = (req, res) => {
    TodoTask.findById(req.params.id)
        .then(todoItem => {
            if (!todoItem) {
                return res.status(404).send({
                    message: "Todo not found with id " + req.params.id
                });
            }
            res.send(todoItem);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todo task not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving todo task with id " + req.params.id
        });
    });
};

// Updates a todo task identified by the todoId in the request
exports.update = (req, res) => {
    // Validates a request
    if (!req.params.id) {
        return res.status(400).send({
            message: "Todo id can not be empty"
        });
    }

    // Finds tod task and update it with the request body
    TodoTask.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        name: req.body.name || "Untitled Note",
        complete: req.body.complete
    }, {new: true})
        .then(todoItem => {
            if (!todoItem) {
                return res.status(404).send({
                    message: "Todo task is not found with id " + req.params.id
                });
            }
            res.send(todoItem);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Todo task not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating todo with id " + req.params.id
        });
    });
};

// Deletes a note with the specified noteId in the request
exports.delete = (req, res) => {
    TodoTask.findByIdAndRemove(req.params.id)
        .then(product => {
            if(!product) {
                return res.status(404).send({
                    message: "Todo task not found with id " + req.params.id
                });
            }
            res.send({message: "Todo task/item deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Todo item not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete todo with id " + req.params.id
        });
    });
};
