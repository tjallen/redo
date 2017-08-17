import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import FooterContainer from './containers/FooterContainer';

const App = ({ match }) => (
  <div>
    <TodoListContainer filter={match.params.filter || 'all'}/>
    <FooterContainer />
  </div>
);

export default App;
