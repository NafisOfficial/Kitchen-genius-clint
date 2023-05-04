import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipie.jsx/Recipes';



const Items = () => {

    const Items = useLoaderData();

    const { chefId,backgroundImage,chefPicture,chefName,yearsOfExperience,totalLikes,recipes,shortBio,contactNumber,address } = Items;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 border-2">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-2">Bio:{shortBio}</p>
                        <p className="py-2">Total like:{totalLikes}</p>
                        <p className="py-2">Number Of recipes:{recipes.length}</p>
                        <p className="py-2">Years of Experience:{yearsOfExperience}</p>
                        <p className="py-2">Number:{contactNumber}</p>
                        <p className="py-2">Address:{address}</p>
                        
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">{recipes.map(data=><Recipes key={data.rating} data={data}></Recipes>)}</div>
            
        </div>
    );
};

export default Items;