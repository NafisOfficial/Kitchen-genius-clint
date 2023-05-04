import React, { useContext } from 'react';
import './home.css'
import Navbar from '../Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Chef from '../Chef/Chef';

const Home = () => {


    const chefs = useLoaderData();

    

    return (
        <div>
            <div className='z-0 sticky top-0'><Navbar></Navbar></div>
            <div className='banner bg-cover flex flex-col justify-center items-end '>
                <div className='w-6/12 '>
                    <h2 className=' text-green-700 font-semibold text-lg sm:text-7xl'>Test your taste</h2>
                    <p className=' text-green-700 my-2 sm:my-5 text-xs sm:text-xl'>Good-tasted food tantalizes the senses, weaving together flavors, textures, and aromas in a harmonious symphony on the palate. It is a culinary masterpiece that delights and satisfies, leaving a lasting impression.</p>
                    <div>
                        <button className='custom-btn flex items-center gap-2'><FaArrowLeft></FaArrowLeft>Previous</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ms-9 sm:mx-10 my-12 items-center z-10 absolute">
                {chefs.map(chef=><Chef key={chef.chefId} Chef={chef}></Chef>)}
            </div>
        </div>
    );
};

export default Home;