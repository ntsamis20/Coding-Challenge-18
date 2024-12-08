import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [100, 200, 300, 400, 500],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
        text: "Monthly Sales (Bar Chart)",
      },
    },
  };

  return <ChartComponent type="bar" data={data} options={options} />;
};

export default BarChart;
