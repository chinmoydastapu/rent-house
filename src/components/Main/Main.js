import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;