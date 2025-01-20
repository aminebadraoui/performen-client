import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import AdminToggle from './AdminToggle';

const Layout = () => {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 z-50">
                <Header />
            </div>
            <div className="fixed top-4 right-4 z-[60]">
                <AdminToggle />
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;