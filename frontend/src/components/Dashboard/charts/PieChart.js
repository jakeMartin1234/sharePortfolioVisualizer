import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import COLORS from "./Colors";

const PieChartComponent = ({ shareQuantities, chartWidth }) => {

    const width = window.innerWidth * chartWidth / 100;
    const height = width;

    const data = Object.keys(shareQuantities).map((share) => ({
        value: Math.round(shareQuantities[share].sharePrice * shareQuantities[share].shareQuantity),
        label: share,
    }));
    return (
        <PieChart width={width} height={height}>
            <Pie
                dataKey="value"
                data={data}
                cx={width/2}
                cy={height/2}
                outerRadius={60}
                fill="#8884d8"
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          name={entry.label}/>
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default PieChartComponent;
