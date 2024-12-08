import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Profits",
        data: [120, 150, 180, 220, 300],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderWidth: 2,
        fill: true,
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
        text: "Monthly Profits (Line Chart)",
      },
    },
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;
