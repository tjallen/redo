import React from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import FooterContainer from './containers/FooterContainer';

const App = () => (
  <div>
    <TodoListContainer />
    <FooterContainer />
  </div>
);

export default App;
