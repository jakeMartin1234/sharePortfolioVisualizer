import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Legend } from 'recharts';
import COLORS from "./Colors";

const WholePortfolioLineChart = ({ shareQuantities, shareHistory, chartWidth }) => {

    const width = window.innerWidth * chartWidth / 100;
    const height = width / 2;

    // Gain = ((Current Share Price - Initial Share Price) / Initial Share Price) * 100

    const dailyShareValue = [];
    for (let i = 0; i < shareHistory.length; i++) {
        let total = 0;
        Object.keys(shareHistory[i]).forEach((share) => {
            if (share !== "date"){
                total += shareHistory[i][share].close * shareQuantities[share].shareQuantity;
            }
        });
        dailyShareValue.push(total);
    }

    let data = [];

    for (let i = 0; i < shareHistory.length; i++) {
        if (i % 5 === 0) {
            data.push({
                portfolio: Math.round(dailyShareValue[i]),
                name: shareHistory[i].date,
            });
        }
    };

    // console.log(data);

    return (
        <LineChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="portfolio" stroke={COLORS[0]} />
        </LineChart>
    );
};

export default WholePortfolioLineChart;
