import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeReviewDiv from '../HomeReviewDiv/HomeReviewDiv';
import "./HomeReview.css";
const HomeReview = () => {
    const navigate = useNavigate()
    const getReview = () => {
        navigate(`/review`)
    }
    const [homeReviews, setHomeReviews] = useState([]);
    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setHomeReviews(data));
    }, [])
    return (
        <>
            <div>
                <h1 className='Review-heading'>Read Our Valueable Reviews</h1>
            </div>
            <div className='homeReview'>
                {
                    homeReviews.map(homeReview => <HomeReviewDiv key={homeReview.id} homeReview={homeReview}></HomeReviewDiv>)
                }
            </div>
            <div className="btn">
                <button onClick={getReview}>See All Reviews</button>
            </div>
        </>
    );
};

export default HomeReview;