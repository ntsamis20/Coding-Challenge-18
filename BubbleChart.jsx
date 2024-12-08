import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: "Sales, Profits, and Expenses",
        data: [
          { x: 100, y: 200, r: 15 },
          { x: 200, y: 300, r: 20 },
          { x: 300, y: 400, r: 25 },
          { x: 400, y: 500, r: 30 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
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
        text: "Sales, Profits, and Expenses (Bubble Chart)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Sales",
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

  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;
