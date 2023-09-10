import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";

import React from "react";

const Linechart = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer
        width={"100%"}
        // minHeight={400}
        height={350}
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"temp"} allowDecimals>
            <Label value={"Temperature"} dy={13} />
          </XAxis>
          <YAxis dataKey={"deflection"} allowDecimals>
            <Label value={"Deflection"} angle={-90} dx={-30} />
          </YAxis>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="deflection" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
