import React, { useContext } from 'react';
import './home.css'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { authContext } from '../../Provider/Authprovider';

const Home = () => {

    const {user} = useContext(authContext)

    console.log(user);


    return (
        <div>
            <Navbar></Navbar>
            <div className='banner bg-cover flex flex-col justify-center items-end '>
                <div className='w-6/12 '>
                    <h2 className=' text-green-700 font-semibold text-lg sm:text-7xl'>Test your taste</h2>
                    <p className=' text-green-700 my-2 sm:my-5 text-xs sm:text-xl'>Good-tasted food tantalizes the senses, weaving together flavors, textures, and aromas in a harmonious symphony on the palate. It is a culinary masterpiece that delights and satisfies, leaving a lasting impression.</p>
                    <div>
                        <button className='custom-btn flex items-center gap-2'><FaArrowLeft></FaArrowLeft>Previous</button>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;