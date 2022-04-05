import React from 'react';
import AreaGraph from "../AreaGraph/AreaGraph";
import PieGraph from '../PieGraph/PieGraph';
import "./Blogs.css";

const Blogs = () => {
    return (
        <>
            <div className='chart'>
                <AreaGraph></AreaGraph>
                <PieGraph></PieGraph>
            </div>
        </>
    );
};

export default Blogs;