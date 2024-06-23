import React, { useState } from 'react'

const Filter = ({ data, setFilteredData }) => {

  const [subcategory, setSubcategory] = useState(data?.included[0]?.type)
  
  const onSubmit = (event) => {
    event.preventDefault()
    const temp = data?.included.filter((elem) => elem.type === subcategory)
    
    setFilteredData({
      title: subcategory,
      data :temp[0]?.attributes.values,
    })
  }

  return (
    <div className=" mt-4">
      <div className="flex flex-col">
          <label
            htmlFor="timeTrunc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a subcategory
          </label>
          <select
            id="timeTrunc"
            value={subcategory}
            onChange={(e)=> setSubcategory(e.target.value)}
            className="w-100 mt-1 py-2 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
          >
            <option disabled selected>Choose a subcategory</option>
              {data?.included?.map((elem) => (
                  <option key={elem.id} value={elem.type}>
                    {elem.type}
                  </option>
              ))}
            </select>
        </div>
        <button
            onClick={onSubmit}
            className={`md:w-40 text-gray-900 bg-white border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 mt-10 md:mt-6 dark:bg-gray-800 dark:text-white  dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 border-gray-400 dark:border-gray-700 w-full`}
          >
            Filter data
          </button>
      </div>
  )
}

export default Filter
