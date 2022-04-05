import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomeReview.css";
const HomeReview = () => {
    const navigate = useNavigate()
    const getReview = () => {
        navigate(`/review`)
    }
    return (
        <>
            <div>
                <h1 className='Review-heading'>Read Our Valueable Reviews</h1>
            </div>
            <div className="btn">
                <button onClick={getReview}>See All Reviews</button>
            </div>
        </>
    );
};

export default HomeReview;