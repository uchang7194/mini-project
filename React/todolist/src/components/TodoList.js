import React, { Component } from 'react';

import TodoEditor from './TodoEditor';
import Todo from './Todo';

import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }

    this._addTodos = this._addTodos.bind(this);
    this._removeTodos = this._removeTodos.bind(this);
    this._modifiedTodo = this._modifiedTodo.bind(this);
    this._activeModifiedTodos = this._activeModifiedTodos.bind(this);
  }
  
  _addTodos = (value) => {
    let copy_todos = this.state.todos.slice();
    copy_todos.push({
      value,
      modified_flag: false
    });

    this.setState({
      todos: copy_todos
    });

  }

  _removeTodos = (index) => {
    let copy_todos = this.state.todos.slice();
    console.log(index);
    copy_todos.splice(index, 1);

    this.setState({
      todos: copy_todos
    });
  }

  _activeModifiedTodos = (index) => {
    let copy_todos = this.state.todos.slice();
    let todo = copy_todos[index];

    if( !todo.modified_flag ) {
      todo.modified_flag = true;
    } else {
      todo.modified_flag = false;
    }
    copy_todos.splice(index, 1);
    copy_todos.splice(index, 0, todo);

    this.setState({
      todos: copy_todos
    });
  }
  _modifiedTodo = (idx, todo) => {
    let copy_todos = this.state.todos.slice();

    copy_todos[idx] = {
      value: todo,
      modified_flag: false
    };

    this.setState({
      todos: copy_todos
    })
  }

  _renderTodos = () => {
    return this.state.todos.map((data, index) => {
      return (
        <Todo 
          key={index} 
          todo={data.value} 
          idx={index}
          modified_flag={data.modified_flag}
          removeTodo={this._removeTodos} 
          activeModifiedTodo={this._activeModifiedTodos}
          modifiedTodo={this._modifiedTodo}
          />
      );
    })
  }
  render() {
    return (
      <div className="todolist">
        {/* editor */}
        <TodoEditor addTodos={this._addTodos}/>
        {/* shows */}
        <ul>
          {this._renderTodos()}
        </ul>
      </div>
    )
  }
}
