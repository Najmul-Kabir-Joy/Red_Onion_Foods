import React from 'react';
import Banner from '../Banner/Banner';
import Topbar from '../Topbar/Topbar';

const Header = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;