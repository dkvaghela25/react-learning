import React, { useEffect, useState, useRef } from 'react';

const Throttling = () => {
  const [input, setInput] = useState("");
  const throttledValue = useThrottleValue(input, 3000);

  useEffect(() => {
    if (!throttledValue) return;
    console.log("API Call :", throttledValue);
  }, [throttledValue]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

const useThrottleValue = (value, delay = 500) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      setThrottledValue(value);
      lastExecuted.current = now;
    }
  }, [value, delay]);

  return throttledValue;
};

export default Throttling;
