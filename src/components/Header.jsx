import React, { useEffect, useState } from 'react'
import logo from '../logo512.png';

const Header = () => {
  const [themeColor, setThemeColor] = useState(JSON.parse(localStorage.getItem("themeColor")) || "dark");

  useEffect(() => {
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(themeColor)
    localStorage.setItem("themeColor",JSON.stringify(themeColor))
  },[themeColor])
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="" />
            <span>Task Assign</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setThemeColor("light")} className={themeColor === 'light' ? 'light activeTheme' :"light"}></span>
            <span onClick={() => setThemeColor("medium")} className={themeColor === 'medium' ? 'medium activeTheme' :"medium"}></span>
            <span onClick={() => setThemeColor("dark")} className={themeColor === 'dark' ? 'dark activeTheme' :"dark"}></span>
            <span onClick={() => setThemeColor("gradientOne")} className={themeColor === 'gradientOne' ? 'gradientOne activeTheme' :"gradientOne"}></span>
            <span onClick={() => setThemeColor("gradientTwo")} className={themeColor === 'gradientTwo' ? 'gradientTwo activeTheme' :"gradientTwo"}></span>
            <span onClick={() => setThemeColor("gradientThree")} className={themeColor === 'gradientThree' ? 'gradientThree activeTheme' :"gradientThree"}></span>
        </div>
    </header>
  )
}

export default Header
