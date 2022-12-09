import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Table.module.css"
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

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);


export default function BarGraph({data, title, max}) {
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
        max: max,
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

