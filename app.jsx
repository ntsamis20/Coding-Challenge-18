import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

const App = () => {
  const [chartData, setChartData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failure to fetch data");
        }
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading chart data, please wait...</div>;
  }

  if (!chartData) {
    return <div>Error loading chart data. Please try again later.</div>;
  }

  return (
    <div className="app">
      <h1>Charts Dashboard</h1>

      <div className="chart-section">
        <h2>Bar Chart: Monthly Sales</h2>
        <BarChart data={chartData.barChartData} />
      </div>

      <div className="chart-section">
        <h2>Line Chart: Monthly Profits</h2>
        <LineChart data={chartData.lineChartData} />
      </div>

      <div className="chart-section">
        <h2>Scatter Chart: Expenses vs. Profits</h2>
        <ScatterChart data={chartData.scatterChartData} />
      </div>

      <div className="chart-section">
        <h2>Bubble Chart: Combined Metrics</h2>
        <BubbleChart data={chartData.bubbleChartData} />
      </div>
    </div>
  );
};

export default App;
