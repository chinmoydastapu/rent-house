import React from 'react';
import Advertise1 from './Advertise1';
import Advertise2 from './Advertise2';
import FeaturedHouse from './FeaturedHouse';
import HomeBanner from './HomeBanner';
import Houses from './Houses';
import Membership from './Membership';
import Provide from './Provide';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Houses></Houses>
            <Membership></Membership>
            <Advertise1></Advertise1>
            <FeaturedHouse></FeaturedHouse>
            <Advertise2></Advertise2>
            <Provide></Provide>
        </div>
    );
};

export default Home;