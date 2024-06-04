import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// Definimos los datos y opciones para el gráfico
const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Dataset #1",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [65, 59, 20, 81, 56, 55, 40],
  }]
};

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};

const ChartBar = () => {
  return (
    <div style={{ width: '100%', height: '100%'  }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}

export default ChartBar;
