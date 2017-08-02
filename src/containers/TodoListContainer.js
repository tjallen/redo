import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from './../actions';
import TodoList from './../components/TodoList';

 // placeholders til we reimplement toggling visibility / removing
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'DISPLAY_ALL': return todos;
    case 'DISPLAY_ACTIVE': break; // TODO filter by !completed
    case 'DISPLAY_COMPLETED': break; // TODO filter by completed
    default:
      return todos; // throw err once filters are implemented
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.settings.filter),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onButtonClick: (id) => {
      dispatch(removeTodo(id));
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
