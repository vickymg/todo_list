toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this;

  self.todos = [];

  self.addToDo = function(newTodo) {
    self.todos.push(new ToDoFactory(newTodo));
  };

  self.deleteToDo = function() {
    self.todos.pop();
  };

}]);
