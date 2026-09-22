import { useRef } from 'react';
import classes from './styles.module.css';
import React from 'react';

export default function Slider({ children, step = 150 }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className={classes.slider}>
      <button onClick={scrollLeft} className={classes.arrow}>{`<`}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={classes.arrow}>{`>`}</button>
    </div>
  );
}
