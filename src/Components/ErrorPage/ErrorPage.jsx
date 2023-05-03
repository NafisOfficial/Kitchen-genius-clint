import React from 'react';
import error from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center align-middle'>
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;