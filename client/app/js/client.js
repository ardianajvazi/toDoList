const angular = require('angular');

const toDoApp = angular.module('toDoApp', []);

toDoApp.controller('ToDoController', ['$scope', '$http', function($scope, $http) {
  $scope.toDoList = [];

  $scope.getAll = function() {
    $http.get('http://localhost:3000/api/todos')
    .then((res) => {
      $scope.toDoList = res.data;
    }, (err) => {
      console.log(err);
    });
  };

  $scope.createToDo = function(todos) {
    $http.post('http://localhost:3000/api/todos', todos)
    .then((res) => {
      $scope.toDoList.push(res.data);
      $scope.newList = null;
    }, (err) => {
      console.log(err);
    });
  };


  $scope.deleteTodo = function(todos) {
    $http.delete('http://localhost:3000/api/todos/' + todos._id)
    .then((res) => {
      $scope.toDoList.splice($scope.toDoList.indexOf(todos), 1);
    }, (err) => {
      console.log(err);
    });
  };
}]);
