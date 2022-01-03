import React from "react";
import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const Areachart = () => {
  const data = [
    {
      name: "Lul A",
      lu: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Lul B",
      lu: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Lul C",
      lu: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Lul D",
      lu: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Lul E",
      lu: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Lul F",
      lu: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Lul G",
      lu: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Tooltip />
      <Area type="monotone" dataKey="lu" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="amt" />
    </AreaChart>
  );
};

export default Areachart;
