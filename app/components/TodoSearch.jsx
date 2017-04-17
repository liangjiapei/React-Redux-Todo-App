var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoSearch = React.createClass({
  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="search todos" value={searchText} onChange={() => {
            var newSearchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(newSearchText));
          }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show Completed todos
          </label>
        </div>
      </div>
    );
  }
});

var mapStateToProps = (state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
};

export default connect(mapStateToProps)(TodoSearch);
