import React from 'react';
import img from "../../Image/404-error.png";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>The page you are looking for is not found</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;