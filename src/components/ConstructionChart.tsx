import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ConstructionData {
  name: string; // This should be the region or department name
  construction: number; // The number of constructions
}

interface ConstructionChartProps {
  data: ConstructionData[];
}

const ConstructionChart: React.FC<ConstructionChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="construction" fill="#ffa500" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ConstructionChart;
