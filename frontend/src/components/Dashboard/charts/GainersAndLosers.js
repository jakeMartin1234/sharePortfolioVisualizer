import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend } from 'recharts';
import COLORS from "./Colors";

const GainersAndLosers = ({ shareQuantities, shareHistory, chartWidth }) => {

    const width = window.innerWidth * chartWidth / 100;
    const height = width / 2;

    // Gain = ((Current Share Price - Initial Share Price) / Initial Share Price) * 100
    const data = Object.keys(shareQuantities).map((share) => ({
        percentage: Math.round(((shareQuantities[share].sharePrice
            - shareHistory.find((elem) => elem[share])[share].open) /
            shareQuantities[share].sharePrice) * 100),
        name: share,
    }));
    // console.log(data);

    return (
        <BarChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percentage" fill={COLORS[0]} />
        </BarChart>
    );
};

export default GainersAndLosers;
