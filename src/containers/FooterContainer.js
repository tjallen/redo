import { connect } from 'react-redux';
import { clearCompleted } from './../actions';
import Footer from './../components/Footer';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { params }) => ({
  todos: state.todos,
  completedTodosPresent: state.todos.filter(todo => todo.completed).length > 0 ? true : false,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCompletedClick: () => {
      dispatch(clearCompleted());
    }
  };
};

const FooterContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer));

export default FooterContainer;
