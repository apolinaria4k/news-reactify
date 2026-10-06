import { useRef } from 'react';
import classes from './styles.module.css';
import React from 'react';

interface Props {
  children: React.ReactElement;
  step?: undefined | number;
}

export default function Slider({ children, step = 150 }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

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
