import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // We'll create this next

const Layout = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;