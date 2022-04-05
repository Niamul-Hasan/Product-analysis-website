import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const PieGraph = () => {

    const data01 = [
        {
            "month": "Jan",
            "investment": 13000
        },
        {
            "month": "Feb",
            "investment": 30000
        },
        {
            "month": "Mar",
            "investment": 55000
        },
        {
            "month": "Apr",
            "investment": 36000
        },
        {
            "month": "May",
            "investment": 60000
        },
        {
            "month": "Jun",
            "investment": 80000
        }
    ];

    const data02 = [
        {
            "month": "Jul",
            "investment": 10100
        },
        {
            "month": "Aug",
            "investment": 45000
        },
        {
            "month": "Sep",
            "investment": 40000
        },
        {
            "month": "Oct",
            "investment": 25000
        },
        {
            "month": "Nov",
            "investment": 70000
        },
        {
            "month": "Dec",
            "investment": 15000
        }
    ];
    return (
        <PieChart width={730} height={250}>
            <Pie data={data01} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default PieGraph;