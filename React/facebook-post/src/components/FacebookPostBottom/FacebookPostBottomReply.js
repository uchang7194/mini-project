import React, { Component } from 'react'

import FacebookPostBottomReplyWriter from './FacebookPostBottomReplyWriter';
import FacebookPostBottomReplyShow from './FacebookPostBottomReplyShow';

export default class FacebookPostBottomReply extends Component {

  constructor(props) {
    super(props);

    this.state = {
      replies: []
    }

    this._handleAddReply = this._handleAddReply.bind(this);
  }

  _handleAddReply = (reply) => {
    let replies_copy = this.state.replies.slice();
    const new_item = [reply];

    this.setState({
      replies: replies_copy.concat(reply)
    });
  }

  showReplies = () => {

    return this.state.replies.map(data => {
      return (
        <FacebookPostBottomReplyShow reply={data} />
      );
    });
  }
  render() {
    return (
      <div className="post-reply-wrapper">
        {/* 리플 출력 부분 */}
        <ul>
          {this.showReplies()}
        </ul>
        {/* 리플 쓰는 부분 */}
        <FacebookPostBottomReplyWriter 
          addReply={this._handleAddReply}
        />
      </div>
    )
  }
}
