import { connect } from 'react-redux';
import { removeTodos } from './../actions';
import Footer from './../components/Footer';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state,
    match.params.filter || 'all'
  ),
});

const FooterContainer = withRouter(connect(
  mapStateToProps,
  {
    onClearCompletedClick: removeTodos,
  }
)(Footer));

export default FooterContainer;
