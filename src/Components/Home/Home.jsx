import React, { useContext } from 'react';
import './home.css'
import Navbar from '../Navbar/Navbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Chef from '../Chef/Chef';
import Footer from '../Footer/Footer';
import LazyLoad from 'react-lazy-load';


import item1 from '../../assets/foods/download (1).png'
import item2 from '../../assets/foods/download (2).png'
import item3 from '../../assets/foods/download (3).png'
import item4 from '../../assets/foods/download (4).png'
import item5 from '../../assets/foods/download (5).png'
import item6 from '../../assets/foods/download.png'

const Home = () => {


    const chefs = useLoaderData();



    return (
        <div>
            <div className='banner bg-cover flex flex-col justify-center items-end '>
                <div className='w-6/12 '>
                    <h2 className=' text-green-700 font-semibold text-lg sm:text-7xl'>Test your taste</h2>
                    <p className=' text-green-700 my-2 sm:my-5 text-xs sm:text-xl'>Good-tasted food tantalizes the senses, weaving together flavors, textures, and aromas in a harmonious symphony on the palate. It is a culinary masterpiece that delights and satisfies, leaving a lasting impression.</p>
                    <div>
                        <button className='custom-btn flex items-center gap-2'><FaArrowLeft></FaArrowLeft>Previous</button>
                    </div>
                </div>
            </div>

            

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ms-9 sm:mx-10 my-12 items-center z-0">
                {chefs.map(chef => <Chef key={chef.chefId} Chef={chef}></Chef>)}

            </div>

            <div>
                <div className="flex items-center justify-center bg-gradient-to-r from-green-900 to-green-700 ">
                    <div className="flex-col items-center justify-center text-white">
                        <div className="h-40 w-[70%] md:w-1/2 flex items-center justify-center  text-3xl lg:text-5xl font-bold mx-14"> Our quality is our pride</div>

                        <div className="flex">

                            <div className="flex md:flex-row flex-col p-4 space-x-4 space-y-2 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                                <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center ml-4">
                                    <div className="flex-col space-y-2 items-center px-0 md:px-6">
                                        <div className="text-sm font-medium text-gray-200">Clients</div>
                                        <div className="text-5xl font-bold">15k+</div>
                                        <div className="text-sm font-medium text-gray-200">Kitchen genius has more than 15k+ visitors per month.</div>
                                    </div>
                                </div>
                                <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                                    <div className="flex-col space-y-2">
                                        <div className="text-sm font-medium text-gray-200">Users</div>
                                        <div className="text-5xl font-bold">1.2M+</div>
                                        <div className="text-sm font-medium text-gray-200">Kitchen genius has more than 1.2M+ total users.</div>
                                    </div>
                                </div>
                                <div className="h-40 w-[70%] md:w-1/4 flex items-center justify-center">
                                    <div className="flex-col space-y-2">
                                        <div className="text-sm font-medium text-gray-200">Engagement</div>
                                        <div className="text-5xl font-bold">69k</div>
                                        <div className="text-sm font-medium text-gray-200">Kitchen genius has gained 69k+ users last month.</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                
            </div>

            <div className='bg-slate-200 p-6'>
                <h1 className='text-center text-6xl font-bold text-green-700'>Available items</h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ms-9 sm:mx-10   rounded-lg my-12 items-center z-0">

                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Fast food available: 200</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Desert available: 120</h2>

                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Paelo available: 320</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sea food available: 12</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Chuf available: 30</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={item6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Drinks available: 50</h2>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;