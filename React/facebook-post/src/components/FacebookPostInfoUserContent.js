import React from 'react';

import './FacebookPostInfoUserContent.css';

const FacebookPostInfoUserContent = ({content}) => {

    return (
      <div className="post-info-content">
        <p>{content}</p>
      </div>
    );
}

export default FacebookPostInfoUserContent;