import React from 'react';
import "./ReviewContainer.css"

const ReviewContainer = (props) => {
    const { name, email, review, ratings } = props.review;

    return (
        <div className='reviewContainer'>
            <h2>Name: {name}</h2>
            <h4>Comment: {review}</h4>
            <p>email: {email}</p>
            <h4><small> Ratings: {ratings}</small></h4>

        </div>
    );
};

export default ReviewContainer;