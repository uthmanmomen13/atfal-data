import React, { useState, useEffect } from "react";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  // ChartDataLabels
);


export default function BarGraph({data, title}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
        color: "black",
        font: {
          size: 20
        }
      },
    },
    scales: {
      y: {
        ticks: {
          color: "black",
          font: {
            size: 14,
            weight: "400"
          },
        }, 
      },
      x: {
        ticks: {
          color: "black",
          font: {
            size: 14,
            weight: "400"
          },
        },
      }
    }
  };

  const labels = ["November", "December", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October"];  

  const chartData = {
    labels,
    datasets: [{
      label: title,
      data: data,
      backgroundColor: 'rgba(255, 99, 132)',
    }]
  }
    
  return <Bar options={options} data={chartData} />;
}

