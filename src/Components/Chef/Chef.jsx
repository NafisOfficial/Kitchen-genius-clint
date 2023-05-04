import React from 'react';
import { FaThumbsUp } from "react-icons/fa";

const Chef = ({ Chef }) => {

    const { backgroundImage,chefPicture,chefName,yearsOfExperience,totalLikes,recipes } = Chef;



    return (
        <div>
            <div className="card card-compact w-72 sm:w-96 bg-base-100 shadow-xl">
                <figure><img src={backgroundImage} className='h-64 w-full static' alt="Shoes" /></figure>
                <div className="avatar mx-auto relative bottom-12">
                    <div className="w-32 rounded-full">
                        <img src={chefPicture} />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">Name: {chefName}</h2>
                    <p>Experience: {yearsOfExperience}</p>
                    <p>Total recipes: {recipes.length}</p>
                    <div className="card-actions justify-between items-center">
                      <button className='text-3xl flex gap-3'><FaThumbsUp></FaThumbsUp><span>{totalLikes}</span></button> <button className="btn btn-primary">View recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;