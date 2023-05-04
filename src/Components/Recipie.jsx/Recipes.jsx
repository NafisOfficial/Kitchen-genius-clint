import React from 'react';
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


const favorite = () =>{
    toast.error("Item is in your favorite");
}


const Recipes = ({data}) => {

    const {recipeName,ingredients,cookingMethod,rating,imageLink} = data;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={imageLink} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipeName}</h2>
                    <p ><span className='text-lg font-semibold'>CookingMethod:</span> {cookingMethod}</p>
                    <p ><span className='text-lg font-semibold'> Rating:</span> {rating}</p>
                    <ul>
                        <h3 className='text-lg font-semibold'>Ingredients:</h3>
                        {ingredients.map(dt=><li>{dt}</li>)}
                        </ul>
                        <button className="border-0 text-red-700 text-2xl ms-auto" onClick={favorite}><FaHeart></FaHeart></button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Recipes;