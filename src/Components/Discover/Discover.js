import React from 'react';
import spaceImg1 from '../../images/mission/rocket1.png'
import spaceImg2 from '../../images/mission/rocket2.png'
import spaceImg3 from '../../images/mission/rocket3.png'

const Discover = () => {
    return (
        <div className='discover-container default-padding'>
            <h1>Discover Universe</h1>
            <div className="spaceship-container">
                <div>
                    <img src={spaceImg1} alt="spaceship" />
                    <h3>Mission Bongo</h3>
                    <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                </div>
                <div>
                    <img src={spaceImg2} alt="spaceship" />
                    <h3>Mission Moon</h3>
                    <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                </div>
                <div>
                    <img src={spaceImg3} alt="spaceship" />
                    <h3>Mission Mars</h3>
                    <p>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
                </div>
            </div>
        </div>
    );
};

export default Discover;