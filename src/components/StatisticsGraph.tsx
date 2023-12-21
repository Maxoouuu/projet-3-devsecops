import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StatisticsGraphProps {
  data: any[]; // Replace with your data type
  dataKey: string;
  xAxisKey: string;
  barColor: string;
}

const StatisticsGraph: React.FC<StatisticsGraphProps> = ({ data, dataKey, xAxisKey, barColor }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill={barColor} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsGraph;