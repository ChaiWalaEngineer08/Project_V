"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.2,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    tooltip: {
      displayColors: false,
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

const labels = ["January", "February", "March"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [60, 10, 75],
      borderColor: "#67B5DB",
      backgroundColor: "#67B5DBaa",
      //   fill: true,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40],
      borderColor: "#67B5DB",
      backgroundColor: "#67B5DBaa",
      borderDash: [2, 2],
    },
  ],
};

function LineChart() {
  return <Line options={options} data={data} />;
}

export { LineChart };
