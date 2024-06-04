import { useState } from 'react';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import RequesForm from '../components/RequesForm';
import TableData from '../components/TableData';
import '../index.css';
import ChartBar from '../components/ChartBar';
import { PieChart } from '../components/PieChart';

const Dashboard = () => {

  const [filteredData, setFilteredData] = useState(null)

  console.log(filteredData, "filtered")

  return (
    <div className="flex bg-gray-100 dark:bg-[#111827] min-h-screen">
      <div className="relative flex-grow flex-col overflow-y-auto mt-[70px]">
        <main className="p-6 sm:p-10 space-y-6">
        <div className=" mx-4">
          <h1 className="text-4xl font-semibold mb-2 dark:text-white">Welcome!</h1>
          <h2 className="text-gray-600 ml-0.5 dark:text-gray-50">Make a request to visualize the data</h2>
        </div>
          <div className="mt-8 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <RequesForm setFilteredData={setFilteredData} />
          <div className="mr-2 mt-8 sm:rounded-lg">    
            <InfoCard />
          </div>
          </div>
        </div>
        <div className="mt-10 mx-4">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 bg-[#171e28] rounded-lg p-10 max-h-[450px]">
              <ChartBar />
            </div>
            <div className="bg-[#171e28] p-10 max-h-[450px] flex items-center justify-center">
              <PieChart />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <TableData />
          </div>
        </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Dashboard;
