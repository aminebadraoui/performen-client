import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import AdminToggle from './AdminToggle';

const Layout = () => {
    return (
        <div>
            <AdminToggle />
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;