import { connect } from 'react-redux';
import { clearCompleted } from './../actions';
import Footer from './../components/Footer';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state,
    match.params.filter || 'all'
  ),
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
