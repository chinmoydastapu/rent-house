import React from 'react';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Login = () => {
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        logIn(email, password)
            .then(res => {
                event.target.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error.message);
                toast.error('Invalid Email/Password!');
                event.target.reset();
            });
    }

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(res => {
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="min-h-[80vh] py-6 m-10 sm:m-0 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:w-5/12 sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-300 shadow-lg transform -translate-y-3 -translate-x-5  sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Please, Log In!!</h1>
                        </div>
                        <form onSubmit={handleLogIn} className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <button type='submit' className="bg-violet-700 hover:bg-violet-800 btn btn-primary w-full text-white rounded-md">Log In</button>
                                </div>
                            </div>
                        </form>
                        <h3 className='mb-4'>Don't Have an Account? <Link to='/signup' className='text-sm text-blue-500 underline'>Sign Up</Link></h3>
                        <p className='capitalize mb-3'>Or, log in with</p>
                        <div className='mb-5 flex justify-evenly items-center'>
                            <button onClick={handleGoogleLogIn} className="btn btn-primary btn-outline capitalize">Sign in with google</button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;