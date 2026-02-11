import React, { useState } from 'react'
import { FaToggleOn } from "react-icons/fa";

const ToggleButton = () => {
    const [toggleState, setToggeleState] = useState(true)
    return (<>
        <h1 className='flex justify-center gap-3 align-middle mb-5'><span>Toggle Switch</span><span><FaToggleOn /></span></h1>
        <div
            className={`w-60 flex cursor-pointer p-4 rounded-[124px] text-white transition-all duration-300 ease-in-out
                ${toggleState ?
                    "flex-row-reverse text-right bg-green-500"
                    : "text-left bg-gray-300"
                }
                `}
            onClick={() => setToggeleState(!toggleState)}
        >
            <div className={`border-4 border-gray-300 w-fit p-8 rounded-full  font-black transition-all duration-300 ease-in-out
                      ${toggleState ? "bg-green-500" : "bg-red-400"}`}>
                {toggleState ? "On" : "Off"}
            </div>
        </div>
    </>
    )
}

export default ToggleButton
