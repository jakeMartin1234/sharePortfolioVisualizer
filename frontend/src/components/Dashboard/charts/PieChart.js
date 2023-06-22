import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ shareList }) => {
    const COLORS = [
        '#0088FE', // Blue
        '#00C49F', // Green
        '#FFBB28', // Yellow
        '#FF8042', // Orange
        '#9A55FF', // Purple
        '#FF4D6A', // Pink
        '#00BFFF', // Deep sky blue
        '#FFA500', // Orange
        '#00FF7F', // Spring green
        '#FF1493'  // Deep pink
    ];

    const width = window.innerWidth * 0.25;
    const height = width;

    const data = shareList.map((share) => ({
        value: Math.round(share.shareValue),
        label: share.shareTicker,
    }));
    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                data={data}
                cx={200}
                cy={200}
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
