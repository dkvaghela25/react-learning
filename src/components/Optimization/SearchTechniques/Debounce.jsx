import React, { useEffect, useState } from 'react';

const Debounce = () => {
  const [input, setInput] = useState("");
  const res = useDebounceValue(input, 500);

  useEffect(() => {
    if(!res) return;
    console.log("API Call : ", res);
  }, [res])

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