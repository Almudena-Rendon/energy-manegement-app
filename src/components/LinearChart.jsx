import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LinearChart = ({ filteredData }) => {
  const labels = filteredData?.data.map((elem) => elem.datetime.split("T")[0]);
  
  const colors = [
    "rgba(255, 99, 132, 0.7)",   // Rojo claro
    "rgba(54, 162, 235, 0.7)",   // Azul claro
    "rgba(255, 206, 86, 0.7)",   // Amarillo claro
    "rgba(75, 192, 192, 0.7)",   // Verde claro
    "rgba(153, 102, 255, 0.7)",  // Púrpura claro
    "rgba(255, 159, 64, 0.7)",   // Naranja claro
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: filteredData?.title,
      },
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(0,0,0,0.1)",
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 20, 81, 56, 55, 40],
        backgroundColor: colors[0],
        borderColor: colors[0],
        borderWidth: 2,
        pointBackgroundColor: colors[0],
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: colors[1],
        borderColor: colors[1],
        borderWidth: 2,
        pointBackgroundColor: colors[1],
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default LinearChart;