import React from "react";

import { 
  Chart, 
  ArcElement, 
  Tooltip, 
  Title,
  Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend, Title);

export default function PieGraph({data, title}) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
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
  }
  const chartData = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          'rgba(0, 148, 42, .9)',
          'rgba(199, 4, 4, .9)',
        ],
        borderColor: [
          'rgba(0, 148, 42, 1)',
          'rgba(199, 4, 4, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const labels = ["November", "December", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October"];  
    
  return (
    <div >
      <Pie options={options} data={chartData} />
    </div>
    )
}

