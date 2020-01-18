import React from 'react';

const ItemVideo = (props) => {
  return (
    <div>
      <iframe width="100%" height="330" src={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default ItemVideo;