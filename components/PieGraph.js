import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"

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
          'rgba(75, 192, 192, .5)',
          'rgba(255, 99, 132, .5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
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

