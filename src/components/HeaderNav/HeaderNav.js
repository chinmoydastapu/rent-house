import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <nav class="navbar bg-slate-50 shadow-lg sticky top-0 px-10">
            <div class="navbar">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabindex="0">
                            <span>
                                Tenant
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </span>
                            <ul class="p-2 bg-slate-50">
                                <li><Link to='/search-rentals'>Search Rentals</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <span>
                                Householder
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                </svg>
                            </span>
                            <ul class="p-2 bg-slate-50">
                                <li><Link to='/add-listing'>Add Listings</Link></li>
                                <li><Link to='/login'>Log In</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <Link to='/' class="text-2xl"><i class="fa-solid fa-house-circle-check text-secondary mr-[0.3em]"></i><span
                    class="text-primary font-bold">Rent</span> Now</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li className='mr-3'><Link to='/home'>Home</Link></li>
                    <li tabindex="0" className='mr-3'>
                        <span>
                            Tenant
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </span>
                        <ul class="p-2 bg-slate-50">
                            <li><Link to='/search-rentals'>Search Rentals</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/login'>Log In</Link></li>
                        </ul>
                    </li>
                    <li tabindex="0" className='mr-3'>
                        <span>
                            Householder
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </span>
                        <ul class="p-2 bg-slate-50">
                            <li><Link to='/add-listing'>Add Listings</Link></li>
                            <li><Link to='/login'>Log In</Link></li>
                        </ul>
                    </li>
                    <li className='mr-3'><Link to='/about'>About</Link></li>
                </ul>
                <Link to='/login'><button className="btn btn-primary">Log In</button></Link>
            </div>
        </nav>
    );
};

export default HeaderNav;