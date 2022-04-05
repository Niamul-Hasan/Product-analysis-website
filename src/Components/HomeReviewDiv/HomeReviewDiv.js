import React from 'react';

const HomeReviewDiv = (props) => {
    const { name, email } = props.homeReview;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>email: {email}</h4>

        </div>
    );
};

export default HomeReviewDiv;