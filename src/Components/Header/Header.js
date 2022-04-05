import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <h1>Review Picker</h1>
            <nav>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="review">Reviews</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="dash">DashBoard</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="blogs">Blogs</NavLink>
            </nav>
        </div>
    );
};

export default Header;