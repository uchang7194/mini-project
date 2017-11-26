import React, { Component } from 'react';

import './FacebookPostBottomReplyWriter.css';

export default class FacebookPostBottomReplyWriter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

  }

  _handleOnKeypress(e) {
    
    if( e.keyCode === 13 ) {
      e.preventDefault();
      e.stopPropagation();
      this.props.addReply(e.target.value);
      this.setState({
        value: ''
      });
    }
  }

  _handleOnChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  render() {

    return (
      <div className="post-reply-writer">
        <div>
          <img src="" alt="프로필사진" />
        </div>
        <div className="writer">
          <form>
            <fieldset>
              <legend></legend>
              <label>
                <input 
                  type="text"
                  value={this.state.value}
                  onChange={(e) => { this._handleOnChange(e) }} 
                  onKeyDown={(e) => { this._handleOnKeypress(e) }} 
                  />
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

