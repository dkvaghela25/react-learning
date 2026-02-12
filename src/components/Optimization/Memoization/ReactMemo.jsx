import React, { memo, useMemo, useRef, useState } from 'react'
import GithubLink from '../../ui/GithubLink';

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    let bioData = useMemo(() => {
        return { name: "John", age: 30 }
    }, [])
    return (
        <div className='center'>
            <h1>React.memo : Used to prevent component from being re render until it's props value is changed</h1>
            <h1>Count - {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child bioData={bioData} />
            <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/Optimization/Memoization/ReactMemo.jsx" />
        </div>
    )
}

const Child = memo(({bioData}) => {
    const renderedCount = useRef(0);
  return (
    <div>
    <div>My name is {bioData.name}</div>
    <div>
      I have rendered {renderedCount.current++} times
    </div>
    </div>
  )
})

export default ReactMemo
