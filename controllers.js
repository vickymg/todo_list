toDoApp.controller('ToDoController', ['ToDoService','ToDoFactory', function(ToDoService, ToDoFactory) {

  var self = this;

  self.todos = ToDoService.getAll();

  self.addToDo = function(newTodo) {
    self.todos.push(new ToDoFactory(newTodo));
  };

  self.deleteToDo = function() {
    self.todos.pop();
  };

}]);
