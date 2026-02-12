import React, { useEffect, useState } from 'react';
import GithubLink from '../../ui/GithubLink';

const Debounce = () => {
  const [input, setInput] = useState("");
  const res = useDebounceValue(input, 500);
  const logs = document.getElementById("logs")

  useEffect(() => {
    if (!res) return;
    logs.innerHTML += `<div>API Call : ${res}</div>` 
    console.log("API Call : ", res);
  }, [res])

  return (
    <div className='center'>
      <h1>Debounce : Make API call after user stops writing in input box</h1>
      <form>
        <label htmlFor="username">Search : </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div id='logs'></div>
      <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Optimization/SearchTechniques/Debounce.jsx" />
    </div>
  );
};

const useDebounceValue = (input, delay = 100) => {

  const [debounceValue, setDebounceValue] = useState(input)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(input)
    }, delay)
    return () => clearTimeout(id);
  }, [delay, input])

  return debounceValue;
}

export default Debounce;