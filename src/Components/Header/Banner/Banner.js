import React from 'react';
import './Banner.css';
import bg from '../../../Images/bannerbackground.png'
const Banner = () => {
    return (
        <div style={{ width: "100%" }}>
            <div className='banner-things' style={{ backgroundImage: `url(${bg})`, minHeight: '50vh' }}>
                <div>
                    <h1>Best foods waiting for your belly</h1>
                    <div>
                        <input type="text" placeholder="search food items" />
                        <button className='btn btn-danger'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;