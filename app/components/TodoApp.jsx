var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';


var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
      
        <h1 className="page-title">React Redux Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-8 large-8">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = TodoApp;
