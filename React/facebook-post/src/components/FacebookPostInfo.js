import React from 'react';

import FacebookPostInfoUserInfo from './FacebookPostInfoUserInfo';
import FacebookPostInfoUserContent from './FacebookPostInfoUserContent';

import './FacebookPostInfo.css';

const FacebookPostInfo = ({user_info}) => {

    return (
      <div className="post-info">
        <FacebookPostInfoUserInfo 
          user_pic_url={user_info.img_url}
          from={user_info.from}
          to={user_info.to}
          write_date={user_info.write_date}
        />
        <FacebookPostInfoUserContent 
          content={user_info.content}
        />
      </div>
    );
}

export default FacebookPostInfo;