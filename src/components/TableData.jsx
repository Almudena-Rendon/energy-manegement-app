import { PDFDownloadLink } from '@react-pdf/renderer'
import { useState } from 'react'
import { CSVLink } from 'react-csv'
import TableDataPDF from './TableDataPDF'
import { ArrowLeft, ArrowRight, roundToFixed } from '../utils/Index'

const TableData = ({ filteredData }) => {
    const columns = [
        { label: "Value", key: "value" },
        { label: "Percentage", key: "percentage" },
        { label: "Date", key: "datetime" },
    ];

    const [currentPage, setCurrentPage] = useState(0)
    const rowsPerPage = 4

    const handleNextPage = () => {
        if ((currentPage + 1) * rowsPerPage < filteredData?.data?.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    };

    const startRow = currentPage * rowsPerPage
    const endRow = startRow + rowsPerPage
    const paginatedData = filteredData && filteredData?.data?.slice(startRow, endRow)
    const csvHeaders = columns.map(column => ({ label: column.label, key: column.key }))
    const isPreviousDisabled = currentPage === 0
    const isNextDisabled = endRow >= filteredData?.data?.length

    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-end md:gap-3 lg:pb-4">
                <PDFDownloadLink
                    document={<TableDataPDF data={filteredData?.data} />}
                    fileName="table.pdf"
                >
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full"> Download PDF</button>
                </PDFDownloadLink>
                <CSVLink
                    data={filteredData?.data}
                    headers={csvHeaders}
                    filename="table.csv"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full text-center mt-4 sm:mt-0 sm:w-auto"
                >
                    Download CSV
                </CSVLink>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column) => (
                            <th scope="col" key={column.key} className="px-6 py-3">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='overflow-auto'>
                    {paginatedData?.map((item, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-[#171d27] even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {roundToFixed(item.value, 3)}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {roundToFixed(item.percentage, 3)}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.datetime.split("T")[0]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-3 sm:mt-4">
                <button
                    onClick={handlePreviousPage}
                    className={`${isPreviousDisabled ? "cursor-not-allowed opacity-2 dark:bg-gray-700 bg-gray-100" : "bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-600"} text-gray-900  border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2  dark:text-white dark:border-gray-600  dark:focus:ring-gray-700`}
                    disabled={isPreviousDisabled}
                >
                    <ArrowLeft />
                </button>
                <button
                    onClick={handleNextPage}
                    className={`${isNextDisabled ? "cursor-not-allowed opacity-2 dark:bg-gray-700 bg-gray-100": "bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-600"} text-gray-900  border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2  dark:text-white dark:border-gray-600  dark:focus:ring-gray-700`}
                    disabled={endRow >= filteredData?.data?.length}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}

export default TableData
