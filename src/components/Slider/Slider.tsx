import { useRef } from 'react';
import classes from './styles.module.css';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Props {
  children: React.ReactElement;
  step?: undefined | number;
}

export default function Slider({ children, step = 150 }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);
  const { isDark } = useTheme();

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className={`${classes.slider}  ${isDark ? classes.dark : classes.light}`}>
      <button onClick={scrollLeft} className={classes.arrow}>{`<`}</button>
      {React.cloneElement(children as React.ReactElement, { ref: sliderRef } as any)}
      <button onClick={scrollRight} className={classes.arrow}>{`>`}</button>
    </div>
  );
}
