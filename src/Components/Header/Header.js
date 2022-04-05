import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Review Picker</h1>
            <Link to="/">Home</Link>
            <Link to="review">Reviews</Link>
            <Link to="dash">DashBoard</Link>
        </div>
    );
};

export default Header;