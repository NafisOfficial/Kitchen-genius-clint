import React, { useState } from 'react';
import { useContext } from 'react';
import { Form } from 'react-router-dom';
import { authContext } from '../../Provider/Authprovider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {

    const { createUserByEmailPassword, setUser } = useContext(authContext);
    const handleRegisterForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.image.value;
        const email = event.target.email.value;
        const password = event.target.password.value;



        createUserByEmailPassword(email, password)
            .then((result) => {
                toast.success("User created successfully");
                updateProfile(result.user, { displayName: name, photoURL: url })
                    .then(() => {

                    })
                    .catch(() => {

                    })
                setUser(result.user);
            })
            .catch((error) => {
                toast.error(error.message)
                console.error(error.message);
            })
    }







    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Form onSubmit={handleRegisterForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload photo</span>
                                    </label>
                                    <input type="file" name='image' accept='image/*' placeholder="Choose photo" multiple={false} className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-50 file:text-violet-700
                                    hover:file:bg-violet-100" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </Form>
                            <label className="label">
                                <p>You already have an account ?<a href="/login" className="label-text-alt link link-hover text-base ms-2 text-blue-700 ">Login</a></p>
                            </label>
                        </div>
                    </div>
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

export default Register;