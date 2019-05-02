const Note = require('../models/todolist.model.js');

// Creates and Saves a new Todo task
exports.create = (req, res) => {
  // Validate request
  if(!req.body.content) {
      return res.status(400).send({
          message: "Todo task can not be empty"
      });
  }
  // Create a Todo
  const todo = new Todo({
      id: req.body.id,
      name: req.body.name,
      complete: req.body.complete
  });

  // Save Note in the database
  note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Todo task."
      });
  });
};

// Retrieves and returns all notes from the database.
exports.findAll = (req, res) => {
};

// Finds a single note with a noteId
exports.findOne = (req, res) => {
};
// Updates a note identified by the noteId in the request
exports.update = (req, res) => {
};

// Deletes a note with the specified noteId in the request
exports.delete = (req, res) => {
};
