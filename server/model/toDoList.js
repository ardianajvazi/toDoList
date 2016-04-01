const mongoose = require('mongoose');

var toDoList = new mongoose.Schema({
  name: String
});

module.exports = exports = mongoose.model('toDoList', toDoList);
