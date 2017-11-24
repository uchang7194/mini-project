import React, { Component } from 'react';

import FacebookPostReplyEmoticon from './FacebookPostReplyEmoticon';

import './FacebookPostReplyActiveBtns.css';

export default class FacebookPostReplyActiveBtns extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show_emoticon: false
    };

    this._handleToggleEmoticon = this._handleToggleEmoticon.bind(this);
  }

  _handleToggleEmoticon() {
    this._toggleShowEmoticonState();
  }
  _toggleShowEmoticonState = () => {
    this.setState({
      show_emoticon: !this.state.show_emoticon
    }, function() {
      console.log(this.state.show_emoticon);
    });
  }

  _setEmoticon = () => {
    return (
      <FacebookPostReplyEmoticon 
        setWhatLike={this.props.setWhatLike}
        toggleEmoticon={this._handleToggleEmoticon}
      />
    );
  }
  render() {
    return (
      <div className="post-reply-activebtns">
        <ul>
          <li
            onMouseEnter={ e => { this._handleToggleEmoticon(); }}
            onMouseLeave={ e => { this._handleToggleEmoticon(); }}
          >
            { this.state.show_emoticon ? this._setEmoticon() : '' }
            {/* {this._setEmoticon()} */}
            <a href="#">좋아요</a>
          </li>
          <li>
            <a href="#">댓글달기</a>
          </li>
          <li>
            <a href="#">공유하기</a>
          </li>
        </ul>
      </div>
    )
  };
};