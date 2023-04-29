import React from 'react';
import planet1 from '../../images/planet-01.png';

const Banner = () => {
    return (
        <div className='banner-container default-padding'>
            <div>
                <div className='flex align-center gap welcome-text'>
                    <img width={30} src={planet1} alt="planet" />
                    <h4 className='text-grad-purple'>Welcome to Stella</h4>
                </div>
                <h1 className='russo-font headline'>SPACE FOR <br /> EVERYONE</h1>
                <p className='pwidth text-justify'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                <a href="#get_started" className='start-btn white'>Get Started</a>
            </div>
        </div>
    );
};

export default Banner;