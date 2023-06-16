import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieChartComponent = ({ shareList }) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // You can customize the colors here

    const data = shareList.map((share) => ({
        value: share.shareValue,
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
