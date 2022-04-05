import React from 'react';
import "./HomeReviewDiv.css";

const HomeReviewDiv = (props) => {
    const { name, email, review, ratings } = props.homeReview;
    return (
        <div className='home-review-div'>
            <h2>Name: {name}</h2>
            <h4>Comment: {review}</h4>
            <p>email: {email}</p>
            <h4><small> Ratings: {ratings}</small></h4>

        </div>
    );
};

export default HomeReviewDiv;