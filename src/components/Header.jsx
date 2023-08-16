import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src="" alt="" />
            <span>Task Assign</span>
        </div>
        <div className="themeSelector">
            <span className='light'></span>
            <span className='medium'></span>
            <span className='dark activeTheme'></span>
            <span className='gradientOne'></span>
            <span className='gradientTwo'></span>
            <span className='gradientThree'></span>
        </div>
    </header>
  )
}

export default Header