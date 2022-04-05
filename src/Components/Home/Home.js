import React from 'react';
import img from '../../Image/Router.jpg';
import HomeReview from '../HomeReviw/HomeReview';
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="banner-container">
                <div className='banner'>
                    <img src={img} alt="" />
                </div>
                <div className='banner-text'>
                    <h1><span className='heading-1'>SELECT THE BEST ROUTER</span></h1>
                    <h1><span className='heading-2'>CONNECT THE NEW WORLD</span></h1>
                    <p>If you want to be connected to the new world you must have a strong internet connection. In this modern age we need a good router to have a satisfied broadband connection.Now the question is which one is better for you? Don't be pannic, just read our customer reviews and make your right decesion with us. </p>
                </div>
            </div>
            <HomeReview></HomeReview>
        </>
    );
};

export default Home;