import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export const PieChart = () => {
  const labels = ["January", "February", "March", "April", "May"];
  const values = [300, 450, 600, 550, 700];
  
  // Paleta de colores modernos
  const colors = [
    "rgba(105, 165, 232, 0.5)", // Azul claro
    "rgba(255, 140, 66, 0.5)",  // Naranja
    "rgba(164, 211, 130, 0.5)", // Verde claro
    "rgba(255, 92, 92, 0.5)",   // Rojo
    "rgba(107, 91, 149, 0.5)",  // Púrpura
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Valores",
        data: values,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace("0.5", "1")),
        borderWidth: 2,
        hoverBackgroundColor: colors.map(color => color.replace("0.5", "0.7")),
        hoverBorderColor: colors.map(color => color.replace("0.5", "1")),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Ejemplo de Gráfico de Pie",
      },
    },
  };

  return <Pie data={data} options={options} />;
};
