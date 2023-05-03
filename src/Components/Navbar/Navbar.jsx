import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Navbar = () => {
    return (
        <div className='bg-color'>
            <div className="navbar text-white px-7">
                <div className="flex-1">
                    <h1 className='text-3xl'>Kitchen Genius</h1>
                </div>
                <div className="flex-none gap-7">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;