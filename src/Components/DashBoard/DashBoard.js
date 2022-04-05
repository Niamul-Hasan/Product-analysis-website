import React from 'react';
import AreaGraph from "../AreaGraph/AreaGraph";
import PieGraph from '../PieGraph/PieGraph';
import "./DashBoard.css";

const DashBoard = () => {
    return (
        <>
            <div className='chart'>
                <AreaGraph></AreaGraph>
                <PieGraph></PieGraph>
            </div>
        </>
    );
};

export default DashBoard;