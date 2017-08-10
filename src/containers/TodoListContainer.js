import { connect } from 'react-redux';
import { removeTodo, editTodo, toggleTodo, setVisibleTodos, clearCompleted } from './../actions';
import TodoList from './../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'DISPLAY_ALL': return todos;
    case 'DISPLAY_ACTIVE': return todos.filter(todo => !todo.completed);
    case 'DISPLAY_COMPLETED': return todos.filter(todo => todo.completed);
    default:
      throw new Error(`trying to filter todos by unknown or erroneous filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.settings.filter),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleCompletedClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodoClick: (id) => {
      dispatch(removeTodo(id));
    },
    onFilterClick: (filter) => {
      dispatch(setVisibleTodos(filter));
    },
    onEditTodoComplete: (id, text) => {
      dispatch(editTodo(id, text));
    },
    onClearCompletedClick: () => {
      dispatch(clearCompleted());
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
