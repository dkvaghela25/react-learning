import React, { useEffect, useState, useRef } from 'react';
import GithubLink from '../../ui/GithubLink';

const Throttling = () => {
  const [input, setInput] = useState("");
  const throttledValue = useThrottleValue(input, 2000);
  const logs = document.getElementById("logs")

  useEffect(() => {
    if (!throttledValue) return;
    logs.innerHTML += `<div>API Call : ${throttledValue}</div>` 
    console.log("API Call :", throttledValue);
  }, [throttledValue]);

  return (
    <div className='center'>
      <h1>Throttling : Make API call in interval of some fixed time</h1>
      <form action="">
        <div>
          <label htmlFor="username">Search : </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
      <div id='logs'></div>
      <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Optimization/SearchTechniques/Throttling.jsx" />
    </div>
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
