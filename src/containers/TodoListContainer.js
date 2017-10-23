import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  requestTodos,
  fetchTodos,
  removeTodo,
  editTodo,
  toggleTodo
} from './../actions';
import TodoList from './../components/TodoList';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos, getIsFetching } from '../reducers';

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
    const { filter, requestTodos, fetchTodos } = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }
  render() {
    const { todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    return <TodoList {...this.props} />;
  }
}
const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
};

TodoListContainer = withRouter(connect(
  mapStateToProps,
  {
    onToggleCompletedClick: toggleTodo,
    onRemoveTodoClick: removeTodo,
    onEditTodoComplete: editTodo,
    requestTodos,
    fetchTodos,
  }
)(TodoListContainer));

export default TodoListContainer;
