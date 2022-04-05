import React, { useEffect, useState } from 'react';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import "./Review.css";


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    // console.log(reviews);
    return (

        <div>
            <h1>This is Review Compo....................</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <ReviewContainer key={review.id} review={review}></ReviewContainer>)
                }
            </div>
        </div>
    );
};

export default Review;