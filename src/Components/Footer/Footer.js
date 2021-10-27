import React from 'react';
import Partone from './Partone/Partone';
import Parttwo from './Parttwo/Parttwo';

const Footer = () => {
    return (
        <div className='bg-dark text-light p-4 mt-5' style={{ bottom: 0 }}>
            <Partone></Partone>
            <Parttwo></Parttwo>
        </div >
    );
};

export default Footer;