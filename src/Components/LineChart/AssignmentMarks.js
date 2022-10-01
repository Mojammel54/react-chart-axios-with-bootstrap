import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 4000,
            qiuz: 2400,
            amt: 2400
        },
        {
            name: "Page B",
            marks: 3000,
            qiuz: 1398,
            amt: 2210
        },
        {
            name: "Page C",
            marks: 2000,
            qiuz: 9800,
            amt: 2290
        },
        {
            name: "Page D",
            marks: 2780,
            qiuz: 3908,
            amt: 2000
        },
        {
            name: "Page E",
            marks: 1890,
            qiuz: 4800,
            amt: 2181
        },
        {
            name: "Page F",
            marks: 2390,
            qiuz: 3800,
            amt: 2500
        },
        {
            name: "Page G",
            marks: 3490,
            qiuz: 4300,
            amt: 2100
        }
    ];
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;