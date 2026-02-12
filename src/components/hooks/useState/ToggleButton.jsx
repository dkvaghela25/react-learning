import React, { useState } from 'react'
import { FaToggleOn } from "react-icons/fa";
import GithubLink from '../../ui/GithubLink';

const ToggleButton = () => {
    const [toggleState, setToggleState] = useState(true)
    return (<div className='center'>
        <h1 className='flex justify-center gap-3 items-center mb-5'><span>Toggle Switch with help of state and tailwind css</span><span><FaToggleOn /></span></h1>
        <div
            className={`w-60 flex cursor-pointer p-4 rounded-[124px] text-white transition-all duration-300 ease-in-out
                ${toggleState ?
                    "flex-row-reverse text-right bg-green-500"
                    : "text-left bg-gray-300"
                }
                `}
            onClick={() => setToggleState(!toggleState)}
        >
            <div className={`border-4 border-gray-300 w-fit p-8 rounded-full  font-black transition-all duration-300 ease-in-out
                      ${toggleState ? "bg-green-500" : "bg-red-400"}`}>
                {toggleState ? "On" : "Off"}
            </div>
        </div>
        <GithubLink link="https://github.com/dkvaghela25/react-learning/blob/main/src/components/hooks/useState/ToggleButton.jsx" />
    </div>
    )
}

export default ToggleButton
