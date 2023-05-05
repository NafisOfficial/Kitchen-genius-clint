import React, { useContext } from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import './nav.css'
import { authContext } from '../../Provider/Authprovider';
import Footer from '../Footer/Footer';





const Navbar = () => {


   



    const { user } = useContext(authContext);

    console.log(user);

    return (
        <div>
            <nav className='bg-color z-10'>
                <div className="navbar text-white px-7">
                    <div className="flex-1">
                        <h1 className='sm:text-3xl'>Kitchen Genius</h1>
                    </div>
                    <div className="flex-none gap-4 sm:gap-7">
                        <NavLink  to='/'>Home</NavLink>
                        <NavLink  to='/blog'>Blog</NavLink>
                        <NavLink  to='/login'>Login</NavLink>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Navbar;