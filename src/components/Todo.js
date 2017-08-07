import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: this.props.text || '',
    };
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.completeEdit = this.completeEdit.bind(this);
  }
  handleTodoClick() {
    this.setState({ editing: true });
  }
  handleChange() {
    console.log('Todo onChange', this.textInput.value);
    this.setState({ text: this.textInput.value });
  }
  handleKeyDown(e) {
    console.log('Todo handleKeyDown', e, this.textInput.value);
    if (e.keyCode === 13) {
      this.completeEdit();
    }
  }
  handleBlur() {
    this.completeEdit();
  }
  completeEdit() {
    if (this.state.text === '') {
      this.props.onRemoveTodoClick(this.props.id);
      return;
    }
    this.props.onEditTodoComplete(this.props.id, this.state.text);
    this.setState({ editing: false });
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
        <li>
            <input
              ref={(el) => {this.textInput = el}}
              type="text"
              autoFocus="true"
              placeholder={text}
              value={this.state.text}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.handleBlur}
            />
        </li>
      );
    } else {
      el = (
        <li>
          <span onClick={this.handleTodoClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>{this.state.text}</span> <input type="checkbox" onChange={onToggleCompletedClick} checked={completed}></input> <span onClick={onRemoveTodoClick}>X</span>
        </li>
      );
    }
    
    return (
      <div>{el}</div>
    );
  }
}