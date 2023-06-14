import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='flex justify-center align-center gap'>
                <img src={logo} style={
                    {
                        width: '50px',
                    }
                } className='' alt="" />
                <h3 className='russo-font'>SPACE</h3>
            </div>
            <p>
                All Rights Reserved. © 2023
            </p>
            <div className='flex justify-center align-center gap'>
                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a>
                <a href='https://www.twitter.com/' target='_blank' rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href='https://www.youtube.com/' target='_blank' rel="noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/in/eliushhimel">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;