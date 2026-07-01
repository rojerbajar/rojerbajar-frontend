import { useState, useRef } from 'react';

export const useLongPress = (callback = () => {}, ms = 2000) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const timerRef = useRef(null);

  const startPress = () => {
    setIsTriggered(false); // নতুন করে শুরুর সময় রিসেট
    timerRef.current = setTimeout(() => {
      setIsTriggered(true);
      callback();
    }, ms);
  };

  const stopPress = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsTriggered(false);
  };

  return {
    // ইভেন্ট হ্যান্ডলারগুলো
    onMouseDown: startPress,
    onMouseUp: stopPress,
    onMouseLeave: stopPress,
    onTouchStart: startPress,
    onTouchEnd: stopPress,
    // স্টেটটি আলাদা করে দিলাম
    isTriggered 
  };
};