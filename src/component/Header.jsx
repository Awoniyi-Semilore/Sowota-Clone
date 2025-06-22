import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [isDown, setIsDown] = useState(false);

    function toggleDown() {
        setIsDown((prev) => !prev);
    }
    
    return (
        <div className='header'>
            <div>
                <Link to='/'>
                    <img src="./src/media/sowota-header-img.svg" alt="" />
                </Link>
            </div>
            <div className='header-right'>
                <div className='header-middle'>
                    <Link to='/blogPage'>Blog</Link>
                    <Link to='/waitlist'>Join Community</Link>
                    <Link to='/shop'>SowoShop</Link>
                    <Link to='/waitlist'>Contact</Link>
                </div>
                <div className='header-end'>
                    <Link to='/waitlist' className='header-btn1'>Login</Link>
                    <Link to='/waitlist' className='header-btn2'> Create a free account</Link>
                </div>
            </div>
            <div onClick={toggleDown} className='burger'>
                <h2 className='something'>☰</h2>
                {isDown && (
                    <div className='dropdown-body'>
                        <a href="javascript:void(0)" className='x'>×</a>
                        <div>
                            <Link to='/blogPage'>Blog</Link>
                            <Link to='/shop'>SowoShop</Link>
                            <Link to='/waitlist'>Contact</Link>
                        </div>
                        <div className='dropdown-btn'>
                            <Link to='/waitlist' className='dropdown-btn1'>Login</Link>
                            <Link to='/waitlist' className='dropdown-btn2'> Create a free account</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Header
