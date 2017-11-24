import React, { Component } from 'react';

import FacebookPostPicture from './FacebookPostPicture';
import FacebookPostInfo from './FacebookPostInfo';
import FacebookPostReply from './FacebookPostReply/FacebookPostReply';

import './FacebookPost.css';

export default class FacebookPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      img_url: 'https://images.genius.com/2b790e48bcd9779bce4dc5bc74a01118.563x1000x1.png',
      user_info: {
        img_url: 'https://images.genius.com/2b790e48bcd9779bce4dc5bc74a01118.563x1000x1.png',
        from: 'Heo Uchang',
        to: '???',
        write_date: '21시간',
        content: 'Just do it'
      }
    }
  }

  render() {
    return (
      <div className="modal-dim">
        <div className="modal-inner">
          <div className="post-img-box">
            <FacebookPostPicture img_url={this.state.img_url}/>
          </div>
          <div className="post-info-box">
            <FacebookPostInfo user_info={this.state.user_info}/>
            <FacebookPostReply />
          </div>
        </div>
      </div>
    )
  }
}
