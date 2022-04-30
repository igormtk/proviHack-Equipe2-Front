import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Day",
    "Sacos de lixo recolhidos",
  ],
  [1, 1],
  [2, 2],
  [3, 1],
  [4, 0],
  [5, 5],
  [6, 2],
  [7, 10],
  [8, 1],
  [9, 0],
  [10, 3],
  [11, 4],
  [12, 8],
  [13, 2],
  [14, 5],
];

export const options = {
  chart: {
    title: "Quantidade de sacos recolhidos por dia",
    subtitle: "em unidade",
  },
};

export default function UserChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}