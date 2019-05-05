const express = require('express');
const bodyParser = require('body-parser');

// Creates express app
const app = express();

// Parses requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parses requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connects to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database. Connection string is:", dbConfig.url);
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// Defines a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Todos application. Organize and keep track of all your tasks."});
});

require('./app/routes/todolist.routes.js')(app);
// Listens for requests
app.listen(4201, () => {
    console.log("Server is listening on port 4201");
});
