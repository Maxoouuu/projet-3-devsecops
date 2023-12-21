import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface UnemploymentData {
  name: string; // This should be the region or department name
  unemploymentRate: number; // This is the unemployment rate
}

interface UnemploymentChartProps {
  data: UnemploymentData[];
}

const UnemploymentChart: React.FC<UnemploymentChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="unemploymentRate" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UnemploymentChart;