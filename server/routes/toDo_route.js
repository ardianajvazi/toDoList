const express = require('express');
const jsonParser = require('body-parser').json();
const Gallery = require(__dirname + '/../model/toDoList');
const handleDBError = require(__dirname + '/../lib/handleDbError');

var toDoListRouter = module.exports = exports = express.Router();

toDoListRouter.get('/todos', (req, res) => {
  Gallery.find({}, (err, data) => {
    if (err) return handleDBError(err, res);
    res.status(200).json(data);
  });
});

toDoListRouter.post('/todos', jsonParser, (req, res) => {
  var newImage = new Gallery(req.body);
  newImage.save((err, data) => {
    if (err) return handleDBError(err, res);
    res.status(200).json(data);
  });
});

toDoListRouter.delete('/todos/:id', (req, res) => {
  Gallery.remove({_id: req.params.id}, (err) => {
    if (err) return handleDBError(err, res);
    res.status(200).json({msg: 'success'});
  });
});
