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
import { getVisibleTodos } from '../reducers';

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
    fetchTodos,
  }
)(TodoListContainer));

export default TodoListContainer;
