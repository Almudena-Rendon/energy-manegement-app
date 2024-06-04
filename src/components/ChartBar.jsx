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
)

const ChartBar = ({ filteredData }) => {

  const labels = filteredData?.data.map((elem) => elem.datetime.split("T")[0]);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Value',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: filteredData?.data.map((elem) => elem.value),
      },
      {
        label: 'Percentage',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data:  filteredData?.data.map((elem) => elem.percentage),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: 'rgba(255,99,132,0.2)',
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: filteredData?.title,
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartBar;