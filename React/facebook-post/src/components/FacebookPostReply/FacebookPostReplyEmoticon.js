import React from 'react';

import './FacebookPostReplyEmoticon.css';

const FacebookPostReplyEmoticon = ({setWhatLike, toggleEmoticon}) => {

    return (

      <div className="emoticon">
        <ul>
          <li>
            <div onClick={() => { 
                setWhatLike('like'); 
                toggleEmoticon();
              }}>
              <span>좋아요</span>
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </div>
          </li>
          <li>
            <div onClick={() => { 
                setWhatLike('love_it'); 
                toggleEmoticon();
              }}>
              <span>최고에요</span>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </div>
          </li>
        </ul>
      </div>
    );
}

export default FacebookPostReplyEmoticon;