import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './nav.css'
import { authContext } from '../../Provider/Authprovider';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';






const Navbar = () => {



    const { user,logOut } = useContext(authContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{toast.success("Successfully logged out")})
        .catch((error)=>console.error(error.message))
    }

    return (
        <div>

            <nav className='bg-color z-10'>
                <div className="navbar text-white px-7">
                    <div className="flex-1">
                        <h1 className='sm:text-3xl'>Kitchen Genius</h1>
                    </div>
                    <div className="flex-none gap-4 sm:gap-7">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        {user ? <div className='flex items-center gap-2'><div className="avatar online">
                            <div className="w-8 h-8 rounded-full">
                                <img title={user.displayName} src={user.photoURL} />
                            </div>
                        </div><button onClick={handleLogOut} className="btn btn-sm bg-white text-black hover:bg-slate-300">LogOut</button></div> : <NavLink to='/login'>Login</NavLink>}
                    </div>
                </div>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Navbar;