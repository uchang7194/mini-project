import React from 'react';

import './FacebookPostInfoUserInfo.css';

const FacebookPostInfoUserInfo = ({user_pic_url, from, to, write_date}) => {

    return (
      <div className="post-info-userinfo">
        <div className="userinfo-pic">
          <img src={user_pic_url} alt="user_img_test"/> 
        </div>
        <div className="userinfo-etc">
          <div className="userinfo-etc-fromTo">
            <a href="#">{from}</a>
            &nbsp;>&nbsp;  
            <a href="#">{to}</a>
          </div>
          <div className="userinfo-etc-followanddate">
            <a href="#">팔로우</a>
            <a href="#">{write_date}</a>
          </div>
        </div>
      </div>
    );
}

export default FacebookPostInfoUserInfo;