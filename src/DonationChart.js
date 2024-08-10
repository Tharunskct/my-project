// src/DonationChart.js

import React from "react";
import { Pie } from "react-chartjs-2";

// Import required components from Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Default colors for the pie chart
const colors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#FF6384",
  "#36A2EB",
];

const DonationChart = ({ donations }) => {
  // Prepare data and labels for the pie chart
  const data = {
    labels: Object.keys(donations), // Categories
    datasets: [
      {
        data: Object.values(donations), // Amounts
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", marginTop: "40px" }}>
      <Pie data={data} />
    </div>
  );
};

export default DonationChart;
