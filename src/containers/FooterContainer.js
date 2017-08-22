import { connect } from 'react-redux';
import { clearCompleted } from './../actions';
import Footer from './../components/Footer';

const mapStateToProps = state => ({
  todos: state.todos,
  //todos: getVisibleTodos(state.todos, state.settings.filter),
  completedTodosPresent: state.todos.filter(todo => todo.completed).length > 0 ? true : false,
});

const mapDispatchToProps = (dispatch) => {
  return {
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
