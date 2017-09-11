var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = ''; // clear the text in input
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" style={styles.inputStyle} placeholder="What do you need to do?"/>
          <button className="button expanded" style={{fontSize: "2rem"}} >Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);

let styles = {
  inputStyle: {
    height: "60px",
    fontSize: "2rem"
  }
}
