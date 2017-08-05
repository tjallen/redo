import React, { Component } from 'react';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }
  render() {
    const {
      text,
      id,
      completed,
      onToggleCompletedClick,
      onRemoveTodoClick,
      onEditTodoClick,
    } = this.props;
    let el;
    if (this.state.editing) {
      el = (
        <li><input type="text" placeholder={text} /></li>
      );
    } else {
      el = (
        <li>
        <span onClick={onEditTodoClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span> <input type="checkbox" onChange={onToggleCompletedClick} checked={completed}></input> <span onClick={onRemoveTodoClick}>X</span>
      </li>
    );
    }
    
    return (
      <div>{el}</div>
    );
  }
}
