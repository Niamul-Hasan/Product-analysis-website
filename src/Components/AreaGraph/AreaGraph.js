import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const AreaGraph = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <>
            <h3>This is an Area Chart</h3>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </>
    );
};

export default AreaGraph;