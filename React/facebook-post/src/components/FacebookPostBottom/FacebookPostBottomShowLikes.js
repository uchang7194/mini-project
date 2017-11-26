import React from 'react';

import './FacebookPostBottomShowLikes.css';

const FacebookPostBottomShowLikes = ({what_likes}) => {

    function renderWhatLikes(_what_likes) {

      let like_types = '', like_count = 0, props;

      for( props in _what_likes ) {
        if( _what_likes.hasOwnProperty(props) ) {
          if(_what_likes[props] === 0) { continue; }
          like_types += (' ' + props);
          like_count += _what_likes[props]; 
        }
      }

      if( like_count === 0 ) {
        return '';
      } else {
        return (
          <span>{like_types + ' ' + like_count}</span>
        );
      }
    }
    return (
      <div className="post-show-likes">
        {renderWhatLikes(what_likes)}
      </div>
    );
}

export default FacebookPostBottomShowLikes;