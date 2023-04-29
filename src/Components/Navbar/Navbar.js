import React from 'react';
import logo from '../../images/logo.png';

const Navbar = () => {
    function menuToggler(x) {
        x.classList.toggle("change");
      }
    return (
        <div className='navbar'>
            <div className='flex justify-center align-center gap'>
                <img src={logo} style={
                    {
                        width: '50px',
                    }
                } className='' alt="" />
                <h3 className='russo-font'>SPACE</h3>
            </div>
            <div className='nav-links'>
                {/* responsive button */}
                <div class="menu" onClick={menuToggler()}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <ul className='flex justify-center align-center gap mobile'>
                    <li><a href='/' className='white nav-link'>Home</a></li>
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