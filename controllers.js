toDoApp.controller('ToDoController', function() {

  var self = this;

  self.todos = [];

  self.addToDo = function(newTodo) {
    self.todos.push({task: newTodo, completed: false});
  };

  self.deleteToDo = function() {
    self.todos.pop();
  };

});
