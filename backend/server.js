const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = express.Router();
const PORT = 56565;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("DB is Listening");
})

todoRoutes.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'Todo added' });
        })
        .catch(err => {
            res.status(400).send('Adding new todo failed');
        })
});

todoRoutes.route('/delete/:id').post(function (req, res) {
    Todo.remove({ _id: req.params.id }, function (err) {
        if (!err) {
            res.json('Todo updated');
        }
        else {
            res.status(400).send("Update not possible");
        }
    });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function () {
    console.log("Server is running on PORT " + PORT);
});