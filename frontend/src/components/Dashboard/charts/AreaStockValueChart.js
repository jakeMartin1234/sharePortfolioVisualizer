import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const AreaStockValueChart = ({ shareList }) => {
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

    const width = window.innerWidth * 0.45;
    const height = width * 0.618;

    const data = [];

    const gradientIds = shareList.map((elem, index) => `color${index}`);
    const areaIds = shareList.map((elem, index) => `url(#color${index})`);

    shareList.forEach((share) => {
        share.shareData.forEach((shareData) => {
            let cleanedDate = shareData.date.slice(0, 10);
            const existingData = data.find((item) => item.name === cleanedDate);
            if (existingData) {
                existingData[share.shareTicker] = shareData.high;
            } else {
                const newData = {
                    name: cleanedDate,
                    [share.shareTicker]: shareData.high
                };
                data.push(newData);
            }
        });
    });

    return (
        <AreaChart width={width} height={height} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                {shareList.map((entry, index) => (
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
            {shareList.map((entry, index) => (
                <Area type="monotone"
                key={index}
                id={index}
                dataKey={entry.shareTicker}
                stroke={COLORS[index % COLORS.length]}
                fillOpacity={1}
                fill={areaIds[index]} />
            ))}
        </AreaChart>
    );
};

export default AreaStockValueChart;