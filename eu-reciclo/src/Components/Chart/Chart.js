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
  [7, 5],
  [8, 5],
  [9, 2],
  [10, 5]
];

export const options = {
  chart: {
    title: "Quantidade de sacos recolhidos por dia",
    subtitle: "nos últimos 10 dias",
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