import React from 'react';

const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Newsletter</h1>
            <p>Subscribe to our newsletter to stay up to date</p>
            <input type="email" placeholder='name@yourmail.com' />
            <button>Subscribe</button>
        </div>
    );
};

export default Newsletter;