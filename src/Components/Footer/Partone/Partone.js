import React from 'react';
import logo from '../../../Images/logo2.png';
import Parttwo from '../Parttwo/Parttwo';
const Partone = () => {
    return (
        <div className='mt-2'>
            <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <img src={logo} alt="" height='100px' width='400px' />
                </div>
                <div className='w-25' style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', textAlign: 'start' }}>
                    <div>
                        <p>About online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partone;