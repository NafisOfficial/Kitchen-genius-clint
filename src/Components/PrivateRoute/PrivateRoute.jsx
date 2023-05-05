import React, { useContext } from 'react';
import { authContext } from '../../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();



    const { user, loading } = useContext(authContext)

    if (loading) {
        return <button type="button" className="btn bg-indigo-500 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
            <div className='text-blue-700'>Loading...</div>
        </button>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;