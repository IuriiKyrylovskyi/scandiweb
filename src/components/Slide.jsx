import React from 'react';

const Slide = ({ id, img, name, airline, quote }) => {
  return (
    <div className="slide">
      <div className="slide__wrapper">
        <div className="slide__img" style={{ backgroundImage: `url(${img})` }}/>
        <div className="slide__info">
          <h3 className="slide__info-title">{name}</h3>
          <h5 className="slide__info-subtitle">{airline}</h5>
          <p className="slide__info-text">{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
