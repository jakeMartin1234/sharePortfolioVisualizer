import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import COLORS from "./Colors";

const AreaStockValueChart = ({ shareQuantities, shareHistory }) => {

    const width = window.innerWidth * 0.42;
    const height = width * 0.618;

    const gradientIds = Object.keys(shareQuantities).map((elem, index) => `color${elem}`);
    const areaIds = Object.keys(shareQuantities).map((elem, index) => `url(#color${elem})`);


    const data = shareHistory.map((elem) => {
        let newEntry = {};
        newEntry["name"] = elem.date;
        Object.keys(shareQuantities).forEach((share) => {
            newEntry[share] = elem[share].close.toFixed(2);
        });
        return newEntry;
    });
    console.log(data);

    return (
        <AreaChart width={width} height={height} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                {Object.keys(shareQuantities).map((entry, index) => (
                    <linearGradient key={index} id={gradientIds[index]} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0}/>
                    </linearGradient>
                ))}

            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            {Object.keys(shareQuantities).map((entry, index) => (
                <Area type="monotone"
                key={index}
                id={entry}
                dataKey={entry}
                stroke={COLORS[index % COLORS.length]}
                fillOpacity={1}
                fill={areaIds[index]} />
            ))}
        </AreaChart>
    );
};

export default AreaStockValueChart;
