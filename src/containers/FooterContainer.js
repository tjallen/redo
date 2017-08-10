import { connect } from 'react-redux';
import { setVisibleTodos, clearCompleted } from './../actions';
import Footer from './../components/Footer';

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
  allTodos: state.todos,
  todos: getVisibleTodos(state.todos, state.settings.filter),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick: (filter) => {
      dispatch(setVisibleTodos(filter));
    },
    onClearCompletedClick: () => {
      dispatch(clearCompleted());
    }
  };
};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);

export default FooterContainer;
