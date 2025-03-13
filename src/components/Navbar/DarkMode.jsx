import React, { useState } from 'react'
import LightModeIcon from '../../assets/Images/DarkLightMode/LightModeIcon.png'
import DarkModeIcon from '../../assets/Images/DarkLightMode/DarkModeIcon.png'

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "Light" );
    const element = document.documentElement;

    React.useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[theme]);

    const changeTheme = ()=>{
        if(theme === "light"){
            setTheme("dark");
        }
        else{
            setTheme("light");
        }
    };

    return (
        <>
            <div className='relative'>
                <img src={LightModeIcon} alt="Mode" onClick={changeTheme} className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "dark"? "opacity-0" : "opacity-100"}`} />
                <img src={DarkModeIcon} alt="Mode" onClick={changeTheme} className='w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' />
            </div>
        </>
    )
}

export default DarkMode