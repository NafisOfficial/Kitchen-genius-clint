import React from 'react';
import './home.css'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='banner'>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;