import React, { useState } from 'react';
import data from '../data';
import Slide from './Slide';

const Carousel = () => {
  const [planes, setPlanes] = useState(data);
  const [index, setindex] = useState(0);

  return (
    <div className="slider__wrapper">
      <h1 className="slider__title">Carousel Test Projec by Iurii Kyrylovskyi</h1>
      <div className="slider__container">
        {planes.map((plane, planeIndex) => {
          const { id } = plane;
          return <Slide key={id} {...plane} />;
        })}
        <button className="prev"/>
        <button className="next"/>
        <button className="goto">go to ???</button>
        {'slider__img-slider'}
        {'slider__dot-slider'}
      </div>
    </div>
  );
};

export default Carousel;
