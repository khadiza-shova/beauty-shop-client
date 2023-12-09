import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvides';
import { Result } from 'postcss';
import Logo from "../../assets/logo.png"


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar w-10/12 mx-auto pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/">
                                <li>Home</li>
                            </NavLink>
                            <NavLink to='/addProduct'>
                                <li>Add Product</li>
                            </NavLink>
                            <NavLink to='/cart'>
                                <li>My Cart</li>
                            </NavLink>
                            <NavLink to="/login">
                                <li>Login</li>
                            </NavLink>
                        </ul>
                    </div>
                    <a className="">
                        <img className='w-28' src={Logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        <NavLink to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/addProduct'>
                            <li>Add Product</li>
                        </NavLink>
                        <NavLink to="/cart">
                            <li>My Cart</li>
                        </NavLink>
                        <NavLink to="/login">
                            <li>Login</li>
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <div className='flex items-center'>
                            <h1 className='text-xl mr-2'>{user.displayName}</h1>
                            <label tabIndex={0} className="btn btn-ghost btn-circle border avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <a onClick={handleLogout} className="btn bg-primaryB text-white">Logout</a>
                        </div>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;