import React from 'react';

const ReviewContainer = (props) => {
    const { name, email } = props.review;

    return (
        <div>
            <h2>Name:{name} </h2>
            <h4>Email: {email}</h4>
        </div>
    );
};

export default ReviewContainer;