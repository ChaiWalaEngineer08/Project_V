import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CityWidget = ({ city }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Forecast',
        data: [65, 59, 80, 81, 56, 55, 40], // You can update this with actual data
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="city-widget">
      <h3>{city.name}</h3>
      <p>Forecast: {city.forecast}</p>
      <p>Percentage: {city.percentage}</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default CityWidget;
