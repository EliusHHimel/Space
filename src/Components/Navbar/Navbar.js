import React from 'react';
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div className='flex justify-between align-center'>
            <div className='flex justify-center align-center gap'>
                <img src={logo} style={
                    {
                        width: '50px',
                    }
                } className='' alt="" />
                <h3 className='russo-font'>SPACE</h3>
            </div>
            <div>
                <ul className='flex justify-center align-center gap'>
                    <li><a href='#home' className='white nav-link'>Home</a></li>
                    <li><a href='#about' className='white nav-link'>About</a></li>
                    <li><a href='#story' className='white nav-link'>Story</a></li>
                    <li><a href='#blog' className='white nav-link'>Blog</a></li>
                    <li><a href='#contact' className='white nav-link'>Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;