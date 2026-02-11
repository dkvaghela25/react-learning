import React from 'react'

const EventPropagation = () => {
  
  const handleGrandParentClick = (event) => {
    console.log("Grand Parent Clicked !!!!!")
    event.stopPropagation();
  }

  const handleParentClick = (event) => {
    console.log("Parent Clicked !!!!!")
    event.stopPropagation();
  }

  const handleChildClick = (event) => {
    console.log("Child Clicked !!!!!")
    event.stopPropagation();
  }

  return (
    <>
      <div onClick={handleGrandParentClick} style={{ backgroundColor: 'blue', padding: '30px', border: '5px solid black' }}>
        <div onClick={handleParentClick} style={{ backgroundColor: 'red', padding: '30px', border: '5px solid black' }}>
          <div onClick={handleChildClick} style={{ backgroundColor: 'yellow', padding: '30px', border: '5px solid black', cursor:'pointer' }}>
            Child Div
          </div>
        </div>
      </div>
    </>
  )
}

export default EventPropagation
