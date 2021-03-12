import express from 'express';
import cors from 'cors';
import todoDB from './db/TodoDB.js';

const app = express();
app.use(cors());
app.use(express.json());


// Return all Todos /////

app.get('/todos', function (req, res) {
  (async () => {
    const todos = await todoDB.all();
    res.json(todos);
  })();
});


// Create a new Todo /////

app.post('/todos', function (req, res) {
  (async () => {
    const todo = req.body;
    const id   = await todoDB.create(todo);
    res.json(id);
  })();
});


// Read a Todo by its ID /////

app.get('/todos/:id', function (req, res) {
  (async () => {
    const id   = parseInt(req.params.id);
    const todo = await todoDB.read(id);
    if (todo) {
      res.json(todo);
    } // if
    else {
      res.status(404).end();
    } // else
  })();
});


// Update values of a Todo /////

app.put('/todos', function (req, res) {
  (async () => {
    const todo   = req.body;
    const result = await todoDB.update(todo);
    res.status(result ? 204 : 404).end();
  })();
});


// Delete an existing Todo /////

app.delete('/todos/:id', function (req, res) {
  (async () => {
    const id     = parseInt(req.params.id);
    const result = await todoDB.delete(id);
    res.status(result ? 204 : 404).end();
  })();
});


// Start the server /////

app.listen(3100, function () {
  console.log('The server is running on port 3100!');
  console.log('The following actions are supported');
  console.log('');
  console.log('  [GET]    http://localhost:3100/todos .......... returns all Todos');
  console.log('  [POST]   http://localhost:3100/todos .......... creates a new Todo');
  console.log('  [GET]    http://localhost:3100/todos/<id> ..... returns Todo with specified ID');
  console.log('  [PUT]    http://localhost:3100/todos .......... updates values of an existing Todo');
  console.log('  [DELETE] http://localhost:3100/todos/<id> ..... deletes Todo with the specified ID');
  console.log('');
  console.log('Stop the server by pressing Ctrl+C.');
});
