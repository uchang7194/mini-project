import React, { Component } from 'react'

import FacebookPostBottomActiveBtns from './FacebookPostBottomActiveBtns';
import FacebookPostBottomShowLikes from './FacebookPostBottomShowLikes';
import FacebookPostBottomReply from './FacebookPostBottomReply';

import './FacebookPostBottom.css';

export default class FacebookPostBottom extends Component {

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
        <FacebookPostBottomActiveBtns 
          setWhatLike={this._handleWhatLike}
        />
        <div>
          {/* 좋아요 */}
          <FacebookPostBottomShowLikes what_likes={this.state.what_likes}/>
          {/* 댓글 */}
          <FacebookPostBottomReply />
        </div>
      </div>
    )
  }
}
