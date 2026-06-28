import { useState, useRef } from 'react';

export const useLongPress = (callback = () => {}, ms = 2000) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const timerRef = useRef(null);

  const startPress = () => {
    timerRef.current = setTimeout(() => {
      setIsTriggered(true);
      callback(); // টাইমার শেষ হলে কাজ করবে
    }, ms);
  };

  const stopPress = () => {
    clearTimeout(timerRef.current);
    setIsTriggered(false);
  };

  return {
    onMouseDown: startPress,
    onMouseUp: stopPress,
    onMouseLeave: stopPress,
    onTouchStart: startPress,
    onTouchEnd: stopPress,
    isTriggered
  };
};