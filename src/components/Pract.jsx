import React from 'react'

const Pract = () => {
    let students = [];
    return (
        <>  
            {/* <div>{students.length === 0 && "No Student Found"}</div> */}
            {/* <div>{!students.length && "No Student Found"}</div> */}
            <div>{Boolean(!students.length) && "No Student Found"}</div>
            <div>No. Of Students : {students.length}</div>
        </>
    )
}

export default Pract
