require('dotenv').config();
require('./database');

const Todo = require('../models/todo');

(async function() {

    await Todo.deleteMany({});
    const todos = await Todo.create([
      {text: 'Learn more about React', completed: true},
      {text: 'Write a new Component', completed: false},
      {text: 'Add some style', completed: false},
    ]);
  
    console.log(todos)
  
    process.exit();
  
})();