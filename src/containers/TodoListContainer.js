import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchTodos,
  removeTodo,
  editTodo,
  toggleTodo
} from './../actions';
import TodoList from './../components/TodoList';
import { withRouter } from 'react-router-dom';
import {
  getVisibleTodos,
  getIsFetching,
  getErrorMessage
} from '../reducers';
import FetchError from '../components/FetchError';

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
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }
  render() {
    const { todos, errorMessage, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
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
    errorMessage: getErrorMessage(state, filter),
  }
};

TodoListContainer = withRouter(connect(
  mapStateToProps,
  {
    onToggleCompletedClick: toggleTodo,
    onRemoveTodoClick: removeTodo,
    onEditTodoComplete: editTodo,
    fetchTodos,
  }
)(TodoListContainer));

export default TodoListContainer;
