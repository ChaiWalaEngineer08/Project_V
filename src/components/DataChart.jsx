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

// Import data and options directly for the Chart component
// These should be passed as props if you're importing them from a different file
// Replace these imports if necessary or pass them as props
import { data, options } from "./LineWidget";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DataChart = ({
  labels,
  solidLine1Data,
  solidLine2Data,
  solidLine3Data,
  dashedLine1Data,
  dashedLine2Data,
  dashedLine3Data,
  data,
  options,
}) => {
  return (
    <div className="min-w-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default DataChart;
