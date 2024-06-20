import { PDFDownloadLink } from '@react-pdf/renderer'
import { useState } from 'react'
import { CSVLink } from 'react-csv'
import TableDataPDF from './TableDataPDF'

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

    return (
        <div>
            <div className="flex justify-end mb-2 gap-3">
                <PDFDownloadLink
                    document={<TableDataPDF data={filteredData?.data} />}
                    fileName="table.pdf"
                >
                    <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded">
                        Download PDF
                    </button>
                </PDFDownloadLink>
                <CSVLink
                    data={filteredData?.data}
                    headers={csvHeaders}
                    filename="table.csv"
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded"
                >
                    Download CSV
                </CSVLink>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((column) => (
                            <th scope="col" key={column.key} className="px-6 py-3">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData?.map((item, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-[#171d27] even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.value.toFixed(4)}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.percentage.toFixed(4)}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.datetime.split("T")[0]}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded"
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded"
                    disabled={endRow >= filteredData?.data?.length}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default TableData
