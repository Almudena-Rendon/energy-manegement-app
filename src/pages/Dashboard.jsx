import { useState } from 'react'
import LinearChart from '../components/LinearChart'
import RequesForm from '../components/RequesForm'
import { PieChart } from '../components/PieChart'
import TableData from '../components/TableData'
import ChartBar from '../components/ChartBar'
import InfoCard from '../common/InfoCard'
import '../index.css'

const Dashboard = () => {

  const [filteredData, setFilteredData] = useState(null)

  console.log(filteredData, "filtered")

  return (
    <div className="flex relative bg-gray-100 dark:bg-zinc min-h-[calc(100vh-69px)]">
      <div className="flex-grow flex-col overflow-y-auto mt-[30px]">
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
        {filteredData && 
          <div className="mx-4">
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-2 bg-gray-50 dark:bg-[#171e28] p-7 max-h-[450px]">
                <ChartBar filteredData={filteredData} />
              </div>
              <div className="bg-gray-50 dark:bg-[#171e28] p-7 max-h-[450px] flex items-center justify-center">
                <PieChart filteredData={filteredData} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-2 bg-gray-50 dark:bg-[#171e28] p-10 ">
                  <div className="relative overflow-x-auto mt-10">
                    <TableData filteredData={filteredData} />
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#171e28] p-7 max-h-[475px] flex items-center justify-center">
                  <LinearChart  filteredData={filteredData} />
                </div>
              </div>
            </div>}
        </main>
      </div>
    </div>
  )
}

export default Dashboard
