import { connect } from 'react-redux';
import { removeTodo, editTodo, toggleTodo } from './../actions';
import TodoList from './../components/TodoList';
import { withRouter } from 'react-router-dom';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all': return todos;
    case 'active': return todos.filter(todo => !todo.completed);
    case 'completed': return todos.filter(todo => todo.completed);
    default:
      console.log(
        `trying to filter todos by unknown or erroneous filter: ${filter}`
      )
      return todos;
  }
};

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state.todos,
    match.params.filter || 'all'
  ),
});

// when mapDispatchToProps arguments for callback props match the args for the action creators exactly, rather than the usual mapDispatchToProps(), we can pass a mapping object whose properties correspond to the callback props, and values match the action creators
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleCompletedClick: (id) => {
//       dispatch(toggleTodo(id));
//     },
//     onRemoveTodoClick: (id) => {
//       dispatch(removeTodo(id));
//     },
//     onEditTodoComplete: (id, text) => {
//       dispatch(editTodo(id, text));
//     },
//   };
// };

const TodoListContainer = withRouter(connect(
  mapStateToProps,
  {
    onToggleCompletedClick: toggleTodo,
    onRemoveTodoClick: removeTodo,
    onEditTodoComplete: editTodo,
  }
)(TodoList));

export default TodoListContainer;
