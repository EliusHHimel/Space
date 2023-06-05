import React from 'react';
import ship1 from '../../images/mission/rocket1.png'
import ship2 from '../../images/mission/rocket2.png'
import ship3 from '../../images/mission/rocket3.png'
import ship4 from '../../images/mission/rocket4.png'
import ship5 from '../../images/mission/rocket5.png'
import ship6 from '../../images/mission/rocket6.png'
import ship7 from '../../images/mission/rocket7.png'
import ufo from '../../images/mission/ufo.png'

const Spaceship = () => {
    const shipList = [
        {
            name: 'Falcon 1',
            img: ship1,
            year: 2006,
            status: 'Successful'
        },
        {
            name: 'Falcon 9',
            img: ship2,
            year: 2008,
            status: 'Successful'
        },
        {
            name: 'Falcon Heavy',
            img: ship3,
            year: 2018,
            status: 'Successful'
        },
        {
            name: 'Starship',
            img: ship4,
            year: 2019,
            status: 'In Development'
        },
        {
            name: 'Dragon',
            img: ship5,
            year: 2010,
            status: 'Successful'
        },
        {
            name: 'Dragon 2',
            img: ship6,
            year: 2014,
            status: 'Failed'
        },
        {
            name: 'Starlink',
            img: ship7,
            year: 2019,
            status: 'In Development'
        },
        {
            name: 'Cygnus',
            img: ufo,
            year: 2013,
            status: 'Successful'
        },

    ]
    return (
        <div className='spaceship-container default-padding'>
            <div className="filter-options">
                <div className="filter">
                    <select name="isUpcoming" id="isUpcoming">
                        <option value="">Is Upcoming</option>
                        <option value="active">Yes</option>
                        <option value="inactive">No</option>
                    </select>
                    <select name="year" id="year">
                        <option value="">Year</option>
                        <option value="active">2000 - 200 5</option>
                        <option value="inactive">2006 - 2010</option>
                        <option value="inactive">2011 - 2015</option>
                        <option value="inactive">2016 - 2020</option>
                    </select>
                    <select name="status" id="status">
                        <option value="">Status</option>
                        <option value="success">Success</option>
                        <option value="fail">Fail</option>
                        <option value="inDev">In Development</option>
                    </select>
                </div>
            </div>
            <div className="ship-list">
                {
                    shipList.map(ship => <div className="ship">
                        <img src={ship.img} alt="" />
                        <h3>{ship.name}</h3>
                        <p>First Flight: {ship.year}</p>
                        <p className={ship.status == 'Successful' ? 'green' : 'red'}>Status: {ship.status}</p>
                    </div>)

                }
            </div>
        </div>
    );
};

export default Spaceship;