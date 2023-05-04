import React from 'react';
import { FaThumbsUp } from "react-icons/fa";

const View = (id) =>{
    console.log(id);
    window.location.href=`/chefs/${id}`
}



const Chef = ({ Chef }) => {

    const { chefId,backgroundImage,chefPicture,chefName,yearsOfExperience,totalLikes,recipes } = Chef;



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
                    <p className='text-lg'>Experience: {yearsOfExperience}</p>
                    <p  className='text-lg'>Total recipes: {recipes.length}</p>
                    <div className="card-actions justify-between items-center">
                      <button className='text-3xl flex gap-3 text-green-700'><FaThumbsUp></FaThumbsUp><span>{totalLikes}</span></button> <button className="btn bg-green-700" onClick={()=>{View(chefId)}}>View recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;