var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var todosString = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(todosString);
    } catch (e) {
      // if parse failed
    }

    return $.isArray(todos) ? todos : [];
  }
};
