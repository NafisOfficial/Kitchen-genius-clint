import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
import { authContext } from '../../Provider/Authprovider';

const Navbar = () => {

    const {user} = useContext(authContext);

    console.log(user);

    return (
        <div className='bg-color'>
            <div className="navbar text-white px-7">
                <div className="flex-1">
                    <h1 className='sm:text-3xl'>Kitchen Genius</h1>
                </div>
                <div className="flex-none gap-4 sm:gap-7">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;