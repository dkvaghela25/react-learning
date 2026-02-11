import React, { createContext, use, useContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const handleToggle = () => {
        setTheme((prev) => prev === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{ theme, handleToggle }} >{children}</ThemeContext.Provider>
    )
}

const LightDark = () => {
    const { theme, handleToggle } = useContext(ThemeContext);
    return (
        <div className={` w-screen h-screen absolute top-0 right-0 flex flex-col justify-center items-center gap-5 ${theme === 'dark' ? 'bg-black text-white' : 'text-black bg-white'} `}>
            <h1>Dark Light Mode Website</h1>
            <button onClick={handleToggle} className='bg-blue-500'>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</button>
        </div>
    )
}

export default LightDark
