import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './TodoEditor.css';

export default class TodoEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  _handleOnChange = (e) => {
    const value = e.target.value;

    this.setState({
      value
    });
  }
  _handleOnKeyDown = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;

    if( keyCode === 13 ) {
      e.preventDefault();
      this.props.addTodos(value);
      this.setState({
        value: ''
      })
    }
  }
  render() {
    return (
      <div className="todoeditor">
        <form>
          <fieldset>
            <legend>Todo Editor</legend>
            <label>
              <input 
                type="text" 
                value={this.state.value}
                onChange={(e) => { this._handleOnChange(e) }}
                onKeyDown={(e) => { this._handleOnKeyDown(e) }}
                />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

TodoEditor.PropTypes = {
  addTodos: PropTypes.func.isRequired
}
