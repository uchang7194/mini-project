import React, { Component } from 'react'

import FacebookPostReplyActiveBtns from './FacebookPostReplyActiveBtns';
import FacebookPostReplyShowLikes from './FacebookPostReplyShowLikes';

import './FacebookPostReply.css';

export default class FacebookPostReply extends Component {

  constructor(props) {
    super(props);

    this.state = {
      what_likes: {
        like: 0,
        love_it: 0
      }
    }

    this._handleWhatLike = this._handleWhatLike.bind(this);
  }

  _handleWhatLike(like) {
    let copy_what_likes = Object.assign({}, this.state.what_likes);

    copy_what_likes[like] += 1;
    
    this.setState({
      what_likes: copy_what_likes
    }); 
  }
  render() {
    return (
      <div className="post-reply-area">
        <FacebookPostReplyActiveBtns 
          setWhatLike={this._handleWhatLike}
        />
        <div>
          {/* 좋아요 */}
          <FacebookPostReplyShowLikes what_likes={this.state.what_likes}/>
          {/* 공유 */}
          {/* 댓글 */}
        </div>
      </div>
    )
  }
}
