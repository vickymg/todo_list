toDoApp.factory('ToDoFactory', function() {

  var Todo = function(newTodo) {
    this.task = newTodo;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };

  Todo.prototype.complete = function() {
    this.completed = true;
  };

  return Todo;

});
