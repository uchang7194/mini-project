import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './Todo.css';


export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  _handleOnClickDelete = () => {
    
    let confirm = window.confirm('삭제 하시겠습니까?');

    if( confirm ) {
      this.props.removeTodo(this.props.idx);
    }
  }

  _handleOnClickModified = () => {
    this.props.activeModifiedTodo(this.props.idx);
  }

  _handleOnChange = (e) => {
    const value = e.target.value;

    this.setState({
      value
    });
  }

  _handleOnKeyDown = (e) => {
    const value = e.target.value;
    const keyCode = e.keyCode;

    if( keyCode === 13 ) {
      e.preventDefault();
      this.props.modifiedTodo(this.props.idx, value);
    }
  }

  _renderTodoText = () => {
    const todo = this.props.todo;
    if( !this.props.modified_flag ) {
      return (
        <p>{todo}</p>
      );
    } else {
      return (
        <input 
          type="text" 
          value={this.state.value} 
          onChange={ (e) => { this._handleOnChange(e) }}
          onKeyDown={ (e) => { this._handleOnKeyDown(e) }}
          />
      )
    }
  }
  componentWillReceiveProps = (newProps) => {
    this.setState({
      value: newProps.todo
    });
  }
  render() {
    return (
      <li className="todo">
        <div className="show-todo">
          { this._renderTodoText() }
        </div>
        <div className="utils">
          <button className="delete-btn" type="button" onClick={() => { this._handleOnClickDelete() }}>삭제</button>
          <button className="modify-btn"type="button" onClick={() => { this._handleOnClickModified() }}>수정</button>
        </div>
      </li>
    );
  }
}

Todo.PropTypes = {
  todo: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  modified_flag: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  activeModifiedTodo: PropTypes.func.isRequired,
  modifiedTodo: PropTypes.func.isRequired
}
