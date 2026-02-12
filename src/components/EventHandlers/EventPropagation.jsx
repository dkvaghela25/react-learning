import React from 'react'

const EventPropagation = () => {

  const handleGrandParentClick = (event) => {
    alert("Grand Parent Clicked !!!!!")
    // event.stopPropagation();
  }

  const handleParentClick = (event) => {
    alert("Parent Clicked !!!!!")
    // event.stopPropagation();
  }

  const handleChildClick = (event) => {
    alert("Child Clicked !!!!!")
    // event.stopPropagation();
  }

  return (
    <div className='center'>
      <h1>How event propagation works with capturing and bubbling</h1>
      <div className='flex gap-10'>
        <div>
          <div onClick={handleGrandParentClick} style={{ backgroundColor: 'blue', padding: '30px', border: '5px solid black' }}>
            <div onClick={handleParentClick} style={{ backgroundColor: 'red', padding: '30px', border: '5px solid black' }}>
              <div onClick={handleChildClick} style={{ backgroundColor: 'yellow', padding: '30px', border: '5px solid black', cursor: 'pointer' }}>
                Child Div
              </div>
            </div>
          </div>
          <h1>Bubbling</h1>
        </div>

        <div>
          <div onClickCapture={handleGrandParentClick} style={{ backgroundColor: 'blue', padding: '30px', border: '5px solid black' }}>
            <div onClickCapture={handleParentClick} style={{ backgroundColor: 'red', padding: '30px', border: '5px solid black' }}>
              <div onClickCapture={handleChildClick} style={{ backgroundColor: 'yellow', padding: '30px', border: '5px solid black', cursor: 'pointer' }}>
                Child Div
              </div>
            </div>
          </div>
          <h1>Capturing</h1 >
        </div>
      </div>
      <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/EventHandlers/EventPropagation.jsx" />

    </div>
  )
}

export default EventPropagation
