import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

interface ChartData {
  chartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const BarChart: React.FC<ChartData> = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;
