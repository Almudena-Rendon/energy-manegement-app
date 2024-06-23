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

  return (
    <div className="flex relative bg-gray-100 dark:bg-zinc min-h-[calc(100vh-69px)]">
      <div className="flex-grow flex-col overflow-y-auto mt-[10px]">
        <main className="p-6 sm:p-10 space-y-6">
          <div className=" mx-4">
            <h1 className="text-4xl font-semibold mb-2 dark:text-white">Welcome!</h1>
            <h2 className="text-gray-600 ml-0.5 dark:text-gray-50">Make a request to visualize the data</h2>
          </div>
          <div className="mt-8 mx-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <div className="mt-8 lg:mt-0 gap-7 order-2 lg:order-1 md:mb-10">
              <RequesForm setFilteredData={setFilteredData} />
            </div>
            <div className="mr-2 mt-4 lg:mt-8 sm:rounded-lg order-1 lg:order-2">
              <InfoCard />
            </div>
          </div>
        {filteredData && 
          <div className="mx-4 dark:bg-[#171e28] bg-gray-50 rounded-xl">
           <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
              <div className="order-2 lg:order-1 col-span-2 dark:bg-[#171e28] bg-gray-50 p-8 md:p-7 h-[50vh] flex items-center justify-center rounded-lg">
                <ChartBar filteredData={filteredData} />
              </div>
              <div className="order-1 lg:order-2 bg-gray-50 h-[50vh] dark:bg-[#171e28] p-4 md:p-7  flex items-center justify-center rounded-lg">
                <PieChart filteredData={filteredData} />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10">
              <div className="order-2 lg:order-1 col-span-2 bg-gray-50 dark:bg-[#171e28] p-8 rounded-lg">
                <div className="relative overflow-x-auto mt-2 lg:mt-0 ">
                  <TableData filteredData={filteredData} />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-gray-50 dark:bg-[#171e28] rounded-lg p-8 md:min-h-[55vh] h-[50vh] flex items-center justify-center">
                <LinearChart filteredData={filteredData} />
              </div>
            </div>
        </div>
        }
        </main>
      </div>
    </div>
  )
}

export default Dashboard
