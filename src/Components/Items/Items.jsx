import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipie.jsx/Recipes';
import './Items.css'



const Items = () => {

    const Items = useLoaderData();

    const { chefId,backgroundImage,chefPicture,chefName,yearsOfExperience,totalLikes,recipes,shortBio,contactNumber,address } = Items;

    return (
        <div>
            <div className="hero cshero min-h-screen bg-base-200 border-2 mx-auto mt-12 px-12 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-1"> <span className='font-semibold'>Bio:</span> {shortBio}</p>
                        <p className="py-1"> <span className='font-semibold'>Total like:</span> {totalLikes}</p>
                        <p className="py-1"> <span className='font-semibold'> Number Of recipes:</span> {recipes.length}</p>
                        <p className="py-1"> <span className='font-semibold'>Years of Experience:</span> {yearsOfExperience}</p>
                        <p className="py-1"> <span className='font-semibold'>Contact Number:</span> {contactNumber}</p>
                        <p className="py-1"> <span className='font-semibold'>Address:</span> {address}</p>
                        
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mx-2 sm:mx-8 my-12">{recipes.map(data=><Recipes key={data.rating} data={data}></Recipes>)}</div>
            
        </div>
    );
};

export default Items;