import React from 'react';

import './FacebookPostPicture.css';

const FacebookPostPicture = ({img_url}) => {

    return (
      <div className="img-box-inner">
        <img src={img_url} alt="test" />
      </div>
    );
}

export default FacebookPostPicture;