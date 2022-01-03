import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Linechart = () => {
  const data = [
    {
      name: "Company A",
      mobile: 4000,
      lappy: 2400,
      toppy: 2400,
    },
    {
      name: "Company B",
      mobile: 3000,
      lappy: 1398,
      toppy: 2210,
    },
    {
      name: "Company C",
      mobile: 2000,
      lappy: 9800,
      toppy: 2290,
    },
    {
      name: "Company D",
      mobile: 2780,
      lappy: 3908,
      toppy: 2000,
    },
    {
      name: "Company E",
      mobile: 1890,
      lappy: 4800,
      toppy: 2181,
    },
    {
      name: "Company F",
      mobile: 2390,
      lappy: 3800,
      toppy: 2500,
    },
    {
      name: "Company G",
      mobile: 3490,
      lappy: 4300,
      toppy: 2100,
    },
  ];

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="lappy"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="mobile" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Linechart;
