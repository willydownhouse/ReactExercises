import React from 'react';

const ImgCont = ({ alt, src }) => {
  return (
    <div className="img-container">
      <img className="img" alt={alt} src={src} />
    </div>
  );
};

export default ImgCont;
