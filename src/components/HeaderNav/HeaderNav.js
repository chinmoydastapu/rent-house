import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const HeaderNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <nav className="navbar bg-slate-50 shadow-lg sticky top-0 px-10 z-10">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabIndex="0">
                            <span>
                                Tenant
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </span>
                            <ul className="p-2 bg-slate-50">
                                <li><Link to='/search-rentals'>Search Rentals</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <span>
                                Householder
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </span>
                            <ul className="p-2 bg-slate-50">
                                <li><Link to='/add-listing'>Add Listings</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                        <span>
                            {
                                user?.uid ?
                                    <span className='flex justify-center items-center gap-3'>
                                        <span className='tooltip tooltip-left' data-tip={user.displayName}><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /></span>
                                        <button onClick={handleLogOut} className='btn btn-primary btn-sm'>Log Out</button>
                                    </span>
                                    :
                                    <>
                                        <Link to='/login'><button className='btn btn-primary btn-sm'>Log In</button></Link>
                                        <Link to='/signup'><button className='btn btn-primary btn-sm ml-3'>Sign Up</button></Link>
                                    </>
                            }
                        </span>
                    </ul>
                </div>
                <Link to='/' className="text-2xl"><i className="fa-solid fa-house-circle-check text-secondary mr-[0.3em]"></i><span
                    className="text-primary font-bold">Rent</span> Now</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='mr-3'><Link to='/home'>Home</Link></li>
                    <li tabIndex="0" className='mr-3'>
                        <span>
                            Tenant
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </span>
                        <ul className="p-2 bg-slate-50">
                            <li><Link to='/search-rentals'>Search Rentals</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/login'>Log In</Link></li>
                        </ul>
                    </li>
                    <li tabIndex="0" className='mr-3'>
                        <span>
                            Householder
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </span>
                        <ul className="p-2 bg-slate-50">
                            <li><Link to='/add-listing'>Add Listings</Link></li>
                            <li><Link to='/login'>Log In</Link></li>
                        </ul>
                    </li>
                    <li className='mr-3'><Link to='/about'>About</Link></li>
                </ul>
                <div className='ml-4 flex justify-center items-center gap-3'>
                    <span>
                        {
                            user?.uid ?
                                <span className='flex justify-center items-center gap-3'>
                                    <span className='tooltip tooltip-left' data-tip={user.displayName}><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg" /></span>
                                    <button onClick={handleLogOut} className='btn btn-primary btn-sm'>Log Out</button>
                                </span>
                                :
                                <>
                                    <Link to='/login'><button className='btn btn-primary btn-sm'>Log In</button></Link>
                                    <Link to='/signup'><button className='btn btn-primary btn-sm ml-3'>Sign Up</button></Link>
                                </>
                        }
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNav;