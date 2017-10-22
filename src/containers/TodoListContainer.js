import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo, editTodo, toggleTodo } from './../actions';
import TodoList from './../components/TodoList';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }
  fetchData() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    )
  }
  render() {
    return <TodoList {...this.props} />;
  }
}
const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  }
};

TodoListContainer = withRouter(connect(
  mapStateToProps,
  {
    onToggleCompletedClick: toggleTodo,
    onRemoveTodoClick: removeTodo,
    onEditTodoComplete: editTodo,
  }
)(TodoListContainer));

export default TodoListContainer;
