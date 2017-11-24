import React, { Component } from 'react'

import FacebookPostReplyActiveBtns from './FacebookPostReplyActiveBtns';

import './FacebookPostReply.css';

export default class FacebookPostReply extends Component {

  constructor(props) {
    super(props);

    this.state = {
      what_like: ''
    }

    this._handleWhatLike = this._handleWhatLike.bind(this);
  }

  _handleWhatLike(like) {
    this.setState({
      what_like: like
    }); 
  }
  render() {
    return (
      <div className="post-reply-area">
        <FacebookPostReplyActiveBtns 
          setWhatLike={this._handleWhatLike}
        />
        {/* 좋아요 */}
        {/* 공유 */}
        {/* 댓글 */}
      </div>
    )
  }
}
