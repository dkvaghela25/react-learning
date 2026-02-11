import React, { memo, useRef } from 'react'

const Child = ({bioData}) => {
    const renderedCount = useRef(0);
  return (
    <>
    <div>My name is {bioData.name}</div>
    <div>
      I have rendered {renderedCount.current++} times
    </div>
    </>
  )
}

export default memo(Child)
