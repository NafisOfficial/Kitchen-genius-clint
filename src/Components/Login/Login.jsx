import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Form } from 'react-router-dom';


const handleLoginButton = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email,password);

}
const handleGoogleButton = (event) => {
    event.preventDefault();

}

const handleGithubButton = (event) => {
    event.preventDefault();

}



const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Form onSubmit={handleLoginButton}>
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </Form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Try another way</span>
                                </label>
                                <div>
                                    <button onClick={handleGoogleButton} className="btn btn-outline btn-accent mr-8"><FaGoogle></FaGoogle>Google</button>
                                    <button onClick={handleGithubButton} className="btn btn-outline ml-8"><FaGithub></FaGithub>Github</button>
                                </div>
                            </div>
                            <label className="label">
                                <p>You don't have an account ?<a href="/register" className="label-text-alt link link-hover text-base ms-2 text-blue-700 ">Register</a></p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;