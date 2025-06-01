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
                <Link >
                    <img src="./src/media/sowota-header-img.svg" alt="" />
                </Link>
            </div>
            <div className='header-right'>
                <div className='header-middle'>
                    <Link to='https://www.sowota.co/blog'>Blog</Link>
                    <Link to='https://chat.whatsapp.com/J16x1c8a10OFGeG8HOORRp'>Join Community</Link>
                    <Link to='https://www.sowota.co/shop'>SowoShop</Link>
                    <Link to='https://www.sowota.co/waitlist'>Contact</Link>
                </div>
                <div className='header-end'>
                    <Link to='https://www.sowota.co/waitlist' className='header-btn1'>Login</Link>
                    <Link to='https://www.sowota.co/waitlist' className='header-btn2'> Create a free account</Link>
                </div>
            </div>
            <div onClick={toggleDown} className='burger'>
                <h2 className='something'>☰</h2>
                {isDown && (
                    <div className='dropdown-body'>
                        <a href="javascript:void(0)" className='x'>×</a>
                        <div>
                            <Link to='https://www.sowota.co/blog'>Blog</Link>
                            <Link to='https://chat.whatsapp.com/J16x1c8a10OFGeG8HOORRp'>Join Community</Link>
                            <Link to='https://www.sowota.co/shop'>SowoShop</Link>
                            <Link to='https://www.sowota.co/waitlist'>Contact</Link>
                        </div>
                        <div className='dropdown-btn'>
                            <Link to='https://www.sowota.co/waitlist' className='dropdown-btn1'>Login</Link>
                            <Link to='https://www.sowota.co/waitlist' className='dropdown-btn2'> Create a free account</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
  )
}

export default Header
