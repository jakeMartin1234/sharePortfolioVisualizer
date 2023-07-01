import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Tooltip, Legend } from 'recharts';
import COLORS from "./Colors";

const WholePortfolioLineChart = ({ shareQuantities, shareHistory }) => {

    const width = window.innerWidth * 0.35;
    const height = width / 2;

    // Gain = ((Current Share Price - Initial Share Price) / Initial Share Price) * 100

    const dailyShareValue = [];
    for (let i = 0; i < shareHistory.length; i++) {
        let total = 0;
        Object.keys(shareHistory[i]).forEach((share) => {
            if (share !== "date"){
                total += shareHistory[i][share].close * shareHistory[i][share].close;
            }
        });
        dailyShareValue.push(total);
    }

    let data = [];

    for (let i = 0; i < shareHistory.length; i++) {
        if (i % 5 === 0) {
            data.push({
                portfolio: dailyShareValue[i],
                name: shareHistory[i].date,
            });
        }
    };

    // console.log(data);

    return (
        <LineChart width={width} height={height} data={data}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
