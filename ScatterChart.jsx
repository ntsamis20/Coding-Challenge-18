import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = () => {
  const data = {
    datasets: [
      {
        label: "Expenses vs. Profits",
        data: [
          { x: 100, y: 200 },
          { x: 200, y: 300 },
          { x: 300, y: 400 },
          { x: 400, y: 500 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expenses vs. Profits (Scatter Chart)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Expenses",
        },
      },
      y: {
        title: {
          display: true,
          text: "Profits",
        },
      },
    },
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;
