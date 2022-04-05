import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='blogs'>
                <h1>What is Context Api?</h1>
                <p>The context api is the alternative way of props driling. It makes very easy to pass same value to diffenert components.It is very effective way of producing global variables that can be passed around. In a word, context api is the modern use of react props.</p>
            </div>
            <div className='blogs'>
                <h1>What is Semantic Tag?</h1>
                <p>Semantic tags are used in HTML code. Semantic tags are very meaningfull to both web browser and the developer.By using semantic tag we help the browser to understand the meaning of elements.Some common semantic tags are "form  ,table , article, button" etc.</p>
            </div>
        </div>
    );
};

export default Blogs;