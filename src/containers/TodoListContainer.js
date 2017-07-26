import { connect } from 'react-redux';
import { removeTodo, toggleTodo, addTodo } from './../actions';
import TodoList from './../components/TodoList';

 // placeholders til we reimplement toggling visibility / removing
const getVisibleTodos = todos => todos;

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    onButtonClick: (id) => {
      dispatch(removeTodo(id));
    },
    onTodoInputSubmit: (text) => {
      dispatch(addTodo(text));
    },
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
